let todoList = [
  {
    item: "Buy Milk",
    dueDate: "4/10/2023",
  },
  {
    item: "Go to College",
    dueDate: "4/10/2023",
  },
];
displayTodo();

function add_todoList() {
  const input_todo = document.querySelector("#input-todo");
  const date_todo = document.querySelector("#date");

  const value = input_todo.value;
  const date = date_todo.value;

  todoList.push({ item: value, dueDate: date });
  input_todo.value = "";
  date_todo.value = "";
  displayTodo();
}

function displayTodo() {
  const todo_container = document.querySelector(".todo-container");
  let html = "";
  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];
    html += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button id="delete-button" onclick="todoList.splice(${i}, 1); 
      displayTodo();">Delete</button>

      `;
  }

  todo_container.innerHTML = html;
}
