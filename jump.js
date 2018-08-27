'use strict';
// Input: 3
// Output:
// 3 - Another sheep jump over the fence
// 2 - Another sheep jump over the fence
// 1 - Another sheep jump over the fence

function jump(n){
  if(n===0) return;
  console.log(`${n} - Another sheep jump over the fence`);
  jump(n-1);
}

jump(3);