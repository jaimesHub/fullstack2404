import express, { Application } from 'express';
import authController from './src/controllers/authController';
import userController from './src/controllers/userController';
import loggerMiddleware from './src/middleware/loggerMiddleware';
import validationPipe from './src/pipes/validationPipe';
import authGuard from './src/guards/authGuard';
import session from 'express-session';
import { User } from './src/models/User';

declare module 'express-session' {
    interface SessionData {
        user: User;
    }
}

const app: Application = express();
const port = 3000;

app.use(express.json());
app.use(loggerMiddleware);
app.use(
    session({
        secret: 'your_secret_key', // Thay thế bằng key bí mật
        resave: false, // Không lưu lại session nếu không có sự thay đổi
        saveUninitialized: true, // Lưu session ngay cả khi chưa có dữ liệu
    }),
);

app.post('/register', validationPipe(User), userController.register);
app.post('/login', authController.login);
app.post('/logout', authController.logout);

// Các route yêu cầu xác thực
app.get('/profile', authGuard, (req, res) => {
    res.send(req.session.user);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});