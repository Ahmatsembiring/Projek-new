import { SubmissionTrackingResult, SubmissionStatusType } from '../types/journal';

// Demo sample submission records
const MOCK_SUBMISSIONS: Record<string, SubmissionTrackingResult> = {
  'GAR-2026-0042': {
    token: 'GAR-2026-0042',
    title: 'Penerapan Deep Learning pada Pemetaan Kerentanan Longsor Wilayah Dataran Tinggi',
    journalId: 'jstig',
    journalAcronym: 'JSTIG',
    journalName: 'Jurnal Sains, Teknologi, dan Inovasi Garudaya',
    authorName: 'Dr. Ilham Ramadhan, S.Kom., M.Cs.',
    submittedDate: '15 Januari 2026',
    currentStatus: 'Under Review',
    currentStepIndex: 2,
    statusNotes:
      'Naskah telah lolos tahap Initial Desk Screening dan saat ini sedang ditelaah secara Double-Blind oleh 2 Mitra Bestari independen.',
    nextAction: 'Menunggu hasil telaah reviewer (estimasi 10 hari kerja lagi).',
    timeline: [
      {
        status: 'Submitted',
        title: 'Naskah Dikirimkan (Manuscript Submitted)',
        date: '15 Januari 2026, 09:30 WIB',
        description: 'Penulis berhasil mengunggah naskah dan file pendukung melalui sistem OJS.',
        completed: true,
      },
      {
        status: 'Submitted',
        title: 'Initial Screening & Similarity Check',
        date: '18 Januari 2026, 14:15 WIB',
        description: 'Lolos uji similarity Turnitin (14%) dan kelengkapan pedoman kepenulisan oleh Managing Editor.',
        completed: true,
      },
      {
        status: 'Under Review',
        title: 'Double-Blind Peer Review',
        date: '22 Januari 2026 - Sekarang',
        description: 'Dua orang reviewer pakar sedang mengevaluasi metodologi, kebaruan, dan validitas hasil penelitian.',
        completed: false,
        current: true,
      },
      {
        status: 'Revision Required',
        title: 'Tahap Perbaikan (Revisions)',
        date: 'Menunggu Reviewer',
        description: 'Penulis merespons catatan reviewer melalui matriks perbaikan.',
        completed: false,
      },
      {
        status: 'Accepted',
        title: 'Keputusan Editorial (Editorial Decision)',
        date: 'Menunggu',
        description: 'Editor in Chief menerbitkan Letter of Acceptance (LoA).',
        completed: false,
      },
      {
        status: 'Published',
        title: 'Penerbitan & DOI Assignment',
        date: 'Rencana Vol. 3 No. 1 (Mei 2026)',
        description: 'Naskah diterbitkan secara Open Access dan didaftarkan pada CrossRef DOI.',
        completed: false,
      },
    ],
  },
  'JSSHG-3301': {
    token: 'JSSHG-3301',
    title: 'Transformasi Identitas Kultural Generasi Z dalam Ekosistem Media Sosial Vertikal',
    journalId: 'jsshg',
    journalAcronym: 'JSSHG',
    journalName: 'Jurnal Studi Sosial dan Humaniora Garudaya',
    authorName: 'Nadia Safitri, M.A.',
    submittedDate: '02 Februari 2026',
    currentStatus: 'Revision Required',
    currentStepIndex: 3,
    statusNotes:
      'Reviewer merekomendasikan perbaikan minor pada pendalaman kerangka teori sosiologi dan penambahan data wawancara.',
    nextAction: 'Unggah file naskah revisi dan tabel respons komentar reviewer sebelum 28 Februari 2026 via portal OJS.',
    timeline: [
      {
        status: 'Submitted',
        title: 'Naskah Diterima',
        date: '02 Februari 2026',
        description: 'Pengajuan naskah awal via sistem OJS.',
        completed: true,
      },
      {
        status: 'Submitted',
        title: 'Pemeriksaan Awal & Plagiasi',
        date: '04 Februari 2026',
        description: 'Skor kesamaan 11%. Naskah dialihkan ke penelaah mitra bestari.',
        completed: true,
      },
      {
        status: 'Under Review',
        title: 'Telaah Sejawat (Peer Review)',
        date: '05 - 18 Februari 2026',
        description: 'Reviewer 1 dan Reviewer 2 telah menyampaikan catatan telaah.',
        completed: true,
      },
      {
        status: 'Revision Required',
        title: 'Perbaikan Diperlukan (Minor Revision)',
        date: '19 Februari 2026 - Sekarang',
        description: 'Editor telah mengirimkan formulir revisi ke email korespondensi.',
        completed: false,
        current: true,
      },
      {
        status: 'Accepted',
        title: 'Keputusan Editorial',
        date: 'Menunggu revisi',
        description: 'Evaluasi ulang naskah hasil perbaikan oleh Editor.',
        completed: false,
      },
      {
        status: 'Published',
        title: 'Publikasi Resmi',
        date: 'Rencana Vol. 3 No. 1 (Juni 2026)',
        description: 'Proses layouting dan penerbitan edisi Juni.',
        completed: false,
      },
    ],
  },
  'JPSPG-1108': {
    token: 'JPSPG-1108',
    title: 'Implementasi Pembelajaran Berdiferensiasi Berbantuan Augmented Reality di Sekolah Menengah',
    journalId: 'jpspg',
    journalAcronym: 'JPSPG',
    journalName: 'Jurnal Pendidikan dan Studi Pembelajaran Garudaya',
    authorName: 'Rahmat Hidayat, M.Pd.',
    submittedDate: '10 Desember 2025',
    currentStatus: 'Accepted',
    currentStepIndex: 4,
    statusNotes: 'Naskah telah diterima secara resmi untuk terbitan Volume 3 Nomor 1 (Maret 2026). LoA telah dikirimkan ke email penulis.',
    nextAction: 'Penulis diminta memeriksa draft layouting (Galley Proof PDF) yang dikirim tim produksi.',
    timeline: [
      {
        status: 'Submitted',
        title: 'Submission Received',
        date: '10 Desember 2025',
        description: 'Pengunggahan manuskrip awal.',
        completed: true,
      },
      {
        status: 'Submitted',
        title: 'Desk Screening',
        date: '14 Desember 2025',
        description: 'Turnitin similarity 9%, format sesuai template.',
        completed: true,
      },
      {
        status: 'Under Review',
        title: 'Double-Blind Review',
        date: '18 Desember 2025 - 15 Januari 2026',
        description: 'Telaah dua reviewer independen selesai dengan catatan minor.',
        completed: true,
      },
      {
        status: 'Revision Required',
        title: 'Revisions Completed',
        date: '22 Januari 2026',
        description: 'Penulis telah mengirimkan revisi dan disetujui reviewer.',
        completed: true,
      },
      {
        status: 'Accepted',
        title: 'Accepted for Publication',
        date: '28 Januari 2026',
        description: 'LoA resmi diterbitkan oleh Editor-in-Chief.',
        completed: true,
        current: true,
      },
      {
        status: 'Published',
        title: 'Final Production',
        date: 'Estimasi 25 Maret 2026',
        description: 'Proses copyediting & assigning Digital Object Identifier (DOI).',
        completed: false,
      },
    ],
  },
  'JBEMG-5520': {
    token: 'JBEMG-5520',
    title: 'Pengaruh Pengungkapan Green Banking terhadap Kinerja Keuangan Bank Komersial Terbuka',
    journalId: 'jbemg',
    journalAcronym: 'JBEMG',
    journalName: 'Jurnal Bisnis, Ekonomi, dan Manajemen Garudaya',
    authorName: 'Dewi Lestari, S.E., M.Si.',
    submittedDate: '01 September 2025',
    currentStatus: 'Published',
    currentStepIndex: 5,
    statusNotes: 'Artikel telah resmi terbit pada edisi Oktober 2025 dan terindeks di Crossref DOI serta Google Scholar.',
    nextAction: 'Penulis dapat mengunduh sertifikat publikasi dan file PDF final dari halaman OJS.',
    timeline: [
      {
        status: 'Submitted',
        title: 'Naskah Diterima',
        date: '01 September 2025',
        description: 'Submit via OJS JBEMG.',
        completed: true,
      },
      {
        status: 'Submitted',
        title: 'Pemeriksaan Format',
        date: '03 September 2025',
        description: 'Similarity check 12%.',
        completed: true,
      },
      {
        status: 'Under Review',
        title: 'Peer Review',
        date: '06 - 25 September 2025',
        description: 'Selesai direview dengan feedback positif.',
        completed: true,
      },
      {
        status: 'Revision Required',
        title: 'Revisi Selesai',
        date: '30 September 2025',
        description: 'Perbaikan penulisan formula ekonometrika.',
        completed: true,
      },
      {
        status: 'Accepted',
        title: 'Diterima',
        date: '05 Oktober 2025',
        description: 'LoA diterbitkan.',
        completed: true,
      },
      {
        status: 'Published',
        title: 'Resmi Dipublikasikan',
        date: '28 Oktober 2025',
        description: 'DOI: 10.59821/jbemg.v2i2.19, Open Access.',
        completed: true,
        current: true,
      },
    ],
  },
};

