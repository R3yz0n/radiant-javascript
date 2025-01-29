// Wap to construct an objects which should have follwoign data types
// 1. String
// 2. Number
// 3. Boolean
// 4. Array
// 5. Method

// const human = {
//   name: "Sulav",
//   age: 19,
//   isMarried: false,
//   hobbies: ["reading", "writing", "coding"],
//   changeMaritalStatus: function () {
//     this.isMarried = !this.isMarried;
//   },
// };

// console.log(human);
// human.changeMaritalStatus();
// console.log(human);
// human.isMarried = false;

const contactInfo = {
  phone: "555-1234",
};
const userProfile = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  //   contactInfo: {
  //     phone: "555-1234",
  //   },
  contactInfo: contactInfo,

  hobbies: ["reading", "gaming", "traveling"],
};

userProfile.someKey = "jflasjflasjfa";

delete userProfile.hobbies;
console.log(userProfile);
document.write(userProfile.name);
