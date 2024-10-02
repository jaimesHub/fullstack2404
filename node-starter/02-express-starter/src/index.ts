import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        'message': 'Hello World!'
    });
});

app.get('/hello', (req: Request, res: Response) => {
    // res.status(200).json({
    //     'message': 'route hello'
    // });

    const users = [{
        name: "A"
    }, {
        name: "B"
    }];

    res.render('hello', { users: users });
});

app.get('/:id', (req: Request, res: Response) => {
    res.status(200).json({
        'message': 'route :id'
    });
});

// app.get('/hello', (req: Request, res: Response) => {
//     res.status(200).json({
//         'message': 'route hello'
//     });
// });

const productRouter = express.Router();
productRouter.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "List product"
    })
});

productRouter.get("/:id", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Detail product"
    })
});

app.use("/api/products", productRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});