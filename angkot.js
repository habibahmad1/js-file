//array penumpang
var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  //Jika penumpang kosong
  if (penumpang.length == 0) {
    //tambah penumpang
    penumpang.push(namaPenumpang);
    //kembalikan nilai array dan keluar dari function
    return penumpang;
  } else {
    //telusuri seluruh kursi
    for (var i = 0; i < penumpang.length; i++) {
      //jika ad kursi kosong
      if (penumpang[i] == undefined) {
        //tambah penumpang di kursi itu
        penumpang[i] = namaPenumpang;
        //kembalikan nilai dan keluar function
        return penumpang;
      } //cek kalau ada nama kembar
      else if (penumpang[i] == namaPenumpang) {
        //pesan kalau nama sama
        console.log(namaPenumpang + " sudah ada di dalam angkot");
        //kembalikan nilai
        return penumpang;
      } else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  //jika angkot kosong tampilkan pesan
  if (penumpang.length == 0) {
    console.log("Angkot masih kosong!");
    //kembalikan nilai untuk di cetak
  } else {
    //telusuri angkot
    for (var j = 0; j < penumpang.length; j++) {
      //cek apakah nama penumpang sama
      if (penumpang[j] == namaPenumpang) {
        penumpang[j] = undefined;
        return penumpang;
      } else if (j == penumpang.length - 1) {
        console.log(namaPenumpang + " tidak ada di dalam angkot");
        return penumpang;
      }
    }
  }
  return penumpang;
};
