import mongoose, { Document, Schema } from 'mongoose';
import { User } from '../dtos/user.dto';

interface Post extends Document {
    title: string;
    description: string;
    content: string;
    author: mongoose.Types.ObjectId;
}

const PostSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User' }, // 1:M means 1 user can have many posts
}, { timestamps: true });

export default mongoose.model<Post>('Post', PostSchema);