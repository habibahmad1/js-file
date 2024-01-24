//Destructuring

// function menghitung(a, b) {
//   return [a + b, a * b, a - b];
// }

// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);

// const [tambah, kali, kurang, bagi = "kosong ya"] = menghitung(2, 3);

// console.log(bagi);

// agar tidak terpengaruh dengan urutan di array

// function menghitung(a, b) {
//   return {
//     tambah: a + b,
//     kali: a * b,
//     kurang: a - b,
//   };
// }

// const { kali, tambah, kurang } = menghitung(3, 3);
// console.log(kali);

//Destructuring function arguments
// const player = {
//   nama: "Kurukuru",
//   level: 50,
//   rank: "C",
//   skill: {
//     mage: "Fire Ball",
//     sword: "Slash",
//     support: "Heal",
//   },
// };

// function tampilPlayer({ nama, level, rank, skill: { mage, sword, support } }) {
//   return `Welcome, nama game kamu adalah ${nama}, level ${level}, dan Rank kamu adalah ${rank}. Berikut skill yang telah kamu pelajari: Mage : ${mage}, Sword: ${sword}, Support: ${support}`;
// }

// console.log(tampilPlayer(player));

function createPlayer(nama, level, rank, mageSkill, swordSkill, supportSkill) {
  return {
    nama,
    level,
    rank,
    skill: {
      mage: mageSkill,
      sword: swordSkill,
      support: supportSkill,
    },
  };
}

function tampilPlayer(player) {
  console.log(`Welcome, nama game kamu adalah ${player.nama}, level ${player.level}, dan Rank kamu adalah ${player.rank}. Berikut skill yang telah kamu pelajari: 
        Mage: ${player.skill.mage},
        Sword: ${player.skill.sword},
        Support: ${player.skill.support}`);
  console.log("--------------------------------------------------");
}

// Contoh penggunaan:
const player1 = createPlayer("Kurukuru", 50, "C", "Fire Ball", "Slash", "Heal");
const player2 = createPlayer("Gigigi", 45, "B", "Ice Beam", "Cleave", "Buff");
const player3 = createPlayer("Destroy", 100, "S", "Ice Beam", "Cleave", "Buff");

tampilPlayer(player1);
tampilPlayer(player2);
tampilPlayer(player3);
