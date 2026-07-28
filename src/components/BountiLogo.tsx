import React from 'react';

interface BountiLogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dark' | 'light';
}

export const BountiLogo: React.FC<BountiLogoProps> = ({
  className = '',
  iconOnly = false,
  size = 'md',
  variant = 'dark',
}) => {
  // Size mapping
  const heightMap = {
    sm: 'h-5',
    md: 'h-7',
    lg: 'h-9',
    xl: 'h-12',
  };

  const textMap = {
    sm: 'text-base font-extrabold tracking-tight',
    md: 'text-xl font-extrabold tracking-tight',
    lg: 'text-2xl font-extrabold tracking-tight',
    xl: 'text-3xl font-extrabold tracking-tight',
  };

  const textColor = variant === 'light' ? 'text-white' : 'text-slate-900';
  const iconColor = variant === 'light' ? '#FFFFFF' : '#0F172A';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Stacked Bounti Symbol (Dot + 2 Curved Bowls rotated ~-20deg) */}
      <svg
        viewBox="0 0 100 100"
        className={`${heightMap[size]} w-auto shrink-0`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="rotate(-18 50 50)">
          {/* Top circle */}
          <circle cx="50" cy="18" r="10" fill={iconColor} />
          {/* Middle bowl */}
          <path
            d="M 28 36 C 28 36, 32 58, 50 58 C 68 58, 72 36, 72 36 Z"
            fill={iconColor}
          />
          {/* Bottom bowl */}
          <path
            d="M 18 64 C 18 64, 25 94, 50 94 C 75 94, 82 64, 82 64 Z"
            fill={iconColor}
          />
        </g>
      </svg>

      {!iconOnly && (
        <span className={`font-sans font-black ${textMap[size]} ${textColor} tracking-tight font-sans`}>
          bounti
        </span>
      )}
    </div>
  );
};
