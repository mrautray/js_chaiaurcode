const accountId = 13323;
let accountEmail = "manash@google.com";
var accountPassword = "12345";
accountCity = "Bhubaneswar";

//accountId=2; //Not Allowed
accountEmail = "manash1@google.com";
accountPassword = "34566";
accountCity = "Mumbai";
let accountState;

console.log(accountId);
console.table([
  accountEmail,
  accountId,
  accountPassword,
  accountCity,
  accountState,
]);

/*
Prefer not to use var 
as there is issue of block scope and functional scope
*/
