
var c = 300
let a = 300

if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a)
// console.log(b);
// console.log(c);


function one(){
    const username = "Anand"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two();
}

one(); 

if(true){
    const username = "Anand"
    if(username=="Anand"){
        const website = "youtube"
        console.log(username + website);
    }
    console.log(website);
    
}

console.log(username );


// ++++++++++++++++++++++++ interesting ++++++++++


console.log(addOne(8));
function addone(num){
    return num+1
}
addone(5)


console.log(addTwo(8));
const addTwo = function(num){
    return num+2
}
addTwo(5)