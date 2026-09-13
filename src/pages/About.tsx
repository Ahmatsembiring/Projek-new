import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { JOURNALS_DATA } from '../data/journals';
import {
  Target,
  Compass,
  CheckCircle2,
  ShieldCheck,
  BookOpen,
  ArrowRight,
  ExternalLink,
  Users2,
  Scale,
  Sparkles,
} from 'lucide-react';

interface AboutProps {
  onOpenSubmitModal: (journalId?: string) => void;
}

export const About: React.FC<AboutProps> = ({ onOpenSubmitModal }) => {
  useEffect(() => {
    document.title = 'Tentang Garudaya | Portal Publikasi Ilmiah & Riset';
    window.scrollTo(0, 0);
  }, []);

  const missions = [
    'Mendorong publikasi penelitian berkualitas',
    'Mendukung kolaborasi akademik',
    'Menyediakan akses informasi ilmiah yang mudah',
    'Mendorong inovasi dan pemanfaatan ilmu pengetahuan',
    'Mendukung perkembangan peneliti muda',
  ];

  const commitments = [
    {
      title: 'Integritas Etika COPE',
      desc: 'Berpedoman penuh pada standar Committee on Publication Ethics guna mencegah plagiarisme, manipulasi data, dan konflik kepentingan.',
      icon: ShieldCheck,
    },
    {
      title: 'Akses Terbuka Murni (Open Access)',
      desc: 'Menerapkan lisensi Creative Commons Attribution-ShareAlike (CC BY-SA) demi kebermanfaatan riset tanpa hambatan paywall.',
      icon: BookOpen,
    },
    {
      title: 'Double-Blind Peer Review',
      desc: 'Menjaga objektivitas mutlak dengan merahasiakan identitas penulis dan reviewer di setiap tahap evaluasi substansi.',
      icon: Scale,
    },
    {
      title: 'Kesiapan Digital & OJS Archiving',
      desc: 'Struktur data siap OJS, terindeks DOI CrossRef, dan siap bermitra dengan repositori perpustakaan nasional serta internasional.',
      icon: Sparkles,
    },
  ];

  return (
    <div className="bg-white min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumb & Header */}
        <div className="border-b border-slate-200 pb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-3">
            <Link to="/" className="hover:text-blue-900 transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-blue-900">Tentang Kami</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-slate-900 tracking-tight">
            Tentang Garudaya
          </h1>
          <p className="mt-2 text-lg text-amber-700 italic font-serif">
            "Riset Berkualitas untuk Masa Depan yang Lebih Baik"
          </p>
          <p className="mt-1 text-xs text-slate-500 font-medium">
            Garda Riset Untuk Pemuda Berdaya
          </p>
        </div>

        {/* 1. Section: About Garudaya */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-bold uppercase tracking-wider">
              <span>Profil Institusi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 leading-snug">
              Wadah Terpercaya Publikasi Riset Multi-Disiplin
            </h2>
            <div className="prose text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                <strong>Garudaya</strong> merupakan portal publikasi ilmiah yang hadir sebagai wadah untuk mempertemukan peneliti, akademisi, mahasiswa, praktisi, dan masyarakat dalam berbagi pengetahuan dan hasil penelitian.
              </p>
              <p>
                Berdiri di atas semangat kemandirian riset dan kebebasan akademik, Garudaya memayungi 4 jurnal berkala ilmiah yang mengkhususkan diri pada bidang Sains & Teknologi (JSTIG), Studi Sosial & Humaniora (JSSHG), Pendidikan & Pembelajaran (JPSPG), serta Bisnis, Ekonomi & Manajemen (JBEMG).
              </p>
              <p>
                Setiap jurnal di dalam naungan Garudaya menerapkan tata kelola publikasi modern yang diselaraskan dengan arsitektur <em>Open Journal Systems (OJS)</em> dan standar akreditasi jurnal ilmiah nasional (ARJUNA).
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 shadow-xl border border-amber-500/20 space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Prinsip Dasar Garudaya
            </h3>
            <blockquote className="font-serif italic text-lg leading-relaxed text-slate-100">
              "Kami percaya bahwa penelitian yang bernilai adalah penelitian yang tidak terkunci di menara gading, melainkan mengalir dan memberi manfaat nyata bagi peradaban."
            </blockquote>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>Dewan Pembina Publikasi Garudaya</span>
              <span className="text-amber-400 font-mono">Est. 2026</span>
            </div>
          </div>
        </div>

        {/* 2 & 3. Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif text-slate-900">
                Visi Kami
              </h3>
              <p className="text-slate-700 text-base sm:text-lg font-serif italic leading-relaxed border-l-4 border-amber-500 pl-4 bg-white py-3 rounded-r-lg shadow-2xs">
                "Menjadi portal publikasi ilmiah yang terpercaya dalam mendukung perkembangan ilmu pengetahuan, inovasi, dan penelitian yang berdampak bagi masyarakat."
              </p>
            </div>
            <p className="text-xs text-slate-500 pt-2">
              Visi ini menjadi kompas bagi seluruh editor, reviewer, dan tim pengelola di bawah portal Garudaya.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-serif text-slate-900">
              Misi Kami
            </h3>
            <ul className="space-y-3 pt-1">
              {missions.map((m, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                  <span className="font-medium">{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 4. Section: Our Journals Ecosystem */}
        <div className="space-y-6 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              Empat Pilar Jurnal Ilmiah Garudaya
            </h2>
            <p className="text-slate-600 text-sm">
              Empat jurnal dengan fokus bidang yang jelas di bawah satu koordinasi penerbitan terstandar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {JOURNALS_DATA.map((j) => (
              <div
                key={j.id}
                className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs hover:shadow-md transition flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className="px-2.5 py-1 text-xs font-mono font-bold rounded"
                      style={{
                        backgroundColor: `${j.accentColor}15`,
                        color: j.accentColor,
                      }}
                    >
                      {j.acronym}
                    </span>
                    <span className="text-[11px] text-slate-400">2x Setahun</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-serif leading-snug">
                    {j.name}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                    {j.focus}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100">
                  <Link
                    to={`/journals/${j.id}`}
                    className="text-xs font-semibold text-blue-700 hover:underline flex items-center gap-1"
                  >
                    <span>Pelajari Jurnal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Section: Publication Commitment */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
              Komitmen Mutu & Integritas
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif">
              Standar Publikasi yang Kami Junjung Tinggi
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Kami menyadari bahwa reputasi ilmiah penulis bertumpu pada integritas jurnal tempat mereka mempublikasikan riset. Oleh karena itu, Garudaya menetapkan tata kelola yang transparan dan akuntabel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white font-serif">{c.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400">
              Tertarik untuk berkontribusi sebagai Reviewer atau Mitra Bestari?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300"
            >
              <span>Hubungi Sekretariat Editorial</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
