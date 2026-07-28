import React, { useState } from 'react';
import { TERRITORY_HOTSPOTS } from '../../data/strategyData';
import { HotspotLocation } from '../../types';
import { 
  MapPin, 
  Building2, 
  TrendingUp, 
  Globe2, 
  Sparkles, 
  ArrowRight, 
  Search,
  CheckCircle2,
  Zap,
  Users,
  ShieldCheck,
  Compass
} from 'lucide-react';

interface EnglishTerritoryAnalysis {
  region: string;
  flag: string;
  tam: string;
  targetChainsCount: number;
  marketFitScore: number; // 1-100
  primaryDrivers: string[];
  keyLogos: string[];
  playbookStrategy: string;
  turnoverPainPoint: string;
}

const ENGLISH_TERRITORY_SCAN: EnglishTerritoryAnalysis[] = [
  {
    region: "United Kingdom & Ireland",
    flag: "🇬🇧 🇮🇪",
    tam: "€1.4M ARR",
    targetChainsCount: 420,
    marketFitScore: 96,
    primaryDrivers: [
      "Strict FSA Food Hygiene & Safety Audits across multi-unit QSR",
      "Massive annual frontline turnover (65%-80%) requiring instant AI onboarding",
      "Rapidly expanding fitness chains & grab-and-go food concepts"
    ],
    keyLogos: ["Pret A Manger", "Greggs", "Leon", "Nando's UK", "The Gym Group", "PureGym", "Coffee#1", "Gail's Bakery"],
    playbookStrategy: "Trigger on new site expansion & 'Area Ops Manager' job listings. Lead with instant WhatsApp/Appless training + automated food safety compliance.",
    turnoverPainPoint: "72% staff turnover in UK QSR means location managers spend 15+ hrs/week re-training new hires on basic prep & hygiene."
  },
  {
    region: "Nordic Region (Sweden, Denmark, Norway, Finland)",
    flag: "🇸🇪 🇩🇰 🇳🇴 🇫🇮",
    tam: "€950K ARR",
    targetChainsCount: 280,
    marketFitScore: 94,
    primaryDrivers: [
      "Near-100% English proficiency across corporate, area managers, and store leads",
      "High labor costs drive extreme demand for operational efficiency & AI automation",
      "Cross-border Nordic franchise chains expanding into Central Europe"
    ],
    keyLogos: ["Espresso House", "Max Burgers", "Joe & The Juice", "Fitness24Seven", "Lagkagehuset / Ole & Steen"],
    playbookStrategy: "Approach Stockholm & Copenhagen HQ operational directors. Offer Bounti as unified cross-border frontline training + shift execution standard.",
    turnoverPainPoint: "High hourly wage rates make manual on-site shadowing cost-prohibitive. AI mobile course creation cuts onboarding cost by 60%."
  },
  {
    region: "Benelux & European Transit Hubs",
    flag: "🇳🇱 🇧🇪 🇱🇺",
    tam: "€750K ARR",
    targetChainsCount: 190,
    marketFitScore: 90,
    primaryDrivers: [
      "International airport, railway & transit station concession operators",
      "Multilingual frontline teams requiring English-first standardized training",
      "High density of European headquarters for global franchise groups"
    ],
    keyLogos: ["SSP Group EU", "HMSHost International", "Autogrill Europe", "La Place", "Dunkin' Benelux"],
    playbookStrategy: "Target Group Operations Directors in Amsterdam/Brussels overseeing multi-brand transit locations with high multilingual staff rotation.",
    turnoverPainPoint: "Staff speak 5+ native languages; Bounti's AI auto-translates shift checklists and training into any language instantly."
  },
  {
    region: "Central & Eastern European Master Franchises",
    flag: "🇵🇱 🇨🇿 🇷🇴",
    tam: "€600K ARR",
    targetChainsCount: 150,
    marketFitScore: 88,
    primaryDrivers: [
      "Large master franchise operators running 50+ US/UK food & retail sites in CEE",
      "English used as official corporate & operational management language",
      "High store opening velocity across Warsaw, Prague, Bucharest"
    ],
    keyLogos: ["AmRest Group (KFC/Pizza Hut/Starbucks)", "Lagardère Travel Retail", "Sphinx", "Costa Coffee CEE"],
    playbookStrategy: "Pitch English-language central management dashboard with localized frontline mobile modules for regional store staff.",
    turnoverPainPoint: "Rapid regional store openings overwhelm central training teams; Bounti creates location-specific courses in 60 seconds."
  }
];

