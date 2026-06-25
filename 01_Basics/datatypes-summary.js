//Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 3458227957925767911037731430n




// Reference Type (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"];
let myObj = {
    name: "Anand",
    age: 21,
}
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object


*/


//*******************************************************

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename  = "AnandMyYoutube"

let anothername = myYoutubename
anothername = "AnandKrUtube"

console.log(myYoutubename);
console.log(anothername)


let userOne = {
    email : "abc@gmail.com",
    upi : "abc@ybi",
}

let userTwo = userOne
userTwo.email = "xyz@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);