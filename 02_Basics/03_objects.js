//singleton
//Object.create()

//object literals

//Declare a symbol and use it as a object key
const mySym = Symbol("123");

let userOne = {
  name: "Ayush",
  email: "ayush@ag.com",
  "full name": "Ayush Gupta",
  age: 18,
  //mySym: "key1",  --> wrong way
  [mySym]: "key1",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Wednesdays"],
};

// console.log(userOne.name);
// console.log(userOne["name"]);
// console.log(userOne["full name"]);
// console.log(userOne[mySym]);
// console.log(typeof mySym);

userOne.email = "ayush@chatgpt.com";
//Object.freeze(userOne); // can't propogate changes
userOne.email = "ayush@google.com";
//console.log(userOne);

userOne.greeting = function () {
  console.log("hello user One");
};
userOne.greetingTwo = function () {
  console.log(`hello user One,${this.name}`);
};

console.log(userOne.greeting());
console.log(userOne.greetingTwo());
