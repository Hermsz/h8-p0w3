
/*

Logic Challenge - Tentukan Deret Aritmatika

Problem
Diberikan sebuah function tentukanDeretAritmatika(arr) yang menerima satu parameter berupa array yang terdiri dari angka. 
Function tersebut akan mengembalikan true jika array dari parameter tersebut merupakan deret aritmatika. 
Deret aritmatika adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten. 
Contoh, [2, 4, 6, 8] adalah deret aritmatika dengan pertambahan nilai sebesar 2, dan [2, 4, 6, 9] bukanlah 
deret aritmatika karena tidak perbedaan selisih antar angka yang tidak konsisten.

Code
function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false

*/

function tentukanDeretAritmatika(arr) {

    var hasil = true
    var arrTemp = [] // ini adalah array kosong penampung looping for pertama dibawah
    for( var i = 0; i < arr.length - 1; i++) { 
      arrTemp.push(arr[i + 1] - arr[i]) // ini adalah hasil perbedaan antara 2 index dan di push ke dalam array agar kita tau perbedaan antara 2 value index tersebut
    }
  
    for( var j = 1; j <= arrTemp.length - 1; j++) { //j nya dimulai dari 1 karena di If di bawah udah mulai dari 0
      if( arrTemp[0] === arrTemp[j]) { //lanjuatan comment atas : karena perbedaan nya kalo sama dengan index 0 berarti bener
        hasil = true
      } else {
        hasil = false
      }
    }
    return hasil
}

console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false