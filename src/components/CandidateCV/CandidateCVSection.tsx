import React, { useState } from 'react';
import { SKILL_DIMENSIONS, EXPERIENCE_TIMELINE } from '../../data/cvData';
import { SkillDimension } from '../../types';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Globe2, 
  Award, 
  Target, 
  CheckCircle2, 
  Sparkles, 
  FileText,
  Briefcase,
  ChevronRight,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { BountiLogo } from '../BountiLogo';

export const CandidateCVSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillDimension>(SKILL_DIMENSIONS[0]);

  // SVG Radar Chart Math Constants
  const cx = 150;
  const cy = 150;
  const radius = 100;
  const totalAxes = SKILL_DIMENSIONS.length;

  const getCoordinates = (index: number, value: number) => {
    const angle = (Math.PI * 2 / totalAxes) * index - Math.PI / 2;
    const r = (value / 100) * radius;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    return { x, y };
  };

  const nishPoints = SKILL_DIMENSIONS.map((dim, i) => {
    const { x, y } = getCoordinates(i, dim.nishValue);
    return `${x},${y}`;
  }).join(' ');

  const baselinePoints = SKILL_DIMENSIONS.map((dim, i) => {
    const { x, y } = getCoordinates(i, dim.baselineValue);
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 font-sans">
      
      {/* Profile Header */}
      <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
        
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left z-10">
          <div className="w-24 h-24 rounded-2xl bg-slate-900 border-2 border-emerald-500 overflow-hidden flex items-center justify-center font-black text-2xl text-white shadow-md relative shrink-0">
            <span>NJ</span>
            <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-slate-900 rounded-full"></span>
          </div>

          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">NISH JENA</h2>
              <span className="px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-mono font-bold text-xs border border-emerald-200">
                GTM Lead & Outbound Engine Builder
              </span>
            </div>

            <p className="text-xs md:text-sm text-slate-600 max-w-xl leading-relaxed">
              5+ years carrying pipeline numbers in ambiguous environments. Built GTM engine from zero at TenantTrust, ran a 200+ prospect/wk outbound machine at WhiteHat Jr, sold into 80+ countries at OneSpaWorld.
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-mono text-slate-500 pt-2">
              <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-emerald-600" /> +49 176 36411541</span>
              <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-emerald-600" /> nitish.2024@gmail.com</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-emerald-600" /> Augsburg / Berlin</span>
            </div>
          </div>
        </div>

        {/* Education & Language Badges */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2.5 w-full lg:w-72 font-mono">
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-bold">EDUCATION</span>
            <strong className="text-slate-900 block mt-0.5 font-sans text-sm font-extrabold">M.Sc. BI & Data Science</strong>
            <span className="text-[11px] text-slate-500 block">ISM Munich (Graduating June 2026)</span>
          </div>
          <div className="pt-2 border-t border-slate-200">
            <span className="text-slate-400 block text-[10px] uppercase font-bold">LANGUAGES</span>
            <strong className="text-emerald-700 block mt-0.5 font-sans font-extrabold">English: C2 Native Fluency</strong>
            <span className="text-[11px] text-slate-500 block">German: A2 (Studying for B1/B2)</span>
          </div>
        </div>

      </div>

      {/* 6-Axis Dual-Overlay Skills Radar & Detail Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Radar Chart Canvas (Left) */}
        <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl flex flex-col items-center justify-between space-y-4">
          <div className="w-full flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase">6-AXIS HYBRID SKILLS RADAR</span>
              <h3 className="text-base font-bold text-white mt-0.5">Nish Jena vs. Traditional SDR Baseline</h3>
            </div>
          </div>

          <div className="relative w-[300px] h-[300px] flex items-center justify-center my-2">
            <svg width="300" height="300" className="overflow-visible">
              {[0.2, 0.4, 0.6, 0.8, 1.0].map((level) => (
                <circle
                  key={level}
                  cx={cx}
                  cy={cy}
                  r={radius * level}
                  fill="none"
                  stroke="#334155"
                  strokeDasharray="2,2"
                  strokeWidth="1"
                />
              ))}

              {SKILL_DIMENSIONS.map((dim, i) => {
                const { x, y } = getCoordinates(i, 100);
                const isSelected = selectedSkill.id === dim.id;

                return (
                  <g key={dim.id}>
                    <line x1={cx} y1={cy} x2={x} y2={y} stroke="#334155" strokeWidth="1" />
                    <text
                      x={x + (x > cx ? 12 : x < cx ? -12 : 0)}
                      y={y + (y > cy ? 12 : y < cy ? -12 : 0)}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      onClick={() => setSelectedSkill(dim)}
                      className={`text-[10px] font-mono font-bold cursor-pointer transition-all ${
                        isSelected ? 'fill-emerald-400 underline font-extrabold text-xs' : 'fill-slate-400 hover:fill-white'
                      }`}
                    >
                      {dim.shortCode}
                    </text>
                  </g>
                );
              })}

              <polygon
                points={baselinePoints}
                fill="rgba(148, 163, 184, 0.15)"
                stroke="#94a3b8"
                strokeWidth="1.5"
                strokeDasharray="3,3"
              />

              <polygon
                points={nishPoints}
                fill="rgba(16, 185, 129, 0.3)"
                stroke="#10b981"
                strokeWidth="2.5"
                className="transition-all duration-500 hover:fill-emerald-500/40"
              />

              {SKILL_DIMENSIONS.map((dim, i) => {
                const { x, y } = getCoordinates(i, dim.nishValue);
                const isSelected = selectedSkill.id === dim.id;

                return (
                  <circle
                    key={dim.id}
                    cx={x}
                    cy={y}
                    r={isSelected ? 6 : 4}
                    fill={isSelected ? '#34d399' : '#10b981'}
                    stroke="#ffffff"
                    strokeWidth="2"
                    onClick={() => setSelectedSkill(dim)}
                    className="cursor-pointer transition-all hover:scale-125"
                  />
                );
              })}
            </svg>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-emerald-500 rounded-sm"></span>
              <span className="text-emerald-300 font-bold">Nish Jena Profile</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-slate-400 rounded-sm"></span>
              <span className="text-slate-400">Traditional SDR Baseline</span>
            </div>
          </div>
        </div>

        {/* Selected Skill Detail Inspector */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <span className="text-xs font-mono text-emerald-700 font-bold uppercase">
                SKILL DIMENSION INSPECTOR
              </span>
              <span className="text-xs font-mono font-bold text-slate-500">
                Score: {selectedSkill.nishValue} / 100
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-3">
              {selectedSkill.name}
            </h3>

            <div className="mt-3 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-900">
              ⚡ Proof: {selectedSkill.proofMetrics}
            </div>

            <p className="text-xs text-slate-600 mt-4 leading-relaxed font-sans">
              {selectedSkill.details}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-900 font-mono uppercase mb-2">Key Proven Projects</h4>
            <div className="space-y-1.5 text-xs">
              {selectedSkill.keyProjects.map((proj) => (
                <div key={proj} className="flex items-center gap-2 text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{proj}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 text-xs text-slate-400 font-mono">
            Click any dimension on the radar chart to inspect proof metrics.
          </div>
        </div>

      </div>

      {/* Career History Timeline */}
      <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6">
        <div className="border-b border-slate-200 pb-3">
          <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-emerald-600" />
            Career Experience & Proven Achievements
          </h3>
        </div>

        <div className="space-y-6">
          {EXPERIENCE_TIMELINE.map((item) => (
            <div key={item.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h4 className="text-base font-bold text-slate-900">{item.role}</h4>
                  <span className="text-xs font-semibold text-emerald-700">{item.company} · {item.location}</span>
                </div>
                <span className="text-xs font-mono text-slate-600 bg-slate-200/80 px-2.5 py-1 rounded-md self-start sm:self-auto font-bold">
                  {item.period}
                </span>
              </div>

              {item.achievementBadge && (
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900 flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{item.achievementBadge}</span>
                </div>
              )}

              <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside leading-relaxed">
                {item.highlights.map((h, idx) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
