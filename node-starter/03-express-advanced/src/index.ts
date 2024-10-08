import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, Express with TypeScript!');
});

// app.post('/send-email', (req: Request, res: Response) => {
//     const { email } = req.body;

//     emailQueue.add({ email });

//     res.send("Job in queue");
// });

// emailQueue.process(async (job) => {
//     const { email } = job.data;
//     console.log(`Sending to email ${email}`)
// });

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
