'use strict';
//input: 3
//output: 11

//input: 25
//output: 11001

function toBinary(num){
  if(num === 0) return '';

  const remainder = Math.floor(num % 2);

  return toBinary(Math.floor(num/2)) + remainder;
}

console.log(toBinary(25));
console.log(toBinary(3));
console.log(toBinary(1234567890));
