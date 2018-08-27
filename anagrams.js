// input: east
// output: east, esta, etsa....

function anagram(str){
  let arr= [];
  if(str.length===1) return [str];

  for(let i = 0; i <str.length; i++){
    const result = anagram(str.replace(str[i], ''));
    result.forEach(substring => {
      arr.push(str[i]+substring);
    });
  }
  return arr;
}

console.log(anagram('east'));