import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getJournalById } from '../data/journals';
import {
  ExternalLink,
  UploadCloud,
  Layers,
  Calendar,
  BookOpen,
  Award,
  Users,
  FileText,
  ShieldCheck,
  Search,
  CheckCircle2,
  Download,
  AlertCircle,
  Building2,
  FileCheck2,
} from 'lucide-react';

interface JournalDetailProps {
  onOpenSubmitModal: (journalId?: string) => void;
}

type TabKey =
  | 'about'
  | 'focus-scope'
  | 'editorial-team'
  | 'author-guidelines'
  | 'publication-ethics'
  | 'peer-review'
  | 'current-issue'
  | 'archives';

export const JournalDetail: React.FC<JournalDetailProps> = ({ onOpenSubmitModal }) => {
  const { journalId } = useParams<{ journalId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabKey>('about');

  const journal = journalId ? getJournalById(journalId) : undefined;

  useEffect(() => {
    if (journal) {
      document.title = `${journal.acronym} - ${journal.name} | Garudaya`;
    } else {
      document.title = 'Jurnal Tidak Ditemukan | Garudaya';
    }
    window.scrollTo(0, 0);
  }, [journal]);

  if (!journal) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-6 bg-slate-50">
        <div className="text-center bg-white p-8 rounded-2xl border border-slate-200 max-w-md shadow-sm space-y-4">
          <AlertCircle className="w-12 h-12 text-amber-500 mx-auto" />
          <h2 className="text-xl font-bold text-slate-900">Jurnal Tidak Ditemukan</h2>
          <p className="text-xs text-slate-500">
            Jurnal ilmiah dengan kode ID <strong>"{journalId}"</strong> tidak terdaftar dalam sistem portal Garudaya.
          </p>
          <Link
            to="/journals"
            className="inline-flex px-4 py-2 text-xs font-bold bg-blue-900 text-white rounded-xl"
          >
            Kembali ke Direktori Jurnal
          </Link>
        </div>
      </div>
    );
  }

  const tabs: Array<{ key: TabKey; label: string }> = [
    { key: 'about', label: 'About' },
    { key: 'focus-scope', label: 'Focus & Scope' },
    { key: 'editorial-team', label: 'Editorial Team' },
    { key: 'author-guidelines', label: 'Author Guidelines' },
    { key: 'publication-ethics', label: 'Publication Ethics' },
    { key: 'peer-review', label: 'Peer Review Process' },
    { key: 'current-issue', label: 'Current Issue' },
    { key: 'archives', label: 'Archives' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link to="/" className="hover:text-blue-900 transition">
            Home
          </Link>
          <span>/</span>
          <Link to="/journals" className="hover:text-blue-900 transition">
            Journals
          </Link>
          <span>/</span>
          <span className="text-blue-900 font-bold">{journal.acronym}</span>
        </div>

        {/* 1. Header Jurnal (As requested in Section 8) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm relative overflow-hidden">
          {/* Top color bar */}
          <div
            className="absolute top-0 left-0 right-0 h-2"
            style={{ backgroundColor: journal.accentColor }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              {/* Acronym, Open Access, Frequency Badge */}
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="px-3 py-1 text-xs font-extrabold uppercase rounded-lg border font-mono tracking-wider"
                  style={{
                    backgroundColor: `${journal.accentColor}15`,
                    color: journal.accentColor,
                    borderColor: `${journal.accentColor}30`,
                  }}
                >
                  {journal.acronym}
                </span>
                <span className="px-2.5 py-1 text-xs font-semibold rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Open Access
                </span>
                <span className="px-2.5 py-1 text-xs font-semibold rounded bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>{journal.frequency} ({journal.frequencyMonths.join(', ')})</span>
                </span>
              </div>

              {/* Full Journal Name */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif text-slate-900 leading-tight">
                {journal.name}
              </h1>

              {/* Focus statement */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {journal.focus}
              </p>

              {/* Metadata strip: ISSN, Frequency, Publisher */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100 text-xs">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <span className="text-slate-400 block font-medium uppercase text-[10px]">
                    Identitas ISSN
                  </span>
                  <span className="font-mono font-bold text-slate-800 mt-0.5 block">
                    e-ISSN: {journal.eIssn}
                  </span>
                  <span className="font-mono text-slate-500 text-[11px] block">
                    p-ISSN: {journal.pIssn}
                  </span>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <span className="text-slate-400 block font-medium uppercase text-[10px]">
                    Penerbit (Publisher)
                  </span>
                  <span className="font-bold text-slate-800 mt-0.5 block line-clamp-1">
                    {journal.publisher}
                  </span>
                  <span className="text-slate-500 text-[11px] block">
                    Bahasa: {journal.language}
                  </span>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <span className="text-slate-400 block font-medium uppercase text-[10px]">
                    Volume Terbitan
                  </span>
                  <span className="font-bold text-slate-800 mt-0.5 block">
                    Min. {journal.minimumArticlesPerIssue} Artikel / Issue
                  </span>
                  <span className="text-slate-500 text-[11px] block">
                    Bulan: {journal.frequencyMonths.join(' & ')}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Action Box: CTAs */}
            <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Aksi Cepat Penulis & Pembaca
              </h3>

              <div className="space-y-2.5">
                {/* Submit Manuscript CTA */}
                <button
                  onClick={() => onOpenSubmitModal(journal.id)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-blue-900 text-white hover:bg-blue-800 shadow-md shadow-blue-900/20 transition"
                >
                  <UploadCloud className="w-4 h-4 text-amber-400" />
                  <span>Submit Manuscript</span>
                </button>

                {/* Visit OJS CTA */}
                <a
                  href={journal.ojsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-white text-slate-800 border border-slate-300 hover:bg-slate-100 transition shadow-2xs"
                >
                  <span>Visit OJS Gateway</span>
                  <ExternalLink className="w-4 h-4 text-blue-700" />
                </a>
              </div>

              {/* Indexing badges */}
              <div className="pt-2 border-t border-slate-200/80">
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-2">
                  Basis Data Terindeks:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {journal.indexing.map((idx, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[11px] rounded bg-white border border-slate-200 text-slate-700 font-medium"
                    >
                      {idx}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Tabs Navigation (Section 8: About, Focus & Scope, Editorial Team, Author Guidelines, Publication Ethics, Peer Review Process, Current Issue, Archives) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-2 shadow-2xs overflow-x-auto">
          <div className="flex items-center gap-1 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
                  activeTab === tab.key
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Tab Contents */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm min-h-[400px]">
          {/* TAB 1: About */}
          {activeTab === 'about' && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-xl font-bold font-serif text-slate-900">
                  Tentang {journal.name} ({journal.acronym})
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Bagian dari klaster publikasi ilmiah berkala resmi di bawah Garudaya.
                </p>
              </div>

              <div className="prose text-slate-600 text-sm leading-relaxed space-y-4 max-w-none">
                <p>{journal.focus}</p>
                <p>
                  <strong>{journal.name}</strong> diterbitkan secara berkala{' '}
                  <strong>{journal.frequency}</strong>, yaitu pada bulan{' '}
                  <strong>{journal.frequencyMonths.join(' dan ')}</strong> oleh{' '}
                  <strong>{journal.publisher}</strong>. Setiap terbitan memuat sekurang-kurangnya{' '}
                  <strong>{journal.minimumArticlesPerIssue} artikel penelitian</strong> bermutu tinggi.
                </p>
                <p>
                  Seluruh naskah yang diterbitkan berstatus <strong>Open Access</strong> dan
                  diberikan nomor registrasi digital permanen <strong>DOI (Crossref)</strong> untuk
                  menjamin kemudahan sitasi dan pengindeksan oleh basis data internasional.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h4 className="text-xs font-bold text-slate-800 uppercase">Jadwal Penerbitan</h4>
                  <p className="text-sm font-semibold text-blue-900 mt-1">
                    Bulan {journal.frequencyMonths.join(' & ')}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">2 Nomor dalam 1 Volume tahunan</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h4 className="text-xs font-bold text-slate-800 uppercase">Kebijakan Akses</h4>
                  <p className="text-sm font-semibold text-emerald-800 mt-1">
                    Open Access (Gratis Diunduh)
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">Lisensi Creative Commons CC BY-SA</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h4 className="text-xs font-bold text-slate-800 uppercase">Sistem Pengelolaan</h4>
                  <p className="text-sm font-semibold text-slate-800 mt-1">
                    Open Journal Systems (OJS)
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">Workflow terstandar PKP</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Focus & Scope */}
          {activeTab === 'focus-scope' && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-xl font-bold font-serif text-slate-900">
                  Fokus dan Ruang Lingkup Riset (Focus & Scope)
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Area dan cabang keilmuan yang diprioritaskan untuk publikasi di {journal.acronym}.
                </p>
              </div>

              <div className="bg-blue-50/60 border border-blue-200 p-4 rounded-2xl">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-1">
                  Pernyataan Fokus Utama:
                </h4>
                <p className="text-sm text-blue-950 leading-relaxed font-medium">
                  "{journal.focus}"
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-3">
                  Bidang Cakupan Keilmuan ({journal.acronym}):
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {journal.scope.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3"
                    >
                      <div
                        className="w-2.5 h-2.5 rounded-full mt-1.5 shrink-0"
                        style={{ backgroundColor: journal.accentColor }}
                      />
                      <div>
                        <p className="text-sm font-semibold text-slate-800">{item}</p>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Menerima riset eksperimental, konseptual mendalam, maupun kajian komparatif.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Editorial Team */}
          {activeTab === 'editorial-team' && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-xl font-bold font-serif text-slate-900">
                  Dewan Redaksi (Editorial Team)
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Struktur kepengurusan dewan editor {journal.name}.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {journal.editorialTeam.map((member, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:bg-white hover:shadow-xs transition"
                  >
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-800 bg-blue-100 px-2.5 py-0.5 rounded">
                      {member.role}
                    </span>
                    <h4 className="text-base font-bold text-slate-900">{member.name}</h4>
                    <p className="text-xs text-slate-600">{member.institution}</p>
                    {member.country && (
                      <p className="text-xs text-slate-400">Negara: {member.country}</p>
                    )}
                    {(member.scopusId || member.orcid) && (
                      <div className="pt-2 flex items-center gap-3 text-[11px] font-mono text-slate-500 border-t border-slate-200/60">
                        {member.scopusId && <span>Scopus: {member.scopusId}</span>}
                        {member.orcid && <span>ORCID: {member.orcid}</span>}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
                <strong>Ingin bergabung sebagai Reviewer?</strong> Kami selalu membuka peluang bagi dosen dan periset bergelar Master/Doktor untuk menjadi mitra bestari. Silakan hubungi sekretariat melalui formulir kontak.
              </div>
            </div>
          )}

          {/* TAB 4: Author Guidelines */}
          {activeTab === 'author-guidelines' && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold font-serif text-slate-900">
                    Petunjuk Penulis (Author Guidelines)
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Pedoman teknis penyiapan naskah sebelum dikirim ke sistem OJS.
                  </p>
                </div>
                <a
                  href={journal.submitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-blue-900 transition shrink-0"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh Template Naskah (.docx)</span>
                </a>
              </div>

              <div className="space-y-3">
                {journal.authorGuidelinesSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5"
                  >
                    <span className="w-6 h-6 rounded-full bg-blue-900 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: Publication Ethics */}
          {activeTab === 'publication-ethics' && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-xl font-bold font-serif text-slate-900">
                  Etika Publikasi Ilmiah (Publication Ethics)
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Standar integritas dan komitmen anti-malpraktik akademik {journal.acronym}.
                </p>
              </div>

              <div className="space-y-3">
                {journal.publicationEthicsPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3"
                  >
                    <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: Peer Review Process */}
          {activeTab === 'peer-review' && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-xl font-bold font-serif text-slate-900">
                  Proses Telaah Sejawat (Peer Review Process)
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Mekanisme evaluasi naskah oleh mitra bestari independen.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 text-sm text-blue-950 leading-relaxed">
                {journal.peerReviewText}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="text-xs font-bold text-slate-800">Double-Blind Review</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Identitas penulis dan reviewer saling dirahasiakan untuk mencegah bias reputasi atau afiliasi.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="text-xs font-bold text-slate-800">2 Reviewer Independen</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Naskah dievaluasi oleh setidaknya dua orang pakar dengan rekam jejak publikasi relevan.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="text-xs font-bold text-slate-800">Durasi Evaluasi</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Rata-rata waktu telaah putaran pertama berkisar antara 3 sampai 4 pekan kerja.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: Current Issue */}
          {activeTab === 'current-issue' && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold font-serif text-slate-900">
                    Nomor Terbitan Terkini (Current Issue)
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Volume {journal.currentIssue?.volume}, Nomor {journal.currentIssue?.issue} (
                    {journal.currentIssue?.month} {journal.currentIssue?.year})
                  </p>
                </div>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800 self-start">
                  Online First • Open Access
                </span>
              </div>

              {journal.currentIssue ? (
                <div className="space-y-4">
                  {journal.currentIssue.articles.map((article) => (
                    <div
                      key={article.id}
                      className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 hover:border-blue-300 hover:bg-white transition"
                    >
                      <h4 className="text-base font-bold text-slate-900 leading-snug">
                        {article.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                        <span className="font-semibold text-slate-700">
                          {article.authors.join(', ')}
                        </span>
                        <span>•</span>
                        <span>Halaman: {article.pages}</span>
                        <span>•</span>
                        <span className="font-mono text-blue-700 font-medium">
                          DOI: {article.doi}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                        {article.abstract}
                      </p>
                      <div className="pt-2 flex items-center gap-3">
                        <a
                          href={journal.ojsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold text-blue-700 hover:underline inline-flex items-center gap-1"
                        >
                          <span>Unduh Full PDF via OJS</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-500">Belum ada artikel pada nomor ini.</p>
              )}
            </div>
          )}

          {/* TAB 8: Archives */}
          {activeTab === 'archives' && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-xl font-bold font-serif text-slate-900">
                  Arsip Terbitan (Archives)
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Riwayat edisi dan terbitan masa lalu {journal.acronym}.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-mono font-bold text-blue-700">Vol. 3 No. 1 (2026)</span>
                  <h4 className="text-sm font-bold text-slate-800">Edisi Berjalan Saat Ini</h4>
                  <p className="text-xs text-slate-500">Status: Published (Open Access)</p>
                  <a
                    href={journal.ojsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-blue-700 hover:underline flex items-center gap-1 pt-2"
                  >
                    <span>Buka Arsip di OJS</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-mono font-bold text-slate-600">Vol. 2 No. 2 (2025)</span>
                  <h4 className="text-sm font-bold text-slate-800">Edisi Semester Genap 2025</h4>
                  <p className="text-xs text-slate-500">6 Artikel Terindeks</p>
                  <a
                    href={journal.ojsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-blue-700 hover:underline flex items-center gap-1 pt-2"
                  >
                    <span>Buka Arsip di OJS</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-mono font-bold text-slate-600">Vol. 2 No. 1 (2025)</span>
                  <h4 className="text-sm font-bold text-slate-800">Edisi Semester Ganjil 2025</h4>
                  <p className="text-xs text-slate-500">5 Artikel Terindeks</p>
                  <a
                    href={journal.ojsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-blue-700 hover:underline flex items-center gap-1 pt-2"
                  >
                    <span>Buka Arsip di OJS</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
