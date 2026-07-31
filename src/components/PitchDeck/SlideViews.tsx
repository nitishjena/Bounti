import React, { useState } from 'react';
import { 
  Phone, 
  Calendar, 
  Trophy, 
  Euro, 
  CheckCircle2, 
  Target, 
  Sparkles, 
  ArrowRight, 
  Building2, 
  Search, 
  TrendingUp, 
  Users, 
  Briefcase, 
  Layers, 
  ShieldCheck, 
  Zap,
  Mail,
  Linkedin,
  Mic,
  MessageSquare,
  Award,
  Globe2,
  Cpu,
  AlertTriangle,
  FileText,
  ChevronRight,
  BarChart2,
  Clock,
  Sparkle
} from 'lucide-react';
import { ScenarioModel, SlideTheme } from '../../types';

interface SlideViewProps {
  slideId: number;
  scenario: ScenarioModel;
  theme: SlideTheme;
  setScenario?: (fn: (prev: ScenarioModel) => ScenarioModel) => void;
  onOpenModeler?: () => void;
}

export const SlideRenderer: React.FC<SlideViewProps> = ({ slideId, scenario, theme, onOpenModeler }) => {
  const isLight = theme === 'bounti-light';

  // Active channel tab for Slide 12 multi-channel openers
  const [activeChannel, setActiveChannel] = useState<'call' | 'linkedin' | 'email' | 'voicenote'>('call');

  // Base card styling depending on theme
  const cardBg = isLight 
    ? 'bg-white border-slate-200/90 shadow-xs text-slate-800' 
    : 'bg-slate-900/90 border-slate-800 shadow-md text-slate-100';

  const headingColor = isLight ? 'text-slate-900' : 'text-white';
  const subTextColor = isLight ? 'text-slate-600' : 'text-slate-300';
  const accentTeal = isLight ? 'text-emerald-700 font-semibold' : 'text-emerald-400 font-semibold';

  // Slide 1: Cover
  if (slideId === 1) {
    return (
      <div className="flex flex-col justify-between p-5 md:p-8 space-y-6 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 z-10">
          <div className="max-w-xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono tracking-wider text-emerald-700 dark:text-emerald-400 font-bold uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 inline-flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                GTM EXECUTION (SDR PERSPECTIVE)
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              International growth motion prepared for Bounti
            </p>
            <h1 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold ${headingColor} tracking-tight leading-tight`}>
              200 Qualified Demos. <br />
              <span className="text-emerald-600 dark:text-emerald-400">Every Year.</span>
            </h1>
            <p className={`text-xs md:text-sm ${subTextColor} leading-relaxed max-w-lg`}>
              A trigger-based engine built backwards from 4 demos a week across ~1,200 named UK and Ireland chains — sized to the market, not to a dial target.
            </p>
          </div>

          {/* Nish Jena Profile Card */}
          <div className={`p-4 rounded-2xl ${cardBg} border flex flex-col items-center text-center max-w-xs w-full shadow-sm`}>
            <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-emerald-500 overflow-hidden mb-2 relative flex items-center justify-center">
              <span className="text-xl font-bold text-slate-700 dark:text-slate-200">NJ</span>
            </div>
            <h3 className={`font-bold text-sm ${headingColor}`}>NISH JENA</h3>
            <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">(Open to relocation to Berlin)</span>
            <p className="text-[10px] text-slate-500 font-mono mt-1">SDR / GROWTH ASSOCIATE CANDIDATE</p>
          </div>
        </div>

        {/* Bottom 3 Summary Stats Infographics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4 border-t border-slate-200 dark:border-slate-800 z-10">
          <div className={`p-3.5 rounded-xl ${cardBg} border flex items-center gap-3`}>
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <Euro className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">SEED RAISED</span>
              <span className={`text-xs md:text-sm font-bold ${headingColor} block mt-0.5`}>€4M (Ventech, Mar 2026)</span>
            </div>
          </div>

          <div className={`p-3.5 rounded-xl ${cardBg} border flex items-center gap-3`}>
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <Trophy className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">BOUNTI'S PROOF</span>
              <span className={`text-xs md:text-sm font-bold ${headingColor} block mt-0.5`}>World of Pizza, Concept Family, Kaimug</span>
            </div>
          </div>

          <div className={`p-3.5 rounded-xl ${cardBg} border flex items-center gap-3`}>
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <Target className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">TARGET</span>
              <span className={`text-xs md:text-sm font-bold ${headingColor} block mt-0.5`}>UK & Ireland multi-site operators, 10–200 locations</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 2: Agenda
  if (slideId === 2) {
    const agendaItems = [
      { num: '01', icon: Award, title: 'Who I am and the bet', desc: '10+ qualified demos in 60 days, the proof and the wager' },
      { num: '02', icon: Search, title: 'Diagnostic and Competition', desc: 'What 2 hours of public research already found' },
      { num: '03', icon: Target, title: 'ICP and Target Accounts', desc: 'Exactly who I would call and why them first' },
      { num: '04', icon: TrendingUp, title: 'The Funnel and Unit Economics', desc: 'Reverse-engineered math from assumed ACV' },
      { num: '05', icon: Zap, title: 'Triggers, Cadence & Openers', desc: '5 buying signals, 12-day sequence & scripts' },
      { num: '06', icon: Briefcase, title: '90-Day Plan, Stack and Close', desc: 'Execution roadmap, tooling and the ask' }
    ];

    return (
      <div className="p-5 md:p-8 space-y-4">
        <div>
          <span className="text-xs font-mono tracking-wider text-emerald-600 dark:text-emerald-400 font-bold uppercase">AGENDA</span>
          <h2 className={`text-xl md:text-2xl font-extrabold ${headingColor} mt-0.5 mb-4`}>Six things I want to show you</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {agendaItems.map((item) => {
              const IconComp = item.icon;
              return (
                <div key={item.num} className={`p-4 rounded-2xl ${cardBg} border flex items-start gap-3.5 hover:border-emerald-500 transition group`}>
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition">
                    <IconComp className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">{item.num}</span>
                      <h3 className={`font-bold text-sm md:text-base ${headingColor}`}>{item.title}</h3>
                    </div>
                    <p className={`text-xs ${subTextColor} mt-0.5`}>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Slide 3: Who I Am
  if (slideId === 3) {
    return (
      <div className="p-5 md:p-8 space-y-4">
        <div>
          <span className="text-xs font-mono tracking-wider text-emerald-600 dark:text-emerald-400 font-bold uppercase">01 — WHO I AM</span>
          <h2 className={`text-xl md:text-3xl font-extrabold ${headingColor} mt-0.5`}>I sell to strangers on their feet.</h2>
          <p className={`text-xs md:text-sm ${subTextColor} mt-1 mb-5`}>
            Live, unscripted, across 80+ countries, with no inbound and no inherited playbook.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <div className={`p-4 rounded-2xl ${cardBg} border border-l-4 border-l-emerald-500 flex items-start gap-3`}>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <Trophy className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <span className="text-xl md:text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 block">1st Place</span>
                <h3 className={`font-bold text-sm ${headingColor} mt-0.5`}>ISM Startup Competition</h3>
                <p className={`text-xs ${subTextColor} mt-1`}>Built TenantTrust GTM from zero across all 7 campuses.</p>
              </div>
            </div>

            <div className={`p-4 rounded-2xl ${cardBg} border border-l-4 border-l-emerald-500 flex items-start gap-3`}>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <span className="text-xl md:text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 block">~40%</span>
                <h3 className={`font-bold text-sm ${headingColor} mt-0.5`}>First-Call Close Rate</h3>
                <p className={`text-xs ${subTextColor} mt-1`}>At WhiteHat Jr during hypergrowth. Methodology adopted org-wide.</p>
              </div>
            </div>

            <div className={`p-4 rounded-2xl ${cardBg} border border-l-4 border-l-emerald-500 flex items-start gap-3`}>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <Globe2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <span className="text-xl md:text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 block">80+</span>
                <h3 className={`font-bold text-sm ${headingColor} mt-0.5`}>Countries Sold Into</h3>
                <p className={`text-xs ${subTextColor} mt-1`}>OneSpaWorld: 200–300 closes/month, zero inbound, live stage pitches.</p>
              </div>
            </div>

            <div className={`p-4 rounded-2xl ${cardBg} border border-l-4 border-l-emerald-500 flex items-start gap-3`}>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <span className="text-xl md:text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 block">0→1</span>
                <h3 className={`font-bold text-sm ${headingColor} mt-0.5`}>GTM Engine Builder</h3>
                <p className={`text-xs ${subTextColor} mt-1`}>TenantTrust: ICP, sequences, CRM, demos, zero inherited playbook.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 4: The Bet
  if (slideId === 4) {
    return (
      <div className="p-5 md:p-8 space-y-4">
        <div>
          <span className="text-xs font-mono tracking-wider text-emerald-600 dark:text-emerald-400 font-bold uppercase">01 — THE BET</span>
          <h2 className={`text-xl md:text-2xl font-extrabold ${headingColor} mt-0.5 mb-4`}>Here is what I am willing to wager</h2>

          <div className={`p-5 md:p-6 rounded-2xl ${cardBg} border text-center space-y-3.5 max-w-2xl mx-auto shadow-md relative overflow-hidden`}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold">
              <Zap className="w-3.5 h-3.5" />
              THE 60-DAY PERFORMANCE CONTRACT
            </div>
            <h3 className={`text-lg md:text-xl font-black ${headingColor} leading-snug`}>
              Target: 10+ qualified demos booked in 60 days. If I miss by week 4, we reassess fit.
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              No severance conversation needed. I carry the quota, not the excuse.
            </p>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 text-left grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                <span className="text-slate-400 font-mono block text-[10px]">EDUCATION</span>
                <span className={`font-semibold ${headingColor} block mt-0.5 text-xs`}>M.Sc. BI & Data Science, ISM Munich (June 2026)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                <span className="text-slate-400 font-mono block text-[10px]">TOOLS</span>
                <span className={`font-semibold ${headingColor} block mt-0.5 text-xs`}>Apollo · Clay · Instantly · HubSpot · n8n</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-500 text-center mt-4 italic">
            If the conversion is off by week 4, we review data together and decide the next move transparently.
          </p>
        </div>
      </div>
    );
  }

  // Slide 5: Diagnostic
  if (slideId === 5) {
    return (
      <div className="p-5 md:p-8 space-y-4">
        <div>
          <span className="text-xs font-mono tracking-wider text-emerald-600 dark:text-emerald-400 font-bold uppercase">02 — DIAGNOSTIC</span>
          <h2 className={`text-xl md:text-2xl font-extrabold ${headingColor} mt-0.5 mb-4`}>What I found in 2 hours of Public Research</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            <div className={`p-4 rounded-2xl ${cardBg} border space-y-2 relative`}>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black font-mono text-emerald-600 dark:text-emerald-400">01</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 border border-amber-500/20 font-bold">OBSERVATION 1</span>
              </div>
              <h3 className={`font-bold text-sm ${headingColor}`}>Proof Is Deep In Food, Thin In Retail</h3>
              <p className={`text-xs ${subTextColor} leading-relaxed`}>
                Every public case study — World of Pizza, Concept Family, Kaimug, Wiki Wiki Poke — is food service. Retail and food production have industry pages but no named logos yet. That's open outbound territory.
              </p>
            </div>

            <div className={`p-4 rounded-2xl ${cardBg} border space-y-2 relative`}>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black font-mono text-emerald-600 dark:text-emerald-400">02</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 font-bold">OBSERVATION 2</span>
              </div>
              <h3 className={`font-bold text-sm ${headingColor}`}>Tiers Are Public, Prices Aren't</h3>
              <p className={`text-xs ${subTextColor} leading-relaxed`}>
                Operations Suite and Enterprise are published with a full feature comparison and a public ROI calculator — but no self-serve tier. Every deal starts as a conversation. Ideal for a fast qualifier, impossible to scale on volume alone.
              </p>
            </div>

            <div className={`p-4 rounded-2xl ${cardBg} border space-y-2 relative`}>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black font-mono text-emerald-600 dark:text-emerald-400">03</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 border border-blue-500/20 font-bold">OBSERVATION 3</span>
              </div>
              <h3 className={`font-bold text-sm ${headingColor}`}>Proven In DE/AT/NL. Zero Logos In UK & Ireland</h3>
              <p className={`text-xs ${subTextColor} leading-relaxed`}>
                Bounti already runs multi-country — Wiki Wiki Poke spans the Netherlands and Germany, another customer spans Austria and Germany. The gap isn't 'outside Germany', it's the UK and Ireland, where none of these logos carry weight with a local ops director. That's the gap I'd own.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 6: Competitive Intelligence Matrix
  if (slideId === 6) {
    return (
      <div className="p-5 md:p-8 space-y-4">
        <div>
          <span className="text-xs font-mono tracking-wider text-emerald-600 dark:text-emerald-400 font-bold uppercase">02 — COMPETITIVE INTELLIGENCE</span>
          <h2 className={`text-xl md:text-2xl font-extrabold ${headingColor} mt-0.5 mb-3`}>The only empty quadrant is <span className="text-emerald-600 dark:text-emerald-400">Bounti</span></h2>

          {/* 2x2 Matrix */}
          <div className={`p-4 rounded-2xl ${cardBg} border relative`}>
            <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-1.5 font-bold">
              <span>← TRAINING FIRST</span>
              <span>COMMS / OPS FIRST →</span>
            </div>

            <div className="grid grid-cols-2 gap-4 h-40 relative border-t border-b border-slate-200 dark:border-slate-800 my-1 py-1">
              {/* Vertical line divider */}
              <div className="absolute left-1/2 top-0 bottom-0 border-r border-dashed border-slate-300 dark:border-slate-700"></div>

              {/* Top Left: SMB / Training */}
              <div className="flex flex-col justify-around text-xs text-slate-500">
                <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-slate-400"></span><strong className="text-slate-700 dark:text-slate-300">Axonify</strong> — training-first, SMB</div>
                <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-slate-400"></span><strong className="text-slate-700 dark:text-slate-300">YOOBIC</strong> — microlearning</div>
              </div>

              {/* Top Right: Enterprise / Training + Comms */}
              <div className="flex flex-col justify-around text-xs text-slate-500 pl-3">
                <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-slate-400"></span><strong className="text-slate-700 dark:text-slate-300">SafetyCulture</strong> — audits</div>
                <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-slate-400"></span><strong className="text-slate-700 dark:text-slate-300">Beekeeper</strong> — comms</div>
              </div>

              {/* Bottom Left: Comms / SMB */}
              <div className="flex flex-col justify-around text-xs text-slate-500">
                <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-slate-400"></span><strong className="text-slate-700 dark:text-slate-300">Flip</strong> — German comms</div>
                <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-slate-400"></span><strong className="text-slate-700 dark:text-slate-300">Deputy</strong> — scheduling</div>
              </div>

              {/* Bottom Right: BOUNTI QUADRANT */}
              <div className="flex flex-col items-center justify-center pl-3 relative bg-emerald-500/5 rounded-xl border border-emerald-500/20">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-lg shadow-md shadow-emerald-500/30 border-2 border-white">
                  B
                </div>
                <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">BOUNTI MOAT</span>
                <span className="text-[10px] text-slate-400 text-center">training + ops, multi-location, AI-driven</span>
              </div>
            </div>

            <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-1.5 font-bold">
              <span>↑ SMB</span>
              <span>ENTERPRISE (10-200 SITES) ↓</span>
            </div>
          </div>

          <div className="mt-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
            <Sparkles className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
            <span><strong>Bounti's moat:</strong> Training, audits, checklists, comms & AI course creation in one system. The only stack in this quadrant with paying multi-location logos.<br /><span className="text-[11px] text-slate-500 dark:text-slate-400 font-normal block mt-1">Note: in the UK the comparison set is different — I'd map the local incumbents in week one before a single call.</span></span>
          </div>
        </div>
      </div>
    );
  }

  // Slide 7: ICP & Targets
  if (slideId === 7) {
    return (
      <div className="p-5 md:p-8 space-y-4">
        <div>
          <span className="text-xs font-mono tracking-wider text-emerald-600 dark:text-emerald-400 font-bold uppercase">03 — ICP & TARGETS</span>
          <h2 className={`text-xl md:text-2xl font-extrabold ${headingColor} mt-0.5 mb-4`}>Who I would be calling on day one</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left: Target Profile */}
            <div className="space-y-2.5">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-bold">TARGET PROFILE</span>
              <div className={`p-3 rounded-xl ${cardBg} border flex items-center gap-3`}>
                <Building2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold block">COMPANY SIZE</span>
                  <span className={`text-xs md:text-sm font-bold ${headingColor}`}>10–200 locations, €5–50M revenue</span>
                </div>
              </div>
              <div className={`p-3 rounded-xl ${cardBg} border flex items-center gap-3`}>
                <Users className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold block">BUYER PERSONA</span>
                  <span className={`text-xs md:text-sm font-bold ${headingColor}`}>Ops Director · Head of Training · Franchise Owner</span>
                </div>
              </div>
              <div className={`p-3 rounded-xl ${cardBg} border flex items-center gap-3`}>
                <Briefcase className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold block">VERTICAL</span>
                  <span className={`text-xs md:text-sm font-bold ${headingColor}`}>Hospitality (proven) → Retail & Food Production</span>
                </div>
              </div>
              <div className={`p-3 rounded-xl ${cardBg} border flex items-center gap-3`}>
                <Globe2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold block">GEOGRAPHY</span>
                  <span className={`text-xs md:text-sm font-bold ${headingColor}`}>DE/AT/NL (proven) → UK & Ireland (my mandate)</span>
                </div>
              </div>
            </div>

            {/* Right: Target Categories */}
            <div className="space-y-2 gap-2 grid grid-cols-1">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-bold">ILLUSTRATIVE TARGET CATEGORIES & UK WEDGES</span>
              <div className={`p-2.5 rounded-xl ${cardBg} border`}>
                <h4 className={`text-xs font-bold ${headingColor} flex items-center gap-1.5`}>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  QSR & Franchise Chains
                </h4>
                <p className={`text-[11px] ${subTextColor} mt-0.5`}>Corporate-owned multi-site operators like Honest Burgers (~51 sites, converting 12 acquired GBK locations) and franchise systems like Camile Thai, where the largest franchisee runs 10 outlets and the buying decision splits between HQ and the operator.</p>
              </div>
              <div className={`p-2.5 rounded-xl ${cardBg} border`}>
                <h4 className={`text-xs font-bold ${headingColor} flex items-center gap-1.5`}>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  Why UK Frontline Converts
                </h4>
                <p className={`text-[11px] ${subTextColor} mt-0.5`}>135-language auto-translation is Bounti's sharpest UK wedge. British hospitality frontline is heavily non-native-English — the same product feature that solves German labour shortages solves a bigger problem in London.</p>
              </div>
              <div className={`p-2.5 rounded-xl ${cardBg} border`}>
                <h4 className={`text-xs font-bold ${headingColor} flex items-center gap-1.5`}>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  Enterprise-Ready Out Of The Box
                </h4>
                <p className={`text-[11px] ${subTextColor} mt-0.5`}>ISO-27001 certified, GDPR-compliant, EU infrastructure, built in Germany. Removes the security objection before procurement raises it.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 8: The Funnel Math
  if (slideId === 8) {
    const connects = scenario.calls >= 10000 ? Math.round(scenario.calls * 0.15) : scenario.calls;
    const dials = scenario.calls >= 10000 ? scenario.calls : Math.round(scenario.calls / 0.15);
    const calculatedDemos = Math.round(connects * (scenario.callToDemoRate / 100));
    const calculatedDeals = Math.round(calculatedDemos * (scenario.demoToDealRate / 100));
    const calculatedARR = calculatedDeals * scenario.avgDealSize;

    return (
      <div className="p-5 md:p-8 space-y-4">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono tracking-wider text-emerald-600 dark:text-emerald-400 font-bold uppercase">04 — THE FUNNEL</span>
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold">
              Reverse-Engineered Model
            </span>
          </div>
          <h2 className={`text-xl md:text-2xl font-extrabold ${headingColor} mt-0.5 mb-2`}>Reverse-engineered revenue math</h2>

          {/* Headline Strip */}
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-800 dark:text-emerald-300 mb-3 flex items-center justify-between">
            <span>Built backwards from 4 demos a week — not forwards from a dial target.</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-600 text-white font-extrabold uppercase">BACKWARDS FUNNEL</span>
          </div>

          {/* Funnel Progress Visual */}
          <div className="space-y-3">
            {/* Stage 1 */}
            <div className={`p-3.5 rounded-xl ${cardBg} border`}>
              <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-1">
                <span className="font-bold">STAGE 01 — Named Account Universe</span>
                <span className="font-extrabold text-emerald-600 dark:text-emerald-400">~1,200 UK & IE chains, ~3,500 contacts</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full w-full"></div>
              </div>
              <span className="text-[10px] text-slate-500 mt-1 block">Coverage, not volume. This TAM cannot absorb 100 dials a day without burning out in a quarter.</span>
            </div>

            {/* Stage 2 */}
            <div className={`p-3.5 rounded-xl ${cardBg} border relative`}>
              <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-1">
                <span className="font-bold">STAGE 02 — Dials & Connects</span>
                <span className="font-extrabold text-emerald-600 dark:text-emerald-400">~{dials.toLocaleString()} dials → ~{connects.toLocaleString()} connects (15%)</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full w-[65%]"></div>
              </div>
              <span className="text-[10px] text-slate-500 mt-1 block">~75 dials/day, ~50 when multi-channel.</span>
            </div>

            {/* Stage 3 */}
            <div className={`p-3.5 rounded-xl ${cardBg} border relative`}>
              <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-1">
                <span className="font-bold flex items-center gap-2">
                  STAGE 03 — Qualified Demos Booked ({scenario.callToDemoRate}% of connects)
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold uppercase">MY QUOTA</span>
                </span>
                <span className="font-extrabold text-emerald-600 dark:text-emerald-400">{calculatedDemos} DEMOS BOOKED / YR</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full w-[40%]"></div>
              </div>
              <span className="text-[10px] text-slate-500 mt-1 block">200 qualified demos booked per year — 4 per week.</span>
            </div>

            {/* Stage 4 */}
            <div className={`p-3.5 rounded-xl ${cardBg} border relative`}>
              <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-1">
                <span className="font-bold flex items-center gap-2">
                  STAGE 04 — Closed Deals & ARR ({scenario.demoToDealRate}% AE win rate)
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold uppercase">AE OWNED</span>
                </span>
                <span className="font-extrabold text-emerald-600 dark:text-emerald-400">{calculatedDeals} DEALS (€{calculatedARR.toLocaleString()} ARR)</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full w-[25%]"></div>
              </div>
              <span className="text-[10px] text-slate-500 mt-1 block">50 deals closed (25% AE win rate) · €{scenario.avgDealSize.toLocaleString()} ACV assumption.</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 9: Unit Economics
  if (slideId === 9) {
    const connects = scenario.calls >= 10000 ? Math.round(scenario.calls * 0.15) : scenario.calls;
    const demos = Math.round(connects * (scenario.callToDemoRate / 100));
    const deals = Math.round(demos * (scenario.demoToDealRate / 100));
    const arr = deals * scenario.avgDealSize;

    return (
      <div className="p-5 md:p-8 space-y-4">
        <div>
          <span className="text-xs font-mono tracking-wider text-emerald-600 dark:text-emerald-400 font-bold uppercase">04 — UNIT ECONOMICS</span>
          <h2 className={`text-xl md:text-2xl font-extrabold ${headingColor} mt-0.5 mb-3`}>The math behind the pipeline</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
            <div className={`p-4 rounded-2xl ${cardBg} border text-center relative`}>
              <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 block">€{arr.toLocaleString()}</span>
              <span className={`text-xs font-bold ${headingColor} block mt-0.5`}>ARR sourced / year (AE-closed)</span>
              <span className="text-[10px] text-slate-500 block">200 qualified demos × 25% win rate × €{scenario.avgDealSize.toLocaleString()} ACV</span>
            </div>
            <div className={`p-4 rounded-2xl ${cardBg} border text-center`}>
              <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 block">€1,000</span>
              <span className={`text-xs font-bold ${headingColor} block mt-0.5`}>Blended CAC</span>
              <span className="text-[10px] text-slate-500 block">CPL ÷ 20% × close rate</span>
            </div>
            <div className={`p-4 rounded-2xl ${cardBg} border text-center`}>
              <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 block">6:1</span>
              <span className={`text-xs font-bold ${headingColor} block mt-0.5`}>LTV : CAC</span>
              <span className="text-[10px] text-slate-500 block">tools + ad spend, non-headcount</span>
            </div>
          </div>

          <div className={`p-4 rounded-2xl ${cardBg} border space-y-3`}>
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300">
              <p className="font-semibold italic leading-relaxed">
                "€6K is my assumption, not their number. I couldn't find published pricing. If the real ACV is €15K, this same funnel produces €750K — the model recalculates live."
              </p>
              {onOpenModeler ? (
                <button 
                  onClick={onOpenModeler}
                  className="mt-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  Open the Funnel Modeler to change this assumption →
                </button>
              ) : (
                <p className="mt-2 text-xs font-semibold text-slate-500 font-mono">
                  Open the Funnel Modeler to change this assumption.
                </p>
              )}
            </div>

            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-bold">COST-PER-LEAD BREAKDOWN INFOGRAPHIC</span>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-center">
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                <span className="text-base font-bold text-emerald-600 dark:text-emerald-400 block">€40</span>
                <span className="text-[10px] text-slate-500 block">CPL</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                <span className="text-base font-bold text-emerald-600 dark:text-emerald-400 block">8.0%</span>
                <span className="text-[10px] text-slate-500 block">Connect → Demo</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                <span className="text-base font-bold text-emerald-600 dark:text-emerald-400 block">€1,000</span>
                <span className="text-[10px] text-slate-500 block">CAC</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                <span className="text-base font-bold text-emerald-600 dark:text-emerald-400 block">€{scenario.avgDealSize.toLocaleString()}</span>
                <span className="text-[10px] text-slate-500 block">ACV (Assumption)</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                <span className="text-base font-bold text-emerald-600 dark:text-emerald-400 block">3 yr</span>
                <span className="text-[10px] text-slate-500 block">Retention</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 10: Buying Signals & Triggers (EXPANDED INFOGRAPHIC)
  if (slideId === 10) {
    const triggers = [
      {
        id: 'jobs',
        title: 'Manager Job Postings',
        icon: Briefcase,
        source: 'Indeed, LinkedIn, StepStone',
        signal: 'Hiring "Location Manager", "Head of Training", or "Area Ops Lead"',
        impact: 'Site expansion implies staff onboarding chaos. Training is an urgent headache TODAY.',
        badge: 'HIGH INTENT'
      },
      {
        id: 'opening',
        title: 'New Site / Franchise Launch',
        icon: Building2,
        source: 'Commercial Lease PRs, Press, News',
        signal: 'Public announcement of store #10, #15, or #20 grand opening',
        impact: 'Ops Director needs consistent SOPs across sites so the new manager doesn\'t fail.',
        badge: 'EXPANSION'
      },
      {
        id: 'audit',
        title: 'Failed / Warning Audit',
        icon: AlertTriangle,
        source: 'UK FSA Food Hygiene Rating Scheme — public, searchable, per-site.',
        signal: 'Any site in a chain drops below a 4 rating.',
        impact: 'A public rating drop is a board-level problem. Digital checklists and provable training records are the fastest defensible fix — and unlike Germany, this data is public in the UK, so I can find it before the chain calls anyone.',
        badge: 'URGENT COMPLIANCE'
      },
      {
        id: 'leadership',
        title: 'New Ops Leadership Hire',
        icon: Users,
        source: 'LinkedIn Executive Moves',
        signal: 'New Director of Ops or VP L&D appointed in last 90 days',
        impact: 'New leader seeking quick wins to modernize paper/PDF processes and demonstrate impact.',
        badge: 'EXECUTIVE MOVE'
      },
      {
        id: 'tech',
        title: 'POS / Menu / SOP Overhaul',
        icon: Cpu,
        source: 'Software Badging, Press Releases',
        signal: 'Migration to Toast POS, NCR, or major menu/recipe change',
        impact: 'Requires rapid re-certification & mobile training of 50–500 frontline staff overnight.',
        badge: 'SYSTEM CHANGE'
      }
    ];

    return (
      <div className="p-5 md:p-8 space-y-4">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono tracking-wider text-emerald-600 dark:text-emerald-400 font-bold uppercase">05 — BUYING SIGNALS</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold">
              5 High-Intent Triggers
            </span>
          </div>
          <h2 className={`text-xl md:text-2xl font-extrabold ${headingColor} mt-0.5 mb-1`}>5 High-Intent Operational Triggers</h2>
          <p className={`text-xs md:text-sm ${subTextColor} mb-3`}>
            Instead of spraying cold calls, we reach out when training is an active operational headache.
          </p>

          {/* Infographic Grid of Triggers + Indeed Mock Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {triggers.map((t) => {
              const IconComp = t.icon;
              return (
                <div key={t.id} className={`p-3.5 rounded-2xl ${cardBg} border flex flex-col justify-between space-y-2 hover:border-emerald-500 transition group`}>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition">
                        <IconComp className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:text-white" />
                      </div>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold uppercase">
                        {t.badge}
                      </span>
                    </div>

                    <h3 className={`font-bold text-xs md:text-sm ${headingColor}`}>{t.title}</h3>
                    <p className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">
                      Source: {t.source}
                    </p>

                    <p className={`text-[11px] ${subTextColor} mt-1.5 leading-tight font-sans`}>
                      <strong className={headingColor}>Signal:</strong> {t.signal}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-200/80 dark:border-slate-800/80 text-[10px] text-slate-500 leading-tight">
                    <strong className="text-emerald-700 dark:text-emerald-400">Bounti Hook:</strong> {t.impact}
                  </div>
                </div>
              );
            })}

            {/* Indeed Job Posting Mock Card */}
            <div className={`p-3.5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-700 flex flex-col justify-between space-y-2 relative overflow-hidden shadow-lg`}>
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
                  <Briefcase className="w-3 h-3 text-emerald-400" /> INDEED JOB POST MOCK
                </span>
                <span className="text-[9px] font-mono text-slate-400">TRIGGER EXAMPLE</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 block font-mono">Regional QSR Group · Manchester, UK</span>
                <h4 className="font-bold text-xs text-white">Area Operations Manager</h4>
                <p className="text-[10px] text-slate-300 leading-tight italic">
                  "We're opening our 18th site and need someone to own daily operations, staff onboarding and quality standards across the region."
                </p>
              </div>
              <div className="pt-2 border-t border-slate-800 text-[10px] text-emerald-400 font-mono font-semibold">
                → BOUNTI SIGNAL: 18th site opening = onboarding bottleneck. Dial Ops Director immediately.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 11: The Sequence
  if (slideId === 11) {
    const cadenceSteps = [
      { day: 'Day 0', channel: 'LinkedIn Connect', icon: Linkedin, text: '“Congrats on the 18th location!”' },
      { day: 'Day 2', channel: 'Cold Email + Case Study', icon: Mail, text: 'Email + case study — 600 employees, one standard (World of Pizza).' },
      { day: 'Day 5', channel: 'Cold Call', icon: Phone, text: 'The trigger phone hook (see next slide)' },
      { day: 'Day 8', channel: 'Voice Note / WhatsApp', icon: Mic, text: 'Voice note from the AE or founder — 30 seconds of operator social proof.' },
      { day: 'Day 12', channel: 'Breakup Email', icon: FileText, text: '“Still opening new locations?”' },
    ];

    return (
      <div className="p-5 md:p-8 space-y-4">
        <div>
          <span className="text-xs font-mono tracking-wider text-emerald-600 dark:text-emerald-400 font-bold uppercase">05 — THE SEQUENCE</span>
          <h2 className={`text-xl md:text-2xl font-extrabold ${headingColor} mt-0.5 mb-4`}>The 12-Day cadence after the trigger fires</h2>

          <div className="space-y-2.5 max-w-2xl mx-auto">
            {cadenceSteps.map((step) => {
              const IconComp = step.icon;
              return (
                <div key={step.day} className={`p-3.5 rounded-xl ${cardBg} border border-l-4 border-l-emerald-500 flex items-center justify-between gap-3.5 hover:shadow-sm transition`}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                      <IconComp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-lg">{step.day}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-xs md:text-sm font-bold ${headingColor}`}>{step.channel}</h4>
                    <p className={`text-xs ${subTextColor}`}>{step.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Slide 12: Multi-Channel Outreach Openers (EXPANDED INFOGRAPHIC)
  if (slideId === 12) {
    const channels = [
      { id: 'call', label: 'Cold Call', icon: Phone },
      { id: 'linkedin', label: 'LinkedIn InMail', icon: Linkedin },
      { id: 'email', label: 'Cold Email', icon: Mail },
      { id: 'voicenote', label: 'Voice Note / WA', icon: Mic },
    ];

    return (
      <div className="p-5 md:p-8 space-y-4">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono tracking-wider text-emerald-600 dark:text-emerald-400 font-bold uppercase">05 — READY TO SEND</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold">
              Multi-Channel Playbook
            </span>
          </div>
          <h2 className={`text-xl md:text-2xl font-extrabold ${headingColor} mt-0.5 mb-3`}>Multi-Channel Outreach Openers</h2>

          {/* Channel Selector Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 max-w-xl mx-auto mb-3">
            {channels.map((ch) => {
              const IconComp = ch.icon;
              const isSelected = activeChannel === ch.id;
              return (
                <button
                  key={ch.id}
                  onClick={() => setActiveChannel(ch.id as any)}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-bold transition ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  <span>{ch.label}</span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Main Opener Script Box */}
            <div className={`p-4 rounded-2xl ${cardBg} border md:col-span-2 space-y-2.5 relative`}>
              {activeChannel === 'call' && (
                <>
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                      <Phone className="w-3 h-3" /> COLD CALL OPENER (PHONE)
                    </span>
                    <span className="text-slate-400">Target: Multi-Location Ops Director</span>
                  </div>
                  <p className={`text-xs md:text-sm ${headingColor} leading-relaxed font-sans`}>
                    "Hi [Name], I saw [Chain] just opened its <strong className="text-emerald-600 dark:text-emerald-400">18th site in Manchester</strong> — congrats.<br /><br />
                    Quick one: when a new site opens, how are you <strong className="text-emerald-600 dark:text-emerald-400">getting every hire trained to standard as fast as your best location</strong>?<br /><br />
                    Most ops leads I speak with are still relying on <strong className="text-emerald-600 dark:text-emerald-400">PDFs and WhatsApp groups.</strong><br /><br />
                    That's exactly the gap Bounti closes for teams <strong className="text-emerald-600 dark:text-emerald-400">like a 30-site delivery group in Germany.</strong> Worth 15 minutes?"
                  </p>
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-1.5 text-[10px] text-slate-500">
                    <span>✓ References real expansion signal</span>
                    <span>✓ Sizes the proof to the prospect, not the logo.</span>
                    <span>✓ Highlights paper/PDF pain</span>
                    <span>✓ Low-friction 15 min ask</span>
                  </div>
                </>
              )}

              {activeChannel === 'linkedin' && (
                <>
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold flex items-center gap-1">
                      <Linkedin className="w-3 h-3" /> LINKEDIN INMAIL / CONNECTION NOTE
                    </span>
                    <span className="text-slate-400">Target: Head of Operations / L&D</span>
                  </div>
                  <p className={`text-xs md:text-sm ${headingColor} leading-relaxed font-sans`}>
                    "Hi [Name] — noticed [Chain] is hiring for a <strong className="text-emerald-600 dark:text-emerald-400">[Location Manager]</strong> for site #15.<br /><br />
                    When expanding locations, onboarding frontline staff consistently without overwhelming site managers is usually the bottleneck.<br /><br />
                    We helped <strong className="text-emerald-600 dark:text-emerald-400">World of Pizza</strong> convert training into mobile bite-sized modules, cutting ramp time by 60%. Open to taking a quick look?"
                  </p>
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-1.5 text-[10px] text-slate-500">
                    <span>✓ Under 300 characters</span>
                    <span>✓ Focuses on manager workload</span>
                    <span>✓ Social proof embedded</span>
                    <span>✓ Soft, interest-based CTA</span>
                  </div>
                </>
              )}

              {activeChannel === 'email' && (
                <>
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold flex items-center gap-1">
                      <Mail className="w-3 h-3" /> 3-SENTENCE COLD EMAIL
                    </span>
                    <span className="text-slate-400">High Deliverability Stack</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 text-xs font-mono mb-2">
                    <strong>Subject:</strong> [Chain] location #15 / frontline onboarding
                  </div>
                  <p className={`text-xs md:text-sm ${headingColor} leading-relaxed font-sans`}>
                    Hi [Name],<br /><br />
                    Saw you're opening location #15 in Munich — congrats on the growth.<br /><br />
                    When multi-location groups scale past 10 sites, getting new frontline hires trained to standard usually breaks down over WhatsApp and PDFs.<br /><br />
                    Bounti digitizes training & checklists in 1 click. World of Pizza cut onboarding costs by 68% across all locations.<br /><br />
                    Worth a brief 10-minute chat next Tuesday?
                  </p>
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-1.5 text-[10px] text-slate-500">
                    <span>✓ High deliverability (no spam words)</span>
                    <span>✓ Specific metric drop (68%)</span>
                    <span>✓ Personalized trigger hook</span>
                    <span>✓ Frictionless booking prompt</span>
                  </div>
                </>
              )}

              {activeChannel === 'voicenote' && (
                <>
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                      <Mic className="w-3 h-3" /> 20-SEC VOICE NOTE / WHATSAPP SCRIPT
                    </span>
                    <span className="text-slate-400">Warm Follow-Up Touch</span>
                  </div>
                  <p className={`text-xs md:text-sm ${headingColor} leading-relaxed font-sans italic`}>
                    "Hey [Name], Nish here from Bounti in Berlin.<br /><br />
                    Saw the news about your new store opening in Munich! I know opening week is absolute chaos for operations, especially getting 10+ new staff trained up.<br /><br />
                    Drop me a quick thumbs up if you'd like me to send over how World of Pizza automated their new store staff training. Have a great week!"
                  </p>
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-1.5 text-[10px] text-slate-500">
                    <span>✓ Human & conversational</span>
                    <span>✓ Acknowledges busy schedule</span>
                    <span>✓ Thumbs-up low-friction ask</span>
                    <span>✓ High reply rate channel</span>
                  </div>
                </>
              )}
            </div>

            {/* Sidebar Stats Box */}
            <div className={`p-4 rounded-2xl ${cardBg} border space-y-2.5 flex flex-col justify-between`}>
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-bold mb-2">
                  CONVERSION BENCHMARKS
                </span>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                    <span>Connect Rate</span>
                    <strong className="text-emerald-600 dark:text-emerald-400">15%</strong>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                    <span>Demo per Connect</span>
                    <strong className="text-emerald-600 dark:text-emerald-400">8%</strong>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                    <span>Show Rate</span>
                    <strong className="text-emerald-600 dark:text-emerald-400">70%</strong>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                    <span>Close Rate</span>
                    <strong className="text-emerald-600 dark:text-emerald-400">25%</strong>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-700 dark:text-emerald-300">
                Phone plus LinkedIn plus email materially lifts connect rate over email alone — I'd measure the actual multiplier in month one rather than assume it.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 13: Execution Roadmap
  if (slideId === 13) {
    return (
      <div className="p-5 md:p-8 space-y-4">
        <div>
          <span className="text-xs font-mono tracking-wider text-emerald-600 dark:text-emerald-400 font-bold uppercase">06 — EXECUTION ROADMAP</span>
          <h2 className={`text-xl md:text-2xl font-extrabold ${headingColor} mt-0.5 mb-4`}>The first 90 days - Channel by Channel</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mb-4">
            <div className={`p-3.5 rounded-xl ${cardBg} border space-y-1.5`}>
              <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">WEEK 1–3</span>
              <h4 className={`text-xs md:text-sm font-bold ${headingColor}`}>SHADOW & BUILD</h4>
              <p className={`text-xs ${subTextColor}`}>Shadow 5 live demos with the AE team and founders. Build 100-account target list from UK and Ireland (Google Maps + LinkedIn).</p>
            </div>
            <div className={`p-3.5 rounded-xl ${cardBg} border space-y-1.5`}>
              <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">WEEK 4–6</span>
              <h4 className={`text-xs md:text-sm font-bold ${headingColor}`}>OUTBOUND SOLO</h4>
              <p className={`text-xs ${subTextColor}`}>Launch Apollo sequences, 75 dials/day, ~50 when multi-channel. Add LinkedIn touch. Report weekly: connect rate, stall points.</p>
            </div>
            <div className={`p-3.5 rounded-xl ${cardBg} border space-y-1.5`}>
              <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">WEEK 7–9</span>
              <h4 className={`text-xs md:text-sm font-bold ${headingColor}`}>TEST TRIGGERS</h4>
              <p className={`text-xs ${subTextColor}`}>Indeed job-posting trigger on 20 accounts. A/B test founder vs. SDR sender. First 3 demos run solo.</p>
            </div>
            <div className={`p-3.5 rounded-xl ${cardBg} border space-y-1.5`}>
              <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">WEEK 10–12</span>
              <h4 className={`text-xs md:text-sm font-bold ${headingColor}`}>PLAYBOOK & SCALE</h4>
              <p className={`text-xs ${subTextColor}`}>Document the v1 UK playbook and hand it to the AE team. Target: 10+ qualified demos booked in 60 days.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 14: Operating System
  if (slideId === 14) {
    return (
      <div className="p-5 md:p-8 space-y-4">
        <div>
          <span className="text-xs font-mono tracking-wider text-emerald-600 dark:text-emerald-400 font-bold uppercase">06 — OPERATING SYSTEM</span>
          <h2 className={`text-xl md:text-2xl font-extrabold ${headingColor} mt-0.5 mb-4`}>Stack, metrics and what I track weekly</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2.5">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-bold">TECH STACK</span>
              <div className="grid grid-cols-2 gap-2.5">
                <div className={`p-3 rounded-xl ${cardBg} border`}><h4 className="font-bold text-xs">Apollo.io</h4><span className="text-[10px] text-slate-500">Prospecting</span></div>
                <div className={`p-3 rounded-xl ${cardBg} border`}><h4 className="font-bold text-xs">Clay</h4><span className="text-[10px] text-slate-500">Enrichment</span></div>
                <div className={`p-3 rounded-xl ${cardBg} border`}><h4 className="font-bold text-xs">Instantly</h4><span className="text-[10px] text-slate-500">Deliverability</span></div>
                <div className={`p-3 rounded-xl ${cardBg} border`}><h4 className="font-bold text-xs">HubSpot</h4><span className="text-[10px] text-slate-500">CRM</span></div>
              </div>
            </div>

            <div className={`p-4 rounded-2xl ${cardBg} border space-y-2.5`}>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-bold">NORTH STAR METRICS</span>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50"><span>Dials & Connects / Day</span><strong className="text-emerald-600 dark:text-emerald-400">75 dials · 11 connects</strong></div>
                <div className="flex justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50"><span>Demo per Connect Rate</span><strong className="text-emerald-600 dark:text-emerald-400">8% → target 10%</strong></div>
                <div className="flex justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50"><span>Demo → Close Conversion</span><strong className="text-emerald-600 dark:text-emerald-400">25% → target 30%</strong></div>
                <div className="flex justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50"><span>Weekly Qualified Demos Booked</span><strong className="text-emerald-600 dark:text-emerald-400">4/wk → target 6/wk</strong></div>
                <div className="flex justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 text-[11px]"><span>Weekly ARR Sourced (Secondary)</span><strong className="text-slate-500">€6K/close → target €12K/wk</strong></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 15: The Close
  return (
    <div className="p-5 md:p-8 space-y-4">
      <div>
        <span className="text-xs font-mono tracking-wider text-emerald-600 dark:text-emerald-400 font-bold uppercase">THE CLOSE</span>
        <h2 className={`text-xl md:text-3xl font-extrabold ${headingColor} mt-0.5 mb-4`}>Three reasons this wins</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-6">
          <div className={`p-4 rounded-2xl ${cardBg} border space-y-1.5`}>
            <span className="text-xl font-black font-mono text-emerald-600 dark:text-emerald-400">01</span>
            <h3 className={`font-bold text-sm ${headingColor}`}>Triggers Over Spray</h3>
            <p className={`text-xs ${subTextColor}`}>I monitor 5 buying signals (job posts, new store launches, audit alerts, executive moves) when training is urgent.</p>
          </div>

          <div className={`p-4 rounded-2xl ${cardBg} border space-y-1.5`}>
            <span className="text-xl font-black font-mono text-emerald-600 dark:text-emerald-400">02</span>
            <h3 className={`font-bold text-sm ${headingColor}`}>Proven Motion</h3>
            <p className={`text-xs ${subTextColor}`}>World of Pizza, Concept Family, Kaimug, Wiki Wiki Poke — Bounti already closes multi-location chains. My job is to build the repeatable engine that keeps the AE team closing instead of sourcing.</p>
          </div>

          <div className={`p-4 rounded-2xl ${cardBg} border space-y-1.5`}>
            <span className="text-xl font-black font-mono text-emerald-600 dark:text-emerald-400">03</span>
            <h3 className={`font-bold text-sm ${headingColor}`}>The 60-Day Bet</h3>
            <p className={`text-xs ${subTextColor}`}>10+ qualified demos in 60 days. I have carried quotas across 80+ countries with zero inbound.</p>
          </div>
        </div>

        <div className="text-center pt-2">
          <button className="px-6 py-3 rounded-full bg-emerald-600 text-white font-extrabold text-sm shadow-lg shadow-emerald-600/30 hover:bg-emerald-500 transition">
            Let's Build the Outbound Engine
          </button>
          <p className="text-[11px] text-slate-500 font-mono mt-2">
            Prepared for Bounti · Nish Jena · nitish.2024@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};
