import React, { useState } from 'react';
import { Sliders, Zap, TrendingUp, Euro, Users, Clock, Gauge, RotateCcw, Activity } from 'lucide-react';
import { FunnelFlowVisualizer } from '../FunnelFlowVisualizer';
import { ScenarioModel } from '../../types';

export const WarRoomSimulatorTab: React.FC = () => {
  const [sdrCount, setSdrCount] = useState<number>(2);
  const [outreachVolume, setOutreachVolume] = useState<number>(2500); // calls/month/rep
  const [callToDemoRate, setCallToDemoRate] = useState<number>(8.0); // %
  const [demoToDealRate, setDemoToDealRate] = useState<number>(25.0); // %
  const [acv, setAcv] = useState<number>(6000); // €
  const [responseSlaHours, setResponseSlaHours] = useState<number>(2); // SLA response time in hours

  // Scenario state for FunnelFlowVisualizer
  const [scenario, setScenario] = useState<ScenarioModel>({
    calls: 2500,
    callToDemoRate: 8.0,
    demoToDealRate: 25.0,
    avgDealSize: 6000,
    salesCycleDays: 21,
    sdrCount: 1,
    workingDays: 25,
  });

  // Live Calculations
  const totalCallsPerMonth = sdrCount * outreachVolume;
  const demosPerMonth = Math.round(totalCallsPerMonth * (callToDemoRate / 100));
  const dealsPerMonth = Math.round(demosPerMonth * (demoToDealRate / 100));
  const monthlyArrLift = dealsPerMonth * acv;
  const annualArrLift = monthlyArrLift * 12;

  // Speed Multiplier vs Incumbents
  const speedMultiplier = Number(((24 / Math.max(0.5, responseSlaHours)) * 0.8 + (callToDemoRate / 5)).toFixed(1));

  // Payback period in months
  const repCostPerMonth = 4000;
  const totalSdrCostAnnual = repCostPerMonth * 12 * sdrCount;
  const paybackPeriodMonths = Number((totalSdrCostAnnual / Math.max(1, annualArrLift) * 12).toFixed(1));

  const resetDefaults = () => {
    setSdrCount(2);
    setOutreachVolume(2500);
    setCallToDemoRate(8.0);
    setDemoToDealRate(25.0);
    setAcv(6000);
    setResponseSlaHours(2);
    setScenario({
      calls: 2500,
      callToDemoRate: 8.0,
      demoToDealRate: 25.0,
      avgDealSize: 6000,
      salesCycleDays: 21,
      sdrCount: 1,
      workingDays: 25,
    });
  };

  return (
    <div className="space-y-8 font-sans">
      
      {/* SECTION 1: Interactive Funnel Flow Visualisation */}
      <FunnelFlowVisualizer scenario={scenario} setScenario={setScenario} />

      {/* SECTION 2: War Room Rep Scaling Calculator */}
      <div className="space-y-6 pt-4 border-t border-slate-200">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-5 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
          <div>
            <div className="flex items-center gap-2">
              <Gauge className="w-5 h-5 text-emerald-600" />
              <h3 className="text-xl font-black text-slate-900 tracking-tight">
                War Room Headcount & Multi-Rep Scaling Simulator
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Model multi-rep SDR capacity, response SLAs, and ARR payback schedules as Bounti scales headcount.
            </p>
          </div>

          <button
            onClick={resetDefaults}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 transition shadow-2xs"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Baseline</span>
          </button>
        </div>

        {/* Grid: Controls vs Outputs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Controls */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-5">
            <h4 className="text-xs font-bold text-slate-900 font-mono uppercase border-b border-slate-200 pb-2">
              Multi-Rep Scaling Parameters
            </h4>

            {/* Slider 1: Reps */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-800">Dedicated SDR Reps</span>
                <span className="font-bold font-mono text-emerald-700">{sdrCount} Full-Time Reps</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="10" 
                value={sdrCount}
                onChange={(e) => setSdrCount(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
            </div>

            {/* Slider 2: Touches */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-800">Monthly Touches / Rep</span>
                <span className="font-bold font-mono text-emerald-700">{outreachVolume.toLocaleString()} Touches</span>
              </div>
              <input 
                type="range" 
                min="1000" 
                max="5000" 
                step="250"
                value={outreachVolume}
                onChange={(e) => setOutreachVolume(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
            </div>

            {/* Slider 3: SLA */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-800">Trigger SLA Response Time</span>
                <span className="font-bold font-mono text-emerald-700">{responseSlaHours} Hours</span>
              </div>
              <input 
                type="range" 
                min="0.5" 
                max="24" 
                step="0.5"
                value={responseSlaHours}
                onChange={(e) => setResponseSlaHours(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
            </div>
          </div>

          {/* Outputs */}
          <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-md flex flex-col justify-between space-y-6">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-emerald-400" />
                SIMULATED TEAM CAPACITY
              </span>
              <span className="text-[11px] font-mono text-slate-400">Live Recalculated</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-950 border border-emerald-500/30 col-span-2 text-center">
                <span className="text-xs font-mono text-slate-400 uppercase block">PROJECTED ANNUAL TEAM ARR LIFT</span>
                <span className="text-3xl md:text-5xl font-black text-emerald-400 block mt-1">
                  €{annualArrLift.toLocaleString()}
                </span>
                <span className="text-xs text-slate-400 mt-1 block">
                  (~€{Math.round(annualArrLift / 12).toLocaleString()} / month sourced pipeline)
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">CLOSED DEALS / YR</span>
                <span className="text-2xl font-bold text-white block mt-1">
                  {dealsPerMonth * 12} Deals
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">PAYBACK PERIOD</span>
                <span className="text-2xl font-bold text-emerald-400 block mt-1">
                  {paybackPeriodMonths} Months
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 text-center font-mono">
              Calculated for {sdrCount} rep(s) @ €{acv.toLocaleString()} ACV baseline.
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
