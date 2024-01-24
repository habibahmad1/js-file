// function a() {
//   //   let nama = "Kurumi";

//   return function b(nama) {
//     console.log(nama);
//   };
// }
// let cetak = a();
// cetak("Subaru");
// cetak("rem");

// function salam(waktu) {
//   return function (nama) {
//     console.log(`Welcome Master ${nama}, Selamat ${waktu}`);
//   };
// }

// let pagi = salam("Pagi");
// let siang = salam("Siang");
// let malam = salam("Malam");

// pagi("Ahmad");

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();
counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
