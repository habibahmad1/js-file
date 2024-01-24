// ambil data
// $.ajax({
//   url: "https:/www.omdbapi.com/?apikey=dca61bcc&s=avengers",
//   success: (movies) => console.log(movies),
// });

// Fetch
// fetch("https:/www.omdbapi.com/?apikey=dca61bcc&s=avengers")
//   .then((contoh) => contoh.json())
//   .then((contoh) => console.log(contoh));

// Promise
// object yang merepsentasikan keberhasilan / kegagalan dari sebuah event yang asynchronus dimasa yang akan datang
// Janji terpenuhi / ingkar
// state (fullfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// let ditepati = true;

// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("Janji ditepati");
//   } else {
//     reject("Ingkar janji");
//   }
// });

// janji1.then((a) => console.log("OK : " + a)).catch((a) => console.log("Not OK : " + a));
let ditepati = this;
const janji2 = new Promise((resolve, reject) => {
  if (ditepati) {
    setTimeout(() => {
      resolve("Ditepati setelah beberapa hari");
    }, 2000);
  } else {
    setTimeout(() => {
      reject("Tidak ditepati setelah beberapa hari");
    }, 2000);
  }
});

console.log("mulai");
janji2
  .finally(() => console.log("selesai menunggu"))
  .then((a) => console.log("OK : " + a))
  .catch((b) => console.log("Not OK : " + b));
console.log(janji2);
console.log("selesai");
