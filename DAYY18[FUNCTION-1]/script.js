 function saygoodbye() {
    console.log("Goodbye, World!");

 }

 saygoodbye();


 (()=>{
    console.log("arrow function");
 })


();

let sayhey = ()=>{
    console.log("hey");
}

sayhey();

// IIFE immediately invoked function expression

(function(){
    console.log("IIFE");
}

)();

(function(){
    console.log("IIFE");
}
)();
// IIFE with parameters

(function(name){
    console.log("IIFE with parameters", name);
}
)("kajal");

// IIFE with parameters and return value
(function(name){
    console.log("IIFE with parameters and return value", name);
    return name;
}
)("kajal");


// callback function 


function callbackFunction(callback){
    console.log("callback function2");
    callback();
}

callbackFunction(function(){
    console.log("callback function1");
});

 let abc=(xyz)=>{
    console.log("hello")
    xyz()
}

abc(()=>{
    console.log("hii")
})


// callback function with parameters

function callbackFunction(callback){
    console.log("callback function2");
    callback("kajal");
}
callbackFunction(function(name){
    console.log("callback function1", name);
});


// callback function with parameters and return value

function callbackFunction(callback){
    console.log("callback function2");
    let name = callback("kajal");
    console.log("callback function2", name);
}           

callbackFunction(function(name){
    console.log("callback function1", name);
    return name;
}   
);

// higher order function

function higherOrderFunction(callback){
    console.log("higher order function");
    callback();
}

higherOrderFunction(function(){
    console.log("callback function");
}
);


function retHelloFunction(){

    return function(){
        return function(){
             return function(){
                console.log("hello")
             }
        }
    }
}

let result = retHelloFunction()

console.log(result())


// function with default parameters

function greet(name = "kajal"){
    console.log("hello", name);
}
greet();

//anonymous function

let greet = function(name){
    console.log("hello", name);
}
greet("kajal");