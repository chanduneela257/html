
let taskList = [];
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskListElement = document.getElementById('task-list');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const task = {
            text: taskText,
            completed: false
        };
        taskList.push(task);
        renderTaskList();
        taskInput.value = '';
    }
}

function renderTaskList() {
    taskListElement.innerHTML = '';
    taskList.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.classList.add('task');
        if (task.completed) {
           taskElement.classList.add('completed');
        }
        taskElement.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask(${index})">
            <span>${task.text}</span>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskListElement.appendChild(taskElement);
    });
}

function toggleTask(index) {
    taskList[index].completed = !taskList[index].completed;
    renderTaskList();
}

function deleteTask(index) {
    taskList.splice(index, 1);
    renderTaskList();
}
