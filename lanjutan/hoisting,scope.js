var nama = "Habib Ahmad";
var username = "@habibahmad";

function cetakInsta() {
  console.log(arguments[0]);
  var urlInsta = "https//:instagram.com/";
  return urlInsta + username;
}

console.log(cetakInsta("Kurukuru"));

// function a() {
//   console.log("ini a");

//   function b() {
//     console.log("ini b");

//     function c() {
//       console.log("ini c");
//     }
//     c();
//   }
//   b();
// }
// a();
