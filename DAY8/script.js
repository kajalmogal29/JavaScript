// ALERT 

alert("Check your internet connection !");

// CONFIRM

let result = confirm("are you sure to leave this page ?");

console.log(result)

// PROMPT

let result1 = prompt("Enter your name");

document.writeln("<h1> Hey " + result1 + " welcome to Nashik </h1>" );


let name = prompt("Enter your DOB");

console.log(typeof name);

let ope1 = prompt("enter first value : ")
let ope2 = prompt("enter second value : ")

// PARSE

let numberOPE1 = parseInt(ope1)
let numberOPE2 = parseInt(ope2)

console.log("addition : " + (numberOPE1 + numberOPE2))
console.log("subtraction : " + (numberOPE1 - numberOPE2))
console.log("multiplication : " + (numberOPE1 * numberOPE2))
console.log("division : " + (numberOPE1 / numberOPE2))
console.log("modulus : " + (numberOPE1 % numberOPE2))

