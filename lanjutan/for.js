// for of
// const player = ["Kurukuru", "Destroy", "Mega"];

// for (let i = 0; i < player.length; i++) {
//   console.log(player[i]);
// }

// foreach
// player.forEach((p) => console.log(p));

// for of
// for (const p of player) {
//   console.log(p);
// }

// String Loop
// const nama = "Demian";

// for (const n of nama) {
//   console.log(n);
// }

const player = ["Kurukuru", "Destroy", "Mega"];
// player.forEach((p, i) => {
//   console.log(`${p} adalah player ke-${1 + i}`);
// });

// for (const [i, p] of player.entries()) {
//   console.log(`${p} adalah player ke-${1 + i}`);
// }

//Nodelist
const ambilNama = document.querySelectorAll(".nama");
// console.log(ambilNama);

// ambilNama.forEach((n) => console.log(n.textContent));

// for (n of ambilNama) {
//   console.log(n.textContent);
// }

// Arguments
// function menghitung() {
//   let contoh = 0;

//   for (a of arguments) {
//     contoh += a;
//   }
//   return contoh;
// }

// console.log(menghitung(1, 2, 3));

// for in
const players = {
  nama: "Kuru",
  job: "Healer",
};

for (p in players) {
  console.log(players[p]);
}
