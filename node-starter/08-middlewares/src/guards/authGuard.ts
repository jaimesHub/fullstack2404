// Guard để kiểm tra xác thực người dùng khi đăng nhập.
import { Request, Response, NextFunction } from 'express';
import session from 'express-session';

// Define User interface
interface User {
    id: number;
    username: string;
    email: string;
    password: string;
}

// Extend Express Request type to include session
declare module 'express-session' {
    interface SessionData {
        user: User; // Add user to session data
    }
}

// Extend Express Request type to include session
declare module 'express' {
    interface Request {
        session: session.Session & Partial<session.SessionData>;
    }
}

// Define authGuard middleware
const authGuard = (req: Request, res: Response, next: NextFunction) => {
    if (req.session.user) {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
};

export default authGuard;