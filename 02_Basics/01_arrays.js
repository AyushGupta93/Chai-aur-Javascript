//Arrays

const myArr = ["a", 1, 2, 3, 4, 5];

const myHeroes = ["skatimaan", "doga"];

const myArr2 = new Array(1, 2, 3, 5);
//console.log(myArr2);

//Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop() //removes last ele

// myArr.unshift(6)  // insert ele at start
// myArr.shift()    // removes ele at start

// console.log(myArr.includes(7)); // returns boolean type
console.log(myArr.indexOf("a"));

// const newArr = myArr.join()  // converts into string

// console.log(myArr);
// console.log(newArr);

//slice and splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3); // returns section of an array

console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1, 3); // changes the original array

console.log(myn2);

console.log("C ", myArr);
