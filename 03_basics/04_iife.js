//Immediately Invoked Function Expressions (IIFE)


// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()


(function chai(){

    //named iife

    console.log(`DB CONNECTED`);

})();



( ()  => {
    console.log(`DB again connected`);
} )();



( (name)  => {
    console.log(`DB again and again connected ${name}`);
} )("Anand")


