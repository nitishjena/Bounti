import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  Copy, 
  Check, 
  Sparkles, 
  HelpCircle, 
  Volume2,
  Clock,
  Target
} from 'lucide-react';
import { ScenarioModel } from '../types';

interface PresenterNotesDrawerProps {
  scenario: ScenarioModel;
  onClose: () => void;
}

export const PresenterNotesDrawer: React.FC<PresenterNotesDrawerProps> = ({
  scenario,
  onClose,
}) => {
  const [copiedScript, setCopiedScript] = useState(false);

  const scriptText = `
"Slide 8: GTM Outbound Engine & SDR Velocity

Now let's look at Bounti's Go-To-Market unit economics from our SDR perspective.

Our outbound campaign is built on a high-velocity, rigorous sales model:
1. TOP OF FUNNEL: We start with 2,500 outbound calls per SDR cycle — representing 100 disciplined dials per day.
2. SDR HOOK RATE: From 2,500 calls, Bounti generates 200 qualified product discovery demos. That's an 8% call-to-demo conversion rate, powered by Bounti's autonomous account research prior to every dial.
3. CLOSING WIN RATE: Our Account Executives convert 200 demos into 50 closed-won contracts — achieving a 25% demo-to-deal win rate.
4. REVENUE IMPACT: With an average deal size of €6,000 ACV, this single SDR funnel yields €300,000 in ARR with an average sales cycle velocity of just 21 days from initial cold touch to signed contract.

In summary: 2.0% end-to-end efficiency turns cold dials into predictable €300K ARR scale."
  `.trim();

  const handleCopyScript = () => {
    navigator.clipboard.writeText(scriptText);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2000);
  };

  return (
    <aside className="no-print fixed top-16 right-4 z-50 w-full max-w-md bg-slate-900/95 backdrop-blur-xl border border-purple-800/80 rounded-2xl shadow-2xl p-5 text-slate-100 transition-all duration-300">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
            <Volume2 className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-slate-100 tracking-tight">
              Speaker Pitch Script & VC Q&A
            </h3>
            <p className="text-[11px] text-slate-400">
              Presenter Talking Points for Slide 08
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-4 max-h-[65vh] overflow-y-auto pr-1">
        
        {/* Script Box */}
        <div className="bg-slate-950/80 rounded-xl p-4 border border-purple-900/40 relative">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              Verbatim Pitch Script (60s)
            </span>
            <button
              onClick={handleCopyScript}
              className="flex items-center gap-1 text-[11px] text-purple-300 hover:text-white bg-purple-950/60 hover:bg-purple-900/80 px-2 py-1 rounded-md border border-purple-800/60 transition"
            >
              {copiedScript ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy Script</span>
                </>
              )}
            </button>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed font-sans italic">
            "{scriptText.slice(51, 450)}..."
          </p>
        </div>

        {/* Talking Points List */}
        <div>
          <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
            Key Slide Takeaways for Investors
          </h4>
          <ul className="space-y-2 text-xs">
            <li className="flex items-start gap-2 bg-slate-800/40 p-2.5 rounded-lg border border-slate-800">
              <Target className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-cyan-300">8.0% SDR Hook Rate:</strong> High conversion enabled by Bounti’s autonomous buyer research before dialing.
              </span>
            </li>
            <li className="flex items-start gap-2 bg-slate-800/40 p-2.5 rounded-lg border border-slate-800">
              <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-sky-300">21-Day Velocity:</strong> Rapid sales cycle minimizes pipeline churn and accelerates ARR collection.
              </span>
            </li>
            <li className="flex items-start gap-2 bg-slate-800/40 p-2.5 rounded-lg border border-slate-800">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-emerald-300">Unit Economics:</strong> €300K ARR per SDR cycle validates scalable, profitable GTM engine.
              </span>
            </li>
          </ul>
        </div>

        {/* VC Objections & FAQ */}
        <div>
          <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
            <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
            Anticipated Investor Questions
          </h4>
          <div className="space-y-2 text-xs">
            
            <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
              <p className="font-semibold text-slate-200">
                Q: "Is an 8% Call-to-Demo conversion realistic for cold outbound?"
              </p>
              <p className="text-slate-400 mt-1 text-[11px] leading-snug">
                A: "Yes. Industry average is 3-5%, but Bounti’s AI prospecting engine pre-qualifies signals and triggers calls at high-intent moments, raising SDR conversion to 8%."
              </p>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
              <p className="font-semibold text-slate-200">
                Q: "What is the average sales cycle duration?"
              </p>
              <p className="text-slate-400 mt-1 text-[11px] leading-snug">
                A: "Average duration is 21 days for our €6K ACV tier, with contract signing handled via streamlined digital procurement."
              </p>
            </div>

          </div>
        </div>

      </div>

    </aside>
  );
};
