import express, { Request, Response } from 'express';
import Joi from 'joi';

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

const schema = Joi.object({
    userName: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

app.post('/register', (req: Request<{}, {}, RegisterRequest>, res: Response) => {
    const { error } = schema.validate(req.body);

    if (error) {
        res.status(400).json({
            error: error.details[0].message,
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
