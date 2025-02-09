// Destrucuting is the method to extract keys from an object
// OR extract elements from an array

let obj = {
  name: "Golu",
  age: 29,
  isMarried: false,
};

const { name, age } = obj; // object destructuting
console.log(name);
console.log(age);

let array = [1, 2, 3];

const [a, b] = array; // array destructuing
console.log(a);
console.log(b);
