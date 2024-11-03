import { Request, Response } from 'express';
import { User } from './auth.dto';
import userModel from './auth.model';
import bcrypt from 'bcrypt';

export const authRegister = async (req: Request, res: Response): Promise<void> => {
    try {
        const user: User = req.body;
        const { email, password, username } = user;

        const existingUser: User | null = await userModel.findOne({ email });

        if (existingUser) {
            res.status(404).json({ status: 'error', message: 'Email already exists' });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser: User = new userModel({
            email,
            password: hashedPassword,
            username,
            role: 'user',
        });

        res.status(201).json({ status: 'success', message: 'Register success' });

    } catch (error: any) {
        res.status(500).json({ status: 'error', message: error.message });
    }
}

export const authLogin = (req: Request, res: Response) => {
    res.status(200).json({ message: 'Login success' });
}