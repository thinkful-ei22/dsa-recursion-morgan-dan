'use strict';

// Input: [1, 2, 3]
// Output: [2, 4, 6]

const arrayDouble = function(numArray){
  if(numArray.length === 0) return [];
  let double = numArray[0] * 2;
  return [double, ...arrayDouble(numArray.slice(1))];
};

console.log(arrayDouble([1, 2, 3]));
console.log(arrayDouble([100, 50, -5, 20, 0.5]));
console.log(arrayDouble([]));