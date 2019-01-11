
/*
Logic Challenge - Pasangan Angka Terbesar

Problem
Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka. Functiona akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut. Contoh, jika angka adalah 183928, maka function akan me-return 92, pasangan dua digit angka yang paling besar diantara yang lainnya.

Code
function pasanganTerbesar(num) {
  // you can only write your code here!
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

*/


function pasanganTerbesar(angka) {
  var stringNum = String(angka)
  var arr = []
  for( var i = 0; i < stringNum.length - 1; i++) {
    var maxNumber = stringNum[i] + stringNum[(i+1)]
    arr.push(Number(maxNumber))
  } 
  var max = arr[0]
  for( var j = 1; j <= arr.length - 1; j++) { 
    if( max < arr[j] ) {
      max = arr[j]
    }
  }
  return max
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99