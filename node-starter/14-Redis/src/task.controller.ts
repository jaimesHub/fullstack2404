import { Request, Response} from 'express';
import * as taskService from './task.service';

export const createTask = async (req: Request, res: Response): Promise<void> => {
    const {taskName} = req.body;

    if(!taskName){
        res.status(400).json({
            message: 'Task name is required'
        })

        return;
    }
    try{
        const taskId = await taskService.addTask(taskName);
        res.status(201).send({taskId, status: 'pending'})
    } catch(error){
        console.log('error: ', error)
        res.status(500).json({
            message: 'Error creating task'
        })
    }
}

export const getTasks = async (req: Request, res: Response): Promise<void> => {
    try{
        const tasks = await taskService.getTasks();
        res.status(200).json({
            tasks
        })
    } catch(error){
        res.status(500).json({
            message: 'Error getting tasks'
        })
    }
}

export const getTaskById = async (req: Request, res: Response): Promise<void> => {
    const {id} = req.params;
    try{
        const task = await taskService.getTaskById(id);
        if(Object.keys(task).length === 0){
            res.status(404).json({
                message: 'Task not found'
            })
            return;
        }

        res.status(200).json({task})
    } catch(error){
        res.status(500).json({
            message: 'Error getting task'
        })
    }
}

export const updateTaskStatus = async (req: Request, res: Response): Promise<void> => {
    const {id} = req.params;
    const {status} = req.body;

    if(!status){
        res.status(400).json({message:'Status is required'});
        return;
    }

    try{
        const success = await taskService.updateTaskStatus(id, status);
        if(success){
            res.status(200).json({
                message: 'Status updated successfully'
            })
        } else{
            res.status(400).json({
                message: 'Task not found'
            })
        }
    } catch(error){
        res.status(500).json({
            message: 'Error updating task status'
        })
    }
}

export const deleteTask = async (req: Request, res: Response): Promise<void> => {
    const {id} = req.params;

    try{
        const success = await taskService.deleteTask(id);
        if(success){
            res.status(200).json({
                message: 'Task deleted successfully'
            })
        } else{
            res.status(400).json({
                message: 'Task not found'
            })
        }
    } catch(error){
        res.status(500).json({
            message: 'Error deleting task'
        })
    }
}