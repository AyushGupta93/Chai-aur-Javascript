const myDate = new Date();
// console.log(myDate);
// console.log(typeof myDate);  --> date is a objects
// console.log(myDate.toDateString());
 //console.log(myDate.toLocaleString());
// console.log(myDate.toString());
// console.log(myDate.toJSON()); // produces same result as ISO 
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleTimeString());

//const myCreatedDate = new Date(2023, 0 , 23)
//const myCreatedDate = new Date(2023, 0 , 23, 5 ,3)

//let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023") // --> format the dates

//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);  // gives date in milliseconds
// console.log(myCreatedDate.getTime());  // gives date in milliseconds
// console.log(Math.floor(Date.now()/1000)); // get dates in seconds


let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDate());

// `${newDate.getDay()}`


let date = newDate.toLocaleString('default',{  // interesting method
    weekday: "long",
    year: "numeric"
})

console.log(date);