
// let arr= [1,2,3,4,5];
// let abc = ['a','b','c','d','e']

// arr.push(6)
// arr.unshift(0)

// arr.pop()

// arr.shift()

// arr.reverse()
// abc.reverse()

// console.log(abc.includes('f'))

// console.log(arr.includes(4))


// console.log(arr)
// console.log(abc)


// let colors = ["red", "green", "blue", "yellow", "orange", "purple"];

// console.log(colors.indexOf("pink"));


// let cities = ["pune","satara","mumbai","dellhi"];

// // console.log(cities.reverse());

// // console.log(cities.sort())

// console.log(cities.includes("pune"))

// console.log(cities.indexOf("morve"))

// console.log(cities.toString());

// *****************************************************************************
                // LEARN ABOUT OBJECTS
   
                let data= {
    name : "kajal",
    age : 20,       
    city : "Nashik",
    hobbies : ["reading","travelling"],
}
console.log(data);

data.hobbies.pop(0)
console.log(data);

let myInstaData={

    is_private : true,
    is_verified : true,
    user_name : "_kajal.474",
    acc_type : "private",
    acc_name : "kajal",

    following : {
        1 : "Dhanshree",
        2 : "Rajashree",
    },

    followers : {
        1 : "Dhanshree",
        2 : "jayashree",
    },
    posts : {
        1 : "my first post",
        2 : "my second post",
        3 : "my third post",
        4 : "my fourth post",
    },

}

console.log(myInstaData);

myInstaData.is_private = false;

myInstaData.posts[4] = {
    url : "https://www.instagram.com",
    liks : 100,
    img : "https://www.instagram.com",
}

console.log(myInstaData);