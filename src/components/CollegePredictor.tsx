import { useState } from "react";
import { GraduationCap, Sparkles, Target, ShieldCheck, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

interface SchoolSuggestion {
  name: string;
  country: string;
  reason: string;
}

interface PredictorResult {
  safe: SchoolSuggestion[];
  mid: SchoolSuggestion[];
  reach: SchoolSuggestion[];
  notes?: string[];
}

interface UniversityProfile {
  name: string;
  country: string;
  levels: string[];
  majors: string[];
  minGpa: number;
  selectivity: number;
  notes: string;
}

const coCurricularOptions = [
  "Leadership roles",
  "Student clubs",
  "Sports",
  "Community service",
  "Research projects",
  "Hackathons",
  "Olympiads",
  "Arts & design",
  "Entrepreneurship",
  "Internships",
  "Volunteering",
  "Competitions",
  "Certifications",
];

const boards = ["CBSE", "ICSE", "State Board", "IB", "Cambridge", "Other"];
const levels = ["Undergraduate", "Postgraduate", "PhD", "MBBS", "Diploma"];

const universities: UniversityProfile[] = [
  {
    name: "University of Toronto",
    country: "Canada",
    levels: ["Undergraduate", "Postgraduate"],
    majors: ["engineering", "computer science", "business", "science"],
    minGpa: 3.7,
    selectivity: 5,
    notes: "Top-ranked research university with competitive entry.",
  },
  {
    name: "University of British Columbia",
    country: "Canada",
    levels: ["Undergraduate", "Postgraduate"],
    majors: ["engineering", "computer science", "business", "arts"],
    minGpa: 3.6,
    selectivity: 5,
    notes: "Strong global reputation and industry links.",
  },
  {
    name: "University of Alberta",
    country: "Canada",
    levels: ["Undergraduate", "Postgraduate"],
    majors: ["engineering", "computer science", "science", "health"],
    minGpa: 3.0,
    selectivity: 3,
    notes: "Balanced admissions with strong STEM options.",
  },
  {
    name: "York University",
    country: "Canada",
    levels: ["Undergraduate", "Postgraduate"],
    majors: ["business", "arts", "law", "science"],
    minGpa: 2.7,
    selectivity: 2,
    notes: "Good option for business and liberal arts.",
  },
  {
    name: "Carleton University",
    country: "Canada",
    levels: ["Undergraduate", "Postgraduate"],
    majors: ["engineering", "computer science", "public policy"],
    minGpa: 2.8,
    selectivity: 2,
    notes: "Known for co-op programs and practical learning.",
  },
  {
    name: "University of Melbourne",
    country: "Australia",
    levels: ["Undergraduate", "Postgraduate"],
    majors: ["business", "engineering", "science", "arts"],
    minGpa: 3.7,
    selectivity: 5,
    notes: "Elite Australian university with competitive entry.",
  },
  {
    name: "Monash University",
    country: "Australia",
    levels: ["Undergraduate", "Postgraduate"],
    majors: ["engineering", "business", "pharmacy", "science"],
    minGpa: 3.3,
    selectivity: 4,
    notes: "Strong industry partnerships and placements.",
  },
  {
    name: "UNSW Sydney",
    country: "Australia",
    levels: ["Undergraduate", "Postgraduate"],
    majors: ["engineering", "computer science", "business"],
    minGpa: 3.4,
    selectivity: 4,
    notes: "Highly ranked for engineering and tech.",
  },
  {
    name: "Deakin University",
    country: "Australia",
    levels: ["Undergraduate", "Postgraduate"],
    majors: ["business", "health", "it", "arts"],
    minGpa: 2.8,
    selectivity: 2,
    notes: "Supportive admissions and flexible entry.",
  },
  {
    name: "University of Manchester",
    country: "United Kingdom",
    levels: ["Undergraduate", "Postgraduate"],
    majors: ["engineering", "business", "science", "arts"],
    minGpa: 3.3,
    selectivity: 4,
    notes: "Russell Group with strong research profile.",
  },
  {
    name: "University of Birmingham",
    country: "United Kingdom",
    levels: ["Undergraduate", "Postgraduate"],
    majors: ["business", "engineering", "law", "health"],
    minGpa: 3.0,
    selectivity: 3,
    notes: "Well-known for business and law programs.",
  },
  {
    name: "University of Leeds",
    country: "United Kingdom",
    levels: ["Undergraduate", "Postgraduate"],
    majors: ["engineering", "business", "media", "science"],
    minGpa: 3.0,
    selectivity: 3,
    notes: "Popular with international students.",
  },
  {
    name: "University College London (UCL)",
    country: "United Kingdom",
    levels: ["Undergraduate", "Postgraduate"],
    majors: ["engineering", "science", "business", "arts"],
    minGpa: 3.7,
    selectivity: 5,
    notes: "World-class university with highly competitive entry.",
  },
  {
    name: "University of Edinburgh",
    country: "United Kingdom",
    levels: ["Undergraduate", "Postgraduate"],
    majors: ["computer science", "science", "arts", "business"],
    minGpa: 3.6,
    selectivity: 5,
    notes: "Strong global ranking and research.",
  },
  {
    name: "Arizona State University",
    country: "United States",
    levels: ["Undergraduate", "Postgraduate"],
    majors: ["business", "engineering", "it", "arts"],
    minGpa: 2.7,
    selectivity: 2,
    notes: "Large university with flexible entry options.",
  },
  {
    name: "University of Texas at Dallas",
    country: "United States",
    levels: ["Undergraduate", "Postgraduate"],
    majors: ["computer science", "business", "engineering"],
    minGpa: 3.0,
    selectivity: 3,
    notes: "Strong tech focus with good ROI.",
  },
  {
    name: "University of Florida",
    country: "United States",
    levels: ["Undergraduate", "Postgraduate"],
    majors: ["engineering", "business", "science"],
    minGpa: 3.4,
    selectivity: 4,
    notes: "Top public university with competitive entry.",
  },
  {
    name: "Purdue University",
    country: "United States",
    levels: ["Undergraduate", "Postgraduate"],
    majors: ["engineering", "computer science", "science"],
    minGpa: 3.5,
    selectivity: 4,
    notes: "Highly ranked for engineering.",
  },
  {
    name: "Northeastern University",
    country: "United States",
    levels: ["Undergraduate", "Postgraduate"],
    majors: ["business", "engineering", "computer science"],
    minGpa: 3.6,
    selectivity: 4,
    notes: "Known for co-op and industry placements.",
  },
  {
    name: "Stanford University",
    country: "United States",
    levels: ["Undergraduate", "Postgraduate"],
    majors: ["computer science", "engineering", "business", "science"],
    minGpa: 3.9,
    selectivity: 5,
    notes: "Extremely competitive admission.",
  },
  {
    name: "Technical University of Munich",
    country: "Germany",
    levels: ["Undergraduate", "Postgraduate"],
    majors: ["engineering", "computer science", "science"],
    minGpa: 3.6,
    selectivity: 5,
    notes: "Top German engineering university.",
  },
  {
    name: "RWTH Aachen University",
    country: "Germany",
    levels: ["Undergraduate", "Postgraduate"],
    majors: ["engineering", "computer science"],
    minGpa: 3.3,
    selectivity: 4,
    notes: "Strong industry connections in Europe.",
  },
  {
    name: "University of Stuttgart",
    country: "Germany",
    levels: ["Undergraduate", "Postgraduate"],
    majors: ["engineering", "automotive", "science"],
    minGpa: 3.0,
    selectivity: 3,
    notes: "Good option for engineering and automotive.",
  },
  {
    name: "Trinity College Dublin",
    country: "Ireland",
    levels: ["Undergraduate", "Postgraduate"],
    majors: ["business", "computer science", "arts", "science"],
    minGpa: 3.6,
    selectivity: 5,
    notes: "Ireland's top-ranked university.",
  },
  {
    name: "University College Dublin",
    country: "Ireland",
    levels: ["Undergraduate", "Postgraduate"],
    majors: ["business", "engineering", "science"],
    minGpa: 3.2,
    selectivity: 4,
    notes: "Popular for business and STEM.",
  },
  {
    name: "Dublin City University",
    country: "Ireland",
    levels: ["Undergraduate", "Postgraduate"],
    majors: ["business", "computer science", "media"],
    minGpa: 2.9,
    selectivity: 3,
    notes: "Good for tech and communications.",
  },
  {
    name: "University of Warsaw",
    country: "Poland",
    levels: ["Undergraduate", "Postgraduate"],
    majors: ["medicine", "business", "science"],
    minGpa: 2.8,
    selectivity: 2,
    notes: "Affordable European option.",
  },
  {
    name: "Charles University",
    country: "Czech Republic",
    levels: ["MBBS"],
    majors: ["medicine"],
    minGpa: 3.0,
    selectivity: 3,
    notes: "Popular for English-medium medical programs.",
  },
  {
    name: "University of Debrecen",
    country: "Hungary",
    levels: ["MBBS"],
    majors: ["medicine"],
    minGpa: 2.8,
    selectivity: 2,
    notes: "Affordable MBBS with English instruction.",
  },
  {
    name: "University of Pécs",
    country: "Hungary",
    levels: ["MBBS"],
    majors: ["medicine"],
    minGpa: 2.7,
    selectivity: 2,
    notes: "Good option for budget-conscious MBBS students.",
  },
];

const CollegePredictor = () => {
  const [gpa, setGpa] = useState("");
  const [scale, setScale] = useState("4.0");
  const [board, setBoard] = useState(boards[0]);
  const [residence, setResidence] = useState("India");
  const [targetCountry, setTargetCountry] = useState("");
  const [level, setLevel] = useState(levels[0]);
  const [major, setMajor] = useState("");
  const [budget, setBudget] = useState("");
  const [testScores, setTestScores] = useState("");
  const [intake, setIntake] = useState("");
  const [activities, setActivities] = useState<string[]>([]);
  const [extraContext, setExtraContext] = useState("");
  const [result, setResult] = useState<PredictorResult | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const parseNumber = (value: string) => {
    const match = value.match(/([0-9]+(?:\\.[0-9]+)?)/);
    return match ? Number(match[1]) : NaN;
  };

  const normalizeGpa = () => {
    const numeric = parseNumber(gpa);
    if (Number.isNaN(numeric)) return NaN;
    if (scale === "100") return Math.min(4, (numeric / 100) * 4);
    if (scale === "10.0") return Math.min(4, (numeric / 10) * 4);
    return Math.min(4, numeric);
  };

  const testBonus = () => {
    const lower = testScores.toLowerCase();
    let bonus = 0;
    const ielts = lower.match(/ielts\s*([0-9.]+)/);
    if (ielts) {
      const score = Number(ielts[1]);
      if (score >= 7.5) bonus += 0.08;
      else if (score >= 7) bonus += 0.05;
    }
    const toefl = lower.match(/toefl\s*([0-9]+)/);
    if (toefl) {
      const score = Number(toefl[1]);
      if (score >= 105) bonus += 0.08;
      else if (score >= 95) bonus += 0.05;
    }
    const gre = lower.match(/gre\s*([0-9]+)/);
    if (gre) {
      const score = Number(gre[1]);
      if (score >= 325) bonus += 0.1;
      else if (score >= 315) bonus += 0.06;
    }
    const gmat = lower.match(/gmat\s*([0-9]+)/);
    if (gmat) {
      const score = Number(gmat[1]);
      if (score >= 700) bonus += 0.1;
      else if (score >= 650) bonus += 0.05;
    }
    const sat = lower.match(/sat\s*([0-9]+)/);
    if (sat) {
      const score = Number(sat[1]);
      if (score >= 1450) bonus += 0.1;
      else if (score >= 1300) bonus += 0.05;
    }
    return bonus;
  };

  const normalizeCountries = (input: string, countryList: string[]) => {
    const aliases: Record<string, string> = {
      usa: "United States",
      us: "United States",
      america: "United States",
      "united states": "United States",
      uk: "United Kingdom",
      england: "United Kingdom",
      "united kingdom": "United Kingdom",
      uae: "United Arab Emirates",
      dubai: "United Arab Emirates",
    };
    const tokens = input
      .toLowerCase()
      .split(/,|\/+/)
      .flatMap((chunk) => chunk.split(" and "))
      .map((token) => token.trim())
      .filter(Boolean);
    const resolved = new Set<string>();
    tokens.forEach((token) => {
      if (aliases[token]) {
        resolved.add(aliases[token]);
        return;
      }
      const match = countryList.find((country) => country.toLowerCase().includes(token));
      if (match) resolved.add(match);
    });
    return Array.from(resolved);
  };

  const handlePredict = async () => {
    setError("");
    setIsLoading(true);

    const normalizedGpa = normalizeGpa();
    if (Number.isNaN(normalizedGpa)) {
      setIsLoading(false);
      setError("Please enter a valid GPA/percentage to generate a shortlist.");
      return;
    }

    const activityBonus = Math.min(activities.length, 6) * 0.03;
    const profileScore = normalizedGpa + activityBonus + testBonus();
    const majorLower = major.toLowerCase();

    const availableCountries = Array.from(new Set(universities.map((u) => u.country)));
    const preferredCountries = targetCountry
      ? normalizeCountries(targetCountry, availableCountries)
      : [];

    const filteredByLevel = universities.filter((university) => university.levels.includes(level));
    const filtered = filteredByLevel.filter((university) => {
      if (!preferredCountries.length) return true;
      return preferredCountries.includes(university.country);
    });
    const finalPool = filtered.length ? filtered : filteredByLevel;

    const ranked = finalPool.map((university) => {
      const majorMatch = majorLower
        ? university.majors.some((tag) => majorLower.includes(tag) || tag.includes(majorLower))
          ? 0.12
          : 0
        : 0.05;
      const adjustedScore = profileScore + majorMatch;
      const gap = adjustedScore - university.minGpa;
      let bucket: "safe" | "mid" | "reach" = "reach";
      if (gap >= 0.3) bucket = "safe";
      else if (gap >= 0.1) bucket = "mid";
      const reason = `${university.notes} Expected GPA around ${university.minGpa.toFixed(1)}+ on 4.0 scale.`;
      return { university, gap, bucket, reason };
    });

    const safe = ranked
      .filter((item) => item.bucket === "safe")
      .sort((a, b) => b.gap - a.gap)
      .slice(0, 5)
      .map((item) => ({
        name: item.university.name,
        country: item.university.country,
        reason: item.reason,
      }));

    const mid = ranked
      .filter((item) => item.bucket === "mid")
      .sort((a, b) => b.gap - a.gap)
      .slice(0, 5)
      .map((item) => ({
        name: item.university.name,
        country: item.university.country,
        reason: item.reason,
      }));

    const reach = ranked
      .filter((item) => item.bucket === "reach")
      .sort((a, b) => b.gap - a.gap)
      .slice(0, 5)
      .map((item) => ({
        name: item.university.name,
        country: item.university.country,
        reason: item.reason,
      }));

    const notes: string[] = [];
    if (board === "IB" || board === "Cambridge") {
      notes.push("IB/Cambridge applicants may need predicted grades and subject-specific requirements.");
    }
    if (!testScores.trim()) {
      notes.push("Add IELTS/TOEFL/GRE/GMAT scores for more accurate matching.");
    }
    if (!targetCountry.trim()) {
      notes.push("Add a target country to get more focused recommendations.");
    }

    const resultData: PredictorResult = {
      safe: safe.length ? safe : mid.slice(0, 3),
      mid: mid.length ? mid : reach.slice(0, 3),
      reach: reach.length ? reach : ranked.slice(0, 3).map((item) => ({
        name: item.university.name,
        country: item.university.country,
        reason: item.reason,
      })),
      notes,
    };

    setResult(resultData);
    setIsLoading(false);
  };

  const toggleActivity = (value: string) => {
    setActivities((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value],
    );
  };

  return (
    <section id="college-predictor" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <Badge className="w-fit bg-background/80 text-primary border border-border/60" variant="secondary">
              <Sparkles className="w-4 h-4 mr-2" />
              College Predictor
            </Badge>
            <h2 className="section-title">Find safe, mid, and reach universities instantly</h2>
            <p className="section-subtitle">
              Enter your GPA, board, and goals to get a smart shortlist. Our scoring model uses your profile, budget, and
              activities to suggest safe, mid, and reach options.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="surface-card p-4">
                <ShieldCheck className="w-6 h-6 text-primary mb-3" />
                <p className="font-semibold text-foreground">Safe schools</p>
                <p className="text-sm text-muted-foreground">High probability options that fit your profile.</p>
              </div>
              <div className="surface-card p-4">
                <Target className="w-6 h-6 text-primary mb-3" />
                <p className="font-semibold text-foreground">Mid schools</p>
                <p className="text-sm text-muted-foreground">Balanced choices with strong fit.</p>
              </div>
              <div className="surface-card p-4">
                <GraduationCap className="w-6 h-6 text-primary mb-3" />
                <p className="font-semibold text-foreground">Reach schools</p>
                <p className="text-sm text-muted-foreground">Ambitious options to aim high.</p>
              </div>
              <div className="surface-card p-4">
                <Sparkles className="w-6 h-6 text-primary mb-3" />
                <p className="font-semibold text-foreground">Expert review</p>
                <p className="text-sm text-muted-foreground">Counsellors confirm the final shortlist.</p>
              </div>
            </div>
          </div>

          <div className="surface-card p-6 lg:p-8 space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-foreground">GPA / Percentage</label>
                <Input value={gpa} onChange={(e) => setGpa(e.target.value)} placeholder="e.g., 3.5 or 85%" />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground">Scale</label>
                <Select value={scale} onValueChange={setScale}>
                  <SelectTrigger>
                    <SelectValue placeholder="Scale" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="4.0">4.0</SelectItem>
                    <SelectItem value="10.0">10.0</SelectItem>
                    <SelectItem value="100">100%</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground">Board</label>
                <Select value={board} onValueChange={setBoard}>
                  <SelectTrigger>
                    <SelectValue placeholder="Board" />
                  </SelectTrigger>
                  <SelectContent>
                    {boards.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground">Country of residence</label>
                <Input value={residence} onChange={(e) => setResidence(e.target.value)} placeholder="India" />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground">Target country</label>
                <Input value={targetCountry} onChange={(e) => setTargetCountry(e.target.value)} placeholder="USA, UK, Canada" />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground">Program level</label>
                <Select value={level} onValueChange={setLevel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>
                    {levels.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground">Intended major</label>
                <Input value={major} onChange={(e) => setMajor(e.target.value)} placeholder="Computer Science" />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground">Budget per year</label>
                <Input value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="e.g., 20,000 USD" />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground">Test scores</label>
                <Input value={testScores} onChange={(e) => setTestScores(e.target.value)} placeholder="IELTS 7.5, GRE 310" />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground">Intake</label>
                <Input value={intake} onChange={(e) => setIntake(e.target.value)} placeholder="Fall 2026" />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-foreground">Co-curriculars</label>
              <div className="grid sm:grid-cols-2 gap-2 mt-2">
                {coCurricularOptions.map((option) => (
                  <label key={option} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Checkbox
                      checked={activities.includes(option)}
                      onCheckedChange={() => toggleActivity(option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-foreground">Any extra context (optional)</label>
              <Textarea
                value={extraContext}
                placeholder="Example: 2 internships, national-level debate finalist"
                onChange={(event) => setExtraContext(event.target.value)}
                className="min-h-[80px]"
              />
            </div>

            <Button onClick={handlePredict} className="w-full" disabled={isLoading}>
              {isLoading ? "Generating shortlist..." : "Generate Shortlist"}
            </Button>

            {error && (
              <div className="flex items-start gap-2 text-sm text-destructive">
                <AlertTriangle className="w-4 h-4 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            {result && (
              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { label: "Safe", data: result.safe },
                    { label: "Mid", data: result.mid },
                    { label: "Reach", data: result.reach },
                  ].map((group) => (
                    <div key={group.label} className="rounded-2xl border border-border/60 bg-background/80 p-4">
                      <p className="font-semibold text-foreground mb-3">{group.label} schools</p>
                      <div className="space-y-3">
                        {group.data?.map((item, index) => (
                          <div key={`${item.name}-${index}`} className="text-sm">
                            <p className="font-semibold text-foreground">{item.name}</p>
                            <p className="text-xs text-muted-foreground">{item.country}</p>
                            <p className="text-xs text-muted-foreground mt-1">{item.reason}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                {result.notes?.length ? (
                  <div className="rounded-2xl border border-border/60 bg-muted/40 p-4">
                    <p className="text-sm font-semibold text-foreground">Advisor notes</p>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      {result.notes.map((note, idx) => (
                        <li key={`${note}-${idx}`}>• {note}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                <p className="text-xs text-muted-foreground">
                  These predictions are guidance only. Final shortlists should be confirmed with a counsellor.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegePredictor;
