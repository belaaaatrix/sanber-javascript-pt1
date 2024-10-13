const prompt = require('prompt-sync')({ signit: true});

//input data first number -> const (var) num 1
const num1 = prompt('Enter a first number: ');
//input data second number -> const (var) num 2
const num2 = prompt('Enter a second number: ');

//print informasi
console.log('first number + second number =');

//perhitungan pernjumlahan
//convert ke number/int/float untuk melakukan penjumlahan angka
console.log(Number(num1) + Number(num2));