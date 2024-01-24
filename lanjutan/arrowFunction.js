//Function Expression

// const contoh = function (nama) {
//   return `Halo ${nama}`;
// };

// console.log(contoh("Ahmad"));

// const contoh2 = (nama) => {
//   return `halo ${nama}`;
// };
// console.log(contoh2("ahmad"));

// let murid = ["sinta", "erico", "Rini aryanti"];

// let jumlahHuruf = murid.map(function (nama) {
//   return nama.length;
// });

// let jumlahHuruf = murid.map((nama) => ({ nama, jumlahHuruf: nama.length }));
// console.table(jumlahHuruf);

// konsep this pada arrow function

//constructor function
// const Mhs = function () {
//   this.nama = "habib";
//   this.umur = 23;

//   this.salam = function () {
//     console.log(`Welcome nama ku ${this.nama}, umur ${this.umur}`);
//   };
// };

// const cetak = new Mhs();

// arrow function
// const Mhs = function () {
//   this.nama = "habib";
//   this.umur = 23;

//   this.salam = () => {
//     console.log(`Welcome nama ku ${this.nama}, umur ${this.umur}`);
//   };
// };

// const cetak = new Mhs();

// //object literal
// let mhs1 = {
//   nama: "habib",
//   umur: 23,
//   salam: () => {
//     console.log(`halo nama saya ${this.nama}, umur ${this.umur}`);
//   },
// };

// const Mhs = function () {
//   this.nama = "habib";
//   this.umur = 23;

//   this.salam = function () {
//     console.log(`Welcome nama ku ${this.nama}, umur ${this.umur}`);
//   };

//   setInterval(() => {
//     console.log(this.umur++);
//   }, 500);
// };

// const cetak = new Mhs();
const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle("size");
  setTimeout(() => {
    this.classList.toggle("caption");
  }, 600);
});
