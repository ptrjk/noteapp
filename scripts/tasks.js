import { updateButton } from './logic.js';


export let tasks = ["test1"];
let editingId = null;

generateTasks();

function generateTasks() {
    let html = "";

    tasks.forEach((task, index) => {
        if (index == editingId) {
            let value = tasks[index];
            html += `
            <div class="task" data-task="${index}">
                <input value="${value}">
                <div class="row" style="gap: 1rem;">
                    <a class="done">
                        <img src="done.png">
                    </a>
                </div>
            </div>
        `;
        }

        else
            html += `
            <div class="task" data-task="${index}">
                <p>${task}</p>
                <div class="row"  style="gap: 1rem;">
                    <a class="edit">
                        <img src="pencil.png">
                    </a>
                    <a class="delete">
                        <img src="close.png">
                    </a>
                </div>
            </div>
        `
    });

    document.querySelector(".tasks").innerHTML = html;

    document.querySelectorAll(".task").forEach((task, index) => {
        if (index == editingId) {
            let editElement = task.querySelector(".done");
            console.log(tasks[index])
            editElement.addEventListener('click', () => {
                editingId = null;
                tasks[index] = task.querySelector("input").value;
                console.log(task.querySelector("input").value)
                generateTasks();
            });
        }
        else {
            let deleteElement = task.querySelector(".delete");
            let editElement = task.querySelector(".edit");

            deleteElement.addEventListener('click', () => {
                deleteTask(task.dataset.task);
            });

            editElement.addEventListener('click', () => {
                editTask(task.dataset.task);
            });
        }

    });
}

function deleteTask(id) {
    let newTasks = tasks.filter((task, index) => index != id);
    tasks = newTasks;
    generateTasks();
}

export function addTask() {
    let inputValue = document.getElementsByClassName("main-input")[0].value;
    tasks.push(inputValue);
    generateTasks();
    document.getElementsByClassName("main-input")[0].value = "";
    updateButton();
}

function editTask(id) {
    editingId = id;
    generateTasks();
}


document.addEventListener("keydown", (e) => {
    if (e.key === "w")
        console.log(tasks)
})