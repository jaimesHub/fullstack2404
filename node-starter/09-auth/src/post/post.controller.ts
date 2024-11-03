import { Request, Response } from 'express';
import { Post } from './post.dto';
import { CustomRequest } from '../dtos/express.dto';

import postModel from './post.model';

export const createPost = async (req: CustomRequest, res: Response): Promise<void> => {
    try {
        const post: Post = req.body;
        const { title, content, description } = post;
        const author = req.user?.id;

        const newPost = new postModel({
            title,
            content,
            description,
            author,
        });

        const response = await newPost.save();

        console.log(">>> response: ", response);

        res.status(201).json({
            status: 'success',
            message: 'Create post success',
            post: response
        });
        return;
    } catch (error: any) {
        res.status(500).json({ message: error.message });
        return;
    }
}

export const readPosts = async (req: Request, res: Response): Promise<void> => {
    try {
        const posts = await postModel.find().populate('author', 'username email');

        res.status(200).json({
            status: 'success',
            message: 'Read posts success',
            posts
        });

        return;
    } catch (error: any) {
        res.status(500).json({ message: error.message });
        return;
    }
}

export const readPost = async (req: Request, res: Response) => {
    res.status(200).json({ message: 'Read a post success' });
}

export const updatePost = async (req: Request, res: Response) => {
    res.status(200).json({ message: 'Update post success' });
}

export const deletePost = async (req: Request, res: Response) => {
    res.status(200).json({ message: 'Delete post success' });
}