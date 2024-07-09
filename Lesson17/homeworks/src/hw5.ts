// Task management
// class Task {
//     id: number;
//     title: string;
//     description: string;
//     dueDate: Date;
//     priority: string;
//     completed: boolean;

//     constructor(
//         id: number, 
//         title: string, 
//         description: string, 
//         dueDate: Date, 
//         priority: string, 
//         completed: boolean
//     ) {
//         this.id = id;
//         this.title = title;
//         this.description = description;
//         this.dueDate = dueDate;
//         this.priority = priority;
//         this.completed = completed;
//     }
// }

enum Priority {
    HIGH = 'high',
    MEDIUM = 'medium',
    LOW = 'low'
}

type Task = {
    id: number;
    title: string;
    description: string;
    dueDate: string;
    priority: Priority;
    completed: boolean;
}

type UpdateTask = {
    title?: string;
    description?: string;
    dueDate?: string;
    priority?: Priority;
    completed?: boolean;
}

enum OrderBy {
    ASC= 'ASC',
    DESC= 'DESC'
}

class TaskManagement {
    tasks: Task[];

    constructor(tasks: Task[]) {
        this.tasks = tasks;
    }

    // List of tasks management
    add(task: Task): Task {
        this.tasks.push(task);
        return task;
    }

    delete(taskId: number): Task[] {
        const updatedTasks = this.tasks.filter(task => task.id != taskId);
        this.tasks = [...updatedTasks];
        return this.tasks;
    }

    update(taskId: number, input: UpdateTask): Task | string {
        const foundTask = this.tasks.find(task => task.id === taskId);

        if (!foundTask) {
            return "Not found;"
        }

        const { 
            title, 
            description, 
            dueDate, 
            priority, 
            completed 
        } = input;

        if (title) {
            foundTask.title = title;
        }

        if (description) {
            foundTask.description = description;
        }

        if (dueDate) {
            foundTask.dueDate = dueDate;
        }

        if (priority) {
            foundTask.priority = priority;
        }

        if (completed) {
            foundTask.completed = completed;
        }

        for (let task of this.tasks) {
            if (task.id === foundTask.id) {
                task = foundTask;
            }
        }

        return foundTask;
    }

    list(): Task[] {
        return this.tasks;
    }

    // Handling with data
    filterTasksByPriority(priority: Priority): Task[] {
        return this.tasks.filter(task => task.priority === priority);
    }

    sortTasksByDueDate(order: OrderBy): Task[] {
        if (order === OrderBy.DESC) {
            // Sorting in ascending order (oldest to newest)
            return this.tasks.sort((first: Task, second: Task) => {
                return new Date(first.dueDate).getTime() - new Date(second.dueDate).getTime();
            });
        } 

        // Sorting in descending order (newest to oldest)
        return this.tasks.sort((first: Task, second: Task) => {
            return new Date(second.dueDate).getTime() - new Date(first.dueDate).getTime();
        });
    }
}