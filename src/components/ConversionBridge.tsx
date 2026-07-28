import React from 'react';
import { ArrowDown, Zap, Target, ArrowRight } from 'lucide-react';
import { ConversionStep, SlideTheme } from '../types';

interface ConversionBridgeProps {
  step: ConversionStep;
  theme: SlideTheme;
}

export const ConversionBridge: React.FC<ConversionBridgeProps> = ({ step, theme }) => {
  const isDark = theme === 'bounti-dark' || theme === 'berlin-neon';

  return (
    <div className="relative py-2 sm:py-2.5 my-0.5 flex items-center justify-center w-full z-20">
      {/* Connector vertical dashed line */}
      <div className={`absolute inset-y-0 w-0.5 border-r border-dashed ${
        isDark ? 'border-cyan-500/40' : 'border-cyan-600/40'
      }`} />

      {/* Centered Conversion Callout Pill */}
      <div className={`
        relative z-10 flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border shadow-md backdrop-blur-md transition-all hover:scale-[1.02]
        ${isDark 
          ? 'bg-slate-900/95 border-cyan-500/50 text-cyan-300 shadow-cyan-950/50' 
          : 'bg-white/95 border-cyan-600/40 text-cyan-900 shadow-slate-200'
        }
      `}>
        {/* Animated conversion indicator */}
        <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 font-bold text-xs border border-cyan-500/30">
          <ArrowDown className="w-3 h-3 stroke-[2.5]" />
        </div>

        {/* Highlighted Conversion Rate Badge */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm sm:text-base font-extrabold tracking-tight text-emerald-400 font-sans">
            {step.conversionRate.toFixed(1)}%
          </span>
          <span className={`text-[11px] font-bold tracking-tight uppercase font-mono ${
            isDark ? 'text-slate-300' : 'text-slate-700'
          }`}>
            {step.calloutTitle}
          </span>
        </div>

        {/* Ratio Tag (e.g. 1 in 12.5) */}
        <div className={`hidden sm:flex items-center gap-1 text-[10px] font-mono font-medium px-2 py-0.5 rounded-md ${
          isDark ? 'bg-slate-800 text-slate-300 border border-slate-700/60' : 'bg-slate-100 text-slate-600 border border-slate-200'
        }`}>
          <Target className="w-2.5 h-2.5 text-cyan-400" />
          <span>{step.ratioText}</span>
        </div>
      </div>
    </div>
  );
};
