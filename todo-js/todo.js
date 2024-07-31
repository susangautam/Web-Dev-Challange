document.addEventListener("DOMContentLoaded", () => {
    const inputArea = document.querySelector(".input textarea");
    const todoList = document.querySelector(".todoLists");
    const clearButton = document.querySelector(".clear");
    const numSpan = document.querySelector(".num");
     
    function updateTaskCount() {
        const tasks = todoList.querySelectorAll(".list");
        const pendingTasks = Array.from(tasks).filter(task => !task.querySelector("input").checked).length;
        numSpan.textContent = pendingTasks > 0 ? pendingTasks : "no";
    }
    function createTaskElement(taskText) {
        const listItem = document.createElement("li");
        listItem.className = "list";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                listItem.querySelector(".task").classList.add("completed");
            } else {
                listItem.querySelector(".task").classList.remove("completed");
            }
            updateTaskCount();
        });
        const taskContent = document.createElement("span");
        taskContent.className = "task";
        taskContent.textContent = taskText;

        const deleteIcon = document.createElement("i");
        deleteIcon.className = 'bx bx-trash';
        deleteIcon.addEventListener("click", () => {
            listItem.remove();
            updateTaskCount();
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(taskContent);
        listItem.appendChild(deleteIcon);

        return listItem;
    }
    inputArea.addEventListener("keypress", (event) => {
        if (event.key === "Enter" && inputArea.value.trim()) {
            event.preventDefault();
            const taskText = inputArea.value.trim();
            const taskElement = createTaskElement(taskText);
            todoList.appendChild(taskElement);
            inputArea.value = "";
            updateTaskCount();
        }
    });
    clearButton.addEventListener("click", () => {
        todoList.innerHTML = "";
        updateTaskCount();
    });
    updateTaskCount();
});

