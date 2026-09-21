import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColor?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  showText = true 
}) => {
  const getDimensions = () => {
    switch (size) {
      case 'sm':
        return { imgSize: 'w-10 h-10', textClass: 'text-base', subClass: 'text-[9px]' };
      case 'lg':
        return { imgSize: 'w-16 h-16', textClass: 'text-2xl', subClass: 'text-xs' };
      case 'xl':
        return { imgSize: 'w-20 h-20', textClass: 'text-3xl', subClass: 'text-sm' };
      case 'md':
      default:
        return { imgSize: 'w-12 h-12 sm:w-14 sm:h-14', textClass: 'text-lg sm:text-xl', subClass: 'text-[10px] sm:text-xs' };
    }
  };

  const dim = getDimensions();

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Circular Logo Image with equal width and height, 50% rounded borders, fully showing all content */}
      <img 
        src="/images/logo.png" 
        alt="Logo Eliano Prime Print" 
        className={`${dim.imgSize} aspect-square rounded-full object-contain p-1 bg-white shrink-0 border border-slate-200/90 shadow-sm transition-transform duration-200 group-hover:scale-105`}
      />

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col">
          <div className={`flex items-center font-syne font-black tracking-tight ${dim.textClass}`}>
            <span className="text-[#1062a4]">Eliano</span>
            <span className="text-[#00a5df] mx-1">Prime</span>
            <span className="text-[#ee1c6e]">Print</span>
          </div>
          <span className={`uppercase font-bold tracking-widest text-slate-500 -mt-0.5 ${dim.subClass}`}>
            Infographie &amp; Impression
          </span>
        </div>
      )}
    </div>
  );
};

