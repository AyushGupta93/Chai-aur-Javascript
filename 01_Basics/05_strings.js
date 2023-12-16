const name = "Ayush";

const lastName = "Gupta"

// console.log("Name: "+  name + lastName);

//console.log(`Name : ${name} ${lastName}`);


const gameName = new String('Ghost-007')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('7'));




const newString = gameName.substring(0, 4)  // doesn't allow -ve value give normal results if give -ve values
console.log(newString);

const anotherString = gameName.slice(-1) // -1 gives result from back of variable like --> -1 ==> 7 
const anotherOneString = gameName.slice(-8,4) // -1 gives result from back of variable like --> -1 ==> 7 
console.log(anotherString);
console.log(anotherOneString);

let newName = "      Ayush Gupta        "
console.log(newName.trim());


let url = "https://ayushgupta.com/ayush%20gupta"
console.log(url.replace('%20', '-'));
console.log(url.includes('ayush'));
