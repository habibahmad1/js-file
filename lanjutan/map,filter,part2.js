//ambil semua element video
const videos = Array.from(document.querySelectorAll("[data-duration]"));

//pilih hanya yg javascript lanjutan
let jslanjut = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))

  //ambil durasi masing2 video
  .map((item) => item.dataset.duration)

  //ubah durasi jadi float, ubah menit jadi detik
  .map((waktu) => {
    // 10:30 -> [10,30] split
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  //jumlahkan semua detik
  .reduce((total, detik) => total + detik, 0);
//ubah format jadi jam menit detik
const jam = Math.floor(jslanjut / 3600);
jslanjut = jslanjut - jam * 3600;

const menit = Math.floor(jslanjut / 60);
const detik = jslanjut - menit * 60;
//simpan di DOM
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} Jam, ${menit} menit, ${detik} detik`;
const jmlVideos = videos.filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN")).length;

const pVideos = document.querySelector(".jumlah-video");
pVideos.textContent = `${jmlVideos} Video`;
