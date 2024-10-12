import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = 3000;

async function getDataFromDatabase() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Database error!');
        }, 3000);
    });
}

async function createUser(data: any) {
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         reject({ name: 'ValidationError', message: 'Invalid data!' });
    //     }, 3000);
    // });

    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         reject({ name: 'DatabaseError', message: 'Something went wrong in DB!' });
    //     }, 3000);
    // });

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({ name: 'OtherError', message: 'Something went wrong!' });
        }, 3000);
    });
}

function handleValidationError(error: any, res: Response) {
    res.status(400).json({ message: 'Invalid data!', error: error.errors });
}

function handleDatabaseError(error: any, res: Response) {
    res.status(500).json({ message: 'Error Database' });
}

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, Express with TypeScript!');
});

app.get('/api/data', async (req: Request, res: Response) => {
    try {
        const data = await getDataFromDatabase(); // Giả sử hàm này có thể gây lỗi
        res.json(data);
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({ message: 'Internal Server Error!' });
    }
});

app.post('/api/user', async (req: Request, res: Response) => {
    try {
        const user = await createUser(req.body);
        res.status(201).json(user);
    } catch (error: any) {
        console.log(">>> error: ", error);

        if (error.name === 'ValidationError') {
            // Authentication error
            // res.status(400).json({ message: 'Invalid data!', error: error.errors });
            handleValidationError(error, res);
        } else if (error.name === 'DatabaseError') {
            // Database error
            // res.status(500).json({ message: 'Error Database' });
            handleDatabaseError(error, res);
        } else {
            console.error('Error: ', error);
            res.status(500).json({ message: 'Internal Server Error!', detail: error.message });
        }
    }
});

// Ví dụ sử dụng cookie
app.use(cookieParser());

// Set cookie
app.get('/set-cookie', (req: Request, res: Response) => {
    res.cookie('username', 'JohnDoe', {
        maxAge: 1000 * 60 * 15, // 15 minutes
        httpOnly: true, // Chỉ cho phép đọc cookie từ phía server
    });
    res.send('Cookie is set!');
});

// Get cookie
app.get('/get-cookie', (req: Request, res: Response) => {
    console.log('>> Cookies: ', req.cookies);
    const username = req.cookies['username'];
    res.send(`Username: ${username}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
