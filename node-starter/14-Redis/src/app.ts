import { updateTaskStatus } from './task.service';
import express, {Request, Response} from 'express';
import { createClient } from 'redis';
import * as taskController from './task.controller'

const app = express();
const PORT = 3000;

app.use(express.json())

const redisClient = createClient({
    url: 'redis://localhost:6379'
});

redisClient.on('connect', ()=>{
    console.log('Đã kết nối đến Redis!')
})

redisClient.on('error', (err) => {
    console.log('Error: ', err)
})

redisClient.connect();

app.get('/set/:key/:value', async (req: Request, res: Response) => {
    const {key, value} = req.params;

    try{
        await redisClient.set(key, value);
        res.status(200).json({
            message: `Đã lưu ${key} với giá trị ${value} vào trong Redis`
        })
    } catch (err) {
        res.status(500).json({
            message:'Lỗi khi lưu dữ liệu vào Redis'
        })
    }
})

app.get('/get/:key', async (req: Request, res: Response) => {
    const {key} = req.params;

    try{
        const value = await redisClient.get(key);
        if(value){
            res.status(200).json({
                message: `Giá trị của ${key} là ${value}`
            })
        } else{
            res.status(400).json({
                message: `Không tìm thấy giá trị cho ${key}`
            })
        }
    } catch(err) {
        res.status(500).json({
            message: 'Lỗi khi lấy dữ liệu từ Redis'
        })
    }
})

app.post('/tasks',taskController.createTask)
app.get('/tasks',taskController.getTasks)
app.get('/tasks/:id', taskController.getTaskById)
app.put('/tasks/:id', taskController.updateTaskStatus)
app.delete('/tasks/:id', taskController.deleteTask)

app.listen(PORT, ()=>{
    console.log(`Server đang chạy trên http://localhost:${PORT}`)
})