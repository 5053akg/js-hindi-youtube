 //singleton
 //Object.create   //constructor way aur isse se singleton banta h

 //object literals

 const mySym = Symbol("key1")

 const JsUser = {
    name: "Anand",
    "Full name": "Anand Kumar",
    [mySym]: "mykey1",
    age: 15,
    location: "Ghaziabad",
    email: "abc@gmail.com",
    isLoggeIn: false,
    lastLoginDays: ["Monday", "Saturday"]
 }

 console.log(JsUser.email);
 console.log(JsUser["email"]);
 console.log(JsUser["Full name"]);
 console.log(JsUser[mySym]);
 
 JsUser.email = "xyz@gmail.com"
//  Object.freeze(JsUser)
 JsUser.email = "pqr@gmail.com"
 console.log(JsUser);
 
 JsUser.greeting = function(){
    console.log("Hello JS user");
 }
 JsUser.greeting();   // yaha freeze ko hatana prega upar tabhi ye kaam krega greeting function
 
 JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
 }
 JsUser.greetingTwo();
console.log(JsUser);
