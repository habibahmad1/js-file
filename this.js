//Buat Object

//cara 1
// //menggunakan function declaration
// function halo() {
//   console.log("halo");
// }

// halo();

// //cara 2 = object literal
var obj = {};
obj.sapa = function () {
  console.log(this);
  console.log("halo");
};
obj.sapa();

//cara 3 - Constructor
// function Test() {
//   console.log("halo");
// }
// new Test();

//This
// var a = 20;
// console.log(this.a);