export const TerritoryMapTab: React.FC = () => {
  const [selectedHotspot, setSelectedHotspot] = useState<HotspotLocation>(TERRITORY_HOTSPOTS[0]);
  const [activeView, setActiveView] = useState<'map' | 'english-scanner'>('english-scanner');
  const [selectedEnglishRegion, setSelectedEnglishRegion] = useState<EnglishTerritoryAnalysis>(ENGLISH_TERRITORY_SCAN[0]);

  return (
    <div className="space-y-6 font-sans">
      
      {/* View Switcher Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-5 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-emerald-600" />
            <h3 className="text-xl font-black text-slate-900 tracking-tight">
              Territory Expansion & English Market Radar
            </h3>
          </div>
          <p className="text-xs text-slate-500 mt-1 max-w-2xl">
            Live web intelligence scanning Bounti's active DACH coverage alongside high-growth English market whitespace opportunities across Europe.
          </p>
        </div>

        {/* View Toggle Tabs */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200/80">
          <button
            onClick={() => setActiveView('english-scanner')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeView === 'english-scanner'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Globe2 className="w-4 h-4 text-emerald-400" />
            <span>English Territory Growth Scanner</span>
          </button>

          <button
            onClick={() => setActiveView('map')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeView === 'map'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>European Map & Hotspots</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: ENGLISH TERRITORY GROWTH SCANNER */}
      {activeView === 'english-scanner' && (
        <div className="space-y-6">
          
          {/* Top English TAM Summary Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">COMBINED ENGLISH TAM</span>
              <div className="text-2xl font-black text-slate-900 font-mono mt-0.5">€3.70M ARR</div>
              <span className="text-[11px] text-emerald-700 font-semibold font-mono mt-1 block">1,040+ Target Multi-Site Chains</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">TOP EXPANSION MARKET</span>
              <div className="text-2xl font-black text-slate-900 font-mono mt-0.5">UK & Ireland 🇬🇧</div>
              <span className="text-[11px] text-slate-500 font-mono mt-1 block">€1.40M TAM · 420 Chains</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">FASTEST TECH ADOPTION</span>
              <div className="text-2xl font-black text-slate-900 font-mono mt-0.5">Nordic Region 🇸🇪</div>
              <span className="text-[11px] text-emerald-700 font-semibold font-mono mt-1 block">94/100 Market Fit Score</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">REASON FOR EXPANSION</span>
              <div className="text-2xl font-black text-slate-900 font-mono mt-0.5">70%+ Turnover</div>
              <span className="text-[11px] text-slate-500 font-mono mt-1 block">High urgency for Appless AI training</span>
            </div>
          </div>

          {/* Interactive English Region Selector & Deep Dive */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Region List Cards (Left Column) */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block px-1">
                SELECT ENGLISH GROWTH TERRITORY
              </span>

              {ENGLISH_TERRITORY_SCAN.map((scan) => {
                const isSelected = selectedEnglishRegion.region === scan.region;

                return (
                  <button
                    key={scan.region}
                    onClick={() => setSelectedEnglishRegion(scan)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 ${
                      isSelected
                        ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-emerald-500/30'
                        : 'bg-white text-slate-900 border-slate-200 hover:border-slate-300 shadow-xs'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg">{scan.flag}</span>
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                        isSelected ? 'bg-emerald-500 text-slate-950' : 'bg-slate-100 text-slate-800'
                      }`}>
                        FIT SCORE {scan.marketFitScore}/100
                      </span>
                    </div>

                    <h4 className="text-sm font-bold tracking-tight mt-2">{scan.region}</h4>
                    
                    <div className="flex items-center justify-between text-xs mt-2 pt-2 border-t border-slate-200/40 font-mono">
                      <span className={isSelected ? 'text-slate-300' : 'text-slate-500'}>TAM: <strong>{scan.tam}</strong></span>
                      <span className={isSelected ? 'text-slate-300' : 'text-slate-500'}>{scan.targetChainsCount} Chains</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Detailed Inspector Panel for Selected Region (Right 2 Cols) */}
            <div className="lg:col-span-2 p-6 rounded-3xl bg-white border border-slate-200/90 shadow-md space-y-5">
              
              <div className="flex items-start justify-between border-b border-slate-200 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{selectedEnglishRegion.flag}</span>
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">
                      {selectedEnglishRegion.region}
                    </h3>
                  </div>
                  <p className="text-xs text-emerald-700 font-mono font-bold mt-1">
                    Market Fit Rating: {selectedEnglishRegion.marketFitScore} / 100 • Estimated TAM: {selectedEnglishRegion.tam}
                  </p>
                </div>

                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-mono text-xs font-bold border border-emerald-200">
                  {selectedEnglishRegion.targetChainsCount} Target Accounts
                </span>
              </div>

              {/* Core Turnover & Compliance Pain Point */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 space-y-1">
                <span className="text-[10px] font-mono font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
                  KEY PAIN POINT & UNFAIR ADVANTAGE
                </span>
                <p className="text-xs text-amber-950 font-medium leading-relaxed">
                  {selectedEnglishRegion.turnoverPainPoint}
                </p>
              </div>

              {/* Primary Market Growth Drivers */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-900 font-mono uppercase">
                  Primary Market Growth Drivers
                </h4>
                <div className="space-y-1.5 text-xs text-slate-700">
                  {selectedEnglishRegion.primaryDrivers.map((driver, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{driver}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Outreach Playbook */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-900 font-mono uppercase">
                  Recommended GTM Outbound Playbook
                </h4>
                <div className="p-3.5 rounded-2xl bg-slate-900 text-white text-xs leading-relaxed font-sans space-y-2">
                  <p>{selectedEnglishRegion.playbookStrategy}</p>
                </div>
              </div>

              {/* Key Target Logos */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-900 font-mono uppercase">
                  High-Priority Target Logos in Region
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedEnglishRegion.keyLogos.map((logo) => (
                    <span
                      key={logo}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-900 text-xs font-bold border border-slate-200/80 shadow-2xs hover:bg-emerald-50 hover:border-emerald-300 transition"
                    >
                      {logo}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      )}

      {/* VIEW 2: EUROPEAN MAP & HOTSPOTS */}
      {activeView === 'map' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Interactive European Map Canvas */}
          <div className="lg:col-span-2 p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 relative shadow-xl min-h-[420px] flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between z-10">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                EUROPEAN MAP & HOTSPOTS
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                Click pin to inspect hotspot details
              </span>
            </div>

            <div className="relative w-full h-[320px] my-4 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-map" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#10B981" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-map)" />
              </svg>

              {TERRITORY_HOTSPOTS.map((hotspot) => {
                const isSelected = selectedHotspot.id === hotspot.id;
                
                let badgeBg = 'bg-emerald-500';
                if (hotspot.type === 'vacuum') badgeBg = 'bg-cyan-500';
                if (hotspot.type === 'whitespace') badgeBg = 'bg-amber-500';

                return (
                  <button
                    key={hotspot.id}
                    onClick={() => setSelectedHotspot(hotspot)}
                    style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group focus:outline-none transition-all duration-300"
                  >
                    <div className={`relative flex items-center justify-center w-8 h-8 rounded-full ${badgeBg} text-slate-950 font-bold shadow-lg transition-transform ${
                      isSelected ? 'scale-125 ring-4 ring-white' : 'hover:scale-110'
                    }`}>
                      <MapPin className="w-4 h-4 text-slate-950 fill-slate-950" />
                    </div>

                    <span className={`absolute left-1/2 transform -translate-x-1/2 top-9 px-2 py-1 rounded bg-slate-950 border text-[10px] font-bold font-mono whitespace-nowrap shadow-md ${
                      isSelected ? 'text-emerald-400 border-emerald-500' : 'text-slate-300 border-slate-700'
                    }`}>
                      {hotspot.name}
                    </span>
                  </button>
                );
              })}
            </div>

            <p className="text-[11px] font-mono text-slate-400 text-center z-10">
              Active Coverage: Munich/DACH • Whitespace: London UK, Stockholm, Amsterdam
            </p>
          </div>

          {/* Hotspot Inspector */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-4">
            <div className="border-b border-slate-200 pb-3">
              <span className="text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                {selectedHotspot.type.toUpperCase()} REGION
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                {selectedHotspot.name}
              </h3>
              <p className="text-xs text-slate-500">{selectedHotspot.country}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-400 block text-[10px]">ESTIMATED TAM</span>
                <span className="text-base font-extrabold text-emerald-700 block mt-0.5">
                  {selectedHotspot.estTAM}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-400 block text-[10px]">TARGET ACCOUNTS</span>
                <span className="text-base font-extrabold text-slate-900 block mt-0.5">
                  {selectedHotspot.accountsCount} Chains
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-900 font-mono uppercase">Overview</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {selectedHotspot.description}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-900 font-mono uppercase mb-1.5">Recommended Playbook</h4>
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-900">
                {selectedHotspot.recommendedPlaybook}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-900 font-mono uppercase mb-1.5">Key Target Logos</h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedHotspot.keyTargetLogos.map((logo) => (
                  <span key={logo} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-medium border border-slate-200">
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
