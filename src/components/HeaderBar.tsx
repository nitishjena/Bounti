import React from 'react';
import { 
  Presentation, 
  BarChart3, 
  UserCheck, 
  Maximize2,
  Minimize2,
  ChevronRight,
  Sparkles,
  Sliders
} from 'lucide-react';
import { NavTab } from '../types';
import { BountiLogo } from './BountiLogo';

interface HeaderBarProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  isFullscreen: boolean;
  toggleFullscreen: () => void;
  onOpenModeler?: () => void;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({
  activeTab,
  setActiveTab,
  isFullscreen,
  toggleFullscreen,
  onOpenModeler,
}) => {
  return (
    <header className="no-print bg-white border-b border-slate-200/90 sticky top-0 z-50 px-3 md:px-6 py-2.5 shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 md:gap-4">
        
        {/* Left: Bounti Brand Logo & Tag */}
        <div className="flex items-center gap-2.5 shrink-0">
          <BountiLogo size="md" variant="dark" />
          <span className="hidden sm:inline-block text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200/80 font-mono tracking-tight">
            Berlin GTM
          </span>
        </div>

        {/* Center: 4 Main Nav Pills */}
        <nav className="flex items-center gap-1 sm:gap-1.5 bg-slate-100/80 p-1 rounded-2xl border border-slate-200/80 shrink-0">
          <button
            onClick={() => setActiveTab('pitch-deck')}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'pitch-deck'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <Presentation className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Pitch Deck</span>
          </button>

          <button
            onClick={() => setActiveTab('strategy-dashboard')}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'strategy-dashboard'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Strategy Dashboard</span>
          </button>

          <button
            onClick={() => setActiveTab('candidate-cv')}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'candidate-cv'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Candidate CV</span>
          </button>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {onOpenModeler && (
            <button
              onClick={onOpenModeler}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200/80 hover:bg-emerald-100 transition shadow-2xs"
            >
              <Sliders className="w-3.5 h-3.5 text-emerald-600" />
              <span className="hidden md:inline">Live Funnel Modeler</span>
              <span className="md:hidden">Modeler</span>
            </button>
          )}

          <button
            onClick={toggleFullscreen}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 rounded-xl transition shadow-2xs"
            title="Toggle Fullscreen Presentation"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isFullscreen ? 'Exit' : 'Fullscreen'}</span>
          </button>
        </div>

      </div>
    </header>
  );
};
