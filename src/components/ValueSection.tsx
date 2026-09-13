import React from 'react';
import { Users2, Lightbulb, GraduationCap, Globe2 } from 'lucide-react';

export const ValueSection: React.FC = () => {
  const values = [
    {
      title: 'Kolaborasi dalam Riset',
      description: 'Menghubungkan akademisi, mahasiswa, dan praktisi lintas disiplin untuk melahirkan publikasi ilmiah bereputasi.',
      icon: Users2,
      accent: 'text-blue-700 bg-blue-50 border-blue-200',
    },
    {
      title: 'Inovasi untuk Solusi',
      description: 'Mengedepankan riset aplikatif dan kebaruan teoretis yang mampu menjawab tantangan riil di era modern.',
      icon: Lightbulb,
      accent: 'text-amber-700 bg-amber-50 border-amber-200',
    },
    {
      title: 'Ilmu untuk Masyarakat',
      description: 'Mewujudkan akses terbuka (Open Access) agar pengetahuan ilmiah dapat dimanfaatkan seluas-luasnya.',
      icon: GraduationCap,
      accent: 'text-teal-700 bg-teal-50 border-teal-200',
    },
    {
      title: 'Berdampak untuk Negeri',
      description: 'Menjadi garda publikasi ilmiah yang menyumbang pemikiran kritis bagi kemajuan pembangunan nasional.',
      icon: Globe2,
      accent: 'text-indigo-700 bg-indigo-50 border-indigo-200',
    },
  ];

  return (
    <section className="bg-white py-12 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="flex flex-col sm:flex-row items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition border border-transparent hover:border-slate-200"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${v.accent}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {v.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
