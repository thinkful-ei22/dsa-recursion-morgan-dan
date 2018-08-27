'use strict';

// [input, output]
// [1, 1]
// [2, 3]
// [3, 6]
// [4, 10]
// [9, 45]

function triangularNumber(numRows) {
  if(numRows <= 0) return 0;
  return numRows + triangularNumber(numRows - 1);
}

console.log(triangularNumber(1));
console.log(triangularNumber(2));
console.log(triangularNumber(3));
console.log(triangularNumber(9));