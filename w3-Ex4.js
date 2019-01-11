
/*

    //contoh output
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"] 

Buatlah sebuah function dengan nama dataHandling2 yang akan menerima input array seperti di atas.

A.  Gunakan fungsi splice untuk memodifikasi variabel tersebut agar menjadi seperti array dibawah. 
    Lalu console.log array yang baru seperti di bawah.

    ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]

B.  Berdasarkan elemen yang berisikan tanggal/bulan/tahun (elemen ke-4), ambil angka bulan dan console.log nama bulan sesuai dengan angka tersebut.

    - Gunakan split untuk memisahkan antara tanggal, bulan, dan tahun.
    - Format tanggal pada data adalah dd-mm-YYYY
    - Misal angka bulan 01, tuliskan "Januari"
    - Gunakan switch case untuk menuliskan bulan di atas.

C.  Pada array hasil split dari tanggal/bulan/tahun, lakukan sorting secara descending dan console.log array yang sudah di-sort.

D.  Masih pada array hasil split dari elemen tanggal/bulan/tahun, gabungkan semua elemen menggunakan join dan pisahkan dengan karakter strip (-) lalu console.log hasilnya.

E.  Nama (elemen ke-2), harus dibatasi sebanyak 15 karakter saja. Gunakan slice untuk menghapus kelebihan karakter dan 
    console.log nama yang sudah di-slice, sebelum di-slice pastikan Nama (elemen ke-2) sudah dalam bentuk String agar bisa di-slice.

Test -
*/

var string = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

//A. fungsi splice

function dataHandling2(string) {
    string.splice(1,1, "Roman Alamsyah Elsharawy")
    string.splice(2,1,"Provinsi Bandar Lampung")
    string.splice(4,1,"Pria","SMA Internasional Metro")
    console.log(string)
}

dataHandling2(string)

//B. fungsi split tanggal

var hasil = string[3].split("/")
console.log(hasil)
var bulan = hasil[1]
switch(bulan) {
    case "01": {console.log("Januari"); break;}
    case "02": {console.log("Februari"); break;}
    case "03": {console.log("Maret"); break;}
    case "04": {console.log("April"); break;}
    case "05": {console.log("Mei"); break;}
    case "06": {console.log("Juni"); break;}
    case "07": {console.log("Juli"); break;}
    case "08": {console.log("Agustus"); break;}
    case "09": {console.log("September"); break;}
    case "10": {console.log("October"); break;}
    case "11": {console.log("November"); break;}
    case "12": {console.log("Desember"); break;}
}

//C. Descending

hasil.sort(function(a,b){return b - a});
console.log(hasil);


//D. Join
hasil = string[3].split("/")
console.log(hasil.join(" - "))

//E. Nama elemen ke2

var irisan = string[1].slice(0, 15)
console.log(irisan)

//F. Bandingin

-10 === true
-7 === false
console.log(-10 === true)
console.log(-7 === false)