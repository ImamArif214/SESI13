const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan nilai: ", function(nilai) {

    nilai = parseInt(nilai);

    console.log("Nilai:", nilai);

    if (nilai >= 80) {
        console.log("Grade: A");
    } else if (nilai >= 70) {
        console.log("Grade: B");
    } else if (nilai >= 60) {
        console.log("Grade: C");
    } else if (nilai >= 50) {
        console.log("Grade: D");
    } else {
        console.log("Grade: E");
    }

    rl.close();
});
