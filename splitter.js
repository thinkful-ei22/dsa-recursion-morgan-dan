'use strict';

// input: apple, '';
// output: ['a', 'p', 'p', 'l', 'e'];

function split(str, splitter, currentString = '') {
  if (!str && currentString.length === 0) return [];
  if (str.length === 0 && currentString) {
    return [currentString];
  }
  if (str[0] === splitter) {
    return [currentString, ...split(str.slice(1), splitter, '')];
  } else {
    currentString += str[0];
    return [...split(str.slice(1), splitter, currentString)];
  }
}

// function split(str, splitter, currentString = ''){

//   let arr=[];
//   if(!str && splitter.length===0) {
//     return [];
//   }
//   if(!str){
//     return [currentString]; 
//   }

//   if (splitter.length===0) {
//     if(str[0]!==splitter) currentString+=str[0];
//     else {
//       arr.push(currentString);
//     }
//     return [currentString, ...split(str.slice(1), splitter)];
//   } else {
//     if (str[0] !== splitter) currentString += str[0];
//     else {
//       arr.push(currentString);
//       return [currentString, ...split(str.slice(1), splitter, '')]
//     }
//     return [...split(str.slice(1), splitter, currentString)];
//   }

// }
console.log(split('apple', 'le'));