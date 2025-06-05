
let num = [10, 20, 30, 40, 50, 6, 7, 8, 9, 10]

for(i in num){
    console.log(i)
}
console.log("__________________________")

for(i of num){
    console.log(i)
}

console.log("__________________________")

let names = ["kajal", "Nashik", "maharashtra", "india"]

for(i in names){
    console.log(i)
}

console.log("__________________________")

for(i of names){
    console.log(i)
}

console.log("__________________________")

let info = {
    name : "kajal",
    age : 20,
    city : "Nashik",
    hobbies : ["reading","travelling"],
}

for(i in info){
    console.log(i)
}
console.log("__________________________")

for(i of info){
    console.log(i)
}