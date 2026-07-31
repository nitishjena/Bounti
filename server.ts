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

      const systemPrompt = `You are Nish Jena, an SDR / Growth Associate Candidate pitching Bounti (a Berlin-based multi-location ops & training startup that raised €4M from Ventech in Mar 2026).

YOUR PERSONA & PROFILE:
- Role: SDR / Growth Associate Candidate. Open to relocating to Berlin immediately.
- Phone: +49 176 36411541 | Email: nitish.2024@gmail.com
- Languages: English (C2 native fluency), German (A2 actively studying, targeting B1/B2).
- Education: M.Sc. Business Intelligence & Data Science at ISM Hochschule Munich (graduating June 2026).
- Proven Achievements:
  1. TenantTrust (B2B SaaS): Built 0->1 GTM engine from scratch, pitched C-suite at property management firms. Won 1st Place ISM Startup Competition 2025 across all 7 campuses.
  2. WhiteHat Jr: Built 200+ prospect/week outbound machine, 60-100 cold calls/day during $300M acquisition. Achieved ~40% first-call conversion.
  3. OneSpaWorld: Personally closed 200-300 clients/month with zero inbound, 80+ countries sold into across cruise ships & live stage presentations.

YOUR STRATEGIC PITCH FOR BOUNTI:
- Bounti's Core Moat: Training, audits, checklists, comms & AI course creation in one multi-location platform.
- Target Accounts & Triggers in UK & Ireland (~1,200 chain universe):
  1. Honest Burgers (~51 sites): Acquired and converting 12 former Gourmet Burger Kitchen sites.
  2. Boojum (~18 sites): Largest menu overhaul on 28 January 2026.
  3. Camile Thai (~49 sites + 9 Thindi): 3 operating formats across one estate.
  4. Tortilla Mexican Grill (~85–100 sites): Deploying Oracle EPOS & AI-enabled reporting.
  5. Itsu (~81 sites): Appointed Savills to source 80 new restaurants.
  6. Gail's Bakery (~185 sites): 36 openings in last financial year with 40 more planned.
- The Funnel & Unit Math:
  * Quota: 200 qualified demos booked per year (4 per week).
  * 8% demo-per-connect -> ~2,500 connects per year.
  * 15% connect rate -> ~16,500 dials per year (~75 dials/day, or ~50 when multi-channel).
  * 25% AE win rate -> 50 deals per year.
  * €6K ACV baseline assumption -> €300K ARR sourced per year.
- THE 60-DAY WAGER: "Target: 10+ qualified demos booked in 60 days. If I miss by week 4, we reassess fit. No severance conversation needed. I carry the number, not the excuse."

TONE & STYLE:
- Confident, structured, data-driven, direct, and energetic.
- Keep answers concise (2-4 paragraphs), formatted with bullet points for readability.
- Speak in the first person ("I built...", "My strategy for Bounti...").

Answer the user's query accurately using this context.`;

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
        fallbackReply = `Here is my 60-Day Wager for Bounti:\n\n` +
          `• **Target**: 10+ qualified demos booked in 60 days.\n` +
          `• **The Safeguard**: If I am off pace by Week 4, we sit down, review the conversion data together, and reassess fit. No severance awkwardness needed — I carry the number, not excuses.\n` +
          `• **Why I can offer this**: At WhiteHat Jr during a $300M acquisition, I maintained a ~40% first-call close rate with zero warm inbound. At OneSpaWorld, I closed 200–300 deals/month across 80+ countries. I know how to convert cold traffic fast.`;
      } else if (lowerQuery.includes("why") || lowerQuery.includes("traditional") || lowerQuery.includes("sdr") || lowerQuery.includes("hire") || lowerQuery.includes("differentiate")) {
        fallbackReply = `Traditional SDRs dial cold lists and pass unqualified leads. Here is why my profile is built specifically for Bounti's next phase:\n\n` +
          `1. **Trigger-Based Outbound**: Instead of spray-and-pray, I monitor Indeed, LinkedIn, and FSA inspection feeds for operational triggers (e.g., Honest Burgers converting 12 GBK sites or Boojum's menu overhaul).\n` +
          `2. **Data & Technical Depth**: Currently finishing my M.Sc. in Business Intelligence & Data Science at ISM Munich. I build custom n8n, Clay, and Apollo workflows and clean CRM pipelines myself.\n` +
          `3. **0→1 Playbook Execution**: Built TenantTrust's GTM from scratch (won 1st Place ISM Startup Competition 2025). I don't need an inherited playbook — I build it and document it for the team.`;
      } else if (lowerQuery.includes("trigger") || lowerQuery.includes("sequence") || lowerQuery.includes("script") || lowerQuery.includes("cadence") || lowerQuery.includes("12-day")) {
        fallbackReply = `My 12-Day Trigger Cadence after an operational trigger fires:\n\n` +
          `• **Day 0**: LinkedIn Connect ("Congrats on expanding locations!").\n` +
          `• **Day 2**: Email + Case Study ("How World of Pizza cut frontline onboarding costs by 68%").\n` +
          `• **Day 5**: Direct Cold Call ("When you open a new site, how do you ensure every hire reaches standard without PDFs and WhatsApp groups?").\n` +
          `• **Day 8**: 20-sec Voice Note / WhatsApp Script.\n` +
          `• **Day 12**: Breakup Email ("Still expanding locations this quarter?").`;
      } else if (lowerQuery.includes("funnel") || lowerQuery.includes("math") || lowerQuery.includes("arr") || lowerQuery.includes("unit") || lowerQuery.includes("cac")) {
        fallbackReply = `Here is the reverse-engineered unit math built backwards from my quota (4 demos/week):\n\n` +
          `• **200 Qualified Demos / Year** (4 per week)\n` +
          `• **~2,500 Connects / Year** (8.0% demo-per-connect rate)\n` +
          `• **~16,500 Dials / Year** (~75 dials/day, or ~50 when multi-channel at 15% connect rate)\n` +
          `• **50 Deals Closed by AE** (25.0% AE win rate)\n` +
          `• **€300K New ARR Sourced** (€6K ACV explicit assumption).`;
      } else if (lowerQuery.includes("english") || lowerQuery.includes("international") || lowerQuery.includes("expand") || lowerQuery.includes("dach") || lowerQuery.includes("uk") || lowerQuery.includes("account")) {
        fallbackReply = `Bounti's existing logos (World of Pizza, Concept Family, Kaimug) prove DACH hospitality product-market fit. My mandate is leading English-speaking expansion (~1,200 UK & IE chains):\n\n` +
          `• **Target Accounts**: Honest Burgers (~51 sites), Boojum (~18 sites), Camile Thai (~49 sites), Tortilla (~85-100 sites), Itsu (~81 sites), Gail's Bakery (~185 sites).\n` +
          `• **My Capability**: Native C2 English fluency + 4 years selling to 80+ nationalities at OneSpaWorld. I prove Bounti's sales motion works seamlessly in English.`;
      } else {
        fallbackReply = `Hi — I'm an AI assistant primed on Nish's CV, GTM strategy and 60-day plan for Bounti.\n\n` +
          `Ask me anything about:\n` +
          `• My **60-Day Wager** (10+ qualified demos in 60 days)\n` +
          `• My **Reverse-Engineered 200-Demo Funnel Math**\n` +
          `• The **Six Target Accounts in UK & Ireland** and their triggers\n` +
          `• My **First 90 Days Execution Plan**`;
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
