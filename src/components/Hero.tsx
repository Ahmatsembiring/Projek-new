import React from 'react';
import { Link } from 'react-router-dom';
import { UploadCloud, Compass, ArrowRight, ShieldCheck, FileCheck2, BookOpenCheck } from 'lucide-react';
import { AcademicIllustration } from './AcademicIllustration';

interface HeroProps {
  onOpenSubmitModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSubmitModal }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-slate-100/50 border-b border-slate-200/60 pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle academic background curves & accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-amber-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 right-10 w-80 h-80 bg-slate-200/40 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Academic Portal Institutional Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-900 text-xs font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span className="tracking-wide">Portal Publikasi Ilmiah & Riset Nasional</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-serif leading-tight">
                Jurnal Ilmiah <span className="text-blue-900">Garudaya</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-medium text-amber-700 italic font-serif">
                "Riset Berkualitas untuk Masa Depan yang Lebih Baik"
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Garudaya merupakan portal publikasi ilmiah yang mewadahi penelitian berkualitas dari berbagai bidang ilmu, teknologi, pendidikan, sosial, humaniora, bisnis, dan ekonomi.
            </p>

            {/* Quick Badges of Trust */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-slate-600 pt-1">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-700" />
                <span>Double-Blind Peer Review</span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <FileCheck2 className="w-4 h-4 text-amber-600" />
                <span>Open Access Repository</span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <BookOpenCheck className="w-4 h-4 text-emerald-600" />
                <span>Terintegrasi OJS</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-4">
              <button
                onClick={onOpenSubmitModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold bg-blue-900 text-white shadow-md shadow-blue-950/20 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              >
                <UploadCloud className="w-4 h-4 text-amber-400" />
                <span>Submit Manuscript</span>
              </button>

              <a
                href="#our-journals"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-white text-slate-800 border border-slate-300 shadow-xs hover:bg-slate-50 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              >
                <Compass className="w-4 h-4 text-blue-700" />
                <span>Jelajahi Jurnal</span>
              </a>
            </div>

            {/* Alternate Tagline subtle note */}
            <div className="pt-2 text-xs text-slate-500 text-center lg:text-left">
              <span>Garda Riset Untuk Pemuda Berdaya</span>
              <span className="mx-2">•</span>
              <Link to="/track-submission" className="text-blue-700 hover:underline font-semibold">
                Lacak Status Naskah Anda di sini &rarr;
              </Link>
            </div>
          </div>

          {/* Right Column: Academic Illustration Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <AcademicIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};
