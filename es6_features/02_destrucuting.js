let books = ["Atomic Habits", "Game of Thrones", "Rich Dad Poor Dad"];

// let firstBook = books[0];
const [firstBook, secondBooks] = books;
console.log(firstBook); // Atomic Habits

let person = {
  name: "John Doe",
  age: 20,
  isMarried: false,
  eats: function () {
    console.log("Man eats crumb crumb");
  },
};

// let personName = person.name;
const { name, isMarried } = person;
console.log(name);
console.log(isMarried);
