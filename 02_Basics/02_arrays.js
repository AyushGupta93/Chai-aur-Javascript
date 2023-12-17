const marvel_heros  = ["thor", "spiderman","huk"]
const dc_heros = ["batman", "flash" , "aquaman"]

//marvel_heros.push(dc_heros);
//console.log(marvel_heros); [ 'thor', 'spiderman', 'huk', [ 'batman', 'flash', 'aquaman' ] ]
//console.log(marvel_heros[3][1]);

// let all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

let all_new_heros = [...marvel_heros, ...dc_heros] // spread operator (glass gira do sb bikhr jaate hai same S. O hai)

//console.log(all_new_heros);

let another_array = [1, 2, 4, [4, 5], [ 4, 6, [7 , 8]]]

const real_anothor_array = another_array.flat(Infinity) 

//console.log(real_anothor_array);

console.log(Array.isArray("Ayush"));
console.log(Array.from("Ayush")); // converts into iterable array
console.log(Array.from({name: "Ayush"})); // intersting case


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3
    ));