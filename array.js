// var arr = [];

// arr[0] = "Angka 1";
// arr[1] = "Angka 2";
// arr[2] = "Angka 3";
// arr[3] = "Angka 4";

// console.log(arr);

//Hapus isi Array
// var test = ["test1", "test2", "test3"];

// test[0] = undefined;

// console.log(test);

//Tampilkan isi Array
// var test = ["test1", "test2", "test3", "test4"];

// for (var i = 0; i < test.length; i++) {
//   console.log("percobaan ke -" + (i + 1) + test[i]);
// }

//push array
// var a = [1, 2, 3, 4, 5];

//menambah array
// console.log(a.push(6));

// //menghapus array terakhir
// console.log(a.shift());

//splice (indexAwal,yg mau dihapus, tambahkan data)
// console.log(a.splice(1, 3, "Halo", true));

// //slice ()
// console.log(a.slice(1, 3));

//filter
var a = [1, 8, 3, 2, 4, 5];
var angka = a.find(function (x) {
  return x > 2;
});
console.log(angka);
