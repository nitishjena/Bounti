import React, { useState } from 'react';
import { COMPETITOR_MATRIX } from '../../data/strategyData';
import { CompetitorComparison } from '../../types';
import { 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  Filter, 
  Search, 
  Swords, 
  Grid, 
  Table, 
  Zap, 
  ArrowRight,
  TrendingUp,
  Award,
  Layers,
  Star
} from 'lucide-react';

interface BattlecardData {
  competitor: string;
  category: string;
  bountiDisplacementAngle: string;
  legacyWeakness: string;
  bountiKillerFeature: string;
  objectionHandler: string;
  typicalCustomerWin: string;
}

const BATTLECARDS: Record<string, BattlecardData> = {
  "Beekeeper": {
    competitor: "Beekeeper",
    category: "Employee Comms & Hub",
    bountiDisplacementAngle: "Beekeeper is an expensive internal chat hub, not an operational execution & training engine.",
    legacyWeakness: "No automated AI course creation from existing PDFs/recipes. Training requires manual course uploading.",
    bountiKillerFeature: "Instant AI Mobile Course Creation + Shift Checklist Compliance in one workflow.",
    objectionHandler: "Customer says: 'We already use Beekeeper for staff messages.' → Response: 'Beekeeper is great for announcements. Bounti turns those messages into 30-second verified shift tasks & AI training courses that cut onboarding from weeks to days.'",
    typicalCustomerWin: "World of Pizza displaced generic messaging with Bounti's verified shift execution."
  },
  "SafetyCulture (iAuditor)": {
    competitor: "SafetyCulture (iAuditor)",
    category: "Audits & Safety Inspections",
    bountiDisplacementAngle: "SafetyCulture is heavy compliance software built for safety auditors, not daily frontline staff.",
    legacyWeakness: "High onboarding friction. Frontline staff find it complex and rarely engage outside required audits.",
    bountiKillerFeature: "Appless Zero-Download Shift Execution. Staff complete micro-audits right in mobile browser or WhatsApp.",
    objectionHandler: "Customer says: 'SafetyCulture handles our monthly audits.' → Response: 'SafetyCulture catches mistakes after the month ends. Bounti prevents them daily by training staff before their shift starts.'",
    typicalCustomerWin: "Concept Family unified daily shift prep with compliance audits in one screen."
  },
  "Axonify": {
    competitor: "Axonify",
    category: "Microlearning & Training",
    bountiDisplacementAngle: "Axonify focuses purely on microlearning quizzes without daily shift execution or audit tools.",
    legacyWeakness: "Siloed from actual daily tasks. Managers must run separate systems for shift checklists and audits.",
    bountiKillerFeature: "Unified Shift Operations + AI Training Engine. Learn a recipe, complete the shift task, log the audit in 1 app.",
    objectionHandler: "Customer says: 'Axonify handles our training.' → Response: 'Axonify trains staff in isolation. Bounti ties training directly to today's shift checklist and food safety rules.'",
    typicalCustomerWin: "Multi-unit franchise chains cut multi-app subscription costs by 45%."
  },
  "Flip": {
    competitor: "Flip",
    category: "Employee Comms & Hub",
    bountiDisplacementAngle: "Flip is an intranet app for employee news, lacking deep multi-location AI course generation.",
    legacyWeakness: "Basic German market comms tool with limited AI automation and no automated compliance tracking.",
    bountiKillerFeature: "AI-Powered Operations Suite built specifically for multi-location expansion.",
    objectionHandler: "Customer says: 'Flip is our company newsfeed.' → Response: 'Newsfeeds don't ensure standard pizza crusts across 15 locations. Bounti enforces standard operating procedures.'",
    typicalCustomerWin: "Kaimug standardized kitchen workflows across all locations."
  },
  "YOOBIC": {
    competitor: "YOOBIC",
    category: "Ops + AI Course Training",
    bountiDisplacementAngle: "YOOBIC is heavy enterprise software with 6-month implementation times and high setup fees.",
    legacyWeakness: "Slow speed to value. High implementation cost and steep learning curve for store managers.",
    bountiKillerFeature: "Go-live in 48 hours. Turn existing PDF manuals into interactive AI courses in 60 seconds.",
    objectionHandler: "Customer says: 'YOOBIC quoted us a 6-month enterprise rollout.' → Response: 'Bounti will have your first 5 locations fully live and trained by Friday.'",
    typicalCustomerWin: "Rapid rollout across regional franchise groups without IT overhead."
  },
  "Deputy": {
    competitor: "Deputy",
    category: "Scheduling & Timesheets",
    bountiDisplacementAngle: "Deputy handles shift schedules and timeclocks, but does not train staff or verify operational quality.",
    legacyWeakness: "Zero training capability and no AI course generation.",
    bountiKillerFeature: "Complements scheduling by ensuring staff know exact SOPs before stepping onto the shift floor.",
    objectionHandler: "Customer says: 'Deputy manages our shifts.' → Response: 'Deputy tells staff when to show up. Bounti tells them exactly what to do and how to do it perfectly.'",
    typicalCustomerWin: "Integrated with scheduling to trigger onboarding when a new shift is booked."
  }
};

