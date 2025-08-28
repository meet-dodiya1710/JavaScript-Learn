const accountId = 144521
let accountEmail = "abc@gmail.com"
var accountPassword = "1234"
accountCity = "Rajkot"
let accountState;

// accountId = 2  // is not allowed because we can't change the const value

accountEmail = "meet@gmail.com"
accountPassword = "5678"
accountCity = "Bhavnagar"

console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


// we can use a console.table for calling a multiple varialbles 
// and if we want to call a single variable at a time than we can use console.log


// for run write below command
// ------node 01_basics/01_variables.js