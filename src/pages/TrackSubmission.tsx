import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { submissionService } from '../services/submissionService';
import { SubmissionTrackingResult, SubmissionStatusType } from '../types/journal';
import {
  Search,
  CheckCircle2,
  Clock,
  AlertCircle,
  XCircle,
  FileText,
  ExternalLink,
  ChevronRight,
  ArrowRight,
  Calendar,
  UserCheck,
  RotateCw,
} from 'lucide-react';

export const TrackSubmission: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialToken = searchParams.get('token') || '';

  const [tokenInput, setTokenInput] = useState(initialToken);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SubmissionTrackingResult | null>(null);
  const [searched, setSearched] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const demoTokens = submissionService.getDemoTokens();

  useEffect(() => {
    document.title = 'Track Your Manuscript | Garudaya Journal Portal';
    window.scrollTo(0, 0);

    if (initialToken) {
      handleSearch(initialToken);
    }
  }, []);

  const handleSearch = async (tokenToSearch?: string) => {
    const query = (tokenToSearch || tokenInput).trim();
    if (!query) {
      setErrorMsg('Silakan masukkan token atau ID submission naskah Anda.');
      return;
    }

    setErrorMsg(null);
    setLoading(true);
    setSearched(true);

    try {
      const data = await submissionService.getSubmissionStatus(query);
      setResult(data);
      if (data) {
        setSearchParams({ token: data.token });
      } else {
        setErrorMsg(`Tidak ditemukan naskah dengan Token/ID "${query}". Pastikan ID yang Anda masukkan sesuai dengan bukti registrasi OJS.`);
      }
    } catch (err) {
      setErrorMsg('Gagal memproses pengecekan status. Silakan coba sesaat lagi.');
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: SubmissionStatusType) => {
    switch (status) {
      case 'Submitted':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Under Review':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'Revision Required':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'Accepted':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'Published':
        return 'bg-green-100 text-green-900 border-green-300';
      case 'Rejected':
        return 'bg-rose-100 text-rose-800 border-rose-300';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-300';
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-4 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-slate-500">
            <Link to="/" className="hover:text-blue-900 transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-blue-900">Track Submission</span>
          </div>

          <div className="max-w-2xl space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900">
              Track Your Manuscript
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Masukkan token atau ID submission Anda untuk melihat status naskah.
            </p>
          </div>

          {/* Form Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            className="pt-4 flex flex-col sm:flex-row items-center gap-3"
          >
            <div className="relative flex-1 w-full">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={tokenInput}
                onChange={(e) => setTokenInput(e.target.value)}
                placeholder="Contoh ID: GAR-2026-0042 atau JSSHG-3301..."
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white font-mono transition"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-bold bg-blue-900 hover:bg-blue-800 text-white shadow-sm transition flex items-center justify-center gap-2 shrink-0 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <RotateCw className="w-4 h-4 animate-spin" />
                  <span>Memeriksa...</span>
                </>
              ) : (
                <span>Check Status</span>
              )}
            </button>
          </form>

          {/* Demo Tokens Quick Selection */}
          <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-400 font-medium">Contoh Token Demo:</span>
            {demoTokens.map((d) => (
              <button
                key={d.token}
                type="button"
                onClick={() => {
                  setTokenInput(d.token);
                  handleSearch(d.token);
                }}
                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 font-mono text-[11px] font-semibold transition border border-slate-200"
              >
                {d.token}
              </button>
            ))}
          </div>
        </div>

        {/* Error Message */}
        {errorMsg && (
          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-xs text-rose-800">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Pencarian Tidak Berhasil</p>
              <p className="mt-0.5">{errorMsg}</p>
            </div>
          </div>
        )}

        {/* Results Showcase */}
        {result && (
          <div className="space-y-6">
            {/* Summary Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      TOKEN ID: {result.token}
                    </span>
                    <span className="text-xs text-slate-400">
                      Diajukan: {result.submittedDate}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-2">
                    {result.title}
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Penulis: <strong>{result.authorName}</strong> • Target:{' '}
                    <span className="font-semibold text-blue-900">{result.journalName}</span> (
                    {result.journalAcronym})
                  </p>
                </div>

                {/* Status Pill */}
                <div className="sm:text-right shrink-0">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                    Status Naskah Saat Ini:
                  </span>
                  <span
                    className={`inline-block px-3.5 py-1.5 rounded-full text-xs font-bold border uppercase tracking-wider ${getStatusBadge(
                      result.currentStatus
                    )}`}
                  >
                    {result.currentStatus}
                  </span>
                </div>
              </div>

              {/* Status Note & Next Action */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900">
                    Catatan Dewan Editorial:
                  </h4>
                  <p className="text-xs text-blue-950 leading-relaxed">{result.statusNotes}</p>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900">
                    Tindakan Selanjutnya bagi Penulis:
                  </h4>
                  <p className="text-xs text-amber-950 leading-relaxed">{result.nextAction}</p>
                </div>
              </div>

              {/* Visual Timeline Status */}
              <div className="pt-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-6">
                  Riwayat & Alur Perjalanan Naskah (Status Timeline)
                </h3>

                <div className="relative border-l-2 border-slate-200 ml-4 pl-6 space-y-8">
                  {result.timeline.map((step, idx) => {
                    return (
                      <div key={idx} className="relative group">
                        {/* Timeline node icon */}
                        <div
                          className={`absolute -left-[35px] top-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition ${
                            step.completed
                              ? 'bg-blue-900 border-blue-900 text-white'
                              : step.current
                              ? 'bg-amber-500 border-amber-500 text-white animate-pulse'
                              : 'bg-white border-slate-300 text-slate-400'
                          }`}
                        >
                          {step.completed ? (
                            <CheckCircle2 className="w-4 h-4" />
                          ) : (
                            <span className="text-[11px] font-bold font-mono">{idx + 1}</span>
                          )}
                        </div>

                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h4
                              className={`text-sm font-bold ${
                                step.current
                                  ? 'text-amber-700'
                                  : step.completed
                                  ? 'text-slate-900'
                                  : 'text-slate-400'
                              }`}
                            >
                              {step.title}
                            </h4>
                            {step.current && (
                              <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-amber-100 text-amber-800 uppercase">
                                Tahap Berjalan
                              </span>
                            )}
                            <span className="text-xs text-slate-400">({step.date})</span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* OJS Action Footer */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-500">
                  Seluruh korespondensi resmi dan pengunggahan file perbaikan dilakukan di portal OJS.
                </p>
                <Link
                  to={`/journals/${result.journalId}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:underline"
                >
                  <span>Buka Portal OJS {result.journalAcronym}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Informational Guidance Box when not searched */}
        {!searched && (
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-2xs space-y-4">
            <h3 className="text-base font-bold text-slate-900 font-serif">
              Bagaimana Cara Mendapatkan Token / Manuscript ID?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Saat pertama kali mengirimkan naskah melalui platform OJS Garudaya, sistem secara otomatis mengirimkan email konfirmasi penerimaan yang memuat nomor identitas naskah (contoh: <code>GAR-2026-0042</code> atau <code>JSTIG-9812</code>).
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-1">
                <span className="font-bold text-slate-800">1. Cek Email Anda</span>
                <p className="text-slate-500">
                  Cari email dari sekretariat redaksi Garudaya saat awal submit.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-1">
                <span className="font-bold text-slate-800">2. Masukkan Kode</span>
                <p className="text-slate-500">
                  Ketik token ke kolom di atas tanpa spasi tambahan.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-1">
                <span className="font-bold text-slate-800">3. Pantau Review</span>
                <p className="text-slate-500">
                  Ketahui catatan reviewer dan estimasi jadwal publikasi.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