export const ChallengerMatrixTab: React.FC = () => {
  const [activeViewMode, setActiveViewMode] = useState<'table' | 'battlecard' | 'positioning' | 'moat'>('battlecard');
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCompetitor, setSelectedCompetitor] = useState<string>("Beekeeper");

  const categories = ['All', 'Ops + AI Course Training', 'Audits & Safety Inspections', 'Employee Comms & Hub', 'Microlearning & Training'];

  const competitorsList = COMPETITOR_MATRIX.filter(c => !c.isBounti);

  const filteredCompetitors = COMPETITOR_MATRIX.filter(c => {
    const matchesCategory = filterCategory === 'All' || c.category === filterCategory || c.isBounti;
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.notes.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const activeBattlecard = BATTLECARDS[selectedCompetitor] || BATTLECARDS["Beekeeper"];

  return (
    <div className="space-y-6 font-sans">
      
      {/* Header & Mode Selector */}
      <div className="p-5 md:p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <h3 className="text-xl font-black text-slate-900 tracking-tight">
              Dynamic Challenger vs. Incumbent Matrix
            </h3>
          </div>
          <p className="text-xs text-slate-500 mt-1 max-w-2xl">
            Interactive positioning, head-to-head battlecards, and competitive displacement playbooks for Bounti sales execution.
          </p>
        </div>

        {/* 4 View Modes */}
        <div className="flex items-center gap-1 bg-slate-100 p-1.5 rounded-2xl border border-slate-200/80">
          <button
            onClick={() => setActiveViewMode('battlecard')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeViewMode === 'battlecard'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Swords className="w-3.5 h-3.5 text-emerald-400" />
            <span>Head-to-Head Battlecard</span>
          </button>

          <button
            onClick={() => setActiveViewMode('table')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeViewMode === 'table'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Table className="w-3.5 h-3.5 text-emerald-400" />
            <span>Scorecard Table</span>
          </button>

          <button
            onClick={() => setActiveViewMode('positioning')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeViewMode === 'positioning'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Grid className="w-3.5 h-3.5 text-emerald-400" />
            <span>2x2 Canvas</span>
          </button>

          <button
            onClick={() => setActiveViewMode('moat')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeViewMode === 'moat'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            <span>Bounti Moat</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: HEAD-TO-HEAD BATTLECARD MODE */}
      {activeViewMode === 'battlecard' && (
        <div className="space-y-6">
          
          {/* Competitor Selector Bar */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase mr-2">
              SELECT COMPETITOR TO DISPLACE:
            </span>
            {competitorsList.map((comp) => (
              <button
                key={comp.name}
                onClick={() => setSelectedCompetitor(comp.name)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all ${
                  selectedCompetitor === comp.name
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {comp.name}
              </button>
            ))}
          </div>

          {/* Battlecard Canvas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Left Card: Incumbent Competitor Breakdown */}
            <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-md space-y-4">
              <div className="flex items-start justify-between border-b border-slate-800 pb-3">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-400 bg-rose-950 px-2.5 py-0.5 rounded-full border border-rose-800">
                    INCUMBENT TARGET
                  </span>
                  <h3 className="text-2xl font-black text-white tracking-tight mt-1">
                    {activeBattlecard.competitor}
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">{activeBattlecard.category}</span>
                </div>
                <div className="text-right font-mono text-xs text-slate-400">
                  <span>Speed score: 4/10</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-rose-400 font-mono uppercase mb-1">
                  Displacement Angle
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {activeBattlecard.bountiDisplacementAngle}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-rose-400 font-mono uppercase mb-1">
                  Core Legacy Weakness
                </h4>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                  ⚠️ {activeBattlecard.legacyWeakness}
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[11px] font-mono text-slate-500">
                  Targeted by Nish in cold outreach sequences
                </span>
              </div>
            </div>

            {/* Right Card: Bounti Unfair Advantage & Objection Handler */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-md space-y-4">
              <div className="flex items-start justify-between border-b border-slate-200 pb-3">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    BOUNTI KILLER ADVANTAGE
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight mt-1">
                    Bounti Platform
                  </h3>
                  <span className="text-xs text-emerald-700 font-mono font-bold">Multi-Location Operations Suite</span>
                </div>
                <div className="text-right font-mono text-xs text-emerald-700 font-bold">
                  <span>Speed score: 10/10</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 font-mono uppercase mb-1">
                  Bounti Unfair Advantage
                </h4>
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 font-bold leading-relaxed">
                  ⚡ {activeBattlecard.bountiKillerFeature}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 font-mono uppercase mb-1">
                  Live Objection Handling Script
                </h4>
                <div className="p-3.5 rounded-xl bg-slate-900 text-white text-xs leading-relaxed font-sans">
                  {activeBattlecard.objectionHandler}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 font-mono uppercase mb-1">
                  Proven Customer Win
                </h4>
                <p className="text-xs text-slate-600">
                  {activeBattlecard.typicalCustomerWin}
                </p>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* VIEW 2: SCORECARD TABLE MODE */}
      {activeViewMode === 'table' && (
        <div className="space-y-4">
          
          {/* Controls: Search & Category Filter */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search competitors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200/80 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-slate-400"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    filterCategory === cat
                      ? 'bg-slate-900 text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 text-slate-700 font-mono border-b border-slate-200">
                  <th className="p-4 font-bold">Platform / Competitor</th>
                  <th className="p-4 font-bold">Category Focus</th>
                  <th className="p-4 font-bold text-center">Speed to Value</th>
                  <th className="p-4 font-bold text-center">AI Course Automation</th>
                  <th className="p-4 font-bold text-center">Onboarding Friction</th>
                  <th className="p-4 font-bold text-center">CSAT Rating</th>
                  <th className="p-4 font-bold text-center">Ops + Training Integration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredCompetitors.map((comp) => {
                  const isBounti = comp.isBounti;

                  return (
                    <tr 
                      key={comp.name}
                      className={`transition-colors ${
                        isBounti 
                          ? 'bg-emerald-50/80 border-l-4 border-l-emerald-600 font-semibold' 
                          : 'hover:bg-slate-50'
                      }`}
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <span className={`font-bold text-sm ${isBounti ? 'text-emerald-900' : 'text-slate-900'}`}>
                            {comp.name}
                          </span>
                          {isBounti && (
                            <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white font-bold font-mono text-[10px] uppercase">
                              BOUNTI MOAT
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-slate-500 block mt-0.5">{comp.notes}</span>
                      </td>

                      <td className="p-4 text-slate-600 font-medium">
                        {comp.category}
                      </td>

                      <td className="p-4 text-center">
                        <div className="inline-flex items-center gap-1.5 font-bold font-mono px-2.5 py-1 rounded-lg bg-slate-100 text-slate-900">
                          <span>{comp.speedToValue} / 10</span>
                        </div>
                      </td>

                      <td className="p-4 text-center">
                        <div className={`inline-flex items-center gap-1 font-bold font-mono px-2.5 py-1 rounded-lg ${
                          comp.aiAutomationScore >= 8 
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          {comp.aiAutomationScore >= 8 && <Sparkles className="w-3.5 h-3.5 text-emerald-600" />}
                          <span>{comp.aiAutomationScore} / 10</span>
                        </div>
                      </td>

                      <td className="p-4 text-center">
                        <span className={`px-2.5 py-1 rounded-full font-mono text-[11px] font-bold ${
                          comp.onboardingFriction === 'Low'
                            ? 'bg-emerald-100 text-emerald-800'
                            : comp.onboardingFriction === 'Medium'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}>
                          {comp.onboardingFriction}
                        </span>
                      </td>

                      <td className="p-4 text-center font-mono font-bold text-slate-800">
                        ★ {comp.csatScore.toFixed(1)} / 5
                      </td>

                      <td className="p-4 text-center">
                        {comp.opsAndTrainingIntegration ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 mx-auto" />
                        ) : (
                          <XCircle className="w-5 h-5 text-slate-400 mx-auto opacity-50" />
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* VIEW 3: 2X2 CANVAS MODE */}
      {activeViewMode === 'positioning' && (
        <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-4">
          <div className="flex justify-between items-center border-b border-slate-800 pb-3">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase">2X2 MARKET POSITIONING QUADRANT</span>
              <h4 className="text-lg font-extrabold text-white">Speed to Value vs. Ops & Training Depth</h4>
            </div>
          </div>

          <div className="relative h-72 border border-slate-800 rounded-2xl bg-slate-950 p-4 flex flex-col justify-between my-2 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full border-t border-dashed border-slate-800"></div>
              <div className="h-full border-l border-dashed border-slate-800 absolute"></div>
            </div>

            {/* Quadrant Labels */}
            <div className="flex justify-between text-[10px] font-mono text-slate-500 z-10">
              <span>SLOW ROLLOUT / ISOLATED</span>
              <span>SLOW ROLLOUT / INTEGRATED</span>
            </div>

            {/* Bounti Node (Bottom Right / Top Right Leader) */}
            <div className="absolute right-8 top-8 z-20 flex flex-col items-center animate-bounce">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-slate-950 font-extrabold flex items-center justify-center text-xl shadow-xl shadow-emerald-500/30 border-2 border-white">
                b
              </div>
              <span className="text-xs font-black text-emerald-400 mt-1 font-mono">BOUNTI</span>
              <span className="text-[10px] text-slate-300 font-mono bg-slate-900 px-2 py-0.5 rounded border border-slate-800">Fast AI + All-in-1 Ops</span>
            </div>

            {/* Competitor Nodes */}
            <div className="absolute left-10 top-12 z-10 text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
              SafetyCulture (Audits)
            </div>
            <div className="absolute left-12 bottom-12 z-10 text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
              Beekeeper (Chat)
            </div>
            <div className="absolute right-36 bottom-16 z-10 text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
              Axonify / YOOBIC
            </div>

            <div className="flex justify-between text-[10px] font-mono text-slate-500 z-10">
              <span>FAST ROLLOUT / ISOLATED</span>
              <span className="text-emerald-400 font-bold">BOUNTI QUADRANT (FAST + ALL-IN-1)</span>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 4: BOUNTI MOAT CARDS */}
      {activeViewMode === 'moat' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              MOAT 01 — AI COURSE ENGINE
            </span>
            <h4 className="text-base font-bold text-slate-900">PDFs to Mobile Courses in 60s</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Upload existing SOP PDFs, kitchen recipes, or safety guidelines. Bounti's AI generates interactive 30-second mobile training quizzes automatically.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              MOAT 02 — APPLESS EXECUTION
            </span>
            <h4 className="text-base font-bold text-slate-900">Zero App Store Friction</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Frontline staff open shift checklists via QR codes, browser, or WhatsApp without needing personal app store logins or passwords.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              MOAT 03 — UNIFIED OPS + TRAINING
            </span>
            <h4 className="text-base font-bold text-slate-900">Shift Checklists + Audits in 1 App</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Eliminates vendor fatigue. Combines daily shift prep, hygiene checklists, food safety audits, and staff training into one dashboard.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              MOAT 04 — REAL-TIME COMPLIANCE
            </span>
            <h4 className="text-base font-bold text-slate-900">Instant Multi-Site Alerts</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Area managers get real-time push alerts when a location skips a hygiene checklist or fails a food temp check before store opening.
            </p>
          </div>
        </div>
      )}

    </div>
  );
};
