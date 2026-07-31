import React from 'react';
import { 
  X, 
  Sliders, 
  RotateCcw, 
  Sparkles, 
  TrendingUp, 
  Euro, 
  Users, 
  Target, 
  PhoneCall, 
  Calendar, 
  Trophy,
  Zap
} from 'lucide-react';
import { ScenarioModel } from '../types';

interface ScenarioDrawerProps {
  scenario: ScenarioModel;
  setScenario: React.Dispatch<React.SetStateAction<ScenarioModel>>;
  onClose: () => void;
  resetDefault: () => void;
}

export const ScenarioDrawer: React.FC<ScenarioDrawerProps> = ({
  scenario,
  setScenario,
  onClose,
  resetDefault,
}) => {
  // Live calculations
  const calls = scenario.calls;
  const demos = Math.round(calls * (scenario.callToDemoRate / 100));
  const deals = Math.round(demos * (scenario.demoToDealRate / 100));
  const arr = deals * scenario.avgDealSize;

  const handleApplyPreset = (preset: Partial<ScenarioModel>) => {
    setScenario((prev) => ({ ...prev, ...preset }));
  };

  return (
    <aside className="no-print fixed top-16 right-4 z-50 w-full max-w-sm bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 rounded-2xl shadow-2xl p-5 text-slate-100 transition-all duration-300">
      
      {/* Drawer Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
            <Sliders className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-slate-100 tracking-tight">
              GTM Funnel Modeler
            </h3>
            <p className="text-[11px] text-slate-400">
              Interactive Pitch Scenario Testing
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Quick Preset Buttons */}
      <div className="mb-5">
        <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2 block">
          Quick Case Scenarios
        </label>
        <div className="grid grid-cols-2 gap-2">
          
          <button
            onClick={() => resetDefault()}
            className="text-left p-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 text-xs transition"
          >
            <div className="font-semibold text-cyan-300 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              My Assumption (€6K ACV)
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">
              200 Demos → €300K ARR
            </div>
          </button>

          <button
            onClick={() => handleApplyPreset({
              calls: 2500,
              callToDemoRate: 8.0,
              demoToDealRate: 25.0,
              avgDealSize: 15000,
            })}
            className="text-left p-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 text-xs transition"
          >
            <div className="font-semibold text-emerald-300 flex items-center gap-1">
              <Euro className="w-3 h-3 text-emerald-400" />
              If ACV is €15K
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">
              200 Demos → €750K ARR
            </div>
          </button>

          <button
            onClick={() => handleApplyPreset({
              calls: 2500,
              callToDemoRate: 12.0,
              demoToDealRate: 25.0,
              avgDealSize: 6000,
            })}
            className="text-left p-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 text-xs transition"
          >
            <div className="font-semibold text-indigo-300 flex items-center gap-1">
              <Zap className="w-3 h-3 text-indigo-400" />
              AI SDR Boost (+50%)
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">
              12% Demo/Connect → €450K
            </div>
          </button>

          <button
            onClick={() => handleApplyPreset({
              calls: 7500,
              callToDemoRate: 8.0,
              demoToDealRate: 25.0,
              avgDealSize: 6000,
              sdrCount: 3,
            })}
            className="text-left p-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 text-xs transition"
          >
            <div className="font-semibold text-sky-300 flex items-center gap-1">
              <Users className="w-3 h-3 text-sky-400" />
              Scale Team (3 SDRs)
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">
              7.5K connects → €900K ARR
            </div>
          </button>

        </div>
      </div>

      {/* Interactive Sliders */}
      <div className="space-y-4 max-h-[55vh] overflow-y-auto pr-1">
        
        {/* Slider 1: Cold Calls */}
        <div>
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="text-slate-300 font-medium flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
              Outreach Connects Target (15% rate)
            </span>
            <span className="font-mono font-bold text-cyan-400">
              {scenario.calls.toLocaleString()} connects (~{Math.round(scenario.calls / 0.15).toLocaleString()} dials)
            </span>
          </div>
          <input
            type="range"
            min={500}
            max={10000}
            step={250}
            value={scenario.calls}
            onChange={(e) => setScenario((prev) => ({ ...prev, calls: Number(e.target.value) }))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
          />
        </div>

        {/* Slider 2: Demo per Connect % */}
        <div>
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="text-slate-300 font-medium flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-sky-400" />
              Demo per Connect Rate
            </span>
            <span className="font-mono font-bold text-sky-400">
              {scenario.callToDemoRate.toFixed(1)}% ({demos} demos)
            </span>
          </div>
          <input
            type="range"
            min={2.0}
            max={20.0}
            step={0.5}
            value={scenario.callToDemoRate}
            onChange={(e) => setScenario((prev) => ({ ...prev, callToDemoRate: Number(e.target.value) }))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
          />
        </div>

        {/* Slider 3: Demo to Deal % */}
        <div>
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="text-slate-300 font-medium flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-indigo-400" />
              Demo-to-Deal Win Rate
            </span>
            <span className="font-mono font-bold text-indigo-400">
              {scenario.demoToDealRate.toFixed(1)}% ({deals} deals)
            </span>
          </div>
          <input
            type="range"
            min={5.0}
            max={50.0}
            step={1.0}
            value={scenario.demoToDealRate}
            onChange={(e) => setScenario((prev) => ({ ...prev, demoToDealRate: Number(e.target.value) }))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-400"
          />
        </div>

        {/* Slider 4: Average Deal Size */}
        <div>
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="text-slate-300 font-medium flex items-center gap-1.5">
              <Euro className="w-3.5 h-3.5 text-emerald-400" />
              Average Deal ACV (€)
            </span>
            <span className="font-mono font-bold text-emerald-400">
              €{scenario.avgDealSize.toLocaleString()} / deal
            </span>
          </div>
          <input
            type="range"
            min={1000}
            max={25000}
            step={500}
            value={scenario.avgDealSize}
            onChange={(e) => setScenario((prev) => ({ ...prev, avgDealSize: Number(e.target.value) }))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
          />
        </div>

        {/* Slider 5: Sales Cycle Days */}
        <div>
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="text-slate-300 font-medium">Sales Cycle Length</span>
            <span className="font-mono font-bold text-slate-200">
              {scenario.salesCycleDays} days
            </span>
          </div>
          <input
            type="range"
            min={7}
            max={90}
            step={1}
            value={scenario.salesCycleDays}
            onChange={(e) => setScenario((prev) => ({ ...prev, salesCycleDays: Number(e.target.value) }))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-slate-400"
          />
        </div>

      </div>

      {/* Model Output Summary */}
      <div className="mt-5 pt-3 border-t border-slate-800 bg-slate-950/60 p-3 rounded-xl">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-slate-400 uppercase">Simulated ARR Output</span>
          <span className="text-lg font-black text-emerald-400">
            €{Math.round(arr / 1000)}K
          </span>
        </div>
        <div className="flex justify-between items-center text-[11px] text-slate-400 mt-1 font-mono">
          <span>Overall Funnel Efficiency:</span>
          <span className="text-cyan-400 font-bold">
            {((deals / calls) * 100).toFixed(2)}%
          </span>
        </div>
      </div>

      {/* Footer Reset */}
      <div className="mt-4 flex justify-end">
        <button
          onClick={resetDefault}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Restore Bounti Defaults</span>
        </button>
      </div>

    </aside>
  );
};