/**
 * Service abstraction for manuscript submission tracking.
 * When OJS API or custom backend is ready, replace this logic with:
 * return fetch(`/api/submissions/status?token=${encodeURIComponent(token)}`).then(r => r.json());
 */
export const submissionService = {
  /**
   * Look up submission status by Token or Manuscript ID
   */
  async getSubmissionStatus(token: string): Promise<SubmissionTrackingResult | null> {
    const cleanToken = token.trim().toUpperCase();

    // Simulated network delay for realistic experience
    return new Promise((resolve) => {
      setTimeout(() => {
        // Direct match
        if (MOCK_SUBMISSIONS[cleanToken]) {
          resolve(MOCK_SUBMISSIONS[cleanToken]);
          return;
        }

        // Fuzzy match by substring or partial ID
        const foundKey = Object.keys(MOCK_SUBMISSIONS).find((k) =>
          k.toUpperCase().includes(cleanToken) || cleanToken.includes(k.toUpperCase())
        );

        if (foundKey) {
          resolve(MOCK_SUBMISSIONS[foundKey]);
          return;
        }

        // Generate dynamic fallback record if token format looks plausible
        if (cleanToken.length >= 4) {
          const dynamicResult: SubmissionTrackingResult = {
            token: cleanToken,
            title: 'Analisis Komparatif Penerapan Riset Mutakhir pada Sektor Terkait',
            journalId: 'jstig',
            journalAcronym: 'GARUDAYA',
            journalName: 'Portal Jurnal Ilmiah Garudaya',
            authorName: 'Peneliti Terdaftar',
            submittedDate: '10 Februari 2026',
            currentStatus: 'Under Review',
            currentStepIndex: 2,
            statusNotes: `Naskah dengan ID [${cleanToken}] sedang dalam tahap telaah oleh dewan penelaah sejawat.`,
            nextAction: 'Silakan pantau email berkala Anda untuk pemberitahuan revisi atau keputusan editorial dari OJS.',
            timeline: [
              {
                status: 'Submitted',
                title: 'Naskah Diterima (Submission Received)',
                date: '10 Februari 2026',
                description: 'Berkas naskah terverifikasi masuk ke server portal.',
                completed: true,
              },
              {
                status: 'Submitted',
                title: 'Initial Screening & Similarity',
                date: '12 Februari 2026',
                description: 'Pengecekan kesesuaian ruang lingkup fokus jurnal.',
                completed: true,
              },
              {
                status: 'Under Review',
                title: 'Peer Review In Progress',
                date: 'Sedang berlangsung',
                description: 'Naskah dalam penilaian tim reviewer mitra bestari.',
                completed: false,
                current: true,
              },
              {
                status: 'Revision Required',
                title: 'Tahap Revisi Penulis',
                date: 'Akan ditentukan',
                description: 'Penulis merespons masukan dan masukan naskah.',
                completed: false,
              },
              {
                status: 'Accepted',
                title: 'Keputusan Dewan Editorial',
                date: 'Akan ditentukan',
                description: 'Penerbitan LoA (Letter of Acceptance).',
                completed: false,
              },
              {
                status: 'Published',
                title: 'Publikasi Resmi',
                date: 'Edisi Mendatang',
                description: 'Indexing dan penetapan nomor DOI.',
                completed: false,
              },
            ],
          };
          resolve(dynamicResult);
          return;
        }

        resolve(null);
      }, 350);
    });
  },

  /**
   * Get list of available demo tokens for easy testing
   */
  getDemoTokens(): Array<{ token: string; label: string; status: SubmissionStatusType }> {
    return [
      { token: 'GAR-2026-0042', label: 'JSTIG - Deep Learning (Sedang Direview)', status: 'Under Review' },
      { token: 'JSSHG-3301', label: 'JSSHG - Transformasi Budaya (Perlu Revisi)', status: 'Revision Required' },
      { token: 'JPSPG-1108', label: 'JPSPG - Inovasi Pedagogi (Diterima / LoA)', status: 'Accepted' },
      { token: 'JBEMG-5520', label: 'JBEMG - Green Banking (Telah Terbit)', status: 'Published' },
    ];
  },
};
