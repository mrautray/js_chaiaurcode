//number
let score =33;
console.log(typeof score);
//String
score="33"
console.log(typeof score);
//Convert String to Number
let valueInNumber=Number(score);
console.log(typeof valueInNumber);
//NaN - Not a number
let numberWithString = "33abc"
let convertToNumber = Number(numberWithString);
console.log(convertToNumber);
console.log(typeof convertToNumber);
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(true));

//"33"=> 33
//"33abc"=>NaN
//true=>1,false=>0

console.log(Boolean(1)); //True
console.log(Boolean(0)); //False
console.log(Boolean("")); //False
console.log(Boolean("Manash")); //True


let someNumber=33
console.log(String(someNumber));
console.log(typeof String(someNumber));

//**********************************Operations********************************** */
let value =3;
let negValue = -value;
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);

console.log("Manash"+"Rautray");


console.log(1+"2");
console.log("1"+2);

console.log(+true);
console.log(+"");


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
