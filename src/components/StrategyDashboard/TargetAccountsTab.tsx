import React, { useState } from 'react';
import { TARGET_ACCOUNTS } from '../../data/strategyData';
import { TargetAccount } from '../../types';
import { Building2, Search, Filter, Mail, Linkedin, Phone, Copy, Check, Sparkles, Send, X } from 'lucide-react';

export const TargetAccountsTab: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedAccountForModal, setSelectedAccountForModal] = useState<TargetAccount | null>(null);

  // Outreach Generator Modal States
  const [outreachChannel, setOutreachChannel] = useState<'email' | 'linkedin' | 'call'>('email');
  const [outreachTone, setOutreachTone] = useState<'trigger' | 'executive' | 'proof'>('trigger');
  const [copiedScript, setCopiedScript] = useState<boolean>(false);

  const filteredAccounts = TARGET_ACCOUNTS.filter((acc) => {
    const matchesSearch = acc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          acc.contactTitle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === 'All' || acc.industry === selectedIndustry;
    const matchesRegion = selectedRegion === 'All' || acc.region === selectedRegion;
    return matchesSearch && matchesIndustry && matchesRegion;
  });

  // Dynamic Script Generator Engine
  const generateScript = (account: TargetAccount) => {
    if (outreachChannel === 'email') {
      if (outreachTone === 'trigger') {
        return `Subject: Opening location #${account.locationsCount} — staff training shortcut\n\n` +
          `Hi ${account.contactTitle.split(' ')[0]},\n\n` +
          `Saw that ${account.name} is expanding its location footprint (${account.triggerSignal}).\n\n` +
          `When you open a new site, how are you ensuring every new hire is trained to the same standard as your top location?\n\n` +
          `Most ops directors I speak with are still using printed PDFs and WhatsApp groups. Bounti cuts frontline onboarding time by 68% with instant AI course creation and daily shift checklists (proven with World of Pizza).\n\n` +
          `Worth 10 minutes next Tuesday?\n\n` +
          `Best,\nNish Jena\nSDR / Growth Candidate, Bounti (Berlin)`;
      } else if (outreachTone === 'executive') {
        return `Subject: Frontline consistency across ${account.name}'s ${account.locationsCount} locations\n\n` +
          `Hi ${account.contactTitle.split(' ')[0]},\n\n` +
          `I wanted to reach out regarding operational standardization across ${account.name}'s multi-site footprint in ${account.region}.\n\n` +
          `Bounti unifies real-time shift checklists, mobile training, and compliance audits into a single platform for multi-location brands.\n\n` +
          `Would you be open to reviewing how World of Pizza reduced training costs while scaling to 28 sites?\n\n` +
          `Best regards,\nNish Jena`;
      } else {
        return `Subject: How World of Pizza cut onboarding costs 68% across 28 sites\n\n` +
          `Hi ${account.contactTitle.split(' ')[0]},\n\n` +
          `Given ${account.name}'s focus on ${account.industry}, I thought you'd find our latest case study relevant.\n\n` +
          `World of Pizza replaced legacy training manuals with Bounti's AI course creation. Result: 68% lower onboarding costs and 100% audit compliance.\n\n` +
          `Open to a 10-minute preview for ${account.name}?\n\n` +
          `Best,\nNish Jena`;
      }
    } else if (outreachChannel === 'linkedin') {
      return `Hi ${account.contactTitle.split(' ')[0]}, congrats on ${account.name}'s expansion (${account.triggerSignal})! Quick question: as you scale past ${account.locationsCount} locations, how are you keeping frontline onboarding standardized across sites? Bounti automates this with AI course creation & shift checklists. Open to connecting? - Nish Jena`;
    } else {
      return `COLD CALL OPENER:\n\n` +
        `"Hi ${account.contactTitle.split(' ')[0]}, I saw ${account.name} is opening new locations in ${account.region}.\n\n` +
        `Quick question: when a new site opens, how are you getting every hire trained to the exact same standard as your best location?\n\n` +
        `Most ops leads I talk to are still using PDFs and a WhatsApp group. That's the gap Bounti closes for multi-site chains like World of Pizza.\n\n` +
        `Worth 15 minutes this week?"`;
    }
  };

  const handleCopyScript = (scriptText: string) => {
    navigator.clipboard.writeText(scriptText);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2000);
  };

  return (
    <div className="space-y-6">
      
      {/* Search & Filter Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Building2 className="w-5 h-5 text-emerald-500" />
            ICP Target Account Directory & 1-Click Outreach Generator
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Filter high-priority accounts by buying trigger, location count, and region. Click 'Generate Script' for 1-click personalized outreach.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-48">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input 
              type="text"
              placeholder="Search account..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs border border-slate-200 dark:border-slate-700 focus:outline-none"
            />
          </div>

          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none"
          >
            <option value="All">All Verticals</option>
            <option value="Hospitality & QSR">Hospitality & QSR</option>
            <option value="Gym Chains">Gym Chains</option>
            <option value="Retail & Convenience">Retail & Convenience</option>
          </select>

          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none"
          >
            <option value="All">All Regions</option>
            <option value="DACH">DACH</option>
            <option value="UK">UK</option>
            <option value="Benelux">Benelux</option>
          </select>
        </div>
      </div>

      {/* Account Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAccounts.map((account) => (
          <div 
            key={account.id}
            className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:border-emerald-500/50 transition-all flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-start justify-between gap-2">
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full uppercase ${
                  account.status === 'Trigger Fired'
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                    : account.status === 'High Priority'
                    ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                    : 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30'
                }`}>
                  {account.status}
                </span>
                <span className="text-xs font-mono text-slate-400">{account.region}</span>
              </div>

              <h4 className="text-base font-bold text-slate-900 dark:text-white mt-2">
                {account.name}
              </h4>
              <p className="text-xs text-slate-500">{account.industry} · {account.locationsCount} Locations ({account.estRevenue})</p>

              <div className="mt-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">CONTACT PERSONA</span>
                <strong className="text-slate-800 dark:text-slate-200 block">{account.contactTitle}</strong>
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 block pt-1 font-mono">⚡ Signal: {account.triggerSignal}</span>
              </div>
            </div>

            <button
              onClick={() => setSelectedAccountForModal(account)}
              className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition"
            >
              <Sparkles className="w-4 h-4" />
              <span>1-Click Outreach Generator</span>
            </button>
          </div>
        ))}
      </div>

      {/* 1-Click Outreach Generator Modal */}
      {selectedAccountForModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full p-6 shadow-2xl space-y-4 animate-fadeIn relative">
            
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div>
                <span className="text-xs font-mono text-emerald-500 font-bold uppercase">OUTREACH GENERATOR</span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Outreach for {selectedAccountForModal.name}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedAccountForModal(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Selector Options */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              {/* Channel Selector */}
              <div>
                <span className="text-slate-400 font-mono block mb-1">CHANNEL</span>
                <div className="flex gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                  <button 
                    onClick={() => setOutreachChannel('email')}
                    className={`flex-1 py-1 rounded text-center font-semibold ${outreachChannel === 'email' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400'}`}
                  >
                    Email
                  </button>
                  <button 
                    onClick={() => setOutreachChannel('linkedin')}
                    className={`flex-1 py-1 rounded text-center font-semibold ${outreachChannel === 'linkedin' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400'}`}
                  >
                    LinkedIn
                  </button>
                  <button 
                    onClick={() => setOutreachChannel('call')}
                    className={`flex-1 py-1 rounded text-center font-semibold ${outreachChannel === 'call' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400'}`}
                  >
                    Cold Call
                  </button>
                </div>
              </div>

              {/* Tone Selector */}
              <div>
                <span className="text-slate-400 font-mono block mb-1">TONE / ANGLE</span>
                <div className="flex gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                  <button 
                    onClick={() => setOutreachTone('trigger')}
                    className={`flex-1 py-1 rounded text-center font-semibold ${outreachTone === 'trigger' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400'}`}
                  >
                    Trigger
                  </button>
                  <button 
                    onClick={() => setOutreachTone('executive')}
                    className={`flex-1 py-1 rounded text-center font-semibold ${outreachTone === 'executive' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400'}`}
                  >
                    Executive
                  </button>
                  <button 
                    onClick={() => setOutreachTone('proof')}
                    className={`flex-1 py-1 rounded text-center font-semibold ${outreachTone === 'proof' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400'}`}
                  >
                    Case Proof
                  </button>
                </div>
              </div>
            </div>

            {/* Generated Script Area */}
            <div className="p-4 rounded-2xl bg-slate-950 text-emerald-300 font-mono text-xs whitespace-pre-wrap leading-relaxed border border-slate-800 min-h-[180px] relative">
              {generateScript(selectedAccountForModal)}
            </div>

            {/* Copy Button */}
            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => handleCopyScript(generateScript(selectedAccountForModal))}
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs flex items-center gap-1.5 shadow-md transition"
              >
                {copiedScript ? <Check className="w-4 h-4 text-slate-950" /> : <Copy className="w-4 h-4" />}
                <span>{copiedScript ? 'Copied to Clipboard!' : 'Copy Script'}</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
