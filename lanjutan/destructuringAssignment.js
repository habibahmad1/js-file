const test = [1, 2, 3];

// const [a, b, c] = test;

//di skip
// const [a, , c] = test;
// console.log(c);

//swap item array
// let a = 1;
// let b = 2;

// [a, b] = [b, a];
// console.log(b);

// return value dari function
// function coba() {
//   return [1, 2];
// }
// const [a, b] = coba();
// console.log(a);

//Rest Parameter
// const [a, ...value] = [1, 2, 3, 4, 5, 6];

// console.log(a);
// console.log(value);

//Distructuring Object
// const mhs = {
//   nama: "Habib Ahmad",
//   hobi: "Coding",
// };

// const { nama, hobi } = mhs;
// console.log(nama);

//Assignment tanpa deklarasi object

// ({ nama, hobi } = {
//   nama: "Habib Ahmad",
//   hobi: "Coding",
// });
// console.log(nama);

//Assignment ke variabel baru
// const mhs = {
//   nama: "Habib Ahmad",
//   hobi: "Coding",
// };

// const { nama: n, hobi: h } = mhs;
// console.log(h);

//Memberikan default value
// const mhs = {
//   nama: "Habib Ahmad",
//   hobi: "Coding",
//   kelas: "IPA",
// };

// const { nama, hobi, kelas = `TKJ` } = mhs;
// console.log(kelas);

//mengambil field id
const mhs = {
  id: 1,
  nama: "Habib Ahmad",
  hobi: "Coding",
  kelas: "IPA",
};

function dapatID({ id }) {
  return id;
}
console.log(dapatID(mhs));
