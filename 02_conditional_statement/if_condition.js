// let age = 9;
// if (age > 18) {
//   console.log("i could go vote.");
//   console.log("i could go vote.");
// } else {
//   console.log("I am under age");
//   console.log("I am able to vote in " + (18 - age) + " years");
// }

// console.log("i am below if block");

// Write a program to check if a person can vote or not based on the age
// Note: whose nail has painted cannot give a vote

let age = 18;
let isNailPainted = true; // if true then voted already

if (age >= 18 && isNailPainted === false) {
  console.log("you can vote");
} else {
  console.log("you cannot vote");
}

if (age >= 18) {
  if (isNailPainted === true) {
    console.log("You have voted already");
  } else {
    console.log("you can vote you are eligible");
  }
} else {
  console.log("you are under age");
}
// Wap to find the largest in three numbers

let n1 = 10;
let n2 = 20;
let n3 = 80;
// let n1=10,n2=20,n3=80

if (n1 > n2) {
  if (n1 > n3) {
    console.log("n1 is largest");
  } else {
    console.log("n3 is largest");
  }
} else {
  if (n2 > n3) {
    console.log("n2 is largest");
  } else {
    console.log("n3 is largest");
  }
}
