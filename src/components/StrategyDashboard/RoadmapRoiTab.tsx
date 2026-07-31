import React from 'react';
import { Calendar } from 'lucide-react';

export const RoadmapRoiTab: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* 90-Day Milestone Roadmap */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg space-y-4 font-sans">
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
            Target: 10+ qualified demos booked in 60 days
          </span>
        </div>

        {/* 3 Milestone Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          
          {/* Day 1-30 */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 block">DAY 1 – 30 · PHASE 1</span>
            <h4 className="font-bold text-base text-slate-900 dark:text-white">SHADOW & BUILD</h4>
            <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-2 list-disc list-inside leading-relaxed">
              <li>Shadow 5 live demos with the AE team and founders to master objection handling.</li>
              <li>Build a 100-account target list by hand from Google Maps + LinkedIn location counts for UK and Ireland.</li>
              <li>Set up Apollo, Clay, and Instantly sequence infrastructure.</li>
            </ul>
          </div>

          {/* Day 31-60 */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 block">DAY 31 – 60 · PHASE 2</span>
            <h4 className="font-bold text-base text-slate-900 dark:text-white">OUTBOUND SOLO & TRIGGERS</h4>
            <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-2 list-disc list-inside leading-relaxed">
              <li>Launch Apollo sequences; execute 75 dials per day (~50 when multi-channel).</li>
              <li>Monitor Indeed & LinkedIn for "Location Manager" job post triggers.</li>
              <li>Deliver first solo discovery calls & product demos in English.</li>
            </ul>
          </div>

          {/* Day 61-90 */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 block">DAY 61 – 90 · PHASE 3</span>
            <h4 className="font-bold text-base text-slate-900 dark:text-white">PLAYBOOK & SCALE</h4>
            <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-2 list-disc list-inside leading-relaxed">
              <li>Document the v1 UK playbook and hand it to the AE team.</li>
              <li>Target: 10+ qualified demos booked in 60 days.</li>
              <li>Launch location manager referral loop to tap sideways frontline trust.</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};
