const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

todoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addBtn.click();
  }
});

addBtn.addEventListener("click", () => {
  const taskText = todoInput.value;

  // prevent empty tasks
  if (taskText.trim() === "") {
  alert("Task must be added.");
  return;
}

  // create <li>
  const li = document.createElement("li");
  li.textContent = taskText;

  // create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("deleteBtn");

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // add delete button inside li
  li.appendChild(deleteBtn);

  // add li into the ul
  todoList.appendChild(li);

  // clear input
  todoInput.value = "";
});

