import express, { Request, Response } from 'express';
import winston from 'winston';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import dotenv from 'dotenv';

dotenv.config();

declare module 'express-session' {
    interface SessionData {
        user: { id: number; name: string };
    }
}

const app = express();
const PORT = process.env.PORT || 3001;

// Cấu hình Winston logger
const logger = winston.createLogger({
    level: 'info', // Mức độ logging mặc định
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.json(), // Ghi log dưới dạng JSON
    ),
    transports: [
        new winston.transports.Console(), // Ghi log ra console
        new winston.transports.File({ filename: 'error.log', level: 'error' }), // Ghi log ra file error.log
        new winston.transports.File({ filename: 'combined.log' }), // Ghi log ra file combined.log
    ],
});

// middleware ghi log cho các request
app.use((req: Request, res: Response, next) => {
    logger.info(`Received request:: ${req.method} ${req.url}`);
    next();
});

// Sử dụng session
app.use(session({
    secret: 'secret-key', // khoá bí mật để mã hoá session
    resave: false, // không lưu session sau mỗi request
    saveUninitialized: true, // tạo session nếu có dữ liệu
    cookie: { maxAge: 60000 }, // thời gian sống của session
}));

async function getDataFromDatabase() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Database error!');
        }, 3000);
    });
}

async function createUser(data: any) {
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         reject({ name: 'ValidationError', message: 'Invalid data!' });
    //     }, 3000);
    // });

    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         reject({ name: 'DatabaseError', message: 'Something went wrong in DB!' });
    //     }, 3000);
    // });

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({ name: 'OtherError', message: 'Something went wrong!' });
        }, 3000);
    });
}

function handleValidationError(error: any, res: Response) {
    res.status(400).json({ message: 'Invalid data!', error: error.errors });
}

function handleDatabaseError(error: any, res: Response) {
    res.status(500).json({ message: 'Error Database' });
}

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, Express with TypeScript!');
});

app.get('/api/data', async (req: Request, res: Response) => {
    try {
        const data = await getDataFromDatabase(); // Giả sử hàm này có thể gây lỗi
        console.log('>>> data: ', data);
        res.json(data);
    } catch (error: any) {
        logger.error(`API call failed: ${error}`)
        res.status(500).json({ message: 'Internal Server Error!' });
    }
});

app.post('/api/user', async (req: Request, res: Response) => {
    try {
        const user = await createUser(req.body);
        res.status(201).json(user);
    } catch (error: any) {
        console.log(">>> error: ", error);

        if (error.name === 'ValidationError') {
            // Authentication error
            // res.status(400).json({ message: 'Invalid data!', error: error.errors });
            handleValidationError(error, res);
        } else if (error.name === 'DatabaseError') {
            // Database error
            // res.status(500).json({ message: 'Error Database' });
            handleDatabaseError(error, res);
        } else {
            console.error('Error: ', error);
            res.status(500).json({ message: 'Internal Server Error!', detail: error.message });
        }
    }
});

// Đăng nhập
app.get('/login', (req: Request, res: Response) => {
    req.session.user = { id: 1, name: 'admin' };
    res.send('Logged in!');
});

// Lấy thông tin user từ session
app.get('/profile', (req: Request, res: Response) => {
    if (req.session.user) {
        res.json(req.session.user);
    } else {
        res.status(401).json({ message: 'Unauthorized!' });
    }
});
// Ví dụ sử dụng cookie
app.use(cookieParser());

// Set cookie
app.get('/set-cookie', (req: Request, res: Response) => {
    res.cookie('username', 'JohnDoe', {
        maxAge: 1000 * 60 * 15, // 15 minutes
        httpOnly: true, // Chỉ cho phép đọc cookie từ phía server
    });
    res.send('Cookie is set!');
});

// Get cookie
app.get('/get-cookie', (req: Request, res: Response) => {
    console.log('>> Cookies: ', req.cookies);
    const username = req.cookies['username'];
    res.send(`Username: ${username}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
