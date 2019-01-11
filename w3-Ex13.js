
/*
Logic Challenge - Target Terdekat

Problem
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. 
Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. 
Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. 
Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.

Code
function targetTerdekat(arr) {
  // you can only write your code here!
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
*/

function targetTerdekat(arr) {

  var distanceXO = 0
  var sx = false
    for( i = 0; i <= arr.length - 1; i++) { 
      if(arr[i] === "x") {
        sx = true
      }
    }
  
    if(sx === false) {
      return 0
    }
  
  var firstVarO = 0 
  var forwardX = 0 
  var backwardX = 0

  for( var j = 0; j <= arr.length - 1; j++ ) { // Mencari Variable O pertama dalam Array dan STOP
    if( arr[j] === "o" ) {
      firstVarO += j
      break;
    }
  }

  for(var k = 0; k <= arr.length - 1; k++) { // Mencari Variable X pertama dalam Array dan STOP
    if( arr[k] === "x") {
      forwardX += k
      break;
    }
  }

  for(var l = arr.length - 1; l >= 0; l--) {
    if( arr[l] === "x" ) {
    backwardX += l
    break;
    }
  }

  if( forwardX === 0) {
    distanceXO = Math.abs( firstVarO - backwardX)
  } else {
    distanceXO = Math.abs(forwardX - firstVarO)
  }
return distanceXO
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
