let barang = [
      { nama: "Rinsoo", harga: 5000 },
      { nama: "Moonlight", harga: 4000}
]

console.log("Isi array barang");
console.log(barang);
console.log("Jumlah data = " + barang.length);

console.log("------------------");

barang.push(
      { nama: "Molto", harga: 1000 }
)

console.log("Isi array barang saat ini");
console.log(barang);
console.log("Jumlah data saat ini = " + barang.length);
