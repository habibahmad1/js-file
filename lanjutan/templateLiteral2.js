// html fragments
// const mhs = {
//   nama: "Habib Ahmad",
//   nik: 323123,
//   hobi: "Coding",
// };

// const elements = `<div class="mhs">
//     <h2>Nama : ${mhs.nama}</h2>
//     <span class='nik'>NIK : ${mhs.nik}</span>
//     <p>Hobi : ${mhs.hobi}</p>
// </div>`;

// 2. looping
// const mhs = [
//   {
//     nama: "Habib Ahmad",
//     hobi: "Coding",
//   },
//   {
//     nama: "Lelly fajriani",
//     hobi: "Membaca",
//   },
//   {
//     nama: "Doni kurniawan",
//     hobi: "Music",
//   },
// ];

// const elements = `<div class="orang">
//     ${mhs
//       .map(
//         (m) => `<ul>
//         <h2><li>${m.nama}</li></h2>
//         <h2><li>${m.hobi}</li></h2>
//         <br>
//     </ul>`
//       )
//       .join("")}
// </div>`;

// 3. conditional
// Ternary

// const lagu = {
//   judul: "tetap dalam jiwa",
//   artist: "Isyana Saraswati",
//   feat: "Deni",
// };

// const elements = `<div class="lagu">
//     <ul>
//         <li>${lagu.judul}</li>
//         <li>${lagu.artist} ${lagu.feat ? `(feat : ${lagu.feat})` : ""}</li>
//     </ul>
// </div>`;

// 4.Nested
const mhs = {
  nama: "habib ahmad",
  hobi: "Coding",
  skill: ["3D", "Javascript", "PHP", "Laravel", "Codeigniter"],
};

function tampilSkill(skill) {
  return `
     <ol>
        ${skill.map((a) => `<li>${a}</li>`).join("")}
     </ol>
     `;
}

const elements = `<div class="mhs">
    <h2>Name: ${mhs.nama}</h2>
    <span>Hobi: ${mhs.hobi}</span>
    <h4>Skill :</h4>
    ${tampilSkill(mhs.skill)}
</div>`;

document.body.innerHTML = elements;
