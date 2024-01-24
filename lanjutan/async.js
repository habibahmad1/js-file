// const janji = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("selesai");
//   }, 2000);
// });
// console.log(janji);

// janji.then(() => console.log(janji));

function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 5000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve("selesai");
      }, waktu);
    } else {
      reject("waktu sudah habis");
    }
  });
}

// const mulai = cobaPromise();
// mulai.then(() => console.log(mulai)).catch(() => console.log(mulai));

async function cobaAsync() {
  try {
    const jalan = await cobaPromise();
    console.log(jalan);
  } catch (errorKode) {
    console.error(errorKode);
  }
}

cobaAsync();
