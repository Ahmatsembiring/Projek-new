import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GarudayaLogo } from './GarudayaLogo';
import { JOURNALS_DATA } from '../data/journals';
import {
  Menu,
  X,
  ChevronDown,
  UploadCloud,
  Search,
  BookOpen,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

interface NavbarProps {
  onOpenSubmitModal: (journalId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSubmitModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [journalsDropdownOpen, setJournalsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setJournalsDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5'
          : 'bg-white border-b border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <Link to="/" className="group transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg">
            <GarudayaLogo size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${
                isActive('/') && location.pathname === '/'
                  ? 'text-blue-900 bg-blue-50/80'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${
                isActive('/about')
                  ? 'text-blue-900 bg-blue-50/80'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              About
            </Link>

            {/* Journals Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setJournalsDropdownOpen(true)}
              onMouseLeave={() => setJournalsDropdownOpen(false)}
            >
              <button
                onClick={() => setJournalsDropdownOpen((prev) => !prev)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition ${
                  isActive('/journals')
                    ? 'text-blue-900 bg-blue-50/80'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
                aria-expanded={journalsDropdownOpen}
              >
                <span>Journals</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    journalsDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Dropdown Menu Box */}
              {journalsDropdownOpen && (
                <div className="absolute left-0 top-full pt-1 w-80 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-200/90 p-2 space-y-1">
                    <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Garudaya Journal Series
                      </span>
                      <Link
                        to="/journals"
                        className="text-[11px] font-semibold text-blue-700 hover:underline"
                      >
                        Semua Jurnal
                      </Link>
                    </div>

                    {JOURNALS_DATA.map((j) => (
                      <Link
                        key={j.id}
                        to={`/journals/${j.id}`}
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition group/item"
                      >
                        <span
                          className="px-2 py-0.5 text-[11px] font-extrabold rounded mt-0.5 shrink-0"
                          style={{
                            backgroundColor: `${j.accentColor}18`,
                            color: j.accentColor,
                          }}
                        >
                          {j.acronym}
                        </span>
                        <div>
                          <p className="text-xs font-bold text-slate-800 group-hover/item:text-blue-700 transition">
                            {j.name}
                          </p>
                          <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                            Terbit: {j.frequencyMonths.join(' & ')}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/publication"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${
                isActive('/publication')
                  ? 'text-blue-900 bg-blue-50/80'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              Publication
            </Link>

            <Link
              to="/track-submission"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-1.5 ${
                isActive('/track-submission')
                  ? 'text-blue-900 bg-blue-50/80'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              <Search className="w-3.5 h-3.5 text-blue-600" />
              <span>Track Submission</span>
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${
                isActive('/contact')
                  ? 'text-blue-900 bg-blue-50/80'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button & Mobile Hamburger Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenSubmitModal()}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-950 text-white shadow-sm hover:shadow hover:from-blue-800 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            >
              <UploadCloud className="w-4 h-4 text-amber-400" />
              <span>Submit Manuscript</span>
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            <Link
              to="/"
              className={`block px-3 py-2.5 rounded-lg text-sm font-semibold ${
                isActive('/') && location.pathname === '/'
                  ? 'text-blue-900 bg-blue-50'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`block px-3 py-2.5 rounded-lg text-sm font-semibold ${
                isActive('/about') ? 'text-blue-900 bg-blue-50' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              About
            </Link>

            <div className="py-1">
              <div className="flex items-center justify-between px-3 py-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <span>Journals</span>
                <Link to="/journals" className="text-blue-700 normal-case font-semibold">
                  Lihat Semua
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-1 px-1">
                {JOURNALS_DATA.map((j) => (
                  <Link
                    key={j.id}
                    to={`/journals/${j.id}`}
                    className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 hover:border-blue-300 text-xs font-semibold text-slate-800 flex items-center justify-between"
                  >
                    <span>{j.acronym}</span>
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: j.accentColor }}
                    />
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/publication"
              className={`block px-3 py-2.5 rounded-lg text-sm font-semibold ${
                isActive('/publication') ? 'text-blue-900 bg-blue-50' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Publication Process
            </Link>

            <Link
              to="/track-submission"
              className={`block px-3 py-2.5 rounded-lg text-sm font-semibold ${
                isActive('/track-submission')
                  ? 'text-blue-900 bg-blue-50'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Track Submission
            </Link>

            <Link
              to="/contact"
              className={`block px-3 py-2.5 rounded-lg text-sm font-semibold ${
                isActive('/contact') ? 'text-blue-900 bg-blue-50' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSubmitModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-blue-900 text-white shadow hover:bg-blue-800 transition"
            >
              <UploadCloud className="w-4 h-4 text-amber-400" />
              <span>Submit Manuscript</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
