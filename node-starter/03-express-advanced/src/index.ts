import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

const app = express();
const PORT = 3000;

app.use(express.json()); // Kích hoạt middleware để xử lý JSON 
app.use(express.urlencoded({ extended: true })); // Kích hoạt middleware để xử lý dữ liệu FORM

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, Express with TypeScript!');
});

app.post('/api/data', (req: Request, res: Response) => {
    console.log('>>> JSON data from client: ', req.body);
    res.send('Data received!');
});

app.post('/api/form', (req: Request, res: Response) => {
    console.log('>>> FORM data from client: ', req.body);
    res.send('Data received!');
});

interface RegisterRequest {
    userName: string,
    email: string,
    password: string,
}

app.post('/register',
    [
        body('userName').notEmpty().withMessage('Username is required!'),
        body('email').isEmail().withMessage('Invalid email format'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
    ],
    (req: Request<{}, {}, RegisterRequest>, res: Response) => {
        const errors = validationResult(req.body);

        if (!errors.isEmpty()) {
            res.status(400).json({
                errors: errors.array(),
            });
            return;
        }

        res.status(200).json({
            message: "Validation successful!",
        });
    });

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
