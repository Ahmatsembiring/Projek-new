import { Journal } from '../types/journal';

// Base URL configured via environment variable with fallback
export const OJS_BASE_URL = import.meta.env.VITE_OJS_BASE_URL || 'https://ojs.garudaya.example';

export const JOURNALS_DATA: Journal[] = [
  {
    id: 'jstig',
    acronym: 'JSTIG',
    name: 'Jurnal Sains, Teknologi, dan Inovasi Garudaya',
    colorName: 'blue',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100',
    accentColor: '#1D4ED8',
    focus: 'Menjadi wadah publikasi riset teoretis dan aplikatif di bidang ilmu murni, teknik, serta inovasi teknologi digital modern.',
    scope: [
      'Ilmu Komputer, Informatika, dan Sistem Informasi',
      'Kecerdasan Buatan (AI), Machine Learning, dan Data Science',
      'Teknik Elektro, Mesin, Sipil, dan Arsitektur',
      'Matematika dan Ilmu Pengetahuan Alam (Fisika, Kimia, Biologi)',
      'Inovasi Teknologi Industri dan Sistem Manufaktur',
    ],
    frequency: '2 kali setahun',
    frequencyMonths: ['Mei', 'November'],
    minimumArticlesPerIssue: 5,
    eIssn: '2988-812X (Online)',
    pIssn: '2987-9431 (Print)',
    publisher: 'Lembaga Publikasi Ilmiah Garudaya Press',
    language: 'Bahasa Indonesia & English',
    indexing: ['Google Scholar', 'Garuda (Kemdikbud)', 'Dimensions', 'Crossref (DOI)', 'ROAD Directory'],
    ojsUrl: `${OJS_BASE_URL}/jstig`,
    submitUrl: `${OJS_BASE_URL}/jstig/about/submissions`,
    authorGuidelinesUrl: `${OJS_BASE_URL}/jstig/about/submissions#authorGuidelines`,
    authorGuidelinesSteps: [
      'Naskah ditulis dalam format template resmi JSTIG (MS Word / LaTeX, 6 - 15 halaman).',
      'Artikel memuat Judul, Abstrak (150-250 kata dalam Bahasa Indonesia dan Bahasa Inggris), Kata Kunci (3-5 kata), Pendahuluan, Metode Penelitian, Hasil dan Pembahasan, serta Kesimpulan.',
      'Referensi primer minimal 80% dari total pustaka dengan rentang waktu terbit 5 tahun terakhir.',
      'Sitasi dan Daftar Pustaka disusun menggunakan Reference Manager (Mendeley, Zotero, atau EndNote) gaya IEEE style.',
      'Similarity index maksimal 20% melalui uji Turnitin / iThenticate sebelum proses review.',
    ],
    publicationEthicsPoints: [
      'Standar orisinalitas ketat: Seluruh naskah wajib merupakan karya orisinil dan belum pernah dipublikasikan di media lain.',
      'Integritas kepenulisan (Authorship): Setiap penulis yang tercantum harus memiliki kontribusi substansial pada konsep, perancangan, atau akuisisi data.',
      'Bebas dari fabrikasi dan falsifikasi data: Segala bentuk manipulasi data eksperimen atau kode program adalah pelanggaran berat.',
      'Transparansi pendanaan: Penulis wajib mendeklarasikan sumber hibah atau pendanaan riset yang mendukung penelitian.',
    ],
    peerReviewText:
      'Setiap naskah yang masuk ke JSTIG akan melalui Initial Screening oleh Editor In Chief. Naskah yang lolos diteruskan ke Double-Blind Peer Review oleh minimal dua mitra bestari (peer reviewers) independen dengan bidang kepakaran yang sesuai selama kurun waktu 3-4 minggu.',
    editorialTeam: [
      {
        role: 'Editor-in-Chief',
        name: 'Prof. Dr. Ir. Hendra Wicaksono, M.Kom., Ph.D.',
        institution: 'Garudaya Institute of Science & Technology',
        country: 'Indonesia',
        scopusId: '57218901234',
        orcid: '0000-0002-1823-4521',
      },
      {
        role: 'Managing Editor',
        name: 'Dr. Ahmad Fauzi Rahmansyah, S.T., M.T.',
        institution: 'Universitas Riset Nusantara',
        country: 'Indonesia',
      },
      {
        role: 'Associate Editor (AI & Data Science)',
        name: 'Assoc. Prof. Elena V. Morozova, Ph.D.',
        institution: 'Faculty of Computing, International Partner University',
        country: 'Singapore',
      },
      {
        role: 'Editorial Board Member',
        name: 'Dr. Eng. Satria Pratama, S.Si., M.Sc.',
        institution: 'Pusat Riset Mekatronika & Otomasi Cerdas',
        country: 'Indonesia',
      },
    ],
    currentIssue: {
      volume: 3,
      issue: 1,
      year: 2026,
      month: 'Mei',
      articles: [
        {
          id: 'jstig-0301-01',
          title: 'Optimasi Arsitektur Transformer Ringan untuk Deteksi Dini Kerusakan Jaringan Irigasi Berbasis Edge Computing',
          authors: ['Budi Santoso', 'Rian Hidayat', 'Nurul Aulia'],
          pages: '1-12',
          doi: '10.59821/jstig.v3i1.48',
          abstract:
            'Penelitian ini mengusulkan model transformer terkompresi dengan teknik knowledge distillation yang diterapkan pada perangkat edge microcontroller bertenaga surya untuk mendeteksi anomali aliran tanggul irigasi secara real-time.',
        },
        {
          id: 'jstig-0301-02',
          title: 'Sintesis Nanokomposit Selulosa Bakteri dan Karbon Aktif Tempurung Kelapa sebagai Elektroda Superkapasitor Ramah Lingkungan',
          authors: ['Dr. Farida Wardani', 'Kevin Saputra'],
          pages: '13-24',
          doi: '10.59821/jstig.v3i1.51',
          abstract:
            'Eksplorasi material penyimpan energi hijau berbahan baku limbah biomassa kelapa dengan kapasitas spesifik mencapai 285 F/g pada rapat arus 1 A/g.',
        },
        {
          id: 'jstig-0301-03',
          title: 'Analisis Keamanan Smart Contract Protokol DeFi Menggunakan Symbolic Execution dan Machine Learning',
          authors: ['Arif Rahman Hakim', 'Dian Permatasari'],
          pages: '25-38',
          doi: '10.59821/jstig.v3i1.54',
          abstract:
            'Implementasi kerangka kerja otomatisasi audit kerentanan reentrancy dan overflow pada smart contract Ethereum dengan akurasi F1-Score sebesar 94.2%.',
        },
      ],
    },
  },
  {
    id: 'jsshg',
    acronym: 'JSSHG',
    name: 'Jurnal Studi Sosial dan Humaniora Garudaya',
    colorName: 'gold',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100',
    accentColor: '#D97706',
    focus: 'Membahas fenomena dinamika sosial, kebijakan publik, kebudayaan, serta perkembangan hukum di Indonesia.',
    scope: [
      'Sosiologi, Antropologi, dan Isu Kemasyarakatan',
      'Ilmu Politik, Hubungan Internasional, dan Kebijakan Publik',
      'Ilmu Hukum (Pidana, Perdata, Tata Negara, Hukum Internasional)',
      'Komunikasi, Jurnalistik, dan Media Baru',
      'Kajian Budaya, Sastra, Sejarah, dan Filsafat',
    ],
    frequency: '2 kali setahun',
    frequencyMonths: ['Juni', 'Desember'],
    minimumArticlesPerIssue: 5,
    eIssn: '2988-9241 (Online)',
    pIssn: '2987-9528 (Print)',
    publisher: 'Lembaga Publikasi Ilmiah Garudaya Press',
    language: 'Bahasa Indonesia & English',
    indexing: ['Google Scholar', 'Garuda (Kemdikbud)', 'Dimensions', 'Crossref (DOI)', 'BASE Academic Search'],
    ojsUrl: `${OJS_BASE_URL}/jsshg`,
    submitUrl: `${OJS_BASE_URL}/jsshg/about/submissions`,
    authorGuidelinesUrl: `${OJS_BASE_URL}/jsshg/about/submissions#authorGuidelines`,
    authorGuidelinesSteps: [
      'Artikel merupakan naskah ilmiah hasil riset empiris atau kajian kritis konseptual di bidang sosial dan humaniora (panjang 5.000 - 8.000 kata).',
      'Struktur naskah terdiri dari: Judul, Nama Penulis & Afiliasi, Abstrak (Bahasa Indonesia dan Inggris), Pendahuluan, Metode Penelitian, Pembahasan Analitis, dan Kesimpulan.',
      'Kutipan dan bibliografi wajib menggunakan format APA Style (American Psychological Association) edisi ke-7.',
      'Penulis wajib melampirkan ethical clearance atau bukti persetujuan informan untuk penelitian yang melibatkan subjek masyarakat rentan.',
      'Tingkat kesamaan (similarity index) tidak melebihi 20% di luar daftar pustaka.',
    ],
    publicationEthicsPoints: [
      'Prinsip etika humanis: Menghormati privasi, harkat, dan kearifan lokal para partisipan serta informan riset kualitatif.',
      'Netralitas dan objektivitas: Menghindari prasangka diskriminatif, ujaran kebencian, atau pembelaan sepihak tanpa landasan data faktual.',
      'Resolusi konflik kepentingan: Penulis wajib membeberkan afiliasi organisasi non-akademik yang berpotensi memengaruhi substansi tulisan.',
      'Perlindungan data primer: Data hasil wawancara, transkrip, dan rekaman dijaga keamanannya sesuai protokol etik penelitian sosial.',
    ],
    peerReviewText:
      'JSSHG menerapkan sistem Double-Blind Peer Review di mana identitas penulis dan mitra bestari saling dirahasiakan. Proses review berlangsung rata-rata selama 4 minggu dengan penilaian berfokus pada ketajaman analisis teoritik, kontribusi pemikiran, dan metodologi sosial.',
    editorialTeam: [
      {
        role: 'Editor-in-Chief',
        name: 'Dr. Phil. Maya Anggraini, M.A.',
        institution: 'Pusat Studi Demokrasi & Transformasi Sosial',
        country: 'Indonesia',
        scopusId: '57193248102',
        orcid: '0000-0003-4912-7819',
      },
      {
        role: 'Managing Editor',
        name: 'Bagus Tri Prakoso, S.Sos., M.Si.',
        institution: 'Fakultas Ilmu Sosial dan Ilmu Politik Nusantara',
        country: 'Indonesia',
      },
      {
        role: 'Section Editor (Hukum & Kebijakan)',
        name: 'Dr. Robertus Wijaya, S.H., LL.M.',
        institution: 'Lembaga Kajian Hukum Tata Negara',
        country: 'Indonesia',
      },
    ],
    currentIssue: {
      volume: 3,
      issue: 1,
      year: 2026,
      month: 'Juni',
      articles: [
        {
          id: 'jsshg-0301-01',
          title: 'Resiliensi Budaya Komunitas Adat Menghadapi Ekspansi Digitalisasi dan Pariwisata Massal',
          authors: ['Dra. Sri Wahyuni, M.Hum.', 'Gede Aditya Nugraha'],
          pages: '1-16',
          doi: '10.59821/jsshg.v3i1.33',
          abstract:
            'Kajian etnografis mengenai bagaimana generasi muda adat mengadaptasi platform media sosial untuk merevitalisasi bahasa daerah dan kerajinan tradisional tanpa kehilangan nilai ritual leluhur.',
        },
        {
          id: 'jsshg-0301-02',
          title: 'Dinamika Kebijakan Partisipasi Publik dalam Regulasi Tata Kelola AI di Sektor Pelayanan Publik Indonesia',
          authors: ['Fajar Sidik Prabowo', 'Anisa Maharani'],
          pages: '17-32',
          doi: '10.59821/jsshg.v3i1.35',
          abstract:
            'Evaluasi yuridis-normatif terhadap perlindungan privasi warga negara dan transparansi algoritma automated decision-making pada birokrasi pemerintahan daerah.',
        },
      ],
    },
  },
  {
    id: 'jpspg',
    acronym: 'JPSPG',
    name: 'Jurnal Pendidikan dan Studi Pembelajaran Garudaya',
    colorName: 'teal',
    badgeColor: 'bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-100',
    accentColor: '#0D9488',
    focus: 'Memublikasikan riset mengenai inovasi metode pengajaran, kurikulum, evaluasi pendidikan, dan pedagogi di semua jenjang.',
    scope: [
      'Teori Pembelajaran dan Pedagogi Makro',
      'Pendidikan Anak Usia Dini (PAUD) dan Pendidikan Dasar (PGSD)',
      'Manajemen, Evaluasi, dan Kebijakan Pendidikan',
      'Teknologi Pendidikan dan Pengembangan Media Pembelajaran Digital',
      'Pendidikan Spesifik Bidang (Pendidikan Bahasa, Sains, IPS, dll.)',
    ],
    frequency: '2 kali setahun',
    frequencyMonths: ['Maret', 'September'],
    minimumArticlesPerIssue: 5,
    eIssn: '2988-7719 (Online)',
    pIssn: '2987-9602 (Print)',
    publisher: 'Lembaga Publikasi Ilmiah Garudaya Press',
    language: 'Bahasa Indonesia & English',
    indexing: ['Google Scholar', 'Garuda (Kemdikbud)', 'Dimensions', 'Crossref (DOI)', 'EBSCO Essentials'],
    ojsUrl: `${OJS_BASE_URL}/jpspg`,
    submitUrl: `${OJS_BASE_URL}/jpspg/about/submissions`,
    authorGuidelinesUrl: `${OJS_BASE_URL}/jpspg/about/submissions#authorGuidelines`,
    authorGuidelinesSteps: [
      'Naskah memuat hasil penelitian tindakan kelas (PTK), riset pengembangan (R&D), eksperimen pembelajaran, atau kajian meta-analisis pendidikan.',
      'Sistematika artikel: Judul, Identitas Penulis, Abstrak dwi-bahasa (Indonesia & Inggris), Pendahuluan, Metode, Hasil, Pembahasan, Kesimpulan & Saran Pedagogis.',
      'Gaya sitasi wajib mematuhi standar APA edisi ke-7 dengan minimal 20 referensi ilmiah bereputasi.',
      'Instrumen asesmen atau survei yang digunakan dalam riset wajib dijelaskan tingkat validitas dan reliabilitasnya.',
      'Batas kesamaan teks maksimal 20% diperiksa melalui software anti-plagiasi sebelum penugasan reviewer.',
    ],
    publicationEthicsPoints: [
      'Persetujuan wali/sekolah (Parental/School Consent): Untuk penelitian yang melibatkan subjek peserta didik anak-anak, wajib disertai izin tertulis.',
      'Dukungan aksesibilitas inklusif: Mendorong laporan riset yang memperhatikan siswa berkebutuhan khusus dan keadilan kesempatan belajar.',
      'Bebas dari manipulasi data nilai siswa: Data evaluasi hasil belajar harus riil dan dapat dipertanggungjawabkan keabsahannya.',
    ],
    peerReviewText:
      'Setiap manuskrip melalui proses blind review oleh sedikitnya dua praktisi akademisi pendidikan bergelar doktor. Penilaian menitikberatkan pada kebaruan metode pedagogis, kepraktisan implementasi di ruang kelas, dan kekuatan bukti empirik hasil belajar.',
    editorialTeam: [
      {
        role: 'Editor-in-Chief',
        name: 'Prof. Dr. Hj. Siti Nurjanah, M.Pd.',
        institution: 'Fakultas Ilmu Tarbiyah dan Keguruan Garudaya',
        country: 'Indonesia',
        scopusId: '57201948301',
        orcid: '0000-0001-9034-7712',
      },
      {
        role: 'Managing Editor',
        name: 'Doni Wicaksono, M.Pd.',
        institution: 'Asosiasi Pengembang Kurikulum Nusantara',
        country: 'Indonesia',
      },
      {
        role: 'Review Editor (EduTech & Gamification)',
        name: 'Dr. Tri Prasetyo, M.Ed.',
        institution: 'Pusat Inovasi Pembelajaran Daring',
        country: 'Indonesia',
      },
    ],
    currentIssue: {
      volume: 3,
      issue: 1,
      year: 2026,
      month: 'Maret',
      articles: [
        {
          id: 'jpspg-0301-01',
          title: 'Efektivitas Gamifikasi Berbasis Cerita Rakyat Interaktif dalam Meningkatkan Keterampilan Literasi Kritis Siswa Sekolah Dasar',
          authors: ['Ratih Kusuma Dewi', 'Prof. Dr. Hj. Siti Nurjanah, M.Pd.'],
          pages: '1-15',
          doi: '10.59821/jpspg.v3i1.21',
          abstract:
            'Eksperimen kuasi dengan desain pretest-posttest control group menunjukkan peningkatan signifikan skor pemahaman inferensial pada kelompok perlakuan game naratif kearifan lokal.',
        },
        {
          id: 'jpspg-0301-02',
          title: 'Model Pembelajaran Differentiated Instruction Berbantuan Asisten Virtual AI pada Mata Pelajaran Sains Terpadu SMP',
          authors: ['Agus Salim', 'Putri Ayu Wandira'],
          pages: '16-30',
          doi: '10.59821/jpspg.v3i1.24',
          abstract:
            'Studi implementasi pedagogis untuk menjembatani variasi kecepatan belajar siswa di kelas inklusi dengan materi modul dinamis yang teradaptasi otomatis.',
        },
      ],
    },
  },
  {
    id: 'jbemg',
    acronym: 'JBEMG',
    name: 'Jurnal Bisnis, Ekonomi, dan Manajemen Garudaya',
    colorName: 'blue',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100',
    accentColor: '#2563EB',
    focus: 'Mengkaji perkembangan teori dan praktik akuntansi, tata kelola bisnis, manajemen strategis, serta analisis ekonomi makro/mikro.',
    scope: [
      'Manajemen Strategis, Pemasaran, Keuangan, dan SDM',
      'Akuntansi Keuangan, Akuntansi Manajerial, Auditing, dan Perpajakan',
      'Ekonomi Pembangunan dan Kebijakan Moneter/Fiskal',
      'Kewirausahaan, UMKM, dan Startup Bisnis',
      'Ekonomi dan Bisnis Digital / Syariah',
    ],
    frequency: '2 kali setahun',
    frequencyMonths: ['April', 'Oktober'],
    minimumArticlesPerIssue: 5,
    eIssn: '2988-6602 (Online)',
    pIssn: '2987-9715 (Print)',
    publisher: 'Lembaga Publikasi Ilmiah Garudaya Press',
    language: 'Bahasa Indonesia & English',
    indexing: ['Google Scholar', 'Garuda (Kemdikbud)', 'Dimensions', 'Crossref (DOI)', 'Directory of Open Access Journals (DOAJ Candidate)'],
    ojsUrl: `${OJS_BASE_URL}/jbemg`,
    submitUrl: `${OJS_BASE_URL}/jbemg/about/submissions`,
    authorGuidelinesUrl: `${OJS_BASE_URL}/jbemg/about/submissions#authorGuidelines`,
    authorGuidelinesSteps: [
      'Naskah memuat artikel orisinal empiris kuantitatif, kualitatif, atau mixed methods yang berkontribusi pada pengembangan ilmu bisnis dan ekonomi.',
      'Sistematika penulisan mencakup: Title, Abstract (150-250 kata), Introduction (didukung theoretical framework), Research Methodology, Empirical Findings, Discussion & Managerial Implications, dan Conclusion.',
      'Penulisan referensi menggunakan gaya APA edisi ke-7 dengan acuan utama artikel jurnal bereputasi 5 tahun terakhir minimal 85%.',
      'Penulis wajib melampirkan ringkasan uji statistik (robustness check / goodness-of-fit) jika menggunakan analisis kuantitatif ekonometrika.',
      'Skor Turnitin maksimal 20% sebelum masuk tahap telaah substansi.',
    ],
    publicationEthicsPoints: [
      'Kerahasiaan korporasi: Menjamin bahwa data internal perusahaan yang dijadikan objek studi kasus telah memperoleh izin resmi tertulis (NDAA / formal approval).',
      'Keterbukaan konflik kepentingan finansial: Penulis harus menjelaskan tidak memiliki saham atau ikatan promosi yang membiaskan kesimpulan riset pasar.',
      'Akuntabilitas perhitungan dan model statistik: Data set yang digunakan harus siap diserahkan apabila diminta oleh reviewer untuk proses replikasi.',
    ],
    peerReviewText:
      'JBEMG menerapkan prosedur telaah sejawat tertutup ganda (Double-Blind Peer Review). Reviewer berasal dari kalangan akademisi guru besar dan praktisi eksekutif industri bisnis untuk menjamin kualitas teoritis sekaligus relevansi praktis naskah.',
    editorialTeam: [
      {
        role: 'Editor-in-Chief',
        name: 'Dr. Hendri Kusuma Wardhana, S.E., M.B.A., Ak., CA.',
        institution: 'Garudaya Business School & Research Institute',
        country: 'Indonesia',
        scopusId: '57198823101',
        orcid: '0000-0002-8419-6623',
      },
      {
        role: 'Managing Editor',
        name: 'Irma Suryani, S.E., M.Ak.',
        institution: 'Pusat Studi Akuntansi Sektor Publik',
        country: 'Indonesia',
      },
      {
        role: 'Section Editor (Digital Economics)',
        name: 'Aditya Pratama, M.Sc., Ph.D.',
        institution: 'Center for Fintech and Sustainable Finance',
        country: 'Indonesia',
      },
    ],
    currentIssue: {
      volume: 3,
      issue: 1,
      year: 2026,
      month: 'April',
      articles: [
        {
          id: 'jbemg-0301-01',
          title: 'Adopsi Prinsip Environmental, Social, and Governance (ESG) dan Pengaruhnya terhadap Cost of Equity Modal Perusahaan Tercatat di BEI',
          authors: ['Dimas Bayu Wicaksono', 'Dr. Hendri Kusuma Wardhana'],
          pages: '1-18',
          doi: '10.59821/jbemg.v3i1.12',
          abstract:
            'Analisis regresi data panel pada 120 emiten manufaktur periode 2021-2025 membuktikan bahwa transparansi pengungkapan pilar keberlanjutan menekan premi risiko investor secara signifikan.',
        },
        {
          id: 'jbemg-0301-02',
          title: 'Strategi Omnichannel dan Kepuasan Konsumen Terhadap Loyalitas Pelanggan UMKM F&B Generasi Z',
          authors: ['Siti Fatimah', 'Rizky Maulana'],
          pages: '19-32',
          doi: '10.59821/jbemg.v3i1.15',
          abstract:
            'Pendekatan Structural Equation Modeling (PLS-SEM) menunjukkan bahwa konsistensi pengalaman digital dan integrasi loyalty reward fisik menjadi determinan retensi tertinggi.',
        },
      ],
    },
  },
];

// Helper functions for easy access
export const getJournalById = (id: string): Journal | undefined => {
  return JOURNALS_DATA.find((journal) => journal.id.toLowerCase() === id.toLowerCase());
};

export const getJournalOptions = () => {
  return JOURNALS_DATA.map((j) => ({
    id: j.id,
    acronym: j.acronym,
    name: j.name,
    submitUrl: j.submitUrl,
    ojsUrl: j.ojsUrl,
  }));
};
