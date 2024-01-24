const angka = [1, 5, 6, 3, 4, 2, -2, -3, -4, -5, -1, 0];

//cari angka lebih besar > 3
// const newAngka = [];
// for (let contoh = 0; contoh < angka.length; contoh++) {
//   if (angka[contoh] >= 3) {
//     newAngka.push(angka[contoh]);
//   }
// }
// console.log(newAngka.join());

//filter
// const newAngka = angka.filter((a) => a >= 3);
// console.log(newAngka.join());

//map
//semua isi dikalikan dengan 2
// const newAngka = angka.map((a) => a + 2);
// console.log(angka.join());
// console.log(newAngka.join());

//reduce
//menjumlahkan semua element pada array
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(newAngka);

//method chain
// 1.cari angka > 3
// 2.kalikan dengan 5
// 3.jumlahkan
const hasil = angka
  .filter((a) => a >= 3)
  //3,4,5,6
  .map((a) => a * 3)
  //9,12,15,18
  .reduce((a, b) => a + b);
//54

console.log(hasil);
