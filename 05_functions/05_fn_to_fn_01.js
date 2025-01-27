// // It is a fn that takes parameter as a function

// function higherOrderFunc(cfn) {
//   cfn();
// }

// function callBackFunc() {
//   console.log("I am a callback fn");
// }

// higherOrderFunc(callBackFunc);

function mainFn() {
  console.log("this ismain fn");
  printHello();
}
function printHello() {
  console.log("hello");
}
mainFn();

// Write a program to demo nested functions where
// the main function should take an args time
// If the time is greater than 4 then it should call a function that prints "GOOD EVENING"
// If the time is less than 4 then it should call a function that prints "GOOD AFTERNOON"
