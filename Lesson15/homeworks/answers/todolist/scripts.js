let tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];

// set default nav bar item
const navItems = document.querySelectorAll(".nav-item .nav-link");
let defaultNavItem = navItems[0];
defaultNavItem.className += " active";
let defaultFiltering = defaultNavItem.textContent;

const $inputAdd = document.getElementById("add-input");
const $btnAdd = document.getElementById("add-btn");
const $btnDeleteAll = document.getElementById("delete-btn");
const $todoList = document.getElementById("tasks");

// READ: a list of tasks & Filtering
function renderTasks(tasks, filtering="All") {
    let renderTemplate = '';
    let currentTasks = [];
    
    if (filtering === 'Active') {
        for (const task of tasks) {
            if (task.status === 'ACTIVE') {
                currentTasks.push(task);
            }
        }
    }

    else if (filtering === 'Completed') {
        for (const task of tasks) {
            if (task.status === 'COMPLETED') {
                currentTasks.push(task);
            }
        }
    }

    else {
        currentTasks = [...tasks];
    }

    for(let i = 0; i < currentTasks.length; i++) {
        if (currentTasks[i].status == 'ACTIVE') {
            renderTemplate += `
            <li class="list-group-item d-flex align-items-center">
                <input class="form-check-input me-3" type="checkbox" onclick="updateTaskById(${currentTasks[i].id})">
                <label class="form-check-label me-3">${currentTasks[i].name}</label>
            </li>
        `
        } else if (currentTasks[i].status == 'COMPLETED') {
            if (filtering === 'All') {
                renderTemplate += `
                    <li class="list-group-item d-flex align-items-center">
                        <input class="form-check-input me-3" type="checkbox" checked onclick="updateTaskById(${currentTasks[i].id})">
                        <label class="form-check-label me-3 text-decoration-line-through">${currentTasks[i].name}</label>
                    </li>
                    `
            } else {
                renderTemplate += `
                    <li class="list-group-item d-flex align-items-center">
                        <input class="form-check-input me-3" type="checkbox" checked onclick="updateTaskById(${currentTasks[i].id})">
                        <label class="form-check-label me-3 text-decoration-line-through">${currentTasks[i].name}</label>
                        <button type="button" class="btn btn-danger" onclick="deleteTaskById(${currentTasks[i].id})">Delete</button>
                    </li>
                    `
            }   
        }
    }

    if (filtering === "Completed") {
        $btnDeleteAll.style.display = "";
    } else {
        $btnDeleteAll.style.display = "none";
    }

    $todoList.innerHTML = renderTemplate;
}
renderTasks(tasks, defaultFiltering);

// active tab & highlight it
for (let i = 0; i < navItems.length; i++) {
    navItems[i].onclick = function() {
        for(const item of navItems) {
            if (item.className.includes("active")) {
                item.className = "nav-link"
            }
        }
        defaultNavItem = navItems[i];
        navItems[i].className += " active";
        defaultFiltering = navItems[i].textContent;

        renderTasks(tasks, defaultFiltering);
    }
}

// CREATE: a new task
$btnAdd.onclick = function() {
    const newTask = {}

    if (!$inputAdd.value) {
        alert("Please check your input! The current input is empty!");
    } else {
        newTask.id = Date.now();
        newTask.name = $inputAdd.value;
        newTask.status = 'ACTIVE';

        tasks.push(newTask);
        
        localStorage.setItem('tasks', JSON.stringify(tasks));
        
        renderTasks(tasks, defaultFiltering);
        
        $inputAdd.value = '';
    }

}

// UPDATE: a task
// function updateTask(index) {
//     const selectedTask = tasks[index];

//     if (selectedTask.status == 'ACTIVE') {
//         selectedTask.status = 'COMPLETED';
//     } else if (selectedTask.status == 'COMPLETED') {
//         selectedTask.status = 'ACTIVE';
//     }

//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     renderTasks(tasks, defaultFiltering);
// }

function updateTaskById(taskId) {
    let foundTask;
    for (const task of tasks) {
        if (task.id === taskId) {
            foundTask = task;
            break;
        }
    }

    if (!foundTask) {
        alert("Task not found!");
    } else {
        if (foundTask.status == 'ACTIVE') {
            foundTask.status = 'COMPLETED';
        } else if (foundTask.status == 'COMPLETED') {
            foundTask.status = 'ACTIVE';
        }
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks(tasks, defaultFiltering);
}

function deleteTaskById(taskId) {
    let updatedTasks = [];

    for (const task of tasks) {
        if (task.id === taskId) {
            continue;
        }
        updatedTasks.push(task);
    }
    
    tasks = updatedTasks;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks(tasks, defaultFiltering);
}

$btnDeleteAll.onclick = function (event) {
    const activeTasks = [];
    for (const task of tasks) {
        if (task.status !== 'COMPLETED') {
            activeTasks.push(task);
        }
    }
    
    tasks = activeTasks;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks(tasks, defaultFiltering);
}



