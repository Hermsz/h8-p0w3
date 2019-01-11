/*

Logic Challenge - Number Palindrome

Problem
Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. 
Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. 
Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. 
Jika angka dari awal sudah merupakan palindrome, 
maka function harus mencari angka selanjutnya yang palindrome. 
Contoh, jika angka adalah 8, walaupun dia sudah palindrome, 
harus mencari angka selanjutnya yang palindrome, yaitu 9.

Code
function angkaPalindrome(num) {
  // you can only write your code here!
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

*/

function angkaPalindrome(angka) {

  var check = true
  while (check) {
    var strAngka = String(angka)
    var reverseStrAngka = ""
      for ( var i = strAngka.length - 1; i >= 0; i-- ) {
      reverseStrAngka += strAngka[i]
    }

    var reverseNumber = Number(reverseStrAngka)
      if( angka < 9) {
        check = false
        angka += 1
      } else if ( reverseNumber === angka ) {
        check = false
      } else {
         angka += 1
        }
  }
  return angka
}

console.log(angkaPalindrome(7))
console.log(angkaPalindrome(10))
console.log(angkaPalindrome(117))
console.log(angkaPalindrome(175))
console.log(angkaPalindrome(1000))
