const accountId = 14453
let accountEmail = "anand@gmail.com"
var accountPassword = "12345"
accountCity = "Patna"
let accountState;  //undefined

//accountId = 2 //not alllowed because of const

accountEmail = "akg@gmail.com"
accountPassword = "12131415"
accountCity = "Delhi"


console.log(accountId);


/*
Prefered not to use var 
because of isuue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity])
