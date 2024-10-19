import express from 'express';
import mongoose from 'mongoose';
import courseRouter from './routes/courseRoutes';

const app = express();

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/courses', {});
        console.log('MongoDB connected!');
    } catch (error) {
        console.error('Connection to MongoDB failed!');
        process.exit(1); // Exit the Node.js process
    }
}

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // Parse JSON bodies req.body
app.use('/courses', courseRouter);

export default app;
