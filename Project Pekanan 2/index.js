// ========================================
// Student Data Processor
// Nama   : Rayyan Zamzami Kahfi
// Topik  : Data Manipulation
// ========================================

// 📦 DATA AWAL
const studentName = "  aHmAd fAuZaN  ";
const ageText = "17 tahun";
const scoreText = "85.678";
const registrationText = "21-08-2026";


// 🧩 PART 1 — 🧹 Clean the Name
// Mengubah semua jadi huruf kecil dan memecahnya jadi Array
const wordsArray = studentName.trim().toLowerCase().split(" ");

// Mengkapitalisasi huruf pertama pada tiap kata
const firstName = wordsArray[0][0].toUpperCase() + wordsArray[0].slice(1);
const lastName = wordsArray[1][0].toUpperCase() + wordsArray[1].slice(1);

// Menggabungkan kembali jadi String
const cleanName = [firstName, lastName].join(" ");
const username = wordsArray.join("."); 


// 🧩 PART 2 — 🔍 Analyze the Name
const containsAhmad = cleanName.includes("Ahmad");
const first5Chars = cleanName.slice(0, 5);
const replacementName = cleanName.replace("Ahmad", "Budi");


// 🧩 PART 3 — 🎂 Process the Age
const age = parseInt(ageText);
const currentYear = new Date().getFullYear();
const birthYear = currentYear - age; // ⭐ Bonus: Birth Year


// 🧩 PART 4 — 📊 Process the Score
const score = parseFloat(scoreText);
const formattedScore = score.toFixed(2);
const roundScore = Math.round(score);
const floorScore = Math.floor(score);
const ceilScore = Math.ceil(score);


// 🧩 PART 5 — 🏆 Determine the Grade
let grade;
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "E";
}


// 🧩 PART 6 — 📅 Process Registration Date
const regArray = registrationText.split("-");
const regDay = Number(regArray[0]);
const regMonth = Number(regArray[1]);
const regYear = Number(regArray[2]);


// 🧩 PART 7 — ⏰ Current Date & Time
const now = new Date();
const nowYear = now.getFullYear();
const nowMonth = now.getMonth(); 
const nowDate = now.getDate();
const nowDay = now.getDay();

// Menambahkan angka 0 di depan jika jam/menit di bawah 10
const hours = String(now.getHours()).padStart(2, "0");
const minutes = String(now.getMinutes()).padStart(2, "0");


// 🧩 PART 8 — 📅 Create Date Formatter
function formatDate(date) {
    const d = String(date.getDate()).padStart(2, "0");
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const y = date.getFullYear();
    
    return `${d}/${m}/${y}`;
}


// 🧩 PART 9 — 🎲 Lucky Dice
const dice = Math.floor(Math.random() * 6) + 1;
let diceResult;

if (dice === 6) {
    diceResult = "🔥 JACKPOT!";
} else if (dice === 1) {
    diceResult = "💀 BAD LUCK!";
} else {
    diceResult = "😎 GOOD LUCK!";
}


// ⭐ BONUS KREATIVITAS 
// Membuat Object berisi data hitung huruf dan status (Materi wajib Object)
const bonus = {
    nameLength: cleanName.length,
    status: score >= 75 ? "✅ LULUS" : "❌ BELUM LULUS"
};


// 🧩 PART 10 — 🖥️ FINAL REPORT
console.log(`
╔════════════════════════════════════╗
║      🎓 STUDENT DATA PROCESSOR     ║
╚════════════════════════════════════╝

👤 STUDENT
────────────────────────────────────
Original Name : "${studentName}"
Clean Name    : ${cleanName}
Username      : ${username}

🔎 NAME ANALYSIS
────────────────────────────────────
Contains Ahmad : ${containsAhmad}
First 5 chars  : ${first5Chars}
Replacement    : ${replacementName}

🎂 AGE
────────────────────────────────────
Age Text       : ${ageText}
Age            : ${age}
Birth Year     : ${birthYear}

📊 SCORE
────────────────────────────────────
Original Score : ${scoreText}
Formatted      : ${formattedScore}
Round          : ${roundScore}
Floor          : ${floorScore}
Ceil           : ${ceilScore}
Grade          : ${grade}
Status         : ${bonus.status}

📅 REGISTRATION
────────────────────────────────────
Date           : ${regDay}/${String(regMonth).padStart(2, "0")}/${regYear}

🕐 REPORT GENERATED
────────────────────────────────────
Date           : ${formatDate(now)}
Time           : ${hours}:${minutes}

🎲 LUCKY DICE
────────────────────────────────────
Dice           : ${dice}
Result         : ${diceResult}

╔════════════════════════════════════╗
║       🚀 PROCESS COMPLETE!         ║
╚════════════════════════════════════╝
`);