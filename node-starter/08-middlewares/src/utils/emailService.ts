import nodemailer from 'nodemailer';

// Cấu hình transporter cho nodemailer (sử dụng dịch vụ email của bạn)
const transporter = nodemailer.createTransport({
    // ...
});

const sendWelcomeEmail = async (email: string, username: string) => {
    const mailOptions = {
        from: 'noreply@example.com',
        to: email,
        subject: 'Chào mừng bạn đến với ứng dụng của chúng tôi!',
        text: `Xin chào ${username},\n\nChúc mừng bạn đã đăng ký tài khoản thành công!`,
    };

    await transporter.sendMail(mailOptions);
};

export default { sendWelcomeEmail };