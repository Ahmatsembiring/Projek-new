import React from 'react';
import { UploadCloud, FileText, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  onOpenSubmitModal: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenSubmitModal }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 text-white py-16 sm:py-20">
      {/* Decorative ambient glowing circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 backdrop-blur-xs border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-14 text-center max-w-4xl mx-auto shadow-2xl">
          {/* Section badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-bold tracking-wide uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span>Call for Papers 2026</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif tracking-tight text-white mb-3">
            Have research to publish?
          </h2>

          <p className="text-lg sm:text-xl text-amber-300/90 font-serif italic mb-6">
            "Submit your manuscript to Garudaya."
          </p>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Bergabunglah bersama ribuan peneliti dan akademisi terkemuka. Publikasikan karya ilmiah Anda di salah satu dari 4 jurnal Garudaya dengan tata kelola profesional, review yang mendalam, dan keterbukaan akses penuh.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenSubmitModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 transition focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              <UploadCloud className="w-5 h-5 text-slate-950" />
              <span>Submit Manuscript</span>
            </button>

            <Link
              to="/publication"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition"
            >
              <FileText className="w-4 h-4 text-slate-300" />
              <span>Panduan Penulisan</span>
            </Link>
          </div>

          {/* Bottom assurance notes */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Peer-Reviewed Quality</span>
            </div>
            <span className="text-white/20">•</span>
            <div>Fast-track Initial Screening (3-7 hari)</div>
            <span className="text-white/20">•</span>
            <Link to="/contact" className="hover:text-white transition underline">
              Butuh bantuan korespondensi?
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
