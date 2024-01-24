// // Rest Parameter
// function petualang(...nilai) {
//   //   let total = 0;
//   //   for (t of nilai) {
//   //     total += t;
//   //   }
//   //   return total;
//   return nilai.reduce((t, n) => t + n);
// }
// console.log(petualang(1, 2, 3));

// Array Destructuring
// const party = ["roni", "rini", "deni"];
// const [kp, ...anggota] = party;
// console.log(anggota);

// Object Destructuring
const petualang = {
  leader: "Rini",
  healer: "Dini",
  tank: "Doni",
  support: "Rere",
};

const { leader, ...anggota } = petualang;
console.log(anggota);
