//player memilih
var lagi = true;
while (lagi) {
  var p = prompt("Pilih: Gunting, Kertas, Batu");

  //komputer memilih
  var c = Math.random();

  if (c < 0.34) {
    c = "gunting";
  } else if (c > 0.34 && c < 0.67) {
    c = "batu";
  } else {
    c = "kertas";
  }

  //rules
  var hasil = "";
  if (p == c) {
    hasil = "SERI";
  } else if (p == "gunting") {
    //   if ((c = "Kertas")) {
    //     hasil = "Menang";
    //   } else {
    //     hasil = "Kalah";
    //   }
    hasil = c == "kertas" ? "Menang" : "Kalah";
  } else if (p == "kertas") {
    hasil = c == "batu" ? "Menang" : "Kalah";
  } else if (p == "batu") {
    hasil = c == "gunting" ? "Menang" : "Kalah";
  } else {
    hasil = "memasukan pilihan yang salah";
  }
  //Hasil
  alert("Kamu memilih " + p + " dan Komputer memilih " + c + " Hasilnya adalah " + hasil);

  lagi = confirm("Lagi?");
}

alert("Thanks sudah main");
