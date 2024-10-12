import Queue from 'bull';

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

    // Gửi email
    setTimeout(() => {
        console.log(`System sent to the ${email}!`);
    }, 3000);
});