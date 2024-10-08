import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

// app.use(express.json()); // Kích hoạt middleware để xử lý JSON 
app.use(express.urlencoded({ extended: true })); // Kích hoạt middleware để xử lý dữ liệu FORM

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, Express with TypeScript!');
});

// app.post('/api/data', (req: Request, res: Response) => {
//     console.log('>>> JSON data from client: ', req.body);
//     res.send('Data received!');
// });

app.post('/api/form', (req: Request, res: Response) => {
    console.log('>>> FORM data from client: ', req.body);
    res.send('Data received!');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
