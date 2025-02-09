// Map method is used to modify existing array and return the modified array.

let marks = [10, 20, 30];

let newMarks = marks.map((mark, index) => {
  return mark + 1;
});
console.log(marks);
console.log(newMarks);

let names = ["sagar", "arpan", "ravi-kishan"];
//Question-- use map method to conver the names to uppercase
