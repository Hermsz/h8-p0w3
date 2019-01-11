/*
Buatlah sebuah fungsi dengan nama balikString. 
Fungsi ini akan menerima argumen sebuah 
string dan mengembalikan kebalikannya.

//input "hello world!"
//output
"!dlrow olleh"

*/

function balikString (str) {
    var sentence = []
    for( var i = str.length - 1; i >= 0; i--) {
        sentence += str[i]
    } 
    return sentence
}

console.log(balikString("hello world!"))