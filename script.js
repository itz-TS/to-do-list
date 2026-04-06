let tasks = [];

// Run only in browser (not in Jest)
if (typeof window !== "undefined") {
    tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    displayTasks();
}

// ✅ Add Task
function addTask(){

    if (typeof document === "undefined") return;

    let input = document.getElementById("taskInput");
    let text = input.value.trim();

    if(!isValidTask(text)){
        alert("Enter a task");
        return;
    }

    let task = {
        text: text,
        time: new Date().toLocaleTimeString(),
        completed: false
    };

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";

    displayTasks();
}

// ✅ Display Tasks
function displayTasks(){

    if (typeof document === "undefined") return;

    let pending = document.getElementById("pendingTasks");
    let completed = document.getElementById("completedTasks");

    pending.innerHTML = "";
    completed.innerHTML = "";

    tasks.forEach((task, index) => {

        let li = document.createElement("li");

        if(task.completed){
            li.classList.add("completed");
        }

        li.innerHTML = `
        <input type="checkbox" ${task.completed ? "checked" : ""} onchange="toggleTask(${index})">

        <span class="taskText">${task.text}</span>

        <span class="time">${task.time}</span>

        <button class="edit-btn" onclick="editTask(${index})">✏️</button>

        <button class="delete-btn" onclick="deleteTask(${index})">❌</button>
        `;

        if(task.completed){
            completed.appendChild(li);
        } else {
            pending.appendChild(li);
        }

    });
}

// ✅ Toggle Task
function toggleTask(index){

    tasks[index].completed = !tasks[index].completed;

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();
}

// ✅ Delete Task
function deleteTask(index){

    tasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();
}

// ✅ Edit Task
function editTask(index){

    let newText = prompt("Edit your task:", tasks[index].text);

    if(newText !== null && isValidTask(newText)){

        tasks[index].text = newText;

        localStorage.setItem("tasks", JSON.stringify(tasks));

        displayTasks();
    }
}

// ✅ Validation Function (TESTABLE)
function isValidTask(task) {
    return task.trim() !== "";
}

// ✅ Export for Jest
if (typeof module !== "undefined") {
    module.exports = { isValidTask };
}