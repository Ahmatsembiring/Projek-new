import React from 'react';
import { Layers3, Sparkles, Network, Unlock, CheckCircle2 } from 'lucide-react';

export const WhyGarudaya: React.FC = () => {
  const points = [
    {
      title: 'Multidisciplinary',
      subtitle: 'Spektrum Keilmuan Luas & Terintegrasi',
      description:
        'Mewadahi riset dari 4 klaster utama: sains & teknologi murni-terapan (JSTIG), dinamika sosial & humaniora (JSSHG), inovasi pendidikan & pedagogi (JPSPG), serta bisnis, ekonomi & akuntansi (JBEMG).',
      icon: Layers3,
      badgeColor: 'bg-blue-100 text-blue-800',
    },
    {
      title: 'Quality Research',
      subtitle: 'Standar Mutu & Integritas Ketat',
      description:
        'Setiap naskah melewati penyaringan awal kemiripan teks (Turnitin < 20%) dan double-blind review oleh mitra bestari bereputasi untuk memastikan orisinalitas, validitas data, dan kebaruan teoretis.',
      icon: Sparkles,
      badgeColor: 'bg-amber-100 text-amber-800',
    },
    {
      title: 'Academic Collaboration',
      subtitle: 'Jejaring Peneliti Lintas Kampus',
      description:
        'Mendorong sinergi antara dosen senior, peneliti lembaga riset, praktisi industri, dan mahasiswa bertalenta melalui ruang dialog akademik yang konstruktif dan inklusif.',
      icon: Network,
      badgeColor: 'bg-teal-100 text-teal-800',
    },
    {
      title: 'Open Knowledge',
      subtitle: 'Akses Terbuka untuk Kemaslahatan Publik',
      description:
        'Garudaya berkomitmen pada prinsip Open Access (CC BY-SA 4.0). Seluruh artikel dapat diakses, dibaca, dan dikutip secara bebas oleh komunitas ilmiah global guna mempercepat diseminasi ilmu.',
      icon: Unlock,
      badgeColor: 'bg-indigo-100 text-indigo-800',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <span>Keunggulan Institusi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-serif">
            Mengapa Memilih Garudaya?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Fondasi tata kelola jurnal ilmiah yang dirancang untuk mendukung kredibilitas dan visibilitas hasil riset Anda.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${p.badgeColor}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-serif">
                    {p.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-900 mt-1 mb-3">
                    {p.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/70 flex items-center gap-2 text-[11px] font-medium text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sesuai standar akreditasi ARJUNA & OJS</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
