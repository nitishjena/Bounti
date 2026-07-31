import React, { useState } from 'react';
import { SKILL_DIMENSIONS, EXPERIENCE_TIMELINE } from '../../data/cvData';
import { SkillDimension } from '../../types';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Award, 
  CheckCircle2, 
  Briefcase,
  Layers
} from 'lucide-react';

export const CandidateCVSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillDimension>(SKILL_DIMENSIONS[0]);

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 font-sans">
      
      {/* Profile Header */}
      <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
        
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left z-10">
          <div className="w-24 h-24 rounded-2xl bg-slate-900 border-2 border-emerald-500 overflow-hidden flex items-center justify-center font-black text-2xl text-white shadow-md relative shrink-0">
            <span>NJ</span>
            <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-slate-900 rounded-full" title="Available immediately"></span>
          </div>

          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">NISH JENA</h2>
              <span className="px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-mono font-bold text-xs border border-emerald-200">
                SDR / Growth Associate Candidate
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

      {/* 6 Skill Dimensions & Evidence Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Skill Dimensions Grid (Left) */}
        <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase">CORE COMPETENCIES</span>
              <h3 className="text-base font-bold text-white mt-0.5 flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-400" />
                Six GTM Execution Dimensions
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SKILL_DIMENSIONS.map((dim) => {
              const isSelected = selectedSkill.id === dim.id;

              return (
                <button
                  key={dim.id}
                  onClick={() => setSelectedSkill(dim)}
                  className={`p-4 rounded-2xl text-left border transition-all duration-200 ${
                    isSelected
                      ? 'bg-slate-800 text-white border-emerald-500 shadow-md ring-2 ring-emerald-500/30'
                      : 'bg-slate-950/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <span className={`text-[10px] font-mono font-bold uppercase block ${isSelected ? 'text-emerald-400' : 'text-slate-500'}`}>
                    {dim.shortCode}
                  </span>
                  <h4 className="text-xs font-bold mt-1 line-clamp-2 leading-snug">
                    {dim.name}
                  </h4>
                  <p className="text-[10px] text-slate-400 font-mono mt-2 truncate">
                    {dim.proofMetrics}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Skill Detail Inspector (Right) */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <span className="text-xs font-mono text-emerald-700 font-bold uppercase">
                SKILL DIMENSION EVIDENCE
              </span>
              <span className="text-xs font-mono font-bold text-slate-500">
                Proven Track Record
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
            Select any dimension on the left to inspect evidence and proof metrics.
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
