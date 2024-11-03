import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { authProtected, authToken, authLogin, authRegister } from './controllers/auth.controller';
import { authenticateToken, authorization } from './middlewares/auth.middleware';

import authRouter from './auth/auth.route';
import postRouter from './post/post.route';

dotenv.config();

const app = express();
app.use(express.json());

// app.post('/login', authLogin);
// app.post('/register',authRegister )
// app.get('/protected',authenticateToken,authorization, authProtected)
// app.post('/token', authToken)

app.use('/', authRouter);
app.use('/api/v1/post', postRouter);


const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/post-management';
const connectDB = async () => {
	try {
		await mongoose.connect(DATABASE_URL);
		console.log('Database connected!');
	} catch (error) {
		console.log('Database connection failed!');
	}
}

app.listen(PORT, () => {
	connectDB();
	console.log(`Server is running on port ${PORT}`);
});
