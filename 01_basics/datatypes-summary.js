//primitive Datatype
//7 Types: String,Number,BigInt,Boolean,Null,Undefined,Symbol
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
//Non Primitive or Referrence Datatype
//Array,Objects,Functions
//Array is like list
const heros = ["shaktiman", "naagraj", "doga"];
//Object is like Map/Dictionary
let myObj = {
    name: "hitesh",
    age: 22,
}
//Function
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//Stack (Primitive) Heap (Non Primitive)

let var1 ="Manash";
let var2 = var1;

/*var2 gets a copy of var1 value from the stack memory other wise known as callby value.So if you change var2 it does not change var1.*/

let user1={
    name:"manash",
    phone:"8452001910"
}
let user2=user1;
//user2 gets the same reference as user1 from heap memory.So if value in user2 changes then user1 will also change.

