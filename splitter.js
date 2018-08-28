'use strict';

// input: apple, '';
// output: ['a', 'p', 'p', 'l', 'e'];

// function split(str, splitter, currentString = '') {
//   if (!str && currentString.length === 0) return [];
//   if (str.length === 0 && currentString) {
//     return [currentString];
//   }
//   if (str[0] === splitter) {
//     return [currentString, ...split(str.slice(1), splitter, '')];
//   } else {
//     currentString += str[0];
//     return [...split(str.slice(1), splitter, currentString)];
//   }
// }






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



//This solution allows splitters where length is greater than 1
function split(str, splitter, currentString = '') {
  const splitterLength = splitter.length;

  if (!str && currentString.length === 0) return [];
  if (str.length === 0 && currentString) {
    return [currentString];
  }


  if (splitter === ''){ //trivial case where splitter is empty string
    currentString += str[0];
    return [currentString, ...split(str.slice(1), splitter, '')];
  }


  if (str.slice(0, splitterLength) === splitter) {  //if splitter matches characters
    if(currentString){
      return [currentString, ...split(str.slice(splitterLength, str.length), splitter, '')]; //if currentString is not empty
    } else {
      return [...split(str.slice(splitterLength, str.length), splitter, '')];  //if currentString is empty, don't put the empty string in our result
    }
  } else { //if splitter doesn't match characters
    currentString += str[0];
    return [...split(str.slice(1), splitter, currentString)];
  }
}

console.log(split('apple', ''));
console.log(split('apple', 'a'));
console.log(split('apple', 'p'));
console.log(split('apple', 'pp'));
console.log(split('apple', 'l'));
