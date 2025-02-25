// axios

async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    document.getElementById("main-content").innerHTML = products
      .map((prod) => {
        return ` <div class="card">
            <img height="300px" width="200px"
                src="${prod.image}"
                alt="">
            <p>${prod.title}</p>
            <p>$34.00 </p>
            <p>Fast Delivery</p>
            <button>Add to Cart</button>
        </div>`;
      })
      .join();
  } catch (error) {
    alert("something went wrong");
  }
}

fetchProducts();

let todoContainer = document.getElementById("todos");

// // Function to generate HTML for todo items
// function showTodos() {
//   todoContainer.innerHTML = todoList
//     .map((todo, index) => {
//       return `
//         <li class="todo-item" data-index="${todo.id}">
//           <p>${todo.title}</p>

//           <aside>
//             <button onclick='updateTodo(${todo.id})' class="btn-edit">Edit</button>
//             <button class="btn-delete" onclick="deleteTodo(${todo.id})">Delete</button>
//           </aside>
//         </li>
//       `;
//     })
//     .join("");
// }
