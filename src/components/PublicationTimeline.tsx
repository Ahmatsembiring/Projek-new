import React, { useState } from 'react';
import {
  FileUp,
  FileCheck,
  SearchCheck,
  FileEdit,
  Award,
  BookMarked,
  Globe,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface PublicationTimelineProps {
  isFullPage?: boolean;
  onOpenSubmitModal?: () => void;
}

export const PUBLICATION_STEPS = [
  {
    step: '01',
    name: 'Submit Manuscript',
    shortTitle: 'Submit',
    description:
      'Penulis mengunggah berkas naskah sesuai template naskah Garudaya melalui portal Open Journal Systems (OJS) jurnal tujuan.',
    details: [
      'Naskah berformat Microsoft Word (.docx) atau LaTeX.',
      'Menyertakan Title Page terpisah yang mencantumkan nama lengkap, afiliasi, dan korespondensi.',
      'Melampirkan surat pengantar (cover letter) dan pernyataan orisinalitas riset.',
    ],
    icon: FileUp,
    accent: 'border-blue-500 text-blue-600 bg-blue-50',
  },
  {
    step: '02',
    name: 'Initial Screening',
    shortTitle: 'Screening',
    description:
      'Pemeriksaan kepatuhan ruang lingkup fokus (scope check), format penulisan, dan uji kemiripan (Turnitin) maksimal 20%.',
    details: [
      'Pemeriksaan kesesuaian ruang lingkup artikel dengan fokus jurnal.',
      'Uji Turnitin similarity index < 20% (di luar bibliografi dan rumus umum).',
      'Keputusan desk review oleh Managing Editor dalam waktu 3-7 hari kerja.',
    ],
    icon: FileCheck,
    accent: 'border-amber-500 text-amber-600 bg-amber-50',
  },
  {
    step: '03',
    name: 'Peer Review',
    shortTitle: 'Review',
    description:
      'Naskah dievaluasi secara Double-Blind oleh minimal 2 mitra bestari (peer reviewers) independen yang kompeten di bidangnya.',
    details: [
      'Identitas penulis dan reviewer saling disamarkan.',
      'Aspek penilaian: kebaruan (novelty), metodologi, analisis temuan, dan kontribusi ilmiah.',
      'Waktu telaah reviewer rata-rata 3 hingga 4 minggu.',
    ],
    icon: SearchCheck,
    accent: 'border-teal-500 text-teal-600 bg-teal-50',
  },
  {
    step: '04',
    name: 'Revision',
    shortTitle: 'Revision',
    description:
      'Penulis melakukan perbaikan naskah berdasarkan catatan reviewer disertai tabel responses to reviewers.',
    details: [
      'Penulis mengunggah draft revisi dengan highlighting perubahan.',
      'Wajib menyertakan Response Matrix (tabel jawaban terperinci atas tiap saran reviewer).',
      'Batas waktu perbaikan berkisar 2-4 minggu sesuai tingkat revisi (minor / major).',
    ],
    icon: FileEdit,
    accent: 'border-indigo-500 text-indigo-600 bg-indigo-50',
  },
  {
    step: '05',
    name: 'Editorial Decision',
    shortTitle: 'Decision',
    description:
      'Editor in Chief menetapkan keputusan akhir: Diterima (Accepted), Revisi Lanjutan, atau Ditolak (Rejected).',
    details: [
      'Pertimbangan didasarkan pada laporan tertulis seluruh reviewer.',
      'Bagi naskah yang disetujui, diterbitkan Letter of Acceptance (LoA) resmi.',
      'Keputusan bersifat final dan transparan.',
    ],
    icon: Award,
    accent: 'border-emerald-500 text-emerald-600 bg-emerald-50',
  },
  {
    step: '06',
    name: 'Copyediting & Layout',
    shortTitle: 'Copyediting',
    description:
      'Pemeriksaan bahasa akademik (proofreading), tata letak standar jurnal, dan penetapan nomor Digital Object Identifier (DOI).',
    details: [
      'Penyelarasan tata bahasa akademik (Indonesia/Inggris).',
      'Pembuatan file final Galley Proof PDF oleh Layout Editor.',
      'Pengecekan akhir oleh penulis sebelum publikasi (Author Proofing).',
    ],
    icon: BookMarked,
    accent: 'border-purple-500 text-purple-600 bg-purple-50',
  },
  {
    step: '07',
    name: 'Publication',
    shortTitle: 'Publication',
    description:
      'Artikel diterbitkan secara resmi dalam terbitan online Garudaya dengan akses terbuka (Open Access) dan metadata CrossRef.',
    details: [
      'Penerbitan secara daring di website OJS jurnal masing-masing.',
      'Aktivasi metadata DOI resmi CrossRef.',
      'Pengindeksan otomatis ke Google Scholar, Garuda, dan basis data akademik mitra.',
    ],
    icon: Globe,
    accent: 'border-blue-600 text-blue-700 bg-blue-50',
  },
];

export const PublicationTimeline: React.FC<PublicationTimelineProps> = ({
  isFullPage = false,
  onOpenSubmitModal,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  // If compact on homepage, show 5 core phases: Submit, Review, Revision, Decision, Publication
  const homepageSteps = [
    PUBLICATION_STEPS[0], // 01 Submit
    PUBLICATION_STEPS[2], // 03 Review
    PUBLICATION_STEPS[3], // 04 Revision
    PUBLICATION_STEPS[4], // 05 Decision
    PUBLICATION_STEPS[6], // 07 Publication
  ];

  if (!isFullPage) {
    return (
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider">
              <span>Alur Kerja Publikasi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-serif">
              Publication Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Alur penanganan naskah terstandar dari pengunggahan hingga penerbitan resmi di sistem OJS Garudaya.
            </p>
          </div>

          {/* 5-Step Compact Horizontal Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {homepageSteps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:shadow-md transition relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-extrabold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {s.step}
                      </span>
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center border ${s.accent}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 font-serif mb-2">
                      {s.shortTitle}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {s.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-[11px] font-semibold text-blue-700">
                    <span>Tahap {idx + 1} dari 5</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/publication"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 hover:border-slate-400 transition"
            >
              <span>Lihat Detail Alur 7 Tahap Publikasi & Template Naskah</span>
              <ArrowRight className="w-4 h-4 text-blue-600" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // Full 7-Step Interactive View for /publication page
  return (
    <div className="space-y-12">
      {/* 7-Step Navigation Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
        {PUBLICATION_STEPS.map((s, idx) => {
          const isCurrent = activeStep === idx;
          const Icon = s.icon;
          return (
            <button
              key={s.step}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-xl text-left border transition flex flex-col gap-2 ${
                isCurrent
                  ? 'bg-blue-900 text-white border-blue-950 shadow-md ring-2 ring-blue-500/20'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span
                  className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                    isCurrent ? 'bg-blue-800 text-amber-300' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {s.step}
                </span>
                <Icon className={`w-4 h-4 ${isCurrent ? 'text-amber-400' : 'text-slate-400'}`} />
              </div>
              <p className="text-xs font-bold truncate leading-tight">{s.name}</p>
            </button>
          );
        })}
      </div>

      {/* Selected Step Spotlight Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-blue-50 text-blue-700 text-xs font-mono font-bold">
                LANGKAH KE-{PUBLICATION_STEPS[activeStep].step}
              </span>
              <span className="text-xs text-slate-400">Terintegrasi Standar Workflow OJS</span>
            </div>
            <h3 className="text-2xl font-bold font-serif text-slate-900">
              {PUBLICATION_STEPS[activeStep].name}
            </h3>
            <p className="text-sm text-slate-600 max-w-2xl">
              {PUBLICATION_STEPS[activeStep].description}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {activeStep > 0 && (
              <button
                onClick={() => setActiveStep((prev) => prev - 1)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
              >
                &larr; Tahap Sebelumnya
              </button>
            )}
            {activeStep < PUBLICATION_STEPS.length - 1 ? (
              <button
                onClick={() => setActiveStep((prev) => prev + 1)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-900 hover:bg-blue-800 text-white transition flex items-center gap-1.5"
              >
                <span>Tahap Berikutnya</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              onOpenSubmitModal && (
                <button
                  onClick={onOpenSubmitModal}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition flex items-center gap-1.5"
                >
                  <span>Submit Naskah Sekarang</span>
                  <FileUp className="w-3.5 h-3.5" />
                </button>
              )
            )}
          </div>
        </div>

        {/* Detailed Guidelines for the Active Step */}
        <div className="mt-6 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Checklist & Ketentuan Operasional Tahap Ini:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PUBLICATION_STEPS[activeStep].details.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-3"
              >
                <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
