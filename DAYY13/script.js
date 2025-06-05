
let whatsUserData = {
     
     name : "kajal",

     profile_picture : "myProfile.jpg",

}



  whatsUserData.name = "kajal"

console.log(whatsUserData)



let PhoneInfo = {
     name :"Vivo",
     prise:25000,
     color:"diamond",
}


PhoneInfo.isHaveCharger = false

delete PhoneInfo.prise

let ObjValues = Object.values(PhoneInfo)


console.log(ObjValues)


let Doubt = {
     doubt : "how i insert new key in object"
}

Doubt.isDoubtSolve =  true

Doubt.answer = "i write directly Objname.newKey = value"

Doubt.date = "26/05/2025"


console.log(Doubt)