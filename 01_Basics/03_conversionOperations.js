const score = "33abc"

const convertedScore = Number(score)


// console.log(typeof score);
// console.log(typeof convertedScore);
// console.log(convertedScore);

const isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn)

//console.log(booleanIsLoggedIn);


// "33" => 33
// "33abc" => NaN
// 1 => true;  0=> false
// "" => false ; "ayush" => true

let someNumber = 33

let stringNumber = String(someNumber)

// console.log(stringNumber);
// console.log( typeof stringNumber);


/************************* Operations ******************************************************/


let st1 = "hello"
let str2 = "  world"

let str3 = st1 + str2
//console.log(str3);


// console.log("1" + 2 );
// console.log(1 + "2" );
// console.log("1" + "2"  + 2);  => priorty wise conversion string first toh string mein convert and vice -verse
// console.log(1 + 2  + "2");


// console.log(+true);
// console.log(+"");


let gameCounter = 100

let y = gameCounter++;   //--> Postfix value same assign hogi fr operation perform
let z = ++gameCounter;     // --> Prefix mein operation perform hoga fir value increase hoke assign hogi
//console.log(gameCounter, y);
console.log(gameCounter, z);


