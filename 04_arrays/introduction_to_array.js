// // Array is the collection of similar items or data types

// let ages = [10, 20, 30, 40, 50];

// for (let i = 0; i < ages.length; i++) {
//   console.log(ages[i]);
// }

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

// TODO prove that array is a refrence type
// In C language show that a of array hold the base address

let myArray = [1, 3, 4];
myArray.push(1000); // arguments
console.log(myArray);
myArray.pop();
