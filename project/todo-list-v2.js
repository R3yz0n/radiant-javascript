const todoList = [
  { id: 1, title: "Learn React", name: "hi" },
  { id: 2, title: "Learn Node" },
  { id: 3, title: "Learn Express" },
];

let todoContainer = document.getElementById("todos");

// Function to generate HTML for todo items
function showTodos() {
  todoContainer.innerHTML = todoList
    .map((todo, index) => {
      return `
        <li class="todo-item" data-index="${todo.id}">
          <p>${todo.title}</p>
         
          <aside>
            <button onclick='updateTodo(${todo.id})' class="btn-edit">Edit</button>
            <button class="btn-delete" onclick="deleteTodo(${todo.id})">Delete</button>
          </aside>
        </li>
      `;
    })
    .join("");
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  showTodos();
}

const updateTodo = (index) => {
  const todo = todoList[index];
  const newTitle = prompt("Enter new title", todo.title);

  if (newTitle) {
    todoList[index] = { ...todo, title: newTitle };
    showTodos();
  }
};

document.getElementById("add-btn").addEventListener("click", function () {
  let input = document.getElementById("input").value;
  if (input.trim() !== "") {
    todoList.push({ id: Date.now(), title: input });
    showTodos(); // Re-render with the new todo
    document.getElementById("input").value = ""; // Clear input
  }
});

// Initial render
showTodos();
