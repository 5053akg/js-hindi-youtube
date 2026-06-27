//constructor

// const tinderUser = new Object()    //singleton object
// const tinderUser = {}  // non - singleton object

const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Anand"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "abcd@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Anand",
            lastname: "Kumar"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}    //same as array 
console.log(obj3);


const users =[
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 2,
        email: "abcdef@gmail.com"
    },
    {
        id: 3,
        email: "abcxyz@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//destructuring

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Anand"
}

// course.courseInstructor

const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);

//json
// {
//     "name": "Anand",
//     "coursename": "javascript",
//     "price": "free"
// }
