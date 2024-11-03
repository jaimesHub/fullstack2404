import { Request, Response } from 'express';
import { User } from './auth.dto';
import userModel from './auth.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

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

        const newUser = new userModel({
            email,
            password: hashedPassword,
            username,
            role: 'user',
        });

        await newUser.save();

        res.status(201).json({ status: 'success', message: 'Register success' });

    } catch (error: any) {
        res.status(500).json({ status: 'error', message: error.message });
    }
}

export const authLogin = async (req: Request, res: Response): Promise<void> => {
    try {
        const payload: User = req.body;
        const { email, password } = payload;

        const user = await userModel.findOne({ email });

        if (!user) {
            res.status(404).json({
                status: 'error',
                message: 'Email is not correct'
            });
            return;
        }

        const isMatch = bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(404).json({
                status: 'error',
                message: 'Password is not correct'
            });
            return;
        }

        const SECRET_KEY: string = process.env.JWT_SECRET || 'abcdefghijklmnopqrstuvwxyz';
        const token = jwt.sign({ email: user.email, userId: user._id }, SECRET_KEY, { expiresIn: '1h' });

        res.status(200).json({ status: 'success', message: 'Login success', token });

        return;

    } catch (error: any) {
        res.status(500).json({ status: 'error', message: error.message });
    }
}