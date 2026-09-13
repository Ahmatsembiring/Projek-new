import React from 'react';
import { BookOpen, FileCheck, Award, Sparkles, TrendingUp, Compass, Cpu, Users, GraduationCap } from 'lucide-react';

export const AcademicIllustration: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center p-4">
      {/* Decorative background aura rings */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-100/50 via-amber-50/40 to-slate-100/60 blur-2xl" />
      <div className="absolute w-[90%] h-[90%] rounded-full border border-slate-200/80 border-dashed animate-[spin_60s_linear_infinite]" />
      <div className="absolute w-[72%] h-[72%] rounded-full border border-blue-200/50" />

      {/* Centerpiece: Layered Academic Journal Papers */}
      <div className="relative z-10 w-72 sm:w-80 bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/90 p-6">
        {/* Header of paper mockup */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            <span className="text-[10px] font-bold tracking-wider uppercase text-slate-500 font-sans">
              GARUDAYA • OPEN ACCESS
            </span>
          </div>
          <span className="text-[10px] font-semibold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200">
            PEER REVIEWED
          </span>
        </div>

        {/* Paper title preview */}
        <div className="space-y-2 mb-4">
          <div className="h-3 w-4/5 bg-slate-800 rounded-sm"></div>
          <div className="h-3 w-3/5 bg-slate-800 rounded-sm"></div>
        </div>

        {/* Authors & DOI */}
        <div className="flex items-center gap-2 text-[10px] text-slate-400 mb-4 pb-3 border-b border-slate-100">
          <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
          <span>Garudaya Research Council</span>
          <span>•</span>
          <span className="font-mono text-[9px] text-blue-600 font-medium">doi.org/10.59821</span>
        </div>

        {/* Abstract paragraph representation */}
        <div className="space-y-1.5 mb-5">
          <div className="h-1.5 w-full bg-slate-200 rounded"></div>
          <div className="h-1.5 w-11/12 bg-slate-200 rounded"></div>
          <div className="h-1.5 w-4/5 bg-slate-200 rounded"></div>
          <div className="h-1.5 w-3/4 bg-slate-200 rounded"></div>
        </div>

        {/* Paper mini statistics / metadata footer */}
        <div className="grid grid-cols-3 gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-center">
          <div>
            <p className="text-[9px] text-slate-500 uppercase font-medium">Sitasi</p>
            <p className="text-xs font-bold text-slate-800 font-mono">1.8K+</p>
          </div>
          <div className="border-x border-slate-200">
            <p className="text-[9px] text-slate-500 uppercase font-medium">Unduhan</p>
            <p className="text-xs font-bold text-slate-800 font-mono">14.2K</p>
          </div>
          <div>
            <p className="text-[9px] text-slate-500 uppercase font-medium">Crossref</p>
            <p className="text-xs font-bold text-blue-700 font-mono">DOI ✓</p>
          </div>
        </div>
      </div>

      {/* Floating Badge 1: Top Right - Peer Review Certification */}
      <div className="absolute top-4 -right-2 sm:right-4 z-20 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-slate-200/90 flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
          <FileCheck className="w-5 h-5" />
        </div>
        <div>
          <p className="text-[11px] font-bold text-slate-800">Double-Blind Review</p>
          <p className="text-[10px] text-slate-500">Standar Etika Publikasi COPE</p>
        </div>
      </div>

      {/* Floating Badge 2: Bottom Left - Multidisciplinary Knowledge Hub */}
      <div className="absolute bottom-6 -left-2 sm:left-2 z-20 bg-slate-900 text-white rounded-xl p-3 shadow-xl border border-slate-700 flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
          <Award className="w-5 h-5" />
        </div>
        <div>
          <p className="text-[11px] font-bold text-white flex items-center gap-1">
            4 Jurnal Ilmiah
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
          </p>
          <p className="text-[10px] text-slate-300">Sains • Sosial • Edu • Bisnis</p>
        </div>
      </div>

      {/* Floating Mini Tags for the 4 Journals */}
      <div className="absolute top-1/2 -left-6 -translate-y-12 z-20 hidden sm:flex items-center gap-1.5 bg-white shadow-md border border-blue-200 text-blue-800 text-[11px] font-bold px-2.5 py-1.5 rounded-full">
        <Cpu className="w-3.5 h-3.5 text-blue-600" />
        <span>JSTIG</span>
      </div>

      <div className="absolute top-12 left-10 z-20 hidden sm:flex items-center gap-1.5 bg-white shadow-md border border-amber-200 text-amber-800 text-[11px] font-bold px-2.5 py-1.5 rounded-full">
        <Users className="w-3.5 h-3.5 text-amber-600" />
        <span>JSSHG</span>
      </div>

      <div className="absolute bottom-16 right-0 z-20 hidden sm:flex items-center gap-1.5 bg-white shadow-md border border-teal-200 text-teal-800 text-[11px] font-bold px-2.5 py-1.5 rounded-full">
        <GraduationCap className="w-3.5 h-3.5 text-teal-600" />
        <span>JPSPG</span>
      </div>

      <div className="absolute top-1/2 -right-6 translate-y-12 z-20 hidden sm:flex items-center gap-1.5 bg-white shadow-md border border-indigo-200 text-indigo-800 text-[11px] font-bold px-2.5 py-1.5 rounded-full">
        <TrendingUp className="w-3.5 h-3.5 text-indigo-600" />
        <span>JBEMG</span>
      </div>
    </div>
  );
};
