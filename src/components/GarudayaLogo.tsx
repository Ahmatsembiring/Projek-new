import React from 'react';

interface GarudayaLogoProps {
  variant?: 'full' | 'compact' | 'white' | 'emblem-only';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showTagline?: boolean;
}

export const GarudayaLogo: React.FC<GarudayaLogoProps> = ({
  variant = 'full',
  size = 'md',
  className = '',
  showTagline = false,
}) => {
  const isWhite = variant === 'white';

  const emblemSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const subtitleSizes = {
    sm: 'text-[10px]',
    md: 'text-xs',
    lg: 'text-sm',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Vector Academic Emblem: Garuda Wings + Open Book + Golden Star of Knowledge */}
      <div
        className={`relative shrink-0 flex items-center justify-center rounded-xl p-2 ${
          isWhite
            ? 'bg-white/10 text-white border border-white/20 shadow-inner'
            : 'bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white shadow-md shadow-blue-950/20 border border-amber-400/30'
        } ${emblemSizes[size]}`}
      >
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-label="Logo Garudaya"
        >
          {/* Subtle radial crest aura */}
          <circle cx="24" cy="24" r="22" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" />
          <circle cx="24" cy="24" r="19" stroke="#F59E0B" strokeOpacity="0.4" strokeWidth="0.75" strokeDasharray="2 2" />

          {/* Garuda Wing - Left Wing */}
          <path
            d="M8 24C11 18 17 15 23 15C19 19 18 24 18 28C14 27 10 26 8 24Z"
            fill="url(#garudaNavyGrad)"
            stroke="#93C5FD"
            strokeWidth="0.8"
          />
          <path
            d="M6 28C10 26 15 25 21 27C17 30 14 34 13 38C9 34 7 31 6 28Z"
            fill="#1E3A8A"
            fillOpacity="0.8"
          />

          {/* Garuda Wing - Right Wing */}
          <path
            d="M40 24C37 18 31 15 25 15C29 19 30 24 30 28C34 27 38 26 40 24Z"
            fill="url(#garudaNavyGrad)"
            stroke="#93C5FD"
            strokeWidth="0.8"
          />
          <path
            d="M42 28C38 26 33 25 27 27C31 30 34 34 35 38C39 34 41 31 42 28Z"
            fill="#1E3A8A"
            fillOpacity="0.8"
          />

          {/* Central Open Book (Knowledge) */}
          <path
            d="M24 23C21 20 16 20 12 21V33C16 32 21 32 24 35C27 32 32 32 36 33V21C32 20 27 20 24 23Z"
            fill="#FFFFFF"
            stroke="#1E293B"
            strokeWidth="1.2"
          />
          {/* Book Spine Center Divider */}
          <path d="M24 23V35" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />

          {/* Central Golden Crest / Flame Star (Wisdom / Garuda Spirit) */}
          <path
            d="M24 7L25.8 12.2L31 14L25.8 15.8L24 21L22.2 15.8L17 14L22.2 12.2L24 7Z"
            fill="url(#garudaGoldGrad)"
          />

          {/* Gradients */}
          <defs>
            <linearGradient id="garudaNavyGrad" x1="8" y1="15" x2="40" y2="38" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3B82F6" />
              <stop offset="1" stopColor="#1E3A8A" />
            </linearGradient>
            <linearGradient id="garudaGoldGrad" x1="17" y1="7" x2="31" y2="21" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FCD34D" />
              <stop offset="0.5" stopColor="#F59E0B" />
              <stop offset="1" stopColor="#D97706" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Typography Label */}
      {variant !== 'emblem-only' && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-serif tracking-wider font-extrabold uppercase leading-none ${
                isWhite ? 'text-white' : 'text-slate-900'
              } ${titleSizes[size]}`}
            >
              GARUDAYA
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
          </div>
          <span
            className={`font-sans tracking-wide font-medium uppercase mt-0.5 leading-tight ${
              isWhite ? 'text-slate-300' : 'text-slate-600'
            } ${subtitleSizes[size]}`}
          >
            Jurnal Ilmiah Garudaya
          </span>
          {showTagline && (
            <span
              className={`text-[11px] italic mt-0.5 ${
                isWhite ? 'text-amber-300/90' : 'text-amber-700 font-medium'
              }`}
            >
              "Riset Berkualitas untuk Masa Depan yang Lebih Baik"
            </span>
          )}
        </div>
      )}
    </div>
  );
};
