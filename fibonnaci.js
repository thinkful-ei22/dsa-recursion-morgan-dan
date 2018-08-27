'use strict';
//input: 7
//output: [1 1 2 3 5 8 13]

//input: 10
//output: [1 1 2 3 5 8 13 21 34 55]

function fibonacci(n){
  if(n <= 1){
    return [1];
  } else if (n === 2) {
    return [1, 1];
  }

  const sum = fibonacci(n-1)[n-2] + fibonacci(n-1)[n-3];
  //n = 3  --->  [1, 1][1] + [1, 1][0]
  //                    1 +   1    = 2

  //n = 4  --->  [1, 1, 2][2] + [1, 1, 2][1]
  //                      2   +   1   = 3

  //n = 5  --->  [1, 1, 2, 3][3] + [1, 1, 2, 3][2]
  //                         3   +   2   = 5

  //...

  //n = 10  --->  [1, 1, 2, 3, 5, 8, 13, 21, 34][8] + [1, 1, 2, 3, 5, 8, 13, 21, 34][7]
  //                                          34  +  21  = 55


  return [...fibonacci(n-1), sum];
}

console.log(fibonacci(7));
console.log(fibonacci(10));