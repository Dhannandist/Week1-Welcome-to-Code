// Soal 1

let nama = "";
let peran = "";

// Pengecekan kondisi nama dan peran
if (nama === "") {
    console.log("Nama Wajib Diisi!"); 
} else if (peran === "") {
    console.log("Pilih Peranmu untuk memulai game");
} else {
    // Pengecekan Peran
    if (peran === "Ksatria") {
        console.log(`Halo Ksatria ${nama}, Kamu dapat menyerang dengan senjatamu!`);
    } else if (peran === "Tabib") {
        console.log(`Halo Tabib ${nama}, Kamu akan membantu temanmu yang terluka`);
    } else if (peran === "Penyihir") {
        console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
    } else {
        console.log("Tapi kayaknya kamu jadi bot aja ya, Peran yang kamu pilih ga ada")
    }
}

