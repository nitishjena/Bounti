import React, { useState, useEffect } from 'react';
import { HeaderBar } from './components/HeaderBar';
import { PitchDeckSection } from './components/PitchDeck/PitchDeckSection';
import { StrategyDashboardSection } from './components/StrategyDashboard/StrategyDashboardSection';
import { CandidateCVSection } from './components/CandidateCV/CandidateCVSection';
import { AskAISection } from './components/AskAI/AskAISection';
import { ScenarioDrawer } from './components/ScenarioDrawer';
import { ScenarioModel, NavTab } from './types';

const DEFAULT_BOUNTI_SCENARIO: ScenarioModel = {
  calls: 2500,
  callToDemoRate: 8.0,
  demoToDealRate: 25.0,
  avgDealSize: 6000,
  salesCycleDays: 45,
  sdrCount: 1,
  workingDays: 25,
};

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('pitch-deck');
  const [scenario, setScenario] = useState<ScenarioModel>(DEFAULT_BOUNTI_SCENARIO);
  const [showScenarioDrawer, setShowScenarioDrawer] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Toggle Fullscreen Presentation Mode
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }
      if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 'm' || e.key === 'M') {
        setShowScenarioDrawer((prev) => !prev);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const resetDefaultCase = () => {
    setScenario(DEFAULT_BOUNTI_SCENARIO);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F8FAFC] text-slate-900 transition-colors duration-200 selection:bg-emerald-500 selection:text-white">
      
      {/* Top Header Navigation Bar */}
      <HeaderBar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isFullscreen={isFullscreen}
        toggleFullscreen={toggleFullscreen}
        onOpenModeler={() => setShowScenarioDrawer(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 px-4 sm:px-8 py-6 max-w-7xl mx-auto w-full flex flex-col items-center">
        {activeTab === 'pitch-deck' && (
          <PitchDeckSection
            scenario={scenario}
            setScenario={setScenario}
            theme="bounti-light"
            isFullscreen={isFullscreen}
            toggleFullscreen={toggleFullscreen}
            showScenarioDrawer={showScenarioDrawer}
            setShowScenarioDrawer={setShowScenarioDrawer}
          />
        )}

        {activeTab === 'strategy-dashboard' && (
          <StrategyDashboardSection />
        )}

        {activeTab === 'candidate-cv' && (
          <CandidateCVSection />
        )}

        {activeTab === 'ask-ai' && (
          <AskAISection />
        )}

        {/* Global Funnel Modeler Drawer */}
        {showScenarioDrawer && (
          <ScenarioDrawer
            scenario={scenario}
            setScenario={setScenario}
            onClose={() => setShowScenarioDrawer(false)}
            resetDefault={resetDefaultCase}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="no-print py-5 px-8 border-t border-slate-200/90 bg-white text-center text-xs text-slate-500 font-mono mt-8 w-full">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Prepared for <strong className="text-slate-900 font-sans font-bold">Bounti (Berlin) Leadership Team</strong></span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-emerald-700 font-semibold font-sans">Nish Jena · GTM Lead Candidate</span>
            <span>•</span>
            <span>nitish.2024@gmail.com</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
