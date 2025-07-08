const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskDateTime = document.getElementById("taskDateTime");
const taskList = document.getElementById("taskList");

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  const dateTime = taskDateTime.value;

  if (taskText === "") return;

  const li = document.createElement("li");
  const details = document.createElement("div");
  details.className = "task-details";
  details.innerHTML = `<strong>${taskText}</strong><br><small>${new Date(dateTime).toLocaleString()}</small>`;
  li.appendChild(details);

  const buttons = document.createElement("div");
  buttons.className = "task-buttons";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✓";
  completeBtn.className = "complete";
  completeBtn.onclick = () => {
    li.classList.toggle("completed");
  };

  const editBtn = document.createElement("button");
  editBtn.textContent = "✎";
  editBtn.className = "edit";
  editBtn.onclick = () => {
    const newTask = prompt("Edit task:", taskText);
    if (newTask) {
      details.innerHTML = `<strong>${newTask}</strong><br><small>${new Date(dateTime).toLocaleString()}</small>`;
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.className = "delete";
  deleteBtn.onclick = () => {
    taskList.removeChild(li);
  };

  buttons.appendChild(completeBtn);
  buttons.appendChild(editBtn);
  buttons.appendChild(deleteBtn);
  li.appendChild(buttons);
  taskList.appendChild(li);

  taskForm.reset();
});