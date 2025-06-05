

let colors = ["red", "green", "blue", "yellow", "orange", "brown"]

for(let i= 0 ; i< colors.length;i++){
    console.log(`current colors is ${colors[i]}`)
}



for (i = colors.length - 1; i >= 0; i--) {
    console.log(`current colors is ${colors[i]}`)
}


let num = [1,2,-1,5,-3,-8,5,-1,7,-1,-5];


let minus_num = num.filter((data)=> data < 0)

console.log(minus_num)

let plus_num = num.filter((data)=> data > 0)
console.log(plus_num)

let zero_num = num.filter((data)=> data == 0)

console.log(zero_num)

