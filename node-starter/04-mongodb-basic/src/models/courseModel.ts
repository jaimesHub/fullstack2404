import mongoose, { Schema, Document } from "mongoose";

// Define the model
export interface Course extends Document {
    title: string;
    description: string;
    duration: number; // hours
}

// Define the schema
const CourseSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true }
});

export default mongoose.model<Course>("Course", CourseSchema);