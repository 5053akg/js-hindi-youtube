
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


// shopping cart typ example

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 600, 500));




function calculateCartPrice2(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice2(200, 400, 600, 500));


const user = {
    username: "Anand",
    price: 299
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username: "ABCDEF",
    price: 999
})


const myNewArray = [200, 400, 600, 150]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log([200, 400, 100, 600]);

