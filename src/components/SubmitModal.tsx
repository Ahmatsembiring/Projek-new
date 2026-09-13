import React from 'react';
import { X, ExternalLink, ArrowRight, CheckCircle2, BookOpen, AlertCircle } from 'lucide-react';
import { JOURNALS_DATA } from '../data/journals';
import { Link } from 'react-router-dom';

interface SubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedJournalId?: string;
}

export const SubmitModal: React.FC<SubmitModalProps> = ({
  isOpen,
  onClose,
  preselectedJournalId,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                OJS Manuscript Gateway
              </span>
            </div>
            <h3 className="text-xl font-bold font-serif">Kirim Naskah (Submit Manuscript)</h3>
            <p className="text-xs text-slate-300 mt-1">
              Pilih jurnal Garudaya tujuan untuk diarahkan ke formulir submission sistem OJS.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="bg-blue-50/80 border border-blue-200 rounded-xl p-3.5 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
            <div className="text-xs text-blue-900 leading-relaxed">
              <span className="font-semibold">Catatan Penulis:</span> Seluruh proses peer-review dan pengunggahan naskah dikelola melalui platform <strong>Open Journal Systems (OJS)</strong> resmi tiap jurnal Garudaya. Pastikan naskah telah mematuhi <em>Author Guidelines</em> dan batas kemiripan di bawah 20%.
            </div>
          </div>

          <div className="space-y-3 pt-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Pilih Jurnal Ilmiah Garudaya:
            </h4>

            <div className="grid grid-cols-1 gap-3">
              {JOURNALS_DATA.map((journal) => {
                const isSelected = preselectedJournalId === journal.id;
                return (
                  <div
                    key={journal.id}
                    className={`border rounded-xl p-4 transition-all hover:border-blue-300 hover:shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                      isSelected ? 'border-blue-500 bg-blue-50/30' : 'border-slate-200 bg-white'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span
                          className="px-2 py-0.5 text-xs font-bold rounded"
                          style={{
                            backgroundColor: `${journal.accentColor}15`,
                            color: journal.accentColor,
                          }}
                        >
                          {journal.acronym}
                        </span>
                        <h5 className="text-sm font-bold text-slate-900">{journal.name}</h5>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1">
                        Terbit: {journal.frequency} ({journal.frequencyMonths.join(', ')})
                      </p>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                      <Link
                        to={`/journals/${journal.id}`}
                        onClick={onClose}
                        className="text-xs font-medium text-slate-600 hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-100 transition text-center flex-1 sm:flex-none"
                      >
                        Petunjuk Penulis
                      </Link>
                      <a
                        href={journal.submitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg text-white transition shadow-sm flex-1 sm:flex-none"
                        style={{ backgroundColor: journal.accentColor }}
                      >
                        <span>Submit ke OJS</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Pre-submission Checklist */}
          <div className="mt-4 pt-4 border-t border-slate-100">
            <h5 className="text-xs font-semibold text-slate-700 mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Kelengkapan Sebelum Submit:
            </h5>
            <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
              <li>File naskah (.docx atau .pdf) telah disamarkan dari identitas penulis untuk double-blind review.</li>
              <li>File terpisah Title Page memuat nama lengkap, afiliasi, email korespondensi, dan ORCID.</li>
              <li>Hasil cek similarity Turnitin di bawah 20%.</li>
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <Link
            to="/publication"
            onClick={onClose}
            className="text-blue-700 hover:underline flex items-center gap-1 font-medium"
          >
            Pelajari alur lengkap publikasi 7 tahap
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium transition"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
