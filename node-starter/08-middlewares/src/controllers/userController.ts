import { Request, Response } from 'express';
import { users } from '../data/users';
import userEvents from '../events/userEvents';
import { User } from '../models/User';

class UserController {
    async register(req: Request, res: Response): Promise<void> {
        const newUser: User = req.body;

        // Kiểm tra xem username hoặc email đã tồn tại chưa
        const existingUser = users.find(
            (u) => u.username === newUser.username || u.email === newUser.email,
        );
        if (existingUser) {
            res.status(400).send('Username or email already exists');
            return;
        }

        // Thêm người dùng mới vào database (thay thế bằng logic database thực tế)
        newUser.id = users.length + 1;
        users.push(newUser);

        // Gửi email chào mừng
        userEvents.emit('userRegistered', newUser);

        res.status(201).send('User registered successfully!');

        return;
    }
}

export default new UserController();