import React, { useState } from 'react';
import { Calendar, Calculator, CheckCircle2, TrendingUp, ShieldCheck, ArrowRight, Zap } from 'lucide-react';

export const RoadmapRoiTab: React.FC = () => {
  // ROI Calculator Inputs
  const [locations, setLocations] = useState<number>(20);
  const [currentTurnoverRate, setCurrentTurnoverRate] = useState<number>(45); // % annual turnover
  const [avgStaffPerLocation, setAvgStaffPerLocation] = useState<number>(12);
  const [trainingHoursSavedPerHire, setTrainingHoursSavedPerHire] = useState<number>(15);
  const [hourlyWage, setHourlyWage] = useState<number>(18); // €/hour

  // Calculations
  const totalFrontlineStaff = locations * avgStaffPerLocation;
  const annualNewHires = Math.round(totalFrontlineStaff * (currentTurnoverRate / 100));
  const totalHoursSavedAnnual = annualNewHires * trainingHoursSavedPerHire;
  const directWageSavings = totalHoursSavedAnnual * hourlyWage;
  const BountiEstimatedFee = Math.round(locations * 300 * 12); // ~€300/location/month
  const netAnnualRoiPct = Math.round(((directWageSavings - BountiEstimatedFee) / BountiEstimatedFee) * 100);
  const paybackDays = Math.max(12, Math.round((BountiEstimatedFee / directWageSavings) * 365));

  return (
    <div className="space-y-6">
      
      {/* 90-Day Milestone Roadmap */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-emerald-500" />
              Nish Jena's 90-Day Execution Roadmap for Bounti
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Phase-by-phase outbound engine buildout, trigger validation, and international English expansion.
            </p>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            Target: 10+ SQLs in 60 Days
          </span>
        </div>

        {/* 3 Milestone Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          
          {/* Day 1-30 */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 block">DAY 1 – 30 · PHASE 1</span>
            <h4 className="font-bold text-base text-slate-900 dark:text-white">SHADOW & BUILD</h4>
            <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-2 list-disc list-inside">
              <li>Shadow 5 live demos with Deniz & Ziar to master objection handling.</li>
              <li>Build a 100-account target list by hand from Google Maps + LinkedIn location counts.</li>
              <li>Set up Apollo, Clay, and Instantly sequence infrastructure.</li>
            </ul>
          </div>

          {/* Day 31-60 */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 block">DAY 31 – 60 · PHASE 2</span>
            <h4 className="font-bold text-base text-slate-900 dark:text-white">OUTBOUND SOLO & TRIGGERS</h4>
            <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-2 list-disc list-inside">
              <li>Launch Apollo sequences; execute 12+ cold calls per day.</li>
              <li>Monitor Indeed & LinkedIn for "Location Manager" job post triggers.</li>
              <li>Deliver first solo discovery calls & product demos in English.</li>
            </ul>
          </div>

          {/* Day 61-90 */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 block">DAY 61 – 90 · PHASE 3</span>
            <h4 className="font-bold text-base text-slate-900 dark:text-white">PLAYBOOK & SCALE</h4>
            <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-2 list-disc list-inside">
              <li>Document v1 repeatable playbook for Deniz & Ziar.</li>
              <li>Sponsor 1 regional franchise meetup / association event.</li>
              <li>Launch location manager referral loop to tap sideways frontline trust.</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Interactive ROI Calculator */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Calculator className="w-5 h-5 text-emerald-500" />
              Customer ROI & Onboarding Efficiency Calculator
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Model how Bounti's AI course creation & shift checklists generate 68% training cost savings for prospective multi-location clients.
            </p>
          </div>
        </div>

        {/* Inputs vs Outputs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Inputs */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white font-mono uppercase">Client Chain Parameters</h4>

            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-700 dark:text-slate-300">Number of Locations</span>
                <span className="font-bold font-mono text-emerald-600 dark:text-emerald-400">{locations} Sites</span>
              </div>
              <input 
                type="range" min="5" max="100" value={locations}
                onChange={(e) => setLocations(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-700 dark:text-slate-300">Frontline Staff per Location</span>
                <span className="font-bold font-mono text-emerald-600 dark:text-emerald-400">{avgStaffPerLocation} Staff</span>
              </div>
              <input 
                type="range" min="5" max="50" value={avgStaffPerLocation}
                onChange={(e) => setAvgStaffPerLocation(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-700 dark:text-slate-300">Annual Staff Turnover %</span>
                <span className="font-bold font-mono text-emerald-600 dark:text-emerald-400">{currentTurnoverRate}%</span>
              </div>
              <input 
                type="range" min="20" max="100" value={currentTurnoverRate}
                onChange={(e) => setCurrentTurnoverRate(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-700 dark:text-slate-300">Training Hours Saved per Hire</span>
                <span className="font-bold font-mono text-emerald-600 dark:text-emerald-400">{trainingHoursSavedPerHire} Hours</span>
              </div>
              <input 
                type="range" min="5" max="30" value={trainingHoursSavedPerHire}
                onChange={(e) => setTrainingHoursSavedPerHire(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>
          </div>

          {/* Calculated Output Display */}
          <div className="p-6 rounded-2xl bg-slate-950 text-white border border-slate-800 flex flex-col justify-between space-y-4 shadow-xl">
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase">PROJECTED CLIENT SAVINGS</span>

            <div className="text-center py-2">
              <span className="text-xs font-mono text-slate-400 block">ANNUAL ONBOARDING SAVINGS</span>
              <span className="text-3xl md:text-4xl font-black text-emerald-400 block mt-1">
                €{directWageSavings.toLocaleString()} / yr
              </span>
              <span className="text-xs text-slate-400 mt-1 block">
                ({totalHoursSavedAnnual.toLocaleString()} hours saved across {annualNewHires} new hires)
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800 text-center text-xs">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-slate-400 font-mono block text-[10px]">NET CLIENT ROI</span>
                <span className="text-xl font-bold text-emerald-400 block mt-0.5">+{netAnnualRoiPct}%</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-slate-400 font-mono block text-[10px]">PAYBACK PERIOD</span>
                <span className="text-xl font-bold text-cyan-400 block mt-0.5">{paybackDays} Days</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
