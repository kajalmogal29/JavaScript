// let box = document.querySelector("#box")
// console.log(box)

// let box = document.querySelector("#box")

// function clicked(){
//     console.log("element has been clicked")
// }
// box.addEventListener("click",clicked)

/////////////////

// get the element
// add the event = click
//change the button text

// let btn = document.querySelector("#btn")
//  function changeBtnText(){
//     btn.innerText = "hide"
//  }
//  btn.addEventListener("click",changeBtnText)


// let btn = document.querySelector("#btn")
//  function changeBtnText(){
//     if (btn.innerText = "open"){
//         btn.innerText = "hide"
//         }else{
//             btn.innerText = "open"
//     }
//  }
//  btn.addEventListener("click",changeBtnText)

// let btn = document.querySelector("#btn")
// function changeBtnText(){
//     console.log("double click")
// }
// btn.addEventListener("dblclick",changeBtnText) or btn.addEventListner("dbclick", function()=>{
    //     console.log("double click")
   //  } )


let openBar = document.querySelector(".open")
let menu = document.getElementById("menu")
let closeBar = document.querySelector(".close")


openBar.addEventListener("click", ()=>{
    menu.style.right = "0"
})
closeBar.addEventListener("click", ()=>{
menu.style.right = "-80vw"
})