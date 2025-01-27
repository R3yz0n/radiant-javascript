// Write a program to make a function.
// A function pass and arguments lets say eg 3, the it should print the table of 3
// If passed 5 it should print the table of 4

// What ever number u passed, the respective table should be ploted.

// n*1=2
// n*2=4
// n*3=6

const printTable = (n = 1, m) => {
  // now n is 2
  for (let i = 1; i <= m; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
};

printTable(2, 100);
// printTable(100);
