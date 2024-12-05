import { addTask } from './tasks.js';

initElements();


function initElements() {
    document.querySelectorAll("button").forEach((btn) => {
        btn.addEventListener('click', () => {
            addTask();
        });
    });

    document.querySelectorAll("input").forEach((btn) => {
        btn.addEventListener('input', () => {
            updateButton();
        });
    });
}


export function updateButton() {
    let input = document.querySelector("input").value;
    let object = document.querySelector("button");

    if (input <= 0) {
        object.classList.add("disable");
        object.setAttribute("disabled", "true");
    }
    else {
        object.classList.remove("disable");
        object.removeAttribute("disabled");
    }
}