import React, { useState } from 'react';
import { StrategySubTab } from '../../types';
import { TerritoryMapTab } from './TerritoryMapTab';
import { ChallengerMatrixTab } from './ChallengerMatrixTab';
import { TargetAccountsTab } from './TargetAccountsTab';
import { RoadmapRoiTab } from './RoadmapRoiTab';
import { MapPin, ShieldCheck, Building2, Calendar } from 'lucide-react';

export const StrategyDashboardSection: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<StrategySubTab>('territory-map');

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6">
      
      {/* Sub-Tabs Navigation */}
      <div className="no-print bg-white dark:bg-slate-900 p-2 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-wrap items-center justify-center gap-1">
        <button
          onClick={() => setActiveSubTab('territory-map')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeSubTab === 'territory-map'
              ? 'bg-emerald-500 text-slate-950 shadow-sm'
              : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <MapPin className="w-4 h-4" />
          <span>Territory Map</span>
        </button>

        <button
          onClick={() => setActiveSubTab('challenger-matrix')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeSubTab === 'challenger-matrix'
              ? 'bg-emerald-500 text-slate-950 shadow-sm'
              : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>Challenger Matrix</span>
        </button>

        <button
          onClick={() => setActiveSubTab('target-accounts')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeSubTab === 'target-accounts'
              ? 'bg-emerald-500 text-slate-950 shadow-sm'
              : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Building2 className="w-4 h-4" />
          <span>Target Accounts & Generator</span>
        </button>

        <button
          onClick={() => setActiveSubTab('plan-roi')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeSubTab === 'plan-roi'
              ? 'bg-emerald-500 text-slate-950 shadow-sm'
              : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>90-Day Plan & ROI</span>
        </button>
      </div>

      {/* Sub-Tab View Content */}
      <div className="w-full transition-all">
        {activeSubTab === 'territory-map' && <TerritoryMapTab />}
        {activeSubTab === 'challenger-matrix' && <ChallengerMatrixTab />}
        {activeSubTab === 'target-accounts' && <TargetAccountsTab />}
        {activeSubTab === 'plan-roi' && <RoadmapRoiTab />}
      </div>

    </div>
  );
};

