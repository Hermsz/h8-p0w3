
/*

Logic Challenge - Mengelompokkan Hewan

Problem
Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string. 
Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya. 
Abjad harus berurut dari a-z (jika ada). 
Untuk kasus ini, anggap saja semua text lowercase.

Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]

maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

Urutan hewan dalam array setiap pengelompokan huruf tidak penting.

Code
function groupAnimals(animals) {
  // you can only write your code here!
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]

*/

function groupAnimals(animal) {
  var zoo = []

  for( var i = 0; i <= animal.length - 1; i++ ) {
      var temp = [] // temp di sini karena biar dia reset setelah dapat huruf hewan yang sama semua
      var cageExist = false // Boolean harus di dalam looping for kedua karena biar jadi reset lagi

      for( var j = 0; j <= zoo.length - 1; j++) {
          if( animal[i][0] === zoo[j][0][0]) { // 
              zoo[j].push(animal[i]) // push animal to array zoo
              cageExist = true // 
              
          }
      }

      if(cageExist === false ) {
          temp.push(animal[i])
          zoo.push(temp)
      }

  }
        //mengubah array tanpa menggunakan magic .sort
        var temporary = 0
        temporary = zoo[1]
        zoo[1] = zoo[0]
        zoo[0] = temporary
        
  return zoo
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil' ]));
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));