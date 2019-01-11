/*
Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. 
Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n. 
Contoh input dapat dilihat dibawah:
*/



function dataHandling(string) {
    for(var i = 0; i <= string.length - 1; i++) {
        console.log("Nomor ID: " + string[i][0]);
        console.log("Nama Lengkap: " + string[i][1]);
        console.log("TTL: " + string[i][2] + " " + string[i][3]);
        console.log("Hobi: " + string[i][4]);
        console.log()
    }
}
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
dataHandling(input)
