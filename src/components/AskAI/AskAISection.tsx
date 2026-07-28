import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, Sparkles, RefreshCw, MessageSquare, ShieldCheck, Zap } from 'lucide-react';
import { ChatMessage } from '../../types';
import { BountiLogo } from '../BountiLogo';

export const AskAISection: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'nish',
      text: "Hello Deniz, Ziar, and the Bounti leadership team! I'm Nish Jena's AI Assistant, primed with my full CV, GTM strategy, pitch deck math, and 60-day wager.\n\nAsk me anything about my outbound execution plan, how I compare to traditional hires, or my strategy to turn frontline ops into €2M+ ARR for Bounti!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const [inputQuery, setInputQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const promptChips = [
    "Why bet on Nish vs a traditional SDR?",
    "Walk me through your 12-day trigger sequence",
    "What are the exact details of your 60-day wager?",
    "How will you expand Bounti into English EU markets?"
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputQuery;
    if (!query.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputQuery('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({ role: m.sender, content: m.text }))
        }),
      });

      const data = await response.json();
      const aiReplyText = data.reply || "Thank you for asking! I am ready to start building Bounti's outbound engine on Monday.";

      const nishMessage: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        sender: 'nish',
        text: aiReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, nishMessage]);
    } catch (err) {
      console.error("Chat error:", err);
      const fallbackMsg: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        sender: 'nish',
        text: "Target: 10+ Sales Qualified Leads in 60 days. I carry the quota, not excuses. Let's build Bounti's outbound engine together!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 font-sans">
      
      {/* Header */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xl shadow-md">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              Ask Nish Jena (AI)
              <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                AI Assistant
              </span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Primed with Nish's full CV, GTM strategy, 12-day trigger cadence, and 60-day wager for Bounti leadership.
            </p>
          </div>
        </div>
      </div>

      {/* Suggested Prompt Chips */}
      <div className="flex flex-wrap items-center gap-2">
        {promptChips.map((chip) => (
          <button
            key={chip}
            onClick={() => handleSendMessage(chip)}
            disabled={isLoading}
            className="px-3.5 py-2 rounded-xl bg-white hover:bg-emerald-50 text-slate-800 hover:text-emerald-900 text-xs font-bold border border-slate-200 shadow-2xs transition disabled:opacity-50 text-left"
          >
            💡 {chip}
          </button>
        ))}
      </div>

      {/* Chat Messages Panel */}
      <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl min-h-[420px] max-h-[550px] flex flex-col justify-between overflow-hidden">
        
        {/* Messages Stream */}
        <div className="overflow-y-auto space-y-4 pr-2 flex-1">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 text-xs leading-relaxed ${
                msg.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {msg.sender === 'nish' && (
                <div className="w-8 h-8 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-bold shrink-0 mt-1 shadow-md">
                  NJ
                </div>
              )}

              <div className={`p-4 rounded-2xl max-w-[85%] whitespace-pre-wrap ${
                msg.sender === 'user'
                  ? 'bg-emerald-600 text-white rounded-tr-none font-sans shadow-md'
                  : 'bg-slate-950 border border-slate-800 text-slate-100 rounded-tl-none shadow-md'
              }`}>
                <div className="flex items-center justify-between gap-4 mb-1 text-[10px] opacity-70 font-mono">
                  <strong>{msg.sender === 'user' ? 'Reviewer' : 'Nish Jena (AI)'}</strong>
                  <span>{msg.timestamp}</span>
                </div>
                <div>{msg.text}</div>
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center font-bold shrink-0 mt-1">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 text-xs justify-start items-center text-emerald-400 font-mono animate-pulse">
              <div className="w-8 h-8 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-bold">
                NJ
              </div>
              <p>Nish is formulating strategy response...</p>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="pt-4 mt-2 border-t border-slate-800 flex gap-2"
        >
          <input
            type="text"
            placeholder="Ask Nish anything about his pitch, strategy, or wager for Bounti..."
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            disabled={isLoading}
            className="flex-1 bg-slate-950 border border-slate-800 text-white text-xs px-4 py-3 rounded-2xl focus:outline-none focus:border-emerald-500 transition disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isLoading || !inputQuery.trim()}
            className="px-5 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg transition disabled:opacity-50 shrink-0"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">Send</span>
          </button>
        </form>

      </div>

    </div>
  );
};
