import { useEffect, useRef, useState } from "react";
import { Bot, Send, Sparkles, GraduationCap, FileText, Stamp, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface Message {
  role: "assistant" | "user";
  content: string;
}

const quickPrompts = [
  "What documents are needed for a UK student visa?",
  "Help me shortlist MS in CS universities for USA.",
  "How do I plan SOP, LOI, and essays?",
  "What should my application timeline look like?",
  "Can I get scholarships or an education loan?",
];

const responseRules: { keywords: string[]; reply: string }[] = [
  {
    keywords: ["visa", "vfs", "embassy", "biometric"],
    reply:
      "Visa roadmap (student):\n1) Offer letter + CAS/I-20\n2) Financial proof + sponsor docs\n3) Visa fee + biometrics\n4) Interview prep (if required)\nTell me your country + intake so I can tailor this.",
  },
  {
    keywords: ["sop", "essay", "loi", "statement of purpose"],
    reply:
      "SOP/LOI/Essay plan:\n- 1 clear story (why this course + why this country)\n- 2 academic/professional proofs\n- 1 paragraph on goals + fit\nShare your background and I can outline a draft.",
  },
  {
    keywords: ["documents", "transcript", "lor", "passport"],
    reply:
      "Core documents checklist:\n- Passport + transcripts\n- SOP/LOI + resume\n- LORs (2-3)\n- Test scores (IELTS/TOEFL/GRE)\n- Financial statements\nWant a country-specific list?",
  },
  {
    keywords: ["ielts", "toefl", "pte", "gre", "gmat"],
    reply:
      "Test prep guidance:\n- Check program requirements\n- Plan 8-12 weeks for IELTS/TOEFL\n- GRE/GMAT only if required\nShare your target universities and I will map the test plan.",
  },
  {
    keywords: ["scholarship", "funding", "loan", "finance", "budget"],
    reply:
      "Funding options:\n- Merit scholarships + country grants\n- Early application increases chances\n- Education loans with co-applicant\nTell me your budget range and destination.",
  },
  {
    keywords: ["shortlist", "university", "college", "course", "program"],
    reply:
      "Shortlist method:\n- 3 dream + 5 target + 3 safe\n- Match GPA/test scores + budget\n- Prioritize ROI + placement outcomes\nShare your profile for a custom shortlist.",
  },
  {
    keywords: ["application", "deadline", "intake"],
    reply:
      "Timeline tip:\n- Start 8-10 months before intake\n- Tests by month 2\n- SOP/LORs by month 3\n- Submit apps by month 4-5\nWhich intake are you targeting?",
  },
  {
    keywords: ["mbbs", "medicine", "medical"],
    reply:
      "MBBS abroad path:\n- Choose NMC + WHO listed universities\n- Verify medium of instruction\n- Check total fees + living costs\n- Plan for FMGE/NExT requirements\nShare your budget and destination.",
  },
];

const buildReply = (text: string) => {
  const normalized = text.toLowerCase();
  const matched = responseRules.find((rule) =>
    rule.keywords.some((keyword) => normalized.includes(keyword)),
  );

  if (matched) {
    return matched.reply;
  }

  return "Thanks for sharing. Tell me your target country, course level (UG/PG), intake, budget range, and test scores. I will map the best next steps.";
};

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I am your GoGlobal AI Advisor. Ask me anything about visas, colleges, applications, or scholarships.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isThinking]);

  const sendMessage = (text: string) => {
    const cleaned = text.trim();
    if (!cleaned) return;

    setMessages((prev) => [...prev, { role: "user", content: cleaned }]);
    setInput("");
    setIsThinking(true);

    window.setTimeout(() => {
      const reply = buildReply(cleaned);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      setIsThinking(false);
    }, 500);
  };

  return (
    <section id="ai-assistant" className="py-24 bg-aurora relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="w-fit bg-primary/10 text-primary hover:bg-primary/15" variant="secondary">
              <Sparkles className="w-4 h-4 mr-2" />
              New: GoGlobal AI Advisor
            </Badge>
            <h2 className="section-title">
              Instant guidance for visas, colleges, and applications
            </h2>
            <p className="section-subtitle">
              Students ask questions in plain language. The advisor gives a clear next-step plan, and your counsellor
              follows up for a personalized strategy.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="surface-card p-4">
                <GraduationCap className="w-6 h-6 text-primary mb-3" />
                <p className="font-semibold text-foreground">Course & university shortlists</p>
                <p className="text-sm text-muted-foreground">Match programs to GPA, budget, and intake.</p>
              </div>
              <div className="surface-card p-4">
                <FileText className="w-6 h-6 text-primary mb-3" />
                <p className="font-semibold text-foreground">SOP, LOI, essays</p>
                <p className="text-sm text-muted-foreground">Structure, drafts, and document checklists.</p>
              </div>
              <div className="surface-card p-4">
                <Stamp className="w-6 h-6 text-primary mb-3" />
                <p className="font-semibold text-foreground">Visa guidance</p>
                <p className="text-sm text-muted-foreground">Document review and interview readiness.</p>
              </div>
              <div className="surface-card p-4">
                <Globe2 className="w-6 h-6 text-primary mb-3" />
                <p className="font-semibold text-foreground">Country insights</p>
                <p className="text-sm text-muted-foreground">Intakes, timelines, and scholarship tips.</p>
              </div>
            </div>
          </div>

          <div className="surface-card p-6 lg:p-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">GoGlobal AI Advisor</p>
                  <p className="text-xs text-muted-foreground">Responds in seconds</p>
                </div>
              </div>
              <Badge variant="outline" className="text-xs">
                Beta
              </Badge>
            </div>

            <div className="h-[320px] overflow-y-auto rounded-2xl border border-border/60 bg-background/70 p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`flex ${message.role === "assistant" ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line shadow-sm ${
                      message.role === "assistant"
                        ? "bg-muted text-foreground"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isThinking && (
                <div className="flex justify-start">
                  <div className="bg-muted text-foreground rounded-2xl px-4 py-3 text-sm">
                    Typing...
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                  onClick={() => sendMessage(prompt)}
                >
                  {prompt}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 mt-4">
              <Input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about visas, colleges, scholarships..."
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    sendMessage(input);
                  }
                }}
              />
              <Button onClick={() => sendMessage(input)} className="h-11 px-4">
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Guidance is informational. Our counsellors will confirm final recommendations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
