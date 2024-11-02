import { Request, Response } from 'express';
import { users } from '../data/users';

class AuthController {
    async login(req: Request, res: Response) {
        const { username, password } = req.body;

        const user = users.find((u) => u.username === username && u.password === password);

        if (user) {
            req.session.user = user;
            res.send('Login successful!');
        } else {
            res.status(401).send('Invalid username or password');
        }
    }

    logout(req: Request, res: Response) {
        req.session.destroy((err) => {
            if (err) {
                console.error('Error destroying session:', err);
                res.status(500).send('Logout failed');
            } else {
                res.send('Logout successful!');
            }
        });
    }
}

export default new AuthController();