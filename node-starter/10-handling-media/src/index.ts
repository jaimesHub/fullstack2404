import express, { Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import sharp from 'sharp';

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
