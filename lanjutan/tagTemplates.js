// Tagged templates
// const nama = "Masashi Kisamoto";
// const umur = 55;

// function ambilData(string, ...value) {
//   //   let strDalem = "";
//   //   string.forEach((str, index) => {
//   //     strDalem += `${str} ${value[index] || ""}`;
//   //   });
//   //   return strDalem;

//   return string.reduce((strDalem, str, index) => `${strDalem} ${str} ${value[index] || ""}`, "");
// }

// const str = ambilData`Hello, My name is ${nama}, ${umur} old year.`;
// console.log(str);
// // document.body.innerHTML = str;

//HIghlight
const nama = "Masashi Kisamoto";
const umur = 55;
const email = "habibahmad2597@gmail.com";

function highlight(string, ...value) {
  return string.reduce((strDalem, str, index) => `${strDalem} ${str} <span class= "hl"> ${value[index] || ""} </span>`, "");
}

const str = highlight`Hello, My name is ${nama}, ${umur} old year, and my email ${email}`;
console.log(str);
document.body.innerHTML = str;
