console.log("We are learning operators");

// Operator is a special sign or symbol that is used to perform operations on operands.

// 1) Arithmetic Operators

// + - * / % are arithemetic operators

let a = 10;
let b = 20;
let additionResult = a + b;
console.log(a + b);
console.log(additionResult);

console.log(5 % 2);

// 2) Relational Operators

// > < >= <= == != are relational operators
// Relational operators always evatualte to boolean value

console.log(10 > 5);

console.log(1 === "1"); // false
console.log(1 == "1"); // true

console.log(1 != "1"); //false
console.log(1 !== 1); // false

console.log(2 !== 2);
console.log(2 !== "2");

// 3) Assignment operator
// = += -= *= /= %= are assignment operator
let myVariable = 2;

myVariable += 2; // myVariable = myVariable + 2

//4
myVariable -= 10; //myVariable=myVariable-10
//-6

// Tricky question

let x = 10;
let y = 5;

let addAssign = (x += y); //x 15 addAssign 15
console.log((x = x + y)); //20
console.log(addAssign);

// 4) Logical Operator
// && || ! are the logical operators

let isTrue = 2 > 3 && 3 > 4;

// ++ --
// let increaseByOne=++10;
// console.log(increaseByOne);

// 5) THe type of operator

console.log(typeof 10);
