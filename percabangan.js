const prompt = require('prompt-sync')({ signit: true})

const password = prompt('Enter pasword: ');
const validPassword = 'password'

if (password == validPassword) {
    //jika benar
    console.log("Selamat datang!");
}

else {
    //jika salah
    console.log("password salah, coba lagi")
}

console.log("terima kasih sduah menggunakan apliaksi");