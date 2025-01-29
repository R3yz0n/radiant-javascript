// Objects in javascript are the key-valued  pair
// Objects have properties and methods
// Objects consisits of collection of different data types

const person = {
  name: "John",
  age: 30,
  isMarried: false,
  hobbies: ["reading", "writing", "coding"],
};
// person.name
// person.hobbies[0]

const twiiterInfo = {
  name: "Elon musk",
  username: "@elonmusk",
  joinedDate: "June 2009",
  noOfFollowing: 955,
  followers: 214000000,
  //   posts:,
  increaseFollowingCount: function () {
    this.noOfFollowing++;
    return 1;
  },
  deleteAccount: function () {
    this.name = "";
    this.username = "";
    this.joinedDate = "";
    this.noOfFollowing = 0;
    this.followers = 0;
  },
};

// twiiterInfo.increaseFollowingCount();

// console.log(twiiterInfo.increaseFollowingCount());
// console.log(twiiterInfo);
console.log(twiiterInfo);
twiiterInfo.deleteAccount();
console.log(twiiterInfo);

const car1 = { brand: "Toyota", model: "Corolla", year: 2020 };
