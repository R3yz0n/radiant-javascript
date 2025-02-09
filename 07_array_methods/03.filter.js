// Filter method is used to filter out some element based on the condition

const marks = [10, 18, 27, 5, 10];

const newArray = marks.filter((mark) => {
  return mark < 15;
  // return isNaN(marks) === false && marks;
});

console.log(newArray);

// Question from the given array only filter out the numbers
// Hiny : isNaN()

const randomizedArray = [
  1,
  true,
  "a",
  [1, 2, 3],
  () => {},
  {
    name: "idk",
  },
  8,
  "1",
];
