//Contoh cara buat Object

//1. Object Literal

// let mahasiswa1 = {
//   nama: "Habib Ahmad",
//   stamina: 100,
//   darah: 1000,
//   makan: function (porsi) {
//     this.stamina = this.stamina + porsi;
//     console.log(`Stamina saat ini sebanyak ${this.stamina}`);
//   },
// };

// let mahasiswa2 = {
//   nama: "Rini",
//   stamina: 100,
//   darah: 1000,
//   makan: function (porsi) {
//     this.stamina = this.stamina + porsi;
//     console.log(`Stamina saat ini sebanyak ${this.stamina}`);
//   },
// };

//2. Function Ddeclaration

// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.stamina += porsi;
//     console.log(`Stamina saat ini ${this.stamina}`);
//   },

//   main: function (jam) {
//     this.stamina -= jam;
//     console.log(`Sisa stamina mu ${this.stamina}`);
//   },

//   tidur: function (jam) {
//     this.stamina += jam * 2;
//     console.log(`Stamina kamu saat ini ${this.stamina}`);
//   },
// };

//3. Object.create

// function Mahasiswa(nama, stamina) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.stamina = stamina;

//   return mahasiswa;
// }

// let orang1 = Mahasiswa("Nemunemu", 10);
// let orang2 = Mahasiswa("Tingyun", 20);

// function Mahasiswa(nama, stamina) {
//   this.nama = nama;
//   this.stamina = stamina;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.stamina += porsi;
//   return `Stamina saat ini ${this.stamina}`;
// };

// let orang1 = new Mahasiswa("orang1", 20);
// let orang2 = new Mahasiswa("orang2", 20);

//4. Constructor Function

// function Mahasiswa(nama, stamina) {
//   this.nama = nama;
//   this.stamina = stamina;

//   this.makan = function (porsi) {
//     this.stamina += porsi;
//     console.log(`Stamina saat ini ${this.stamina}`);
//   };

//   this.main = function (jam) {
//     this.stamina -= jam;
//     console.log(`Sisa stamina mu ${this.stamina}`);
//   };
// }

// let orang1 = new Mahasiswa("nemuru", 20);

//5.Object Class
class Mahasiswa {
  constructor(nama, stamina) {
    this.nama = nama;
    this.stamina = stamina;
  }

  makan(porsi) {
    this.stamina += porsi;
    console.log(`Stamina saat ini ${this.stamina}`);
  }

  main(jam) {
    this.stamina -= jam;
    console.log(`Sisa stamina mu ${this.stamina}`);
  }

  tidur(jam) {
    this.stamina += jam * 2;
    console.log(`Stamina kamu saat ini ${this.stamina}`);
  }
}

let orang1 = new Mahasiswa("orang1", 20);
