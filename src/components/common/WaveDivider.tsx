import React from 'react';

interface WaveDividerProps {
  color?: string; // fill color of the wave
  position?: 'top' | 'bottom';
  variant?: 'smooth-curve' | 'gentle-dip' | 'arch';
  flipX?: boolean;
  className?: string;
  height?: number;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({
  color = '#8F211A',
  position = 'top',
  variant = 'smooth-curve',
  flipX = false,
  className = '',
  height = 56
}) => {
  const isBottom = position === 'bottom';

  // Wave curves replicating the reference image's organic red section headers and footers
  let pathD = '';
  if (variant === 'smooth-curve') {
    pathD = isBottom
      ? "M0,0 C320,70 480,10 740,45 C980,75 1200,30 1440,55 L1440,80 L0,80 Z"
      : "M0,60 C360,10 680,65 1020,25 C1240,0 1380,35 1440,20 L1440,0 L0,0 Z";
  } else if (variant === 'gentle-dip') {
    pathD = isBottom
      ? "M0,15 C450,75 990,10 1440,55 L1440,80 L0,80 Z"
      : "M0,55 C480,0 960,70 1440,20 L1440,0 L0,0 Z";
  } else {
    // Arch
    pathD = isBottom
      ? "M0,0 Q720,70 1440,0 L1440,70 L0,70 Z"
      : "M0,60 Q720,0 1440,60 L1440,0 L0,0 Z";
  }

  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none select-none ${className} ${
        flipX ? 'scale-x-[-1]' : ''
      }`}
      style={{ height: `${height}px` }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-full block"
      >
        <path d={pathD} fill={color} />
      </svg>
    </div>
  );
};
