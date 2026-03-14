let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

function addTask(){

let input = document.getElementById("taskInput");

let text = input.value.trim();

if(text === ""){
alert("Enter a task");
return;
}

let task = {
text:text,
time:new Date().toLocaleTimeString(),
completed:false
};

tasks.push(task);

localStorage.setItem("tasks",JSON.stringify(tasks));

input.value="";

displayTasks();

}

function displayTasks(){

let pending = document.getElementById("pendingTasks");
let completed = document.getElementById("completedTasks");

pending.innerHTML="";
completed.innerHTML="";

tasks.forEach((task,index)=>{

let li=document.createElement("li");

if(task.completed){
li.classList.add("completed");
}

li.innerHTML = `
<input type="checkbox" ${task.completed ? "checked":""} onchange="toggleTask(${index})">

<span class="taskText">${task.text}</span>

<span class="time">${task.time}</span>

<button class="edit-btn" onclick="editTask(${index})">✏️</button>

<button class="delete-btn" onclick="deleteTask(${index})">❌</button>
`;

if(task.completed){
completed.appendChild(li);
}else{
pending.appendChild(li);
}

});

}

function toggleTask(index){

tasks[index].completed = !tasks[index].completed;

localStorage.setItem("tasks",JSON.stringify(tasks));

displayTasks();

}

function deleteTask(index){

tasks.splice(index,1);

localStorage.setItem("tasks",JSON.stringify(tasks));

displayTasks();

}

function editTask(index){

let newText = prompt("Edit your task:",tasks[index].text);

if(newText!==null && newText.trim()!==""){

tasks[index].text = newText;

localStorage.setItem("tasks",JSON.stringify(tasks));

displayTasks();

}

}