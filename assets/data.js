/*
  DATA PORTOFOLIO
  - TEKS_EN       : terjemahan bahasa Inggris untuk teks di index.html (atribut data-i18n).
                    Teks bahasa Indonesia tetap ditulis langsung di index.html.
  - DOKUMENTASI   : isi galeri foto pengalaman & sertifikat. Bagian "en" = versi Inggris.
  - PROYEK        : isi jendela "Lihat detail" di bagian Proyek.
*/

const TEKS_EN = {
  "nav.label": "Main navigation",
  "nav.proyek": "Projects",
  "nav.pengalaman": "Experience",
  "nav.prestasi": "Achievements",
  "nav.sertifikasi": "Certifications",
  "nav.keahlian": "Skills",
  "nav.pendidikan": "Education",
  "nav.tentang": "About",
  "nav.kontak": "Contact",
  "ctrl.theme": "Toggle light/dark mode",
  "ctrl.tutup": "Close",

  "hero.alt": "Photo of Deftrian Dwi Wicaksana",
  "hero.kicker": "Portfolio / 2026",
  "hero.lead": "A Computer Engineering student at Telkom University who builds data-driven solutions, from machine learning models to IoT systems, while leading teams across student organizations and events.",
  "hero.cv": "Download CV",
  "hero.proyek": "See projects",
  "fields.label": "Fields",
  "fields.ml": "Processing data, building models, and evaluating results clearly.",
  "fields.net.t": "Networking &amp; IoT",
  "fields.net": "RCNA-certified routing &amp; switching, plus Arduino-based devices.",
  "fields.lead.t": "Leadership",
  "fields.lead": "Leading events and teams, from planning to execution.",

  "proyek.count": "04 projects",
  "proyek.tim": "Team",
  "proyek.detail": "View details",
  "proyek.repo": "GitHub repository →",
  "proyek.peat": "An early-warning system for peatland fires in Riau, Indonesia, built with explainable machine learning. Hotspot data from NASA FIRMS is combined with weather data from Open-Meteo. My role: modeling and evaluation.",
  "tag.geo": "Geospatial",
  "emas.t": "Gold Price Prediction",
  "emas.meta": "Mini Project · I-SMILE Study Group · 3rd Place · Team of 2",
  "emas.p": "Predicting the price of gold from macroeconomic indicators: silver, platinum, oil, the US Dollar Index, the S&amp;P 500, and GDX stock. A Random Forest model was compared against Linear Regression with 5-fold cross-validation, reaching R² 0.993 with an MAE of about $0.98. My role: data analysis, EDA, and preprocessing.",
  "tag.regresi": "Regression",
  "baja.t": "Steel Plate Defect Classification",
  "baja.meta": "Machine Learning Project · Multi-class classification",
  "baja.p": "Classifying seven types of steel plate defects from physical features. The data is imbalanced and full of outliers, so KNN (72.8%) was compared with Random Forest, which handles both better and reached 80.2% accuracy on the test set.",
  "agri.meta": "Web app · Farm monitoring dashboard",
  "agri.p": "A dashboard for logging temperature, humidity, and soil pH. Every new reading is instantly labeled Normal, Needs Attention, or Critical, then shown in a table and a chart. Built with Flask and packaged with Docker.",

  "peng.sub": "Organizations &amp; committees",
  "role.divisi": "Events Division",
  "role.hublusos": "Staff, External Relations &amp; Social Affairs Department",
  "peng.hmtk": "HUBLUSOS · Computer Engineering Student Association (HMTK), Telkom University",
  "role.ketuaPelaksana": "Project Lead",
  "role.ketuaDivisi": "Head of Events Division",
  "peng.overclock": "OVERCLOCK · First-Year Computer Engineering Cadre Program",
  "peng.compile": "Compile Tech Fest 2026 · Computer Engineering Student Association, Telkom University",
  "peng.studi": "Benchmarking Visit · Computer Engineering Student Association × Accounting Student Association",
  "doc.lihat": "View documentation",

  "pres.ismile": "3rd Place, I-SMILE Machine Learning Mini Project",
  "pres.ismile.meta": "I-SMILE Study Group · Gold Price Prediction",
  "pres.lihat": "See project →",
  "pres.kimia": "Silver Medal, National High School Chemistry Olympiad",
  "pres.bio": "Bronze Medal, National High School Biology Olympiad",

  "sert.sub": "Click a certificate to enlarge it",
  "sert.berlaku": "Valid until",
  "sert.no": "Certificate no.",
  "sert.rcna.tgl": "October 14, 2027",
  "sert.rcna.aria": "View the RCNA Routing &amp; Switching certificate",
  "sert.rcna.alt": "RCNA Routing &amp; Switching certificate issued to Deftrian Dwi Wicaksana",

  "skill.sub": "Used across projects &amp; organizations",
  "skill.ml": "Machine Learning &amp; Data",
  "skill.regkls": "Regression &amp; classification",
  "skill.web": "Web &amp; Software",
  "skill.net": "Networking &amp; IoT",
  "skill.org": "Organization",

  "about.p1": "Deftrian Dwi Wicaksana is an undergraduate Computer Engineering student at Telkom University, Bandung, class of 2024, with a strong interest in emerging technology, especially Machine Learning, the Internet of Things (IoT), and Cyber Security. Deftrian enjoys learning new things, exploring ideas, and growing skills in both technology and leadership.",
  "about.p2": "Deftrian has led and managed a range of organizational activities and event committees, including serving as Project Lead of Compile Tech Fest 2026 and Head of the Events Division for CENTURION 2026. Academically, Deftrian won 3rd place in the I-SMILE Machine Learning Mini Project and keeps building technical skills through projects and learning activities. These experiences shaped strengths in leadership, teamwork, problem solving, and project management.",
  "edu.tel": "Bachelor of Computer Engineering · Bandung · 2024–present",
  "kontak.t": "Let's talk.",
  "footer.atas": "Back to top ↑",

  // teks yang dipakai oleh main.js
  "js.kosong": "Documentation hasn't been added yet.",
  "js.fotoKe": "Photo",
  "js.sebelum": "Previous photo",
  "js.berikut": "Next photo",
  "js.grafik": "Charts &amp; screenshots",
  "js.repo": "Open the GitHub repository"
};

