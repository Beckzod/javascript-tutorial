const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value;
  if (taskText.trim() === "") {
    alert("Please enter a task.");
    return;
  }
  const listItem = document.createElement("li");
  const taskLabel = document.createElement("label");
  taskLabel.innerText = taskText;
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", deleteTask);
  listItem.appendChild(taskLabel);
  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);
  taskInput.value = "";
}

function deleteTask(event) {
  const listItem = event.target.parentElement;
  taskList.removeChild(listItem);
}