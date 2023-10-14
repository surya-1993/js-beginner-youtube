const accountId = 456736;
let accountEmail = "surya@gmail.com";
var accountPassword = "12345";
accountCity = "jaipur";
let accountState;

// accountId = 4; // Not Allowed

accountEmail = "sus@gmail.com";
accountPassword = "3e3eee";
accountCity = "cuttack";

console.log(accountId);

/*

*prefer not to use var 
because of issue in block scope and functional scope.

*variable not been assigned with any value will show "undefined".

*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);