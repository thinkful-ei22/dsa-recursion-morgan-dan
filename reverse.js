// input: 'hello';
// output: 'olleh';

// solution I
// function reverse(str){
//   if(!str) return '';
//   return reverse(str.slice(1)) + str[0];
// }

// solution II
function reverse(str) {
  if (!str) return '';
  return str[str.length-1] + reverse(str.slice(0, str.length-1));
}

console.log(reverse('hello'));
console.log(reverse('hello world'));

