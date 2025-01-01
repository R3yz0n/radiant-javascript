let counter = 0;

while (counter < 5) {
  //   console.log(`The current value of counter is ${counter} `);
  if (counter === 3) {
    break;
  }
  counter++; /// counter=counter+1 //10
}

// wap to demonstrate break statement where you loop from 1-50
// and search for a number

let numberToBeSearched = 5;

let i = 1;
while (i <= 50) {
  console.log(i);
  if (i === numberToBeSearched) {
    console.log(`Number ${numberToBeSearched} found`);
    break;
  }
  i++;
}
