import express, { Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import sharp from 'sharp';
import redisClient from './redisClient';

const app = express();
const PORT = 3000;

const DIR_PATH = '/Users/jaimes/Desktop/Back-To-Basic/fullstack-js/t3h/node-starter/10-handling-media/src/uploads'

app.use(express.json());
app.use('uploads', express.static('uploads'));

// Cấu hình Multer để lưu trữ file
const storage = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, cb) => {
        const uploadDir = DIR_PATH;

        // Tạo thư mục nếu chưa tồn tại
        // if (!fs.existsSync(uploadDir)) {
        //     fs.mkdirSync(uploadDir);
        // }

        // Đường dẫn lưu trữ file
        cb(null, uploadDir);
    },
    filename: (req: Request, file: Express.Multer.File, cb) => {
        // Đặt tên file là thời gian hiện tại + tên file gốc
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname)); // Thêm phần mở rộng file
    }
});

// Khởi tạo middleware upload với cấu hình storage
const upload = multer({
    storage,
    limits: {
        fileSize: 1024 * 1024 * 1 // Giới hạn dung lượng file 1MB
    },
    fileFilter: (req, file, cb) => {
        // Kiểm tra định dạng file và giới hạn dạng file
        const filetypes = /jpeg|jpg|png|gif/;
        const mimetype = filetypes.test(file.mimetype);

        if (mimetype) {
            return cb(null, true); // Cho phép upload
        }

        cb(new Error('Định dạng file không hợp lệ')); // Không cho phép upload
    }
});

const memoryStorage = multer.memoryStorage(); // Lưu trữ file trong bộ nhớ
const uploadMemoryStorage = multer({ storage: memoryStorage });

// API lấy ảnh từ Redis
app.get('/image/:name', async (req: Request, res: Response): Promise<any> => { // GET http://localhost:3000/image/
    try {
        const { name } = req.params;
        console.log(">>> name: ", name);

        // Tìm ảnh từ Redis
        const cachedImage = await redisClient.get(name);

        if (!cachedImage) {
            return res.status(404).json({ message: 'Image not found!' });
        }

        // Trả về ảnh dưới dạng Base64
        const imageBuffer = Buffer.from(cachedImage, 'base64');
        res.setHeader('Content-Type', 'image/png'); // Đặt kiểu trả về là ảnh PNG
        res.send(imageBuffer); // Trả về ảnh dưới dạng Buffer
    } catch (error) {
        console.error(">>> Error getting image from Redis: ", error);
        res.status(500).json({ message: 'Internal server error!' });
    }
});

// Route hiển thị form upload file (upload file lưu trữ trong bộ nhớ)
app.post('/upload-memory', uploadMemoryStorage.single('file'), async (req: Request, res: Response): Promise<any> => {
    try {
        if (!req.file) {
            return res.status(400).json({
                message: 'No file uploaded!'
            });
        }

        const { buffer, originalname } = req.file;

        // Chuyển đổi buffer thành chuỗi Base64 để lưu vào Redis
        const imageBase64 = buffer.toString('base64');
        await redisClient.set(originalname, imageBase64, 'EX', 60 * 60); // Cache 1 giờ

        res.json({ message: 'File uploaded and cached successfully!' });
    } catch (error) {
        console.error(">>> Error uploading image: ", error);
        res.status(500).json({ message: 'Internal server error!' });
    }
});

// Route hiển thị form upload file
app.post('/upload', upload.single('file'), async (req: Request, res: Response) => {
    if (req.file) {
        const outputFilePath = DIR_PATH + '/' + 'processed-' + req.file.filename.split('.')[0] + '.png';
        await sharp(req.file.path).resize(200).toFormat('png').toFile(outputFilePath);

        // fs.unlinkSync(req.file.path);

        // Xử lý file upload thành công
        res.status(200).json({
            message: 'File uploaded successfully',
            file: req.file.filename
        });
    } else {
        // Xử lý file upload thất bại
        res.status(400).json({
            message: 'File upload failed'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
