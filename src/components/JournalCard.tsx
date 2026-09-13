import React from 'react';
import { Link } from 'react-router-dom';
import { Journal } from '../types/journal';
import {
  Cpu,
  Users,
  GraduationCap,
  TrendingUp,
  Calendar,
  Layers,
  ArrowRight,
  ExternalLink,
  BookOpen,
} from 'lucide-react';

interface JournalCardProps {
  journal: Journal;
  onOpenSubmitModal?: (journalId: string) => void;
}

export const JournalCard: React.FC<JournalCardProps> = ({
  journal,
  onOpenSubmitModal,
}) => {
  // Select field icon based on acronym
  const getIcon = () => {
    switch (journal.id) {
      case 'jstig':
        return <Cpu className="w-6 h-6 text-blue-600" />;
      case 'jsshg':
        return <Users className="w-6 h-6 text-amber-600" />;
      case 'jpspg':
        return <GraduationCap className="w-6 h-6 text-teal-600" />;
      case 'jbemg':
        return <TrendingUp className="w-6 h-6 text-indigo-600" />;
      default:
        return <BookOpen className="w-6 h-6 text-blue-600" />;
    }
  };

  const getAccentBg = () => {
    switch (journal.id) {
      case 'jstig':
        return 'bg-blue-50 border-blue-200 text-blue-700';
      case 'jsshg':
        return 'bg-amber-50 border-amber-200 text-amber-700';
      case 'jpspg':
        return 'bg-teal-50 border-teal-200 text-teal-700';
      case 'jbemg':
        return 'bg-indigo-50 border-indigo-200 text-indigo-700';
      default:
        return 'bg-slate-50 border-slate-200 text-slate-700';
    }
  };

  return (
    <div className="group bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1">
      {/* Top Accent Strip */}
      <div
        className="h-1.5 w-full"
        style={{ backgroundColor: journal.accentColor }}
      />

      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
        {/* Header: Acronym Badge & Icon */}
        <div>
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span
                className="px-3 py-1 text-xs font-extrabold uppercase tracking-wider rounded-lg border font-mono shadow-2xs"
                style={{
                  backgroundColor: `${journal.accentColor}12`,
                  color: journal.accentColor,
                  borderColor: `${journal.accentColor}30`,
                }}
              >
                {journal.acronym}
              </span>
              <span className="text-[11px] text-slate-400">Open Access</span>
            </div>
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center border ${getAccentBg()}`}
            >
              {getIcon()}
            </div>
          </div>

          {/* Full Name */}
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900 group-hover:text-blue-900 transition leading-snug">
            <Link to={`/journals/${journal.id}`}>{journal.name}</Link>
          </h3>

          {/* Focus description */}
          <p className="text-xs sm:text-sm text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
            {journal.focus}
          </p>

          {/* Scope preview list */}
          <div className="mt-4 pt-4 border-t border-slate-100">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-slate-400" />
              <span>Bidang Cakupan Riset:</span>
            </p>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {journal.scope.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                    style={{ backgroundColor: journal.accentColor }}
                  />
                  <span className="line-clamp-1">{item}</span>
                </li>
              ))}
              {journal.scope.length > 3 && (
                <li className="text-[11px] text-slate-400 italic pl-3.5">
                  +{journal.scope.length - 3} bidang riset lainnya
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Card Footer: Frequency & CTA */}
        <div className="pt-4 border-t border-slate-100 space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>
                <strong>{journal.frequency}</strong> ({journal.frequencyMonths.join(', ')})
              </span>
            </div>
            <span className="font-mono text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
              Min. {journal.minimumArticlesPerIssue} artikel/issue
            </span>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <Link
              to={`/journals/${journal.id}`}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-blue-900 transition group/btn"
            >
              <span>View Journal</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition" />
            </Link>

            {onOpenSubmitModal && (
              <button
                onClick={() => onOpenSubmitModal(journal.id)}
                className="inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl text-xs font-semibold border border-slate-200 text-slate-700 hover:bg-slate-50 transition"
                title="Kirim naskah ke jurnal ini"
              >
                <span>Submit</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
