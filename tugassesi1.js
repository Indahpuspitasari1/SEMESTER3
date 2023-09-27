function hitungIMT(berat, tinggi) {
  tinggi /= 100;
  const imt = berat / (tinggi * tinggi);
  return imt;
}
const nama = "INDAH PUSPITASARI";
const nim = 20220040095;
const berat = 50;
const tinggi = 160;
const imt = hitungIMT(berat, tinggi);

console.log(`NAMA  : ${nama}`);
console.log(`NIM : ${nim}`);
console.log(`Berat Badan: ${berat} kg`);
console.log(`Tinggi Badan: ${tinggi} cm`);
console.log(`Indeks Masa Tumbuh (IMT): ${imt.toFixed(2)}`);
