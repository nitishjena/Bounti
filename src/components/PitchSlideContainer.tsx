import React from 'react';
import { 
  FunnelStageData, 
  ConversionStep, 
  SlideTheme, 
  ScenarioModel 
} from '../types';
import { FunnelStageCard } from './FunnelStageCard';
import { ConversionBridge } from './ConversionBridge';
import { 
  Zap, 
  TrendingUp, 
  Clock, 
  Award, 
  Target, 
  CheckCircle2, 
  Sparkles, 
  DollarSign, 
  Euro, 
  Building2,
  PieChart,
  Activity
} from 'lucide-react';

interface PitchSlideContainerProps {
  scenario: ScenarioModel;
  theme: SlideTheme;
  slideRef: React.RefObject<HTMLDivElement | null>;
  isFullscreen: boolean;
}

export const PitchSlideContainer: React.FC<PitchSlideContainerProps> = ({
  scenario,
  theme,
  slideRef,
  isFullscreen,
}) => {
  // Calculated live metrics based on scenario
  const calls = scenario.calls;
  const demos = Math.round(calls * (scenario.callToDemoRate / 100));
  const deals = Math.round(demos * (scenario.demoToDealRate / 100));
  const arr = deals * scenario.avgDealSize;
  const overallConversion = ((deals / calls) * 100).toFixed(2);
  const formattedArr = arr >= 1000000 
    ? `€${(arr / 1000000).toFixed(2)}M` 
    : `€${Math.round(arr / 1000)}K`;

  // Define Funnel Stages Data
  const stages: FunnelStageData[] = [
    {
      id: 'calls',
      label: 'Cold Calls & Outbound Touches',
      subLabel: 'Top of Funnel SDR Outreach',
      value: calls,
      formattedValue: calls.toLocaleString('en-US'),
      unit: 'calls',
      percentageOfTop: 100,
      iconName: 'phone',
      primaryColor: '#00F2FE',
      gradientFrom: '#00C6FF',
      gradientTo: '#00F2FE',
      badgeBg: 'bg-cyan-500/10',
      badgeText: 'text-cyan-400',
      description: 'Systematic SDR outbound dialing targeting Berlin B2B decision makers.',
      velocityMetric: `${Math.round(calls / (scenario.workingDays * scenario.sdrCount))} calls / SDR day`,
    },
    {
      id: 'demos',
      label: 'Qualified Demos Scheduled',
      subLabel: 'SDR Qualified Opportunities',
      value: demos,
      formattedValue: demos.toLocaleString('en-US'),
      unit: 'demos',
      percentageOfTop: Number(((demos / calls) * 100).toFixed(1)),
      iconName: 'calendar',
      primaryColor: '#38BDF8',
      gradientFrom: '#0284C7',
      gradientTo: '#38BDF8',
      badgeBg: 'bg-sky-500/10',
      badgeText: 'text-sky-400',
      description: 'High-intent product discovery demos booked into AE calendars.',
      velocityMetric: `${(demos / (scenario.sdrCount * 4)).toFixed(1)} demos / SDR week`,
    },
    {
      id: 'deals',
      label: 'Closed Won Deals',
      subLabel: 'Signed Enterprise Contracts',
      value: deals,
      formattedValue: deals.toLocaleString('en-US'),
      unit: 'deals',
      percentageOfTop: Number(((deals / calls) * 100).toFixed(1)),
      iconName: 'trophy',
      primaryColor: '#818CF8',
      gradientFrom: '#4F46E5',
      gradientTo: '#818CF8',
      badgeBg: 'bg-indigo-500/10',
      badgeText: 'text-indigo-400',
      description: 'Validated B2B customers onboarded into the Bounti platform.',
      velocityMetric: `${(deals / (scenario.sdrCount * 4)).toFixed(1)} deals / week`,
    },
    {
      id: 'arr',
      label: 'Total Realized ARR',
      subLabel: 'Annual Recurring Revenue',
      value: arr,
      formattedValue: formattedArr,
      unit: 'ARR',
      percentageOfTop: Number(((deals / calls) * 100).toFixed(1)),
      iconName: 'euro',
      primaryColor: '#34D399',
      gradientFrom: '#059669',
      gradientTo: '#34D399',
      badgeBg: 'bg-emerald-500/10',
      badgeText: 'text-emerald-400',
      description: 'Direct pipeline revenue contribution generated from SDR outbound.',
      velocityMetric: `€${Math.round(arr / deals).toLocaleString()} ACV average`,
    },
  ];

  // Inter-stage Conversion Steps
  const conversionSteps: ConversionStep[] = [
    {
      fromId: 'calls',
      toId: 'demos',
      fromName: 'Calls',
      toName: 'Demos',
      conversionRate: scenario.callToDemoRate,
      overallConversion: Number(((demos / calls) * 100).toFixed(1)),
      ratioText: `1 in ${(100 / scenario.callToDemoRate).toFixed(1)} calls → demo`,
      calloutTitle: 'SDR Outreach Hook Rate',
      description: 'Call-to-Demo Conversion',
      badgeColor: 'text-cyan-400 border-cyan-500/40 bg-cyan-950/60',
    },
    {
      fromId: 'demos',
      toId: 'deals',
      fromName: 'Demos',
      toName: 'Deals',
      conversionRate: scenario.demoToDealRate,
      overallConversion: Number(((deals / calls) * 100).toFixed(1)),
      ratioText: `1 in ${(100 / scenario.demoToDealRate).toFixed(1)} demos → deal`,
      calloutTitle: 'AE Closing Win Rate',
      description: 'Demo-to-Close Conversion',
      badgeColor: 'text-indigo-400 border-indigo-500/40 bg-indigo-950/60',
    },
  ];

  // Theme styling rules
  const getSlideThemeStyles = () => {
    switch (theme) {
      case 'bounti-light':
        return {
          bg: 'bg-slate-50 text-slate-900 border-slate-300',
          cardBg: 'bg-white border-slate-200/80 shadow-md shadow-slate-200/50',
          titleColor: 'text-slate-900',
          subColor: 'text-slate-600',
          badgeBg: 'bg-slate-200 text-slate-800 border-slate-300',
          footerBg: 'bg-slate-100 text-slate-600 border-slate-200',
          bentoBg: 'bg-white border-slate-200 shadow-xs',
        };
      case 'berlin-neon':
        return {
          bg: 'bg-[#050811] text-slate-100 border-cyan-500/30',
          cardBg: 'bg-slate-950/90 border-cyan-500/30 shadow-lg shadow-cyan-950/50',
          titleColor: 'text-white',
          subColor: 'text-cyan-200/80',
          badgeBg: 'bg-cyan-950/80 text-cyan-300 border-cyan-500/50',
          footerBg: 'bg-slate-950/90 text-slate-400 border-slate-900',
          bentoBg: 'bg-slate-950/90 border-cyan-950 text-slate-200',
        };
      case 'bounti-dark':
      default:
        return {
          bg: 'bg-[#0B0F17] text-slate-100 border-slate-800',
          cardBg: 'bg-[#0F172A]/90 border-slate-800 shadow-xl',
          titleColor: 'text-slate-100',
          subColor: 'text-slate-400',
          badgeBg: 'bg-slate-900 text-cyan-400 border-slate-800',
          footerBg: 'bg-slate-950/80 text-slate-400 border-slate-800/80',
          bentoBg: 'bg-slate-900/80 border-slate-800/90',
        };
    }
  };

  const themeStyles = getSlideThemeStyles();
  const isDark = theme === 'bounti-dark' || theme === 'berlin-neon';

  return (
    <div 
      ref={slideRef}
      id="bounti-gtm-slide"
      className={`
        slide-container relative w-full max-w-6xl mx-auto rounded-3xl p-6 md:p-8 lg:p-10 border transition-all duration-300 my-4 shadow-2xl overflow-hidden
        ${themeStyles.bg}
        ${isFullscreen ? 'min-h-screen flex flex-col justify-between rounded-none my-0 max-w-none border-none' : 'aspect-[16/9] min-h-[720px]'}
      `}
    >
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Slide Header: Bounti Branding & Title */}
      <div className="relative z-10 flex flex-wrap items-start justify-between gap-4 mb-6 pb-4 border-b border-slate-800/60">
        
        {/* Title & Subtitle */}
        <div>
          <div className="flex items-center gap-2.5 mb-1.5">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              GTM Execution • SDR Perspective
            </span>
            <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
              Berlin Startup Case
            </span>
          </div>

          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${themeStyles.titleColor}`}>
            Outbound SDR Pipeline Velocity & Revenue Funnel
          </h2>
          <p className={`text-xs sm:text-sm mt-1 max-w-2xl font-normal ${themeStyles.subColor}`}>
            High-efficiency conversion model driving <strong className="text-emerald-400 font-semibold">{formattedArr} ARR</strong> from <strong className="text-cyan-400 font-semibold">{calls.toLocaleString()} cold touches</strong> at 2.0% end-to-end deal velocity.
          </p>
        </div>

        {/* Bounti Logo Badge */}
        <div className="flex flex-col items-end shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-emerald-400 flex items-center justify-center font-black text-slate-950 font-mono shadow-md">
              B
            </div>
            <span className="font-extrabold tracking-widest text-lg font-mono text-slate-100">
              BOUNTI<span className="text-cyan-400">.AI</span>
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mt-0.5">
            Berlin • Seed Pitch
          </span>
        </div>

      </div>

      {/* MAIN FUNNEL VISUALIZATION SECTION */}
      <div className="relative z-10 flex-1 my-2 flex flex-col justify-center">
        
        {/* Stage 1: Calls */}
        <FunnelStageCard 
          stage={stages[0]} 
          index={0} 
          totalStages={4} 
          theme={theme} 
        />

        {/* Conversion Bridge 1: Calls -> Demos */}
        <ConversionBridge 
          step={conversionSteps[0]} 
          theme={theme} 
        />

        {/* Stage 2: Demos */}
        <FunnelStageCard 
          stage={stages[1]} 
          index={1} 
          totalStages={4} 
          theme={theme} 
        />

        {/* Conversion Bridge 2: Demos -> Deals */}
        <ConversionBridge 
          step={conversionSteps[1]} 
          theme={theme} 
        />

        {/* Stage 3: Deals */}
        <FunnelStageCard 
          stage={stages[2]} 
          index={2} 
          totalStages={4} 
          theme={theme} 
        />

        {/* Realization Bridge: Deals -> ARR */}
        <div className="relative py-2 flex items-center justify-center w-full z-20">
          <div className={`absolute inset-y-0 w-0.5 border-r border-dashed ${
            isDark ? 'border-emerald-500/40' : 'border-emerald-600/40'
          }`} />
          <div className={`
            relative z-10 flex items-center gap-2 px-3 py-1 rounded-full border shadow-xs text-xs font-mono font-bold
            ${isDark ? 'bg-slate-900 text-emerald-400 border-emerald-500/40' : 'bg-emerald-50 text-emerald-800 border-emerald-300'}
          `}>
            <span>100% Contract Realization</span>
            <span className="text-slate-400">•</span>
            <span>€{(scenario.avgDealSize).toLocaleString()} ACV</span>
          </div>
        </div>

        {/* Stage 4: Realized ARR */}
        <FunnelStageCard 
          stage={stages[3]} 
          index={3} 
          totalStages={4} 
          theme={theme} 
        />

      </div>

      {/* KEY METRICS & VELOCITY SUMMARY BENTO GRID */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 pt-5 border-t border-slate-800/60">
        
        {/* Bento 1: End-to-End Conversion Efficiency */}
        <div className={`p-3.5 rounded-xl border transition ${themeStyles.bentoBg}`}>
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1 font-mono">
            <span>Overall Efficiency</span>
            <Target className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <div className="text-xl sm:text-2xl font-black font-mono text-cyan-400">
            {overallConversion}%
          </div>
          <p className="text-[11px] text-slate-400 mt-0.5">
            Cold Call → Closed Deal
          </p>
        </div>

        {/* Bento 2: Sales Velocity / Sales Cycle */}
        <div className={`p-3.5 rounded-xl border transition ${themeStyles.bentoBg}`}>
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1 font-mono">
            <span>Sales Velocity</span>
            <Clock className="w-3.5 h-3.5 text-sky-400" />
          </div>
          <div className="text-xl sm:text-2xl font-black font-mono text-sky-400">
            {scenario.salesCycleDays} Days
          </div>
          <p className="text-[11px] text-slate-400 mt-0.5">
            Avg Time-to-Close
          </p>
        </div>

        {/* Bento 3: SDR Productivity ROI */}
        <div className={`p-3.5 rounded-xl border transition ${themeStyles.bentoBg}`}>
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1 font-mono">
            <span>Annual SDR ROI</span>
            <Award className="w-3.5 h-3.5 text-indigo-400" />
          </div>
          <div className="text-xl sm:text-2xl font-black font-mono text-indigo-400">
            {formattedArr} / SDR
          </div>
          <p className="text-[11px] text-slate-400 mt-0.5">
            50 Deals @ €{(scenario.avgDealSize/1000).toFixed(0)}k ACV
          </p>
        </div>

        {/* Bento 4: Daily SDR Dial Pace */}
        <div className={`p-3.5 rounded-xl border transition ${themeStyles.bentoBg}`}>
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1 font-mono">
            <span>Outreach Pace</span>
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div className="text-xl sm:text-2xl font-black font-mono text-emerald-400">
            {Math.round(calls / scenario.workingDays)} Dials
          </div>
          <p className="text-[11px] text-slate-400 mt-0.5">
            Daily SDR Target (25d)
          </p>
        </div>

      </div>

      {/* Slide Footer */}
      <div className={`relative z-10 flex items-center justify-between mt-5 pt-3 border-t border-slate-800/40 text-[10px] font-mono ${
        isDark ? 'text-slate-400' : 'text-slate-600'
      }`}>
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-300">BOUNTI.AI</span>
          <span>•</span>
          <span>GTM ENGINE & SDR CONVERSION MODEL</span>
          <span>•</span>
          <span className="text-cyan-400">BERLIN, DE</span>
        </div>

        <div className="flex items-center gap-3">
          <span>CONFIDENTIAL</span>
          <span>•</span>
          <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">
            SLIDE 08 / 14
          </span>
        </div>
      </div>

    </div>
  );
};
