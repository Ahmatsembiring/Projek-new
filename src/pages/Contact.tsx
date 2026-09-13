import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { contactService, ContactResponse } from '../services/contactService';
import { JOURNALS_DATA } from '../data/journals';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Clock,
  RotateCw,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    journalTarget: 'general',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<ContactResponse | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Hubungi Kami | Sekretariat Jurnal Ilmiah Garudaya';
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setResponse(null);

    // Basic frontend validations
    if (!formData.name.trim()) {
      setErrorMsg('Silakan isi nama lengkap Anda.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Alamat email tidak valid.');
      return;
    }
    if (!formData.subject.trim()) {
      setErrorMsg('Silakan isi atau pilih subjek pesan.');
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setErrorMsg('Pesan minimal harus memuat 10 karakter.');
      return;
    }

    setLoading(true);
    try {
      const res = await contactService.sendMessage(formData);
      setResponse(res);
      if (res.success) {
        setFormData({
          name: '',
          email: '',
          subject: '',
          journalTarget: 'general',
          message: '',
        });
      } else {
        setErrorMsg(res.message);
      }
    } catch (err) {
      setErrorMsg('Gagal mengirimkan pesan. Silakan coba kembali.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link to="/" className="hover:text-blue-900 transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-blue-900">Hubungi Kami</span>
          </div>

          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-bold uppercase tracking-wider">
              <span>Sekretariat & Bantuan</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900">
              Hubungi Kami
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Tim sekretariat redaksi Garudaya siap membantu pertanyaan seputar naskah, alur penelaahan, pendaftaran reviewer, maupun kerja sama institusi akademik.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
              <h2 className="text-lg font-bold font-serif text-slate-900 border-b border-slate-100 pb-3">
                Informasi Kontak Resmi
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Email */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Email Korespondensi:
                    </span>
                    <a
                      href="mailto:editor@garudaya.example"
                      className="font-bold text-slate-900 hover:text-blue-700 transition break-all mt-0.5 block"
                    >
                      editor@garudaya.example
                    </a>
                    <span className="text-[11px] text-slate-500 mt-0.5 block">
                      Waktu respons: 1x24 jam kerja
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Telepon / WhatsApp Helpdesk:
                    </span>
                    <p className="font-bold text-slate-900 mt-0.5">
                      +62 812-3456-7890 / +62 xxx xxxx xxxx
                    </p>
                    <span className="text-[11px] text-slate-500 mt-0.5 block">
                      Senin - Jumat (09:00 - 17:00 WIB)
                    </span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Alamat Kantor Redaksi:
                    </span>
                    <p className="font-bold text-slate-900 mt-0.5">Indonesia</p>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                      Gedung Pusat Riset & Publikasi Ilmiah Garudaya, Kompleks Lembaga Pendidikan Tinggi, Indonesia.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Clock className="w-4 h-4 text-blue-700 shrink-0" />
                  <span>Layanan administrasi online beroperasi setiap hari kerja.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl font-bold font-serif text-slate-900">
                Kirim Pesan ke Redaksi
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Lengkapi formulir di bawah ini. Pesan Anda akan langsung diteruskan ke editor jurnal terkait.
              </p>
            </div>

            {/* Notification alert */}
            {response && response.success && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-xs text-emerald-900">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Pesan Berhasil Dikirim!</p>
                  <p className="mt-1 leading-relaxed">{response.message}</p>
                </div>
              </div>
            )}

            {errorMsg && (
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-xs text-rose-900">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <p className="leading-relaxed">{errorMsg}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Nama Lengkap <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: Dr. Budi Santoso, M.T."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Alamat Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nama@kampus.ac.id"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Target Journal */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Target Jurnal (Opsional)
                  </label>
                  <select
                    value={formData.journalTarget}
                    onChange={(e) => setFormData({ ...formData, journalTarget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
                  >
                    <option value="general">Umum / Sekretariat Portal Garudaya</option>
                    {JOURNALS_DATA.map((j) => (
                      <option key={j.id} value={j.id}>
                        {j.acronym} - {j.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Subjek Pertanyaan <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Contoh: Pertanyaan Status Naskah / Call for Reviewer"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Pesan Anda <span className="text-rose-500">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tuliskan rincian pertanyaan atau kebutuhan Anda dengan jelas..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition resize-y"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold bg-blue-900 hover:bg-blue-800 text-white shadow-sm transition flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <RotateCw className="w-4 h-4 animate-spin" />
                      <span>Mengirim Pesan...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-amber-400" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
