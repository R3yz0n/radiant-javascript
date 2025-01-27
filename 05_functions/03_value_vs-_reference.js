// Example of pass by value
let a = 10;
function passByValue(a) {
  // THis function taskes a argument and change it
  a = 100;
}

passByValue(a);
// console.log(a);

let arr = [1, 2];
function passByReference(brr) {
  brr[0] = 99999999;
}

passByReference(arr);
console.log(arr);
