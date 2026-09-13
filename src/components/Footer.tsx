import React from 'react';
import { Link } from 'react-router-dom';
import { GarudayaLogo } from './GarudayaLogo';
import { JOURNALS_DATA } from '../data/journals';
import {
  Mail,
  MapPin,
  ExternalLink,
  ShieldCheck,
  BookOpen,
  Send,
  Linkedin,
  Youtube,
  Instagram,
  FileText,
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Top Academic Credibility Strip */}
      <div className="border-b border-slate-800/80 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Standar Etika Publikasi: Committee on Publication Ethics (COPE) Guidelines</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Open Access Policy: CC BY-SA 4.0</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Crossref DOI Registered Publisher</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Col 1 & 2: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <GarudayaLogo variant="white" size="lg" showTagline={false} />

            <div className="pt-2">
              <p className="font-serif italic text-amber-300 text-sm font-medium">
                "Riset Berkualitas untuk Masa Depan yang Lebih Baik"
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Tagline Alternatif: <em>Garda Riset Untuk Pemuda Berdaya</em>
              </p>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Garudaya merupakan portal publikasi jurnal ilmiah terpercaya yang mengintegrasikan publikasi lintas disiplin: sains, teknologi, ilmu sosial, humaniora, pedagogi, bisnis, dan ekonomi guna mendorong kemajuan riset nasional dan global.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition"
                aria-label="Instagram Garudaya"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition"
                aria-label="LinkedIn Garudaya"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition"
                aria-label="YouTube Garudaya"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 font-sans border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition">
                  About Garudaya
                </Link>
              </li>
              <li>
                <Link to="/journals" className="text-slate-400 hover:text-white transition">
                  Journals Directory
                </Link>
              </li>
              <li>
                <Link to="/publication" className="text-slate-400 hover:text-white transition">
                  Publication Process
                </Link>
              </li>
              <li>
                <Link to="/track-submission" className="text-slate-400 hover:text-white transition">
                  Track Submission
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Garudaya Journals */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 font-sans border-b border-slate-800 pb-2">
              Garudaya Journals
            </h4>
            <ul className="space-y-2.5 text-xs">
              {JOURNALS_DATA.map((j) => (
                <li key={j.id}>
                  <Link
                    to={`/journals/${j.id}`}
                    className="group/link flex items-center justify-between text-slate-400 hover:text-white transition"
                  >
                    <span className="font-semibold text-slate-300 group-hover/link:text-amber-300">
                      {j.acronym}
                    </span>
                    <span className="text-[11px] text-slate-500">
                      {j.frequencyMonths[0]} & {j.frequencyMonths[1]}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={import.meta.env.VITE_OJS_BASE_URL || 'https://ojs.garudaya.example'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 transition"
                >
                  <span>Portal Gateway OJS</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Editorial Office Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 font-sans border-b border-slate-800 pb-2">
              Sekretariat Redaksi
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-slate-300">Email Korespondensi:</p>
                  <a
                    href="mailto:editor@garudaya.example"
                    className="text-slate-400 hover:text-white transition break-all"
                  >
                    editor@garudaya.example
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-slate-300">Kantor Publikasi:</p>
                  <p className="text-slate-400">
                    Kompleks Riset & Publikasi Ilmiah Garudaya, Indonesia
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/track-submission"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs font-semibold transition"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Cek Status Naskah Anda</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center sm:flex sm:items-center sm:justify-between text-xs text-slate-500">
          <p>© 2026 Garudaya (Jurnal Ilmiah Garudaya). All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Terintegrasi dengan Open Journal Systems (OJS) • Mengedepankan Integritas Ilmiah
          </p>
        </div>
      </div>
    </footer>
  );
};
