import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check API
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // AI Chat Endpoint with Nish Jena persona for Bounti Leadership
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      const userQuery = messages && messages.length > 0 
        ? messages[messages.length - 1].content 
        : "Tell me about your background and wager for Bounti.";

      const apiKey = process.env.GEMINI_API_KEY;

      const systemPrompt = `You are Nish Jena, an executive candidate pitching Deniz & Ziar and the leadership team at Bounti (a Berlin-based multi-location ops & training startup that raised €4M from Ventech in Mar 2026).

YOUR PERSONA & PROFILE:
- Current Role: GTM Lead & Outbound Engine Builder. Open to relocating to Berlin immediately.
- Phone: +49 176 36411541 | Email: nitish.2024@gmail.com
- Languages: English (C2 native fluency), German (A2 actively studying, targeting B1/B2).
- Education: M.Sc. Business Intelligence & Data Science at ISM Hochschule Munich (graduating June 2026).
- Proven Achievements:
  1. TenantTrust (B2B SaaS): Built 0->1 GTM engine from scratch, no inherited playbook, pitched C-suite at property management firms (5,000+ units). Won 1st Place ISM Startup Competition 2025 across all 7 campuses (awarded by Karsten Maschmeyer).
  2. WhiteHat Jr (Edutech Startup): Built 200+ prospect/week outbound machine, 60-100 cold calls/day during $300M acquisition. Achieved ~40% first-call conversion (vs team baseline), methodology adopted org-wide.
  3. OneSpaWorld (Global Operations): Personally closed 200-300 clients/month with zero inbound, 80+ countries sold into across cruise ships & live stage presentations. Selected for Antarctic voyage programme.
  4. materAIze (Deep Tech AI): GTM Research Analyst, translated complex technical AI product capabilities into commercial value narrative for industrial Mittelstand procurement leaders.

YOUR STRATEGIC PITCH FOR BOUNTI:
- Bounti's Core Moat: Training, audits, checklists, comms & AI course creation in one multi-location platform. Bounti is the ONLY player combining real-time ops execution with training at the multi-location enterprise layer (filling the empty quadrant vs SafetyCulture, Beekeeper, Axonify, Flip, Yoobic).
- The Problem & Solution: Named cases (World of Pizza, Concept Family, Kaimug, Wiki Wiki Poke) prove hospitality fit, but English EU markets & retail/food production are open territory. Bounti's pricing is gated, so it needs a high-velocity full-cycle SDR who can qualify fast and close without Deniz or Ziar in every demo.
- Trigger-Based Outbound Engine: Don't buy cold lists. Monitor Indeed & LinkedIn for "Location Manager" job posts. A new location manager = urgent training need.
- 12-Day Sequence: Day 0 LinkedIn Connect -> Day 2 Email + Case Study -> Day 5 Cold Call -> Day 8 Voice Note from Founder Deniz -> Day 12 Breakup Email.
- The Funnel & Unit Math: 2,500 cold touches/month -> 200 qualified demos (8% hook rate) -> 50 closed deals (25% AE win rate) @ €6K ACV = €300K ARR sourced per rep per year! CPL €40, CAC €1,000, 6:1 LTV:CAC.
- THE 60-DAY WAGER/BET: "Target: 10+ Sales Qualified Leads (SQLs) in 60 days. If I miss by week 4, we reassess fits. No severance conversation needed. I carry the number, not the excuse."

TONE & STYLE:
- Confident, structured, data-driven, executive, direct, and energetic.
- Address Deniz, Ziar, or the Bounti leadership team directly when appropriate.
- Keep answers concise (2-4 paragraphs), formatted with bullet points for readability.
- Speak in the first person ("I built...", "My strategy for Bounti...").

Answer the reviewer's query accurately using this context.`;

      if (apiKey) {
        try {
          const ai = new GoogleGenAI({
            apiKey: apiKey,
            httpOptions: {
              headers: {
                'User-Agent': 'aistudio-build',
              }
            }
          });

          // Standard text generation using gemini-3.6-flash
          const response = await ai.models.generateContent({
            model: "gemini-3.6-flash",
            contents: userQuery,
            config: {
              systemInstruction: systemPrompt,
              temperature: 0.7,
            }
          });

          const replyText = response.text || "Thank you for asking! I'm ready to build Bounti's international outbound engine from day one.";
          return res.json({ reply: replyText });
        } catch (geminiError: any) {
          console.warn("Gemini API call failed, using intelligent fallback response:", geminiError?.message);
        }
      }

      // Intelligent Fallback Response Engine matching Nish's persona
      let fallbackReply = "";
      const lowerQuery = userQuery.toLowerCase();

      if (lowerQuery.includes("wager") || lowerQuery.includes("bet") || lowerQuery.includes("guarantee") || lowerQuery.includes("risk")) {
        fallbackReply = `Here is my 60-Day Wager for Bounti leadership:\n\n` +
          `• **Target**: 10+ Sales Qualified Leads (SQLs) in 60 days.\n` +
          `• **The Safeguard**: If I am off pace by Week 4, we sit down, review the conversion data together, and reassess fit. No severance awkwardness needed — I carry the number, not excuses.\n` +
          `• **Why I can offer this**: At WhiteHat Jr during a $300M acquisition, I maintained a ~40% first-call close rate with zero warm inbound. At OneSpaWorld, I closed 200–300 deals/month across 80+ countries. I know how to convert cold traffic fast.`;
      } else if (lowerQuery.includes("why") || lowerQuery.includes("traditional") || lowerQuery.includes("sdr") || lowerQuery.includes("hire") || lowerQuery.includes("differentiate")) {
        fallbackReply = `Traditional SDRs dial cold lists and pass unqualified leads. Here is why my profile is built specifically for Bounti's next phase:\n\n` +
          `1. **Trigger-Based Outbound**: Instead of spray-and-pray, I monitor Indeed and LinkedIn for 'Location Manager' job posts. A new store opening is an urgent training trigger.\n` +
          `2. **Data & Technical Depth**: Currently finishing my M.Sc. in Business Intelligence & Data Science at ISM Munich. I build custom n8n, Clay, and Apollo workflows and clean CRM pipelines myself.\n` +
          `3. **0→1 Playbook Execution**: Built TenantTrust's GTM from scratch (won 1st Place ISM Startup Competition 2025). I don't need an inherited playbook — I build it for Deniz and Ziar so they can focus on product.`;
      } else if (lowerQuery.includes("trigger") || lowerQuery.includes("sequence") || lowerQuery.includes("script") || lowerQuery.includes("cadence") || lowerQuery.includes("12-day")) {
        fallbackReply = `My 12-Day Trigger Cadence after a 'Location Manager' job post fires:\n\n` +
          `• **Day 0**: LinkedIn Connect ("Congrats on your 15th location!").\n` +
          `• **Day 2**: Email + Case Study ("How World of Pizza cut frontline onboarding costs by 68%").\n` +
          `• **Day 5**: Direct Cold Call ("When you open a new site, how do you ensure every hire reaches standard without PDFs and WhatsApp groups?").\n` +
          `• **Day 8**: 30-sec Voice Note from Founder Deniz (leveraging founder social proof).\n` +
          `• **Day 12**: Breakup Email ("Still expanding locations this quarter?").`;
      } else if (lowerQuery.includes("funnel") || lowerQuery.includes("math") || lowerQuery.includes("arr") || lowerQuery.includes("unit") || lowerQuery.includes("cac")) {
        fallbackReply = `Here is the reverse-engineered unit math for Bounti (€6K ACV baseline):\n\n` +
          `• **2,500 Cold Touches** per month per rep\n` +
          `• **200 Qualified Demos Scheduled** (8.0% outreach conversion)\n` +
          `• **50 Deals Closed by AE** (25.0% AE win rate)\n` +
          `• **€300K New ARR Sourced** per rep / year\n` +
          `• **Economics**: CPL €40 | CAC €1,000 | LTV:CAC 6:1 (3-year retention as an essential operational OS).`;
      } else if (lowerQuery.includes("english") || lowerQuery.includes("international") || lowerQuery.includes("expand") || lowerQuery.includes("dach") || lowerQuery.includes("uk")) {
        fallbackReply = `Bounti's existing logos (World of Pizza, Concept Family, Kaimug) prove DACH hospitality product-market fit. My mandate is leading English-speaking EU expansion:\n\n` +
          `• **Target Markets**: UK, Netherlands, Nordics multi-site F&B, hotel groups, and fitness chains (10–200 locations).\n` +
          `• **My Capability**: Native C2 English fluency + 4 years selling to 80+ nationalities at OneSpaWorld. I prove Bounti's sales motion works seamlessly in English without needing Deniz or Ziar in the room.`;
      } else {
        fallbackReply = `Hello! I'm Nish Jena. Thank you for reviewing my executive candidate pitch for Bounti.\n\n` +
          `I built this interactive strategic growth dashboard to demonstrate how I plan to turn frontline ops into **€2M+ ARR** for Bounti in Berlin and across Europe.\n\n` +
          `Feel free to ask me about:\n` +
          `• My **60-Day Wager** (10+ SQLs in 60 days)\n` +
          `• My **12-Day Trigger Sequence** leveraging job posting signals\n` +
          `• My **Reverse-Engineered €300K ARR Funnel Math**\n` +
          `• How I compare against traditional SDR hires`;
      }

      return res.json({ reply: fallbackReply });
    } catch (err) {
      console.error("Error in /api/chat route:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Bounti Pitch & Dashboard server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
