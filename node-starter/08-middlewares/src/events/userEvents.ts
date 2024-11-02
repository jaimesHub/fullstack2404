// Sử dụng Event để gửi email chào mừng người dùng mới.

import { EventEmitter } from 'events';
import { User } from '../models/User';
import emailService from '../utils/emailService';

const userEvents = new EventEmitter();

userEvents.on('userRegistered', async (user: User) => {
    try {
        await emailService.sendWelcomeEmail(user.email, user.username);
        console.log(`Welcome email sent to ${user.email}`);
    } catch (error) {
        console.error('Error sending welcome email:', error);
    }
});

export default userEvents;