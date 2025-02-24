//
// fetch()
const todoList = [
  {
    id: 1,
    title: "Learn React",
  },
  {
    id: 2,
    title: "Learn Node",
  },
  {
    id: 3,
    title: "Learn Express",
  },
];

let todoContainer = document.getElementById("todos");
let addBtn = document.getElementById("add-btn");
// function to shows todos in the UI
const showTodos = () => {
  for (let i = 0; i < todoList.length; i++) {
    let list = document.createElement("li");
    list.className = "todo-item";
    // todos tags
    let p = document.createElement("p");
    let aside = document.createElement("aside");

    // creating button and adding classess
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.className = "btn-edit";
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "btn-delete";
    // function to delete a list item
    deleteBtn.addEventListener("click", function () {
      list.remove();
    });

    // put buttons inside the aside tag
    aside.appendChild(editBtn);
    aside.appendChild(deleteBtn);

    // put the todo text inside the p tag
    p.innerText = todoList[i].title;

    list.appendChild(p);
    list.appendChild(aside);

    todoContainer.appendChild(list);
  }
};
showTodos();

// function to add a single todo in the UI
addBtn.addEventListener("click", function addTodo() {
  let input = document.getElementById("input");
  let typedValue = input.value;
  console.log(typedValue);
  //-----------------
  let list = document.createElement("li");
  list.className = "todo-item";
  // todos tags
  let p = document.createElement("p");
  let aside = document.createElement("aside");

  // creating button and adding classess
  let editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.className = "btn-edit";
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", function () {
    list.remove();
  });
  // put buttons inside the aside tag
  aside.appendChild(editBtn);
  aside.appendChild(deleteBtn);

  // put the todo text inside the p tag
  p.innerText = typedValue;

  list.appendChild(p);
  list.appendChild(aside);

  todoContainer.appendChild(list);
  input.value = "";

  //--------------------
});

// let input = document.getElementById("input").value;
//   let list = document.createElement("li");
//   list.className = "todo-item";
//   let p = document.createElement("p");
//   let aside = document.createElement("aside");

//   let editBtn = document.createElement("button");
//   editBtn.innerText = "Edit";
//   editBtn.className = "btn-edit";
//   let deleteBtn = document.createElement("button");
//   deleteBtn.innerText = "Delete";
//   deleteBtn.className = "btn-delete";

//   aside.appendChild(editBtn);
//   aside.appendChild(deleteBtn);

//   p.innerText = input;

//   list.appendChild(p);
//   list.appendChild(aside);

//   todoContainer.appendChild(list);
