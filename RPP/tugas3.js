let tinggi = 1.7 //dalam meter
let berat = 90   //dalam kg

var BMI = (berat / (tinggi**2) );

console.log ("Tinggi badan Rhodey           = 170 cm");
console.log ("Berat badan Rhodey            = 90 kg");
console.log ("======= STATUS BERAT BADAN RHODEY =======");

if (BMI < 18.5) {
      console.log ("Kekurangan berat badan");
}
else if (BMI <= 24.9) {
      console.log ("Norma (IDEAL)");
}
else if (BMI <= 29.9) {
      console.log ("kelebihan berat badan");
}
else {
      console.log ("Kegemukan (OBESITAS)");
}