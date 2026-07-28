import React, { useState } from 'react';
import { 
  PhoneCall, 
  CalendarCheck, 
  Trophy, 
  Euro, 
  TrendingUp, 
  ArrowRight, 
  Zap, 
  Target, 
  Sparkles, 
  AlertTriangle,
  RotateCcw,
  CheckCircle2,
  Sliders,
  DollarSign,
  Activity
} from 'lucide-react';
import { ScenarioModel } from '../types';

interface FunnelFlowVisualizerProps {
  scenario: ScenarioModel;
  setScenario?: (fn: (prev: ScenarioModel) => ScenarioModel) => void;
  compact?: boolean;
}

export const FunnelFlowVisualizer: React.FC<FunnelFlowVisualizerProps> = ({
  scenario,
  setScenario,
  compact = false,
}) => {
  const [triggerMode, setTriggerMode] = useState<'standard' | 'bounti-trigger'>('bounti-trigger');

  // Trigger multipliers
  const effectiveCallToDemoRate = triggerMode === 'bounti-trigger' 
    ? scenario.callToDemoRate * 1.65 // 13.2% vs 8.0%
    : scenario.callToDemoRate;

  const effectiveDemoToDealRate = triggerMode === 'bounti-trigger'
    ? scenario.demoToDealRate * 1.2 // 30% vs 25%
    : scenario.demoToDealRate;

  // Calculated stage metrics
  const totalCalls = scenario.calls;
  const demosBooked = Math.round(totalCalls * (effectiveCallToDemoRate / 100));
  const dealsClosed = Math.round(demosBooked * (effectiveDemoToDealRate / 100));
  const totalARR = dealsClosed * scenario.avgDealSize;
  const pipelineValue = demosBooked * scenario.avgDealSize;

  // Dropoff calculations
  const callDropoff = totalCalls - demosBooked;
  const demoDropoff = demosBooked - dealsClosed;

  // Unit Economics
  const sdrAnnualCost = 65000; // EUR base + OTE estimate
  const toolStackCost = 4800; // Apollo + Clay + Instantly
  const totalCACSpend = (sdrAnnualCost + toolStackCost) / (dealsClosed || 1);
  const ltvCacRatio = ((scenario.avgDealSize * 3) / (totalCACSpend || 1)).toFixed(1);

  return (
    <div className="w-full space-y-6 font-sans">
      
      {/* Visualizer Header */}
      <div className="p-5 md:p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[11px] font-extrabold uppercase tracking-wider font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/80">
              BOUNTI REVENUE FUNNEL FLOW ENGINE
            </span>
          </div>
          <h3 className="text-xl font-black text-slate-900 tracking-tight mt-1">
            Outbound Flow & Pipeline Conversion Visualizer
          </h3>
          <p className="text-xs text-slate-500 mt-0.5 max-w-2xl">
            Simulate how cold outbound touches flow through qualification, demo booking, and close-won ARR with trigger signal multipliers.
          </p>
        </div>

        {/* Trigger Mode Toggle Pill */}
        <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200/80 shrink-0">
          <button
            onClick={() => setTriggerMode('standard')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              triggerMode === 'standard'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Cold Spray Outbound
          </button>
          <button
            onClick={() => setTriggerMode('bounti-trigger')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              triggerMode === 'bounti-trigger'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" />
            <span>Bounti Trigger Engine (+65% Hook)</span>
          </button>
        </div>
      </div>

      {/* Main Visual Funnel Flow Nodes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        
        {/* NODE 1: Cold Touches */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm relative group hover:border-slate-400 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold font-mono text-slate-400 uppercase tracking-wider">STAGE 01 — TOUCHES</span>
            <div className="p-2 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
              <PhoneCall className="w-4 h-4" />
            </div>
          </div>

          <div className="mt-3">
            <span className="text-3xl font-black text-slate-900 tracking-tight block">
              {totalCalls.toLocaleString()}
            </span>
            <span className="text-xs font-semibold text-slate-500 block mt-0.5">
              Outbound Touches / Quarter
            </span>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-500 font-mono">
            <div className="flex justify-between">
              <span>Daily Pace:</span>
              <strong className="text-slate-900">{Math.round(totalCalls / scenario.workingDays)} touches/day</strong>
            </div>
            <div className="flex justify-between">
              <span>Target Persona:</span>
              <strong className="text-slate-900">Multi-Location Ops</strong>
            </div>
          </div>

          {/* Flow Connector Line (Desktop) */}
          <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-slate-900 text-white items-center justify-center text-xs shadow-md border-2 border-white">
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* NODE 2: Booked Demos */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm relative group hover:border-slate-400 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold font-mono text-slate-400 uppercase tracking-wider">STAGE 02 — DEMOS</span>
            <div className="p-2 rounded-xl bg-purple-50 text-purple-600 border border-purple-100">
              <CalendarCheck className="w-4 h-4" />
            </div>
          </div>

          <div className="mt-3">
            <span className="text-3xl font-black text-slate-900 tracking-tight block">
              {demosBooked.toLocaleString()}
            </span>
            <span className="text-xs font-semibold text-emerald-700 font-mono block mt-0.5 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              {effectiveCallToDemoRate.toFixed(1)}% Conversion Rate
            </span>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-500 font-mono">
            <div className="flex justify-between">
              <span>Pipeline Value:</span>
              <strong className="text-slate-900">€{(pipelineValue / 1000).toFixed(0)}k</strong>
            </div>
            <div className="flex justify-between text-rose-600">
              <span>Drop-off:</span>
              <strong>-{callDropoff.toLocaleString()} touches</strong>
            </div>
          </div>

          {/* Flow Connector Line (Desktop) */}
          <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-slate-900 text-white items-center justify-center text-xs shadow-md border-2 border-white">
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* NODE 3: Closed-Won Deals */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm relative group hover:border-slate-400 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold font-mono text-slate-400 uppercase tracking-wider">STAGE 03 — DEALS</span>
            <div className="p-2 rounded-xl bg-amber-50 text-amber-600 border border-amber-100">
              <Trophy className="w-4 h-4" />
            </div>
          </div>

          <div className="mt-3">
            <span className="text-3xl font-black text-slate-900 tracking-tight block">
              {dealsClosed.toLocaleString()}
            </span>
            <span className="text-xs font-semibold text-emerald-700 font-mono block mt-0.5 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              {effectiveDemoToDealRate.toFixed(1)}% Win Rate
            </span>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-500 font-mono">
            <div className="flex justify-between"><span>Avg Deal Size:</span><strong className="text-slate-900">€{scenario.avgDealSize.toLocaleString()}</strong></div>
            <div className="flex justify-between text-rose-600"><span>Unclosed Demos:</span><strong>-{demoDropoff} demos</strong></div>
          </div>

          {/* Flow Connector Line (Desktop) */}
          <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-emerald-600 text-white items-center justify-center text-xs shadow-md border-2 border-white">
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* NODE 4: Annual Recurring Revenue (ARR) */}
        <div className="p-5 rounded-2xl bg-emerald-900 text-white shadow-md relative group border border-emerald-800">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold font-mono text-emerald-300 uppercase tracking-wider">STAGE 04 — ARR</span>
            <div className="p-2 rounded-xl bg-emerald-800 text-emerald-300 border border-emerald-700">
              <Euro className="w-4 h-4" />
            </div>
          </div>

          <div className="mt-3">
            <span className="text-3xl font-black text-white tracking-tight block">
              €{totalARR.toLocaleString()}
            </span>
            <span className="text-xs font-bold text-emerald-300 font-mono block mt-0.5">
              Net New ARR Generated
            </span>
          </div>

          <div className="mt-4 pt-3 border-t border-emerald-800/80 space-y-1.5 text-xs text-emerald-200 font-mono">
            <div className="flex justify-between"><span>SDR Quota Attainment:</span><strong className="text-white">{((totalARR / 300000) * 100).toFixed(0)}%</strong></div>
            <div className="flex justify-between"><span>LTV : CAC:</span><strong className="text-emerald-300">{ltvCacRatio}x</strong></div>
          </div>
        </div>

      </div>

      {/* Interactive Controls & Live Parameter Sliders */}
      {setScenario && (
        <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-5">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-emerald-600" />
              <h4 className="text-sm font-bold text-slate-900 font-mono uppercase">
                Interactive Funnel Parameter Controls
              </h4>
            </div>
            <button
              onClick={() => {
                setScenario((prev) => ({
                  ...prev,
                  calls: 2500,
                  callToDemoRate: 8.0,
                  demoToDealRate: 25.0,
                  avgDealSize: 6000,
                }));
              }}
              className="text-xs font-mono font-bold text-slate-500 hover:text-slate-900 flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              Reset Defaults
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs">
            {/* Slider 1: Cold Touches */}
            <div className="space-y-2">
              <div className="flex justify-between font-mono font-bold text-slate-700">
                <span>Cold Touches:</span>
                <span className="text-emerald-700">{scenario.calls.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={500}
                max={10000}
                step={250}
                value={scenario.calls}
                onChange={(e) => setScenario((prev) => ({ ...prev, calls: Number(e.target.value) }))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
              <span className="text-[10px] text-slate-400 block font-mono">Pace: {Math.round(scenario.calls / 25)} touches/working day</span>
            </div>

            {/* Slider 2: Call to Demo % */}
            <div className="space-y-2">
              <div className="flex justify-between font-mono font-bold text-slate-700">
                <span>Base Hook Rate:</span>
                <span className="text-emerald-700">{scenario.callToDemoRate.toFixed(1)}%</span>
              </div>
              <input
                type="range"
                min={1.0}
                max={20.0}
                step={0.5}
                value={scenario.callToDemoRate}
                onChange={(e) => setScenario((prev) => ({ ...prev, callToDemoRate: Number(e.target.value) }))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
              <span className="text-[10px] text-slate-400 block font-mono">1 demo per {Math.round(100 / scenario.callToDemoRate)} touches</span>
            </div>

            {/* Slider 3: Demo to Deal Win % */}
            <div className="space-y-2">
              <div className="flex justify-between font-mono font-bold text-slate-700">
                <span>Demo Win Rate:</span>
                <span className="text-emerald-700">{scenario.demoToDealRate.toFixed(1)}%</span>
              </div>
              <input
                type="range"
                min={5.0}
                max={50.0}
                step={1.0}
                value={scenario.demoToDealRate}
                onChange={(e) => setScenario((prev) => ({ ...prev, demoToDealRate: Number(e.target.value) }))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
              <span className="text-[10px] text-slate-400 block font-mono">1 close per {Math.round(100 / scenario.demoToDealRate)} demos</span>
            </div>

            {/* Slider 4: ACV */}
            <div className="space-y-2">
              <div className="flex justify-between font-mono font-bold text-slate-700">
                <span>Avg Deal Size (ACV):</span>
                <span className="text-emerald-700">€{scenario.avgDealSize.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={2000}
                max={20000}
                step={500}
                value={scenario.avgDealSize}
                onChange={(e) => setScenario((prev) => ({ ...prev, avgDealSize: Number(e.target.value) }))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
              <span className="text-[10px] text-slate-400 block font-mono">Multi-location tier pricing</span>
            </div>
          </div>
        </div>
      )}

      {/* Unit Economics Callout Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
          <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">BLENDED CAC / DEAL</span>
          <div className="text-xl font-extrabold text-slate-900 font-mono">
            €{Math.round(totalCACSpend).toLocaleString()}
          </div>
          <p className="text-[11px] text-slate-500">
            Includes SDR base salary + Apollo/Clay stack amortized per closed deal.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
          <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase">LTV : CAC RATIO</span>
          <div className="text-xl font-extrabold text-emerald-700 font-mono">
            {ltvCacRatio} : 1
          </div>
          <p className="text-[11px] text-slate-500">
            Based on 3-year multi-site retention & expansion tier upgrades.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
          <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">PAYBACK PERIOD</span>
          <div className="text-xl font-extrabold text-slate-900 font-mono">
            ~2.4 Months
          </div>
          <p className="text-[11px] text-slate-500">
            Rapid CAC recovery allows reinvestment into SDR expansion headcount.
          </p>
        </div>
      </div>

    </div>
  );
};
