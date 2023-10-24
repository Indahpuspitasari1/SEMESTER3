let pendapatan = 600000;
let uangJasa = 0;
let persentaseKomisi = 0;

if (pendapatan <= 200000) {
  uangJasa = 10000;
  persentaseKomisi = 0.1;
} else if (pendapatan > 200000 && pendapatan <= 500000) {
  uangJasa = 20000;
  persentaseKomisi = 0.15;
} else if (pendapatan > 500000) {
  uangJasa = 30000;
  persentaseKomisi = 0.2;
}

let komisi = pendapatan * persentaseKomisi;
let totalUang = uangJasa + komisi;

console.log(`Pendapatan: Rp. ${pendapatan}`);
console.log(`Uang jasa: Rp. ${uangJasa}`);
console.log(`Persentase komisi: ${persentaseKomisi * 100}%`);
console.log(`Komisi: Rp. ${komisi}`);
console.log(`Total uang: Rp. ${totalUang}`);
