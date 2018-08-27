// input: 5
// output: 120

function factorial(n) {
  if(n===0) return 1;
  return factorial(n-1)*n;
}

console.log(factorial(5));
console.log(factorial(6));