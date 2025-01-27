// TODO functions in stack
// Stack vs heap

function give_name_of_function() {
  console.log("This is a function");
}

give_name_of_function();

// parameter and arguments

//parameters

function sum(a, b, c) {
  console.log("the sum is" + (a + b + c));
}

// sum(10, 20, 30); //arguments

function add(a, b) {
  return a + b;
}

let result = add(10, 20);
// console.log(result);
