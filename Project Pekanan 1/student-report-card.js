const students = [
    {
        name: "Azuka Yuuka",
        className: "XI",
        scores: [93, 96, 100],
        attendance: 95,
        hasViolation: false
    },
    // tambahkan siswa lainnya
    {
        name: "Fulan",
        className: "XI",
        scores: [45, 50, 65],
        attendance: 85,
        hasViolation: true
    },
    {
        name: "John Doe",
        className: "XI",
        scores: [85, 90, 88],
        attendance: 85,
        hasViolation: true
    }
];

const reportDate = new Date();
console.log("========================================");
console.log("🎓 HSI STUDENT REPORT CARD 🎓");
// Menggunakan toDateString() agar format tanggalnya rapi (misal: Mon Aug 14 2026)
console.log(`📅 Tanggal : ${reportDate.toDateString()}`);
console.log("========================================\n");
for (let urutan = 0; urutan < students.length; urutan++) {
    const student = students[urutan];
    console.log(`📊 Data Siswa ${urutan + 1}:`);
    console.log(`Nama Siswa : ${student.name}`);
    console.log(`Kelas      : ${student.className}`);
let totalScore = 0; 

    // 2. Buat mesin loop baru untuk membuka laci nilai (scores) satu per satu
    // Kita pakai huruf 'j' supaya tidak bentrok dengan 'urutan'
    for (let j = 0; j < student.scores.length; j++) {
        // Ambil nilai ke-j, lalu masukkan/tambahkan ke keranjang totalScore
        totalScore = totalScore + student.scores[j]; 
    }

    // 3. Hitung rata-rata (Total dibagi jumlah mata pelajaran)
    let averageScore = totalScore / student.scores.length;

    // Tampilkan hasilnya
    console.log(`Nilai      : ${student.scores}`);
    console.log(`Total      : ${totalScore}`);
    console.log(`Rata-rata  : ${averageScore}`);
    console.log("----------------------------------------");

    // 5. MENENTUKAN GRADE (Berdasarkan rata-rata)
    let grade = "";
    
    if (averageScore >= 90 && averageScore <= 100) {
        grade = "A";
    } else if (averageScore >= 80 && averageScore < 90) {
        grade = "B";
    } else if (averageScore >= 70 && averageScore < 80) {
        grade = "C";
    } else {
        grade = "D"; // Kalau rata-ratanya di bawah 70
    }
    
    console.log(`Grade      : ${grade}`);
    console.log(`Kehadiran  : ${student.attendance}%`);
    
    // Trik kecil: mengubah boolean (true/false) jadi teks (Ya/Tidak) pakai ternary operator
    let pelanggaranText = student.hasViolation === true ? "Ya" : "Tidak";
    console.log(`Pelanggaran: ${pelanggaranText}`);

    // 6. MENENTUKAN STATUS KELULUSAN
    let status = "";
    
    // Syarat Lulus: Rata-rata >= 75 DAN Absen >= 80 DAN Tidak ada pelanggaran (false)
    if (averageScore >= 75 && student.attendance >= 80 && student.hasViolation === false) {
        status = "LULUS ✅";
    } else {
        status = "BELUM LULUS ❌";
    }
    
    console.log(`Status     : ${status}`);
    console.log("----------------------------------------\n"); // Garis pembatas antar siswa
}



    
