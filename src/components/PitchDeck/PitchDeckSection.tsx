import React, { useState, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  FileText, 
  Download, 
  Copy, 
  Sliders, 
  RotateCcw,
  Check,
  Sparkles
} from 'lucide-react';
import * as htmlToImage from 'html-to-image';
import confetti from 'canvas-confetti';
import { PITCH_SLIDES } from '../../data/pitchDeckData';
import { SlideRenderer } from './SlideViews';
import { ScenarioModel, SlideTheme } from '../../types';

interface PitchDeckSectionProps {
  scenario: ScenarioModel;
  setScenario: (fn: (prev: ScenarioModel) => ScenarioModel) => void;
  theme: SlideTheme;
  isFullscreen: boolean;
  toggleFullscreen: () => void;
  showScenarioDrawer: boolean;
  setShowScenarioDrawer: (show: boolean) => void;
}

export const PitchDeckSection: React.FC<PitchDeckSectionProps> = ({
  scenario,
  setScenario,
  theme,
  isFullscreen,
  toggleFullscreen,
  showScenarioDrawer,
  setShowScenarioDrawer,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [showSpeakerNotes, setShowSpeakerNotes] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [isExporting, setIsExporting] = useState<boolean>(false);

  const slideRef = useRef<HTMLDivElement | null>(null);
  const activeSlide = PITCH_SLIDES[currentSlideIndex];

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : PITCH_SLIDES.length - 1));
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev < PITCH_SLIDES.length - 1 ? prev + 1 : 0));
  };

  const handleExportPng = async () => {
    if (!slideRef.current) return;
    setIsExporting(true);
    try {
      const dataUrl = await htmlToImage.toPng(slideRef.current, { quality: 0.98, pixelRatio: 2 });
      const link = document.createElement('a');
      link.download = `Bounti_Pitch_Slide_${activeSlide.id}_${activeSlide.title.replace(/\s+/g, '_')}.png`;
      link.href = dataUrl;
      link.click();
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    } catch (err) {
      console.error("Export failed:", err);
    } finally {
      setIsExporting(false);
    }
  };

  const handleCopySlideText = () => {
    const textToCopy = `Slide ${activeSlide.id}/${PITCH_SLIDES.length}: ${activeSlide.title}\nSubtitle: ${activeSlide.subtitle || ''}\nSpeaker Notes: ${activeSlide.speakerNotes}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isLight = theme === 'bounti-light';

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-4">
      
      {/* Top Deck Control Toolbar */}
      <div className="no-print w-full flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-200 shadow-md">
        
        {/* Left: Slide Counter & Chapter Badge */}
        <div className="flex items-center gap-2">
          <span className="font-mono font-bold px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            {activeSlide.id} / {PITCH_SLIDES.length}
          </span>
          <span className="font-mono uppercase text-[11px] tracking-wider text-slate-400 hidden sm:inline">
            {activeSlide.chapter}
          </span>
        </div>

        {/* Center: Slide Jumper Dropdown & Prev/Next */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition"
            title="Previous Slide (Key ←)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dropdown slide jumper */}
          <select
            value={currentSlideIndex}
            onChange={(e) => setCurrentSlideIndex(Number(e.target.value))}
            className="bg-slate-950 text-slate-100 font-sans text-xs px-2.5 py-1.5 rounded-lg border border-slate-700 focus:outline-none focus:border-emerald-500 cursor-pointer max-w-[200px] sm:max-w-xs truncate"
          >
            {PITCH_SLIDES.map((slide, idx) => (
              <option key={slide.id} value={idx}>
                {slide.id}. {slide.title}
              </option>
            ))}
          </select>

          <button
            onClick={handleNext}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition"
            title="Next Slide (Key →)"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Modeler Drawer Toggle */}
          <button
            onClick={() => setShowScenarioDrawer(!showScenarioDrawer)}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border font-medium transition ${
              showScenarioDrawer 
                ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-bold' 
                : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Funnel Modeler</span>
          </button>
        </div>
      </div>

      {/* 16:9 Slide Stage */}
      <div 
        ref={slideRef}
        className={`w-full aspect-auto md:aspect-[16/9] min-h-[540px] md:min-h-[580px] rounded-3xl border transition-colors duration-300 relative shadow-2xl overflow-hidden flex flex-col justify-between ${
          isLight ? 'bg-slate-50 text-slate-900 border-slate-300' : 'bg-slate-950 text-slate-100 border-slate-800'
        }`}
      >
        <div className="w-full h-full pb-10 overflow-y-auto">
          <SlideRenderer 
            slideId={activeSlide.id}
            scenario={scenario}
            theme={theme}
            setScenario={setScenario}
            onOpenModeler={() => setShowScenarioDrawer(true)}
          />
        </div>

        {/* Slide Footer watermark */}
        <div className={`no-print absolute bottom-0 left-0 right-0 px-6 py-2.5 flex items-center justify-between text-[10px] font-mono pointer-events-none ${
          isLight ? 'bg-slate-50/90 text-slate-400 border-t border-slate-200/50' : 'bg-slate-950/90 text-slate-500 border-t border-slate-900/50'
        }`}>
          <span>Prepared for Bounti (Berlin) · July 2026</span>
          <span className="hidden sm:inline">Nish Jena · nitish.2024@gmail.com</span>
          <span className="font-bold">{activeSlide.id} / {PITCH_SLIDES.length}</span>
        </div>
      </div>

      {/* Speaker Notes Drawer */}
      {showSpeakerNotes && (
        <div className="no-print w-full p-4 rounded-2xl bg-purple-950/80 border border-purple-800 text-purple-100 text-xs shadow-lg animate-fadeIn">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h4 className="font-bold text-sm text-purple-300 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-purple-400" />
              Nish Jena's Speaker Notes — Slide {activeSlide.id}: {activeSlide.title}
            </h4>
            <button 
              onClick={() => setShowSpeakerNotes(false)}
              className="text-purple-300 hover:text-white p-1"
            >
              ✕
            </button>
          </div>
          <p className="text-purple-200 leading-relaxed font-sans text-sm">
            "{activeSlide.speakerNotes}"
          </p>
        </div>
      )}

    </div>
  );
};
