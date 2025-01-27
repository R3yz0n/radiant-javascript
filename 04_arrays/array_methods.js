let myArray = ["one", "two", "three", "four", "five", "six"];

// Methods can have return type or not
// Be careful to differentiate

// let sortedArray = myArray.sort();
// console.log(myArray.sort());
// console.log(sortedArray);

console.log(myArray.push("seven"));
console.log(myArray);
myArray.pop();

// You must be able to add the elment at first of the array

// "hundredd"

// shift() / unshift();

myArray.splice(4, 0, "hundres");
console.log(myArray);

let arr = [1, 2, 3, 4, 11];
const removeAnEleFromArray = (num) => {};

removeAnEleFromArray(100);
// the no is not avialble in the array

removeAnEleFromArray(1);
// the no is removed
