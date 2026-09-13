import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { JOURNALS_DATA } from '../data/journals';
import { JournalCard } from '../components/JournalCard';
import { Search, Filter, BookOpen, Layers } from 'lucide-react';

interface JournalsProps {
  onOpenSubmitModal: (journalId?: string) => void;
}

export const Journals: React.FC<JournalsProps> = ({ onOpenSubmitModal }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedField, setSelectedField] = useState<string>('all');

  useEffect(() => {
    document.title = 'Direktori Jurnal Garudaya | JSTIG, JSSHG, JPSPG, JBEMG';
    window.scrollTo(0, 0);
  }, []);

  const filteredJournals = JOURNALS_DATA.filter((j) => {
    const matchesSearch =
      j.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      j.acronym.toLowerCase().includes(searchQuery.toLowerCase()) ||
      j.focus.toLowerCase().includes(searchQuery.toLowerCase()) ||
      j.scope.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesField =
      selectedField === 'all' || j.id === selectedField;

    return matchesSearch && matchesField;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link to="/" className="hover:text-blue-900 transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-blue-900">Direktori Jurnal</span>
          </div>

          <div className="max-w-3xl space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900">
              Direktori Jurnal Ilmiah Garudaya
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Pilih jurnal yang sesuai dengan bidang keilmuan dan fokus riset Anda. Seluruh jurnal terbit berkala 2 kali dalam setahun dan menggunakan sistem telaah sejawat tertutup ganda (Double-Blind Peer Review).
            </p>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="pt-4 grid grid-cols-1 md:grid-cols-12 gap-3">
            <div className="md:col-span-8 relative">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari berdasarkan nama jurnal, akronim, fokus, atau topik riset (e.g. AI, Hukum, Pedagogi)..."
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
              />
            </div>

            <div className="md:col-span-4 flex items-center gap-2">
              <select
                value={selectedField}
                onChange={(e) => setSelectedField(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
              >
                <option value="all">Semua Bidang Keilmuan (4 Jurnal)</option>
                <option value="jstig">JSTIG - Sains & Teknologi</option>
                <option value="jsshg">JSSHG - Sosial & Humaniora</option>
                <option value="jpspg">JPSPG - Pendidikan & Pedagogi</option>
                <option value="jbemg">JBEMG - Bisnis, Ekonomi & Manajemen</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Menampilkan {filteredJournals.length} Jurnal Ilmiah
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs font-semibold text-blue-700 hover:underline"
              >
                Reset Pencarian
              </button>
            )}
          </div>

          {filteredJournals.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredJournals.map((journal) => (
                <JournalCard
                  key={journal.id}
                  journal={journal}
                  onOpenSubmitModal={onOpenSubmitModal}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 space-y-3">
              <BookOpen className="w-10 h-10 text-slate-400 mx-auto" />
              <h3 className="text-base font-bold text-slate-800">
                Tidak ada jurnal yang sesuai dengan kata kunci "{searchQuery}"
              </h3>
              <p className="text-xs text-slate-500">
                Coba gunakan kata kunci umum seperti teknologi, sosial, pendidikan, atau akuntansi.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedField('all');
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-900 text-white"
              >
                Tampilkan Semua Jurnal
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
