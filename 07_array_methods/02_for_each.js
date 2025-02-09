//

let nameList = ["laxman", "arpan", "sagar"];

// for (let i = 0; i < nameList.length; i++) {
//   console.log(nameList[i]);
// }

// it takes a function as an arugment
// and that function is anonymous callback fn
let returnedValue = nameList.forEach((name, index) => {
  console.log(name);
  console.log(index);
});
