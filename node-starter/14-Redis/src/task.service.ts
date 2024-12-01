import { createClient } from "redis";
const client = createClient();
client.connect();

export const addTask = async (taskName: string): Promise<string> => {
    const taskId = `task:${Date.now()}`;

    await client.rPush('tasks', taskId);
    await client.hSet(taskId, "name", taskName);
    await client.hSet(taskId, "status", "pending");

    return taskId;
}

export const getTasks = async (): Promise<string[]> => {
    return await client.lRange('tasks', 0, -1)
}

export const getTaskById = async (taskId: string): Promise<any> => {
    return await client.hGetAll(taskId)
}

export const updateTaskStatus = async (taskId: string, status: string): Promise<boolean> => {
    const result = await client.hSet(taskId, {status})

    return result > 0
}

export const deleteTask = async (taskId: string): Promise<boolean> => {
    await client.lRem('tasks', 0, taskId);
    await client.del(taskId);

    return true;
}