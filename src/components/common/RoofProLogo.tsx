import React from 'react';

interface RoofProLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'white';
  showTagline?: boolean;
}

export const RoofProLogo: React.FC<RoofProLogoProps> = ({
  className = '',
  variant = 'dark',
  showTagline = false
}) => {
  const isWhite = variant === 'white';
  const textColor = isWhite ? 'text-white' : 'text-[#202020]';
  const proColor = '#B52F24';
  const tagColor = isWhite ? 'text-white/80' : 'text-neutral-500';

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Modern architectural roofline emblem */}
      <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Main roof gable triangle pitch */}
          <path
            d="M3 21L18 7L33 21"
            stroke="#B52F24"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Inner structural beam representing master craftsmanship */}
          <path
            d="M9 22L18 14L27 22"
            stroke={isWhite ? '#FFFFFF' : '#202020'}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Chimney / Peak accent */}
          <rect
            x="24"
            y="9"
            width="3"
            height="5"
            fill="#B52F24"
            rx="0.5"
          />
          {/* Foundation support line */}
          <path
            d="M7 28H29"
            stroke="#B52F24"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="flex flex-col leading-none">
        <div className="flex items-baseline tracking-tight">
          <span className={`text-2xl font-extrabold ${textColor} font-['Plus_Jakarta_Sans']`}>
            Roof
          </span>
          <span className="text-2xl font-extrabold text-[#B52F24] font-['Plus_Jakarta_Sans']">
            Pro
          </span>
        </div>
        {showTagline && (
          <span className={`text-[10px] uppercase font-semibold tracking-wider mt-0.5 ${tagColor}`}>
            Roofing Services
          </span>
        )}
      </div>
    </div>
  );
};
