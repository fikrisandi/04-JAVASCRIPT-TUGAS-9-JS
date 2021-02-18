function objek() {
    var orang = {
        nama: "Samueldim",
        kelamin: "Laki-Laki",
        CitaCita: "Dokter"
    }

    for (var x in orang) {
        console.log(x, ":", orang[x]);
    }
}

objek();