const TEKS_ID_JS = {
  "js.kosong": "Dokumentasi belum ditambahkan.",
  "js.fotoKe": "Foto",
  "js.sebelum": "Foto sebelumnya",
  "js.berikut": "Foto berikutnya",
  "js.grafik": "Grafik &amp; tampilan",
  "js.repo": "Buka repositori GitHub"
};

/*
  DOKUMENTASI PENGALAMAN
  Taruh foto di folder dokumentasi/<nama>/ lalu tulis di daftar "foto".
  Contoh: { src: "dokumentasi/compile/09.webp", caption: "Keterangan", en: "Caption" }
*/
const DOKUMENTASI = {
  hublusos: {
    judul: "Staff Departemen Hubungan Luar dan Sosial",
    acara: "HUBLUSOS · HMTK Telkom University",
    deskripsi: "",
    en: { judul: "Staff, External Relations & Social Affairs Department", acara: "HUBLUSOS · HMTK Telkom University" },
    foto: [
      { src: "dokumentasi/hublusos/01.webp" }
    ],
    link: []
  },
  "sert-rcna": {
    judul: "RCNA Routing & Switching",
    acara: "Sertifikasi · Ruijie Networks",
    deskripsi: "",
    en: { acara: "Certification · Ruijie Networks" },
    foto: [{ src: "sertifikat/rcna-routing-switching.webp", caption: "Ruijie Certified Network Associate, berlaku hingga 14 Oktober 2027", en: "Ruijie Certified Network Associate, valid until October 14, 2027" }],
    link: []
  },
  marimengajar: {
    judul: "Volunteer",
    acara: "Mari Mengajar 2025",
    deskripsi: "",
    foto: [],
    link: []
  },
  farm: {
    judul: "Volunteer",
    acara: "Farm With TEAM 2025",
    deskripsi: "",
    foto: [],
    link: []
  },
  cecso: {
    judul: "Divisi Acara",
    acara: "CONNECTION 2026 · Computer Engineering Community Service Organization",
    deskripsi: "Program pengabdian masyarakat Himpunan Mahasiswa Teknik Komputer Telkom University dengan tagline #JanganMatiTanpaAbdi, berisi permainan edukatif dan kegiatan belajar bersama siswa sekolah dasar. Sebagai anggota Divisi Acara, saya ikut menyiapkan dan menjalankan rangkaian kegiatan.",
    en: {
      judul: "Events Division",
      deskripsi: "A community service program by the Computer Engineering Student Association of Telkom University, carrying the tagline #JanganMatiTanpaAbdi, with educational games and learning sessions for elementary school students. As a member of the Events Division, I helped prepare and run the activities."
    },
    foto: [
      { src: "dokumentasi/connection/01.webp", caption: "Permainan bersama siswa di halaman sekolah", en: "Games with students in the schoolyard" },
      { src: "dokumentasi/connection/02.webp", caption: "Permainan kelompok bersama siswa", en: "Group games with students" },
      { src: "dokumentasi/connection/03.webp", caption: "Panitia mendampingi siswa saat permainan", en: "Committee members guiding students during a game" },
      { src: "dokumentasi/connection/04.webp", caption: "Kegiatan belajar bersama siswa di kelas", en: "Learning session with students in class" },
      { src: "dokumentasi/connection/05.webp", caption: "Keceriaan siswa di kelas", en: "Students having fun in class" },
      { src: "dokumentasi/connection/06.webp", caption: "Foto bersama siswa dan panitia di kelas", en: "Group photo of students and the committee" }
    ],
    link: []
  },
  overclock: {
    judul: "Divisi Acara",
    acara: "OVERCLOCK · Kaderisasi Tingkat 1 Teknik Komputer",
    deskripsi: "",
    en: { judul: "Events Division", acara: "OVERCLOCK · First-Year Computer Engineering Cadre Program" },
    foto: [],
    link: []
  },
  compile: {
    judul: "Ketua Pelaksana",
    acara: "Compile Tech Fest 2026",
    deskripsi: "Program kerja Himpunan Mahasiswa Teknik Komputer Telkom University yang ditujukan bagi siswa SMA/SMK sebagai wadah pengenalan dunia Teknik Komputer dan perkembangan teknologi. Menghadirkan rangkaian kegiatan edukatif berupa talkshow, workshop interaktif, dan pameran laboratorium yang berfokus pada bidang Hardware & Software, Internet of Things (IoT), serta Artificial Intelligence (AI). Dalam kegiatan ini, saya dipercaya sebagai Ketua Pelaksana yang bertanggung jawab atas perencanaan, koordinasi, pengelolaan tim, hingga keseluruhan pelaksanaan acara.",
    en: {
      judul: "Project Lead",
      deskripsi: "A program of the Computer Engineering Student Association of Telkom University that introduces high school and vocational school students to Computer Engineering and emerging technology. It featured a series of educational activities, including talk shows, interactive workshops, and laboratory exhibitions focused on Hardware & Software, the Internet of Things (IoT), and Artificial Intelligence (AI). I was entrusted as Project Lead, responsible for planning, coordination, team management, and the overall execution of the event."
    },
    foto: [
      { src: "dokumentasi/compile/01.webp", caption: "Peserta tiba di lokasi acara", en: "Participants arriving at the venue" },
      { src: "dokumentasi/compile/09.webp", caption: "Saya memberikan sambutan sebagai Ketua Pelaksana", en: "Me giving the opening speech as Project Lead" },
      { src: "dokumentasi/compile/02.webp", caption: "Talkshow tentang Artificial Intelligence", en: "Talk show on Artificial Intelligence" },
      { src: "dokumentasi/compile/03.webp", caption: "Workshop interaktif bersama peserta", en: "Interactive workshop with participants" },
      { src: "dokumentasi/compile/04.webp", caption: "Pameran laboratorium", en: "Laboratory exhibition" },
      { src: "dokumentasi/compile/05.webp", caption: "Pendampingan peserta saat workshop", en: "Guiding participants during the workshop" },
      { src: "dokumentasi/compile/06.webp", caption: "Penyerahan sertifikat kepada pemateri", en: "Presenting a certificate to a speaker" },
      { src: "dokumentasi/compile/08.webp", caption: "Foto bersama seluruh peserta dan panitia", en: "Group photo of all participants and the committee" }
    ],
    link: []
  },
  centurion: {
    judul: "Ketua Divisi Acara",
    acara: "CENTURION 2026 · Computer Engineering Event Organizer and Vigour Competition",
    deskripsi: "Kompetisi olahraga antartim dengan cabang seperti futsal dan basket, menggunakan sistem perolehan medali Grand Olympian serta penilaian supporter. Sebagai Ketua Divisi Acara, saya mengatur jalannya acara, termasuk menjelaskan teknis kompetisi kepada peserta saat technical meeting.",
    en: {
      judul: "Head of Events Division",
      deskripsi: "An inter-team sports competition with events such as futsal and basketball, scored with a Grand Olympian medal system and a supporter assessment. As Head of the Events Division, I ran the event, including briefing participants on the competition rules during the technical meeting."
    },
    foto: [
      { src: "dokumentasi/centurion/01.webp", caption: "Pembukaan technical meeting CENTURION 2026", en: "Opening of the CENTURION 2026 technical meeting" },
      { src: "dokumentasi/centurion/02.webp", caption: "Saya menjelaskan kriteria penilaian supporter saat technical meeting", en: "Me explaining the supporter scoring criteria at the technical meeting" },
      { src: "dokumentasi/centurion/03.webp", caption: "Saya menjelaskan format Grand Olympian saat technical meeting", en: "Me explaining the Grand Olympian format at the technical meeting" },
      { src: "dokumentasi/centurion/04.webp", caption: "Tim futsal sebelum pertandingan", en: "Futsal team before a match" },
      { src: "dokumentasi/centurion/05.webp", caption: "Pertandingan basket", en: "Basketball match" }
    ],
    link: []
  },
  studibanding: {
    judul: "Ketua Divisi Acara",
    acara: "Studi Banding HMTK × Himpunan Mahasiswa Akuntansi",
    deskripsi: "Kegiatan studi banding antara Himpunan Mahasiswa Teknik Komputer dan Himpunan Mahasiswa Akuntansi (PRAMASALA) Telkom University untuk bertukar pengalaman organisasi dan mempererat hubungan antarhimpunan, melalui ice breaking dan brainstorming antardepartemen yang selinier. Sebagai Ketua Divisi Acara, saya menyusun dan memandu jalannya rangkaian acara.",
    en: {
      judul: "Head of Events Division",
      acara: "Benchmarking Visit · HMTK × Accounting Student Association",
      deskripsi: "A benchmarking visit between the Computer Engineering Student Association and the Accounting Student Association (PRAMASALA) of Telkom University to exchange organizational experience and strengthen ties between the two associations, through ice breaking and brainstorming sessions between counterpart departments. As Head of the Events Division, I planned and hosted the program."
    },
    foto: [
      { src: "dokumentasi/studibanding/01.webp", caption: "Saya berbicara di atas panggung bersama perwakilan Himpunan Mahasiswa Akuntansi", en: "Me speaking on stage with a representative of the Accounting Student Association" },
      { src: "dokumentasi/studibanding/02.webp", caption: "Saya bersiap memberi contoh ice breaking bersama perwakilan kedua himpunan", en: "Me getting ready to demonstrate an ice breaker with representatives of both associations" },
      { src: "dokumentasi/studibanding/03.webp", caption: "Brainstorming antardepartemen yang selinier dari kedua himpunan", en: "Brainstorming between counterpart departments of both associations" },
      { src: "dokumentasi/studibanding/04.webp", caption: "Foto bersama Himpunan Mahasiswa Teknik Komputer dan Himpunan Mahasiswa Akuntansi", en: "Group photo of both student associations" }
    ],
    link: []
  }
};

/*
  DETAIL PROYEK
  Setiap proyek punya versi "id" dan "en". Angka diambil dari notebook / kode di repositori.
*/
const PROYEK = {
  peat: {
    repo: "https://github.com/BadakGanteng31/I-SMILE-K64",
    gambar: [],
    id: {
      kicker: "Machine Learning Solution Challenge · Cyan Academic Competition",
      judul: "PEAT-SHIELD",
      ringkas: "Sistem peringatan dini kebakaran lahan gambut di Riau berbasis explainable machine learning.",
      stats: [],
      bagian: [
        { h: "Masalah", p: "Kebakaran lahan gambut di Riau terjadi berulang dan sulit dipadamkan begitu meluas. Peringatan yang lebih awal memberi waktu untuk mencegah dan menanganinya." },
        { h: "Data", p: "Titik panas (hotspot) dari NASA FIRMS digabung dengan data cuaca dari Open-Meteo dan dataset geospasial." },
        { h: "Pendekatan", p: "Model machine learning yang hasil prediksinya bisa dijelaskan (explainable), supaya terlihat faktor apa yang mendorong risiko kebakaran." },
        { h: "Peran saya", p: "Modeling dan evaluasi. Rekan tim mengurus data cuaca dan dataset geospasial, lalu hasil kerja masing-masing digabung jadi satu kode akhir." }
      ],
      catatan: "Detail teknis lengkap ada di repositori GitHub tim."
    },
    en: {
      kicker: "Machine Learning Solution Challenge · Cyan Academic Competition",
      judul: "PEAT-SHIELD",
      ringkas: "An explainable machine learning early-warning system for peatland fires in Riau, Indonesia.",
      stats: [],
      bagian: [
        { h: "Problem", p: "Peatland fires in Riau recur every year and are hard to put out once they spread. Earlier warnings give more time to prevent and respond to them." },
        { h: "Data", p: "Hotspot data from NASA FIRMS combined with weather data from Open-Meteo and geospatial datasets." },
        { h: "Approach", p: "A machine learning model whose predictions can be explained, so it is clear which factors drive fire risk." },
        { h: "My role", p: "Modeling and evaluation. Teammates handled the weather data and geospatial datasets, and everyone's work was merged into one final codebase." }
      ],
      catatan: "Full technical details are in the team's GitHub repository."
    }
  },

  emas: {
    repo: "https://github.com/BadakGanteng31/Mini-Project-Machine-Learning",
    gambar: [
      { src: "proyek/emas-prediksi.webp", caption: "Nilai aktual vs prediksi Random Forest pada data uji", en: "Actual vs. predicted values from the Random Forest on the test set" },
      { src: "proyek/emas-fitur.webp", caption: "10 indikator paling berpengaruh terhadap harga emas", en: "Top 10 most influential indicators for the gold price" },
      { src: "proyek/emas-korelasi.webp", caption: "Korelasi indikator makroekonomi terhadap harga emas", en: "Correlation of macroeconomic indicators with the gold price" },
      { src: "proyek/emas-tren.webp", caption: "Harga emas turun saat Indeks Dollar AS menguat (2011–2018)", en: "Gold fell as the US Dollar Index strengthened (2011–2018)" }
    ],
    id: {
      kicker: "Mini Project · Study Group I-SMILE · Juara 3",
      judul: "Prediksi Harga Emas",
      ringkas: "Memprediksi harga penutupan emas dari indikator makroekonomi, sebagai acuan objektif bagi investor pemula agar tidak ikut-ikutan FOMO.",
      stats: [
        { v: "0,993", l: "R² data uji" },
        { v: "$0,98", l: "MAE data uji" },
        { v: "1.718", l: "hari bursa" },
        { v: "74", l: "fitur" }
      ],
      bagian: [
        { h: "Masalah", p: "Banyak orang membeli emas saat harganya sedang di puncak karena anggapan emas pasti selalu naik. Proyek ini menguji apakah indikator makroekonomi bisa memperkirakan harga wajar emas." },
        { h: "Data", p: "1.718 hari bursa (2011–2018) dengan 74 fitur: S&P 500, Dow Jones, perak, platinum, minyak, Indeks Dollar AS, dan saham penambang emas GDX. Tidak ada nilai kosong maupun duplikat." },
        { h: "Pembersihan", list: ["Menghapus kolom harga emas di hari yang sama (Open, High, Low, Close, Volume) untuk mencegah kebocoran target.", "Menghapus kolom tanggal dari fitur.", "Membagi data 80% latih (1.374 baris) dan 20% uji (344 baris)."] },
        { h: "Model", p: "Linear Regression sebagai model standar dibandingkan dengan Random Forest lewat 5-fold cross validation. Random Forest unggul (R² 0,9944 vs 0,9870; MAE 0,91 vs 1,59) dan dipilih sebagai model akhir." },
        { h: "Hasil", p: "Di data uji, Random Forest mencapai R² 0,9934, MAE $0,98, dan RMSE $1,43. Selisih R² latih dan uji di bawah 1%, jadi model tidak overfitting. Batasannya: model tidak bisa menebak lonjakan harga akibat kejadian mendadak seperti krisis geopolitik." },
        { h: "Peran saya", p: "Data Analyst & Preprocessing: merumuskan latar belakang masalah, membuat ringkasan EDA dan tiga visualisasi beserta temuannya, membersihkan data dari kebocoran target, dan menyusun slide bagian 1–5." }
      ]
    },
    en: {
      kicker: "Mini Project · I-SMILE Study Group · 3rd Place",
      judul: "Gold Price Prediction",
      ringkas: "Predicting the closing price of gold from macroeconomic indicators, as an objective reference for beginner investors who might otherwise buy out of FOMO.",
      stats: [
        { v: "0.993", l: "test R²" },
        { v: "$0.98", l: "test MAE" },
        { v: "1,718", l: "trading days" },
        { v: "74", l: "features" }
      ],
      bagian: [
        { h: "Problem", p: "Many people buy gold at its peak because they assume it always goes up. This project tests whether macroeconomic indicators can estimate a fair price for gold." },
        { h: "Data", p: "1,718 trading days (2011–2018) with 74 features: the S&P 500, Dow Jones, silver, platinum, oil, the US Dollar Index, and GDX gold miner stock. No missing values or duplicates." },
        { h: "Cleaning", list: ["Removed same-day gold price columns (Open, High, Low, Close, Volume) to prevent target leakage.", "Removed the date column from the features.", "Split the data into 80% training (1,374 rows) and 20% test (344 rows)."] },
        { h: "Model", p: "Linear Regression as the baseline compared with Random Forest using 5-fold cross-validation. Random Forest won (R² 0.9944 vs 0.9870; MAE 0.91 vs 1.59) and was chosen as the final model." },
        { h: "Results", p: "On the test set, Random Forest reached R² 0.9934, MAE $0.98, and RMSE $1.43. The gap between training and test R² is under 1%, so the model is not overfitting. Limitation: it cannot predict sudden spikes caused by events such as geopolitical crises." },
        { h: "My role", p: "Data Analyst & Preprocessing: framed the problem, wrote the EDA summary and three visualizations with findings, removed target leakage from the data, and prepared slides 1–5." }
      ]
    }
  },

  baja: {
    repo: "https://github.com/BadakGanteng31/PROJECT-STEEL-PLATES-ML",
    gambar: [
      { src: "proyek/baja-distribusi.webp", caption: "Distribusi tujuh kelas cacat: datanya tidak seimbang", en: "Distribution of the seven defect classes: the data is imbalanced" },
      { src: "proyek/baja-outlier.webp", caption: "Sebaran luas area cacat per kelas, banyak outlier", en: "Defect area by class, with many outliers" }
    ],
    id: {
      kicker: "Proyek Machine Learning · Klasifikasi multi-kelas",
      judul: "Klasifikasi Cacat Pelat Baja",
      ringkas: "Menentukan jenis cacat pada pelat baja secara otomatis dari 27 fitur fisik hasil pemindaian.",
      stats: [
        { v: "80,2%", l: "akurasi Random Forest" },
        { v: "72,8%", l: "akurasi KNN" },
        { v: "7", l: "jenis cacat" },
        { v: "1.941", l: "sampel" }
      ],
      bagian: [
        { h: "Data", p: "1.941 sampel pelat baja dengan 27 fitur fisik (posisi, luas area, keliling, luminositas, ketebalan, dan lainnya) dan tujuh jenis cacat: Bumps, Dirtiness, K_Scatch, Other_Faults, Pastry, Stains, dan Z_Scratch." },
        { h: "Temuan EDA", list: ["Kelas tidak seimbang; Other_Faults paling banyak.", "Dimensi fisik pelat saling berkorelasi kuat.", "Fitur luas area punya banyak outlier, terutama di kelas Other_Faults."] },
        { h: "Persiapan", p: "Kolom id dihapus karena tidak punya pola prediktif. Data dibagi 80/20 secara stratified supaya proporsi tiap kelas terjaga, lalu fitur diskalakan dengan StandardScaler karena KNN sensitif terhadap skala." },
        { h: "Hasil", p: "KNN (k = 5) mencapai akurasi 72,75% (macro F1 0,74). Random Forest mencapai 80,21% (macro F1 0,80) karena lebih tahan terhadap outlier dan ketidakseimbangan kelas." }
      ]
    },
    en: {
      kicker: "Machine Learning Project · Multi-class classification",
      judul: "Steel Plate Defect Classification",
      ringkas: "Automatically identifying the type of defect on a steel plate from 27 physical features captured by scanning.",
      stats: [
        { v: "80.2%", l: "Random Forest accuracy" },
        { v: "72.8%", l: "KNN accuracy" },
        { v: "7", l: "defect types" },
        { v: "1,941", l: "samples" }
      ],
      bagian: [
        { h: "Data", p: "1,941 steel plate samples with 27 physical features (position, area, perimeter, luminosity, thickness, and more) and seven defect types: Bumps, Dirtiness, K_Scatch, Other_Faults, Pastry, Stains, and Z_Scratch." },
        { h: "EDA findings", list: ["Classes are imbalanced; Other_Faults dominates.", "Physical plate dimensions are strongly correlated.", "The area feature has many outliers, especially in Other_Faults."] },
        { h: "Preparation", p: "The id column was dropped since it carries no predictive pattern. The data was split 80/20 with stratification to keep class proportions, then scaled with StandardScaler because KNN is sensitive to scale." },
        { h: "Results", p: "KNN (k = 5) reached 72.75% accuracy (macro F1 0.74). Random Forest reached 80.21% (macro F1 0.80) because it handles outliers and class imbalance better." }
      ]
    }
  },

  agri: {
    repo: "https://github.com/BadakGanteng31/agrimonitor",
    gambar: [
      { src: "proyek/agrimonitor-1.webp", caption: "Ringkasan sensor terbaru dan form input data", en: "Latest sensor summary and the data entry form", terang: true },
      { src: "proyek/agrimonitor-2.webp", caption: "Riwayat monitoring dengan status otomatis dan grafik suhu", en: "Monitoring history with automatic status and a temperature chart", terang: true }
    ],
    id: {
      kicker: "Aplikasi web · Dashboard pemantauan lahan",
      judul: "AgriMonitor",
      ringkas: "Dashboard pemantauan pertanian untuk mencatat suhu, kelembapan, dan pH tanah, lalu menandai kondisi yang perlu ditindaklanjuti.",
      stats: [
        { v: "3", l: "parameter sensor" },
        { v: "3", l: "level status" },
        { v: "Flask", l: "backend" },
        { v: "Docker", l: "deployment" }
      ],
      bagian: [
        { h: "Fitur", list: ["Input data suhu, kelembapan, dan pH tanah.", "Ringkasan pembacaan sensor terbaru.", "Tabel riwayat monitoring dan grafik suhu dengan Chart.js.", "Tombol untuk menghapus semua data."] },
        { h: "Aturan status", list: ["Kritis: suhu di atas 35 °C.", "Perlu Perhatian: kelembapan di bawah 30%.", "Normal: selain dua kondisi di atas."] },
        { h: "Teknologi", p: "Backend Python dengan Flask dan template HTML, grafik dengan Chart.js, lalu dikemas dengan Docker dan siap dijalankan dengan Gunicorn." }
      ],
      catatan: "Tampilan di atas diambil dari aplikasi yang dijalankan langsung dengan contoh data."
    },
    en: {
      kicker: "Web app · Farm monitoring dashboard",
      judul: "AgriMonitor",
      ringkas: "A farm monitoring dashboard that logs temperature, humidity, and soil pH, then flags conditions that need action.",
      stats: [
        { v: "3", l: "sensor readings" },
        { v: "3", l: "status levels" },
        { v: "Flask", l: "backend" },
        { v: "Docker", l: "deployment" }
      ],
      bagian: [
        { h: "Features", list: ["Enter temperature, humidity, and soil pH readings.", "Summary of the latest sensor reading.", "Monitoring history table and a temperature chart built with Chart.js.", "A button to clear all data."] },
        { h: "Status rules", list: ["Critical: temperature above 35 °C.", "Needs Attention: humidity below 30%.", "Normal: anything else."] },
        { h: "Tech", p: "A Python backend with Flask and HTML templates, charts with Chart.js, packaged with Docker and ready to run with Gunicorn." }
      ],
      catatan: "The screenshots above were taken from the app running live with sample data."
    }
  }
};
