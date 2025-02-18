// Promises is a part of handling asynchronous operation in js
// promises have three stage

// promise pending
// promise fullfilled
// promise rejected

// CRUD (Create, Read, Update, Delete)

// https://jsonplaceholder.typicode.com/todos

console.log("hi");

// REST API (API-bridge(bridge between client and server))
// this is ansync fn it takes time

const res = fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    return response.json(); // .json() is a promise which takes time to  execute
  })
  .then((res) => {
    console.log(res);
  })
  .catch();

const res1 = fetch("https://jsonplaceholder.typicode.com/todos").then((response) => {
  console.log(response);
});
