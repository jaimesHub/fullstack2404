// CRUD course controller
import { Request, Response } from 'express';
import Course, { Course as CourseType } from '../models/courseModel';

// Create a new course
export const createCourse = async (req: Request, res: Response): Promise<void> => {
    try {
        const course: CourseType = new Course(req.body);
        await course.save();
        res.status(201).json(course);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

// Get all courses
export const getCourses = async (req: Request, res: Response): Promise<void> => {
    try {
        const courses: CourseType[] = await Course.find();
        res.status(200).json(courses);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single course
export const getCourseById = async (req: Request, res: Response): Promise<void> => {
    try {
        const course: CourseType | null = await Course.findById(req.params.id);
        if (!course) {
            res.status(404).json({ message: 'Course not found' });
            return;
        }
        res.status(200).json(course);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

// Update a course
export const updateCourse = async (req: Request, res: Response): Promise<void> => {
    try {
        const course: CourseType | null = await Course.findByIdAndUpdate(req.params.id, req.body);
        if (!course) {
            res.status(404).json({ message: 'Course not found' });
            return;
        }
        res.status(200).json(course);
    }
    catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

// Delete a course
export const deleteCourse = async (req: Request, res: Response): Promise<void> => {
    try {
        const course: CourseType | null = await Course.findByIdAndDelete(req.params.id);
        if (!course) {
            res.status(404).json({ message: 'Course not found' });
            return;
        }
        res.status(200).json(course);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
