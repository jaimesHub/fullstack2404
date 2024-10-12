import express, { Request, Response } from 'express';
import { ExpressAdapter } from '@bull-board/express';
import { createBullBoard } from '@bull-board/api';
import { BullAdapter } from '@bull-board/api/bullAdapter';
import { body, validationResult } from 'express-validator';
import { emailQueue } from './queues/emailQueue';
import cron from 'node-cron';
import nodemailer from 'nodemailer';
import rateLimit from 'express-rate-limit';

const app = express();
const PORT = 3000;

// Tạo rate limit middleware
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // Theo dõi các yêu cầu trong 15 minutes
    max: 5, // số lần request tối đa cho mỗi IP trong 15 phút
    message: "Too many requests from this IP, please try again after 15 minutes",
    headers: true, // Gửi thông tin về giới hạn trong response header
});

// Sử dụng rate limit middleware cho tất cả các request
app.use(limiter);

app.use(express.json()); // Kích hoạt middleware để xử lý JSON 
app.use(express.urlencoded({ extended: true })); // Kích hoạt middleware để xử lý dữ liệu FORM

// Tạo bull board với Express Adapter
const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/admin/queues');

// Tạo Bull Board và kết nối hàng đợi
createBullBoard({
    queues: [new BullAdapter(emailQueue)],
    serverAdapter: serverAdapter,
});

// Tích hợp Bull Board vào Express
app.use('/admin/queues', serverAdapter.getRouter());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, Express with TypeScript!');
});

app.post('/api/data', (req: Request, res: Response) => {
    console.log('>>> JSON data from client: ', req.body);
    res.send('Data received!');
});

app.post('/api/form', (req: Request, res: Response) => {
    console.log('>>> FORM data from client: ', req.body);
    res.send('Data received!');
});

// Tạo transporter với cấu hình gửi email
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'xxx@gmail.com',
        pass: 'xxxx'
    }
});
// Endpoint gửi email
app.post('/send-email', async (req: Request, res: Response) => {
    // const { email } = req.body;
    // emailQueue.add({ email });
    // res.send('Email Job has been added to the queue!');
    const { email, subject, text } = req.body;

    try {
        const info = await transporter.sendMail({
            from: 'xxxx@gmail.com',
            to: email,
            subject: subject,
            text: text,
            html: `<b>Hello ${email}</b>`
        });
        console.log('Email sent to: ', info.messageId);
        res.status(200).send({ message: "Email sent successfully!" });
    } catch (error) {
        console.log('Error sending email: ', error);
    }
});

// CronJob để in ra thông báo mỗi 5 phút
cron.schedule('*/5 * * * *', () => {
    console.log('Running a task every 5 minutes');
});

interface RegisterRequest {
    userName: string,
    email: string,
    password: string,
}

app.post('/register',
    [
        body('userName').notEmpty().withMessage('Username is required!'),
        body('email').isEmail().withMessage('Invalid email format'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
    ],
    (req: Request<{}, {}, RegisterRequest>, res: Response) => {
        const errors = validationResult(req.body);

        if (!errors.isEmpty()) {
            res.status(400).json({
                errors: errors.array(),
            });
            return;
        }

        res.status(200).json({
            message: "Validation successful!",
        });
    });

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
