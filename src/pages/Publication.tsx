import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PublicationTimeline } from '../components/PublicationTimeline';
import {
  FileCheck2,
  Download,
  AlertCircle,
  HelpCircle,
  ShieldCheck,
  CheckCircle2,
  UploadCloud,
  ArrowRight,
} from 'lucide-react';
import { JOURNALS_DATA } from '../data/journals';

interface PublicationProps {
  onOpenSubmitModal: (journalId?: string) => void;
}

export const Publication: React.FC<PublicationProps> = ({ onOpenSubmitModal }) => {
  useEffect(() => {
    document.title = 'Alur Publikasi & Pedoman Naskah | Garudaya';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link to="/" className="hover:text-blue-900 transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-blue-900">Alur Publikasi</span>
          </div>

          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-bold uppercase tracking-wider">
              <span>Workflow & Guidelines</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900">
              Proses & Alur Publikasi Ilmiah Garudaya
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Panduan lengkap tata cara penyerahan naskah, proses telaah sejawat (peer-review), revisi, hingga penerbitan resmi secara Open Access melalui sistem Open Journal Systems (OJS).
            </p>
          </div>

          {/* OJS Architecture Note */}
          <div className="mt-4 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/90 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-950 leading-relaxed">
              <strong>Catatan Integrasi OJS:</strong> Portal web ini bertindak sebagai landing gateway resmi. Seluruh penyerahan berkas naskah, penugasan reviewer, dan tracking korespondensi detail terhubung dengan workflow standar <strong>Open Journal Systems (OJS)</strong> masing-masing jurnal Garudaya.
            </div>
          </div>
        </div>

        {/* 7-Step Interactive Timeline */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
              Tujuh Tahap Menuju Publikasi
            </h2>
            <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
              Klik tahapan untuk melihat detail petunjuk
            </span>
          </div>

          <PublicationTimeline isFullPage={true} onOpenSubmitModal={() => onOpenSubmitModal()} />
        </div>

        {/* Essential Author Criteria Box */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-serif">
              Format & Template Naskah
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Naskah ditulis dengan format spasi tunggal, font Times New Roman / Garamond 10-12pt, dan panjang 5.000 hingga 8.000 kata. Penulis wajib mengunduh template resmi pada OJS jurnal yang dituju.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-serif">
              Uji Kemiripan (Turnitin &lt; 20%)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Demi menjaga integritas ilmiah, naskah akan dicek menggunakan software Turnitin. Skor kesamaan teks maksimal adalah 20% (tidak termasuk daftar referensi).
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-serif">
              Manajemen Sitasi Standar
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Penulis diwajibkan menggunakan aplikasi manajer referensi seperti Mendeley atau Zotero. Minimal 80% rujukan adalah artikel jurnal bereputasi dari 5 tahun terakhir.
            </p>
          </div>
        </div>

        {/* Quick CTA */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold font-serif">Siap Mengirimkan Naskah Penelitian Anda?</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Pilih salah satu dari 4 jurnal ilmiah Garudaya untuk langsung mengakses sistem pengiriman naskah.
            </p>
          </div>
          <button
            onClick={() => onOpenSubmitModal()}
            className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition shrink-0 flex items-center gap-2"
          >
            <UploadCloud className="w-4 h-4 text-slate-950" />
            <span>Kirim Naskah (Submit)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
