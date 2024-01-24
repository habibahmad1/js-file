// Callback
function halo(nama) {
  alert(`Halo, ${nama}`);
}

function tampilPesan(bebas) {
  const nama = prompt("Masukkan Nama: ");
  bebas(nama);
}

tampilPesan(halo);
