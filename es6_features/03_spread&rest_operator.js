// Spread Operator (...)

let books = ["Atomic Habits", "Game of Thrones", "Rich Dad Poor Dad"];
// books.push("The Alchemist"); // moodification in existing array

let newBooks = [...books, "The Alchemist"];
console.log(newBooks);

let person = {
  name: "John Doe",
  age: 20,
  isMarried: false,
};

// person.address = "ktm"; // moodification in existing object
let newPerson = { ...person, address: "ktm" };

// Rest operator is used in function paramaters

const sum = (...params) => {
  console.log(params);
};

sum(1, 2, 0, 2, 4);
