
function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("N");
    console.log("D");
}

sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

// addTwoNumbers(3,null)
// const result = addTwoNumbers(3, 5)
// console.log(num1 + num2);


function addTwoNumbers(num1, num2){

    // let result = num1+num2
    // return result
    return num1 + num2
}

const result = addTwoNumbers(3, 5)
console.log("Result: ", result);

function loginUserMessage(username){
    if(username===undefined){
       return "Please enter a username"
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Anand"))
// console.log(loginUserMessage(""))
console.log(loginUserMessage())




function loginUserMessage(username){
    if(!username){
       return "Please enter a username"
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Anand"))
// console.log(loginUserMessage(""))
console.log(loginUserMessage())