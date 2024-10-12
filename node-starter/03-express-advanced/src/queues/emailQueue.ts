import Queue from 'bull';
import nodemailer from 'nodemailer';

// Định nghĩa kiểu dữ liệu cho job
interface EmailJobData {
    email: string;
}

// Tạo một hàng đợi email
export const emailQueue = new Queue<EmailJobData>('emailQueue');

// Xử lý job
emailQueue.process(async (job) => {
    const { email } = job.data;
    console.log(`Sending email to ${email}`);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'xxx@gmail.com',
            pass: 'xxxx'
        }
    });

    // Gửi email
    // setTimeout(() => {
    //     console.log(`System sent to the ${email}!`);
    // }, 3000);
    await transporter.sendMail({
        from: 'xxx@gmail.com',
        to: 'test@gmail.com',
        subject: 'Test email',
        text: 'Hello from the other side!',
    });

    console.log(`System sent to the ${email}!`);
});