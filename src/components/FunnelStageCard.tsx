import React from 'react';
import { PhoneCall, CalendarCheck2, Trophy, Euro, ArrowRight, Zap, TrendingUp } from 'lucide-react';
import { FunnelStageData, SlideTheme } from '../types';

interface FunnelStageCardProps {
  stage: FunnelStageData;
  index: number;
  totalStages: number;
  theme: SlideTheme;
  isInteractive?: boolean;
}

export const FunnelStageCard: React.FC<FunnelStageCardProps> = ({
  stage,
  index,
  totalStages,
  theme,
}) => {
  const isDark = theme === 'bounti-dark' || theme === 'berlin-neon';

  // Render appropriate Lucide icon
  const renderIcon = () => {
    const iconClass = "w-6 h-6 stroke-[2.2]";
    switch (stage.iconName) {
      case 'phone':
        return <PhoneCall className={iconClass} />;
      case 'calendar':
        return <CalendarCheck2 className={iconClass} />;
      case 'trophy':
        return <Trophy className={iconClass} />;
      case 'euro':
        return <Euro className={iconClass} />;
      default:
        return <Zap className={iconClass} />;
    }
  };

  // Stage-dependent width percentage for realistic trapezoid funnel scale
  // Stage 0: 100%, Stage 1: 75%, Stage 2: 52%, Stage 3: 38%
  const widthPercentage = [100, 78, 58, 42][index] || 50;

  return (
    <div className="relative group flex flex-col items-center w-full">
      {/* Funnel Slab Container */}
      <div 
        className="transition-all duration-500 ease-out w-full"
        style={{ width: `${widthPercentage}%` }}
      >
        <div className={`
          relative rounded-2xl p-4 sm:p-5 border transition-all duration-300 shadow-xl overflow-hidden
          ${isDark 
            ? 'bg-gradient-to-b from-slate-900/90 to-slate-950/90 border-slate-800 hover:border-slate-700' 
            : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-slate-200/50'
          }
        `}>
          {/* Top accent glow strip */}
          <div 
            className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-90 transition-all duration-300" 
            style={{ backgroundImage: `linear-gradient(to right, ${stage.gradientFrom}, ${stage.gradientTo})` }}
          />

          {/* Background watermark icon */}
          <div className={`absolute -right-3 -bottom-3 opacity-5 pointer-events-none ${isDark ? 'text-white' : 'text-slate-900'}`}>
            <div className="scale-[2.5]">
              {renderIcon()}
            </div>
          </div>

          <div className="flex items-start justify-between gap-3 relative z-10">
            {/* Left: Icon & Stage Label */}
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm"
                style={{ 
                  backgroundColor: `${stage.primaryColor}18`,
                  color: stage.primaryColor,
                  border: `1px solid ${stage.primaryColor}35`
                }}
              >
                {renderIcon()}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded-md ${
                    isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                  }`}>
                    Stage 0{index + 1}
                  </span>
                  <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                    {stage.subLabel}
                  </span>
                </div>
                <h3 className={`text-sm sm:text-base font-bold tracking-tight mt-0.5 ${
                  isDark ? 'text-slate-100' : 'text-slate-900'
                }`}>
                  {stage.label}
                </h3>
              </div>
            </div>

            {/* Right: Main Metric Value Display */}
            <div className="text-right shrink-0">
              <div className="flex items-baseline justify-end gap-1">
                <span className={`font-mono text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {stage.formattedValue}
                </span>
                <span className={`text-xs font-semibold uppercase font-mono ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  {stage.unit}
                </span>
              </div>
              <p className="text-[11px] font-medium text-emerald-400 font-mono mt-0.5 flex items-center justify-end gap-1">
                <TrendingUp className="w-3 h-3" />
                {stage.id === 'calls' && '100% Volume Baseline'}
                {stage.id === 'demos' && '8.0% Outreach Conversion'}
                {stage.id === 'deals' && '25.0% Demo Win Rate'}
                {stage.id === 'arr' && '€6,000 Avg ACV'}
              </p>
            </div>
          </div>

          {/* Bottom Bar: Progress relative to top of funnel */}
          <div className="mt-3.5 pt-3 border-t border-slate-800/40 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 w-full max-w-[65%]">
              <div className={`h-1.5 rounded-full flex-1 overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
                <div 
                  className="h-full rounded-full transition-all duration-700"
                  style={{ 
                    width: `${stage.percentageOfTop}%`,
                    backgroundImage: `linear-gradient(to right, ${stage.gradientFrom}, ${stage.gradientTo})`
                  }}
                />
              </div>
              <span className={`text-[11px] font-semibold shrink-0 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                {stage.percentageOfTop}%
              </span>
            </div>

            <span className={`text-[11px] font-medium hidden sm:inline ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {stage.velocityMetric}
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};
