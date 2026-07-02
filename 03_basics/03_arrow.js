//this -> current context ko refer krta hai

const user = {
    username : "Anand",
    price : 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// ye this object ke andar kaam kr rha hai


user.welcomeMessage()
user.username = "ABC"
user.welcomeMessage()

console.log(this);

// function chai(){
//     let username = "ANand"
//     console.log(this);
//     console.log(this.username);
// }

// chai()


// const chai = function(){
//     let username = "ANand"
//     console.log(this);
//     console.log(this.username);
// }
// chai()


// Arrow function =>

const chai = () => {
    let username = "Anand"
    console.log(this);
    
}
chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4))

//curly braces me return keyword likhna prega
//parenthesis me () return keyword ni likhna hoga

//const addTwo = (num1, num2) =>  num1 + num2
//or
//const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1 , num2) => ({username : "Anand"})

console.log(addTwo(3, 4))