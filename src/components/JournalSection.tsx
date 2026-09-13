import React from 'react';
import { JOURNALS_DATA } from '../data/journals';
import { JournalCard } from './JournalCard';
import { BookOpenCheck, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface JournalSectionProps {
  onOpenSubmitModal: (journalId?: string) => void;
}

export const JournalSection: React.FC<JournalSectionProps> = ({ onOpenSubmitModal }) => {
  return (
    <section id="our-journals" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 text-blue-900 text-xs font-bold tracking-wide uppercase">
            <BookOpenCheck className="w-3.5 h-3.5 text-blue-700" />
            <span>Our Journals</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-serif">
            Jurnal Garudaya
          </h2>

          <p className="text-slate-600 text-sm sm:text-base">
            Temukan jurnal yang sesuai dengan bidang penelitian Anda.
          </p>
        </div>

        {/* 4 Journal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {JOURNALS_DATA.map((journal) => (
            <JournalCard
              key={journal.id}
              journal={journal}
              onOpenSubmitModal={onOpenSubmitModal}
            />
          ))}
        </div>

        {/* Bottom Gateway to OJS */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-slate-900">
              Mencari informasi spesifik dewan redaksi, template, dan nomor penerbitan terdahulu?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Setiap jurnal Garudaya dilengkapi dengan pedoman penulis (Author Guidelines) terstandar dan portal OJS mandiri.
            </p>
          </div>
          <Link
            to="/journals"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 transition shrink-0"
          >
            <span>Katalog Lengkap Jurnal</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
