// var makhlukHidup = {
//   nama: "Kucing",
//   warna: "Putih",
//   kesukaan: "Makanan Kucing",
//   perkenalan: function () {
//     return "Halo, nama saya adalah " + this.nama + " warna buluku " + this.warna + " makanan favoritku yaitu " + this.kesukaan;
//   },
// };

// console.log(makhlukHidup.perkenalan());

//1.Object Literal
var mhs = {
  nama: "Habib Ahmad",
  umur: 23,
};

//function declaration
function objectMhs(nama, nis, jurusan) {
  var mhs = {};
  (mhs.nama = nama), (mhs.nis = nis), (mhs.jurusan = jurusan);
  return mhs;
}

var mhs3 = objectMhs("emilia", 12314, "Queen");
var mhs4 = objectMhs("subaru", 12314, "Friend");

//Constructor Object
function Mahasiswa(nama, nis, jurusan) {
  this.nama = nama;
  this.nis = nis;
  this.jurusan = jurusan;
}

var panggilMhs = new Mahasiswa("Megumin", 1231241, "Art");
