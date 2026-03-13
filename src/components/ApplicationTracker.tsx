import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, ClipboardList, RotateCcw, Link as LinkIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

interface Task {
  id: string;
  label: string;
  category: string;
  done: boolean;
  isCustom?: boolean;
}

const categories = [
  "Planning",
  "Tests",
  "Documents",
  "Applications",
  "Finance",
  "Visa",
  "Pre-Departure",
];

const defaultTasks: Task[] = [
  { id: "plan-intake", label: "Finalize intake + target countries", category: "Planning", done: false },
  { id: "shortlist", label: "Shortlist 8-12 universities", category: "Planning", done: false },
  { id: "profile", label: "Profile evaluation with counsellor", category: "Planning", done: false },
  { id: "ielts", label: "Register IELTS/TOEFL/PTE", category: "Tests", done: false },
  { id: "gre", label: "Plan GRE/GMAT if required", category: "Tests", done: false },
  { id: "transcripts", label: "Collect transcripts + marksheets", category: "Documents", done: false },
  { id: "passport", label: "Passport validity check", category: "Documents", done: false },
  { id: "sop", label: "Draft SOP", category: "Documents", done: false },
  { id: "loi", label: "Prepare LOI", category: "Documents", done: false },
  { id: "essay", label: "Write personal essays", category: "Documents", done: false },
  { id: "lor", label: "Arrange 2-3 LORs", category: "Documents", done: false },
  { id: "resume", label: "Update resume/CV", category: "Documents", done: false },
  { id: "app-forms", label: "Fill university application forms", category: "Applications", done: false },
  { id: "fees", label: "Pay application fees", category: "Applications", done: false },
  { id: "offer", label: "Track offers + accept final university", category: "Applications", done: false },
  { id: "scholarship", label: "Apply for scholarships", category: "Finance", done: false },
  { id: "loan", label: "Education loan / funding approval", category: "Finance", done: false },
  { id: "bank", label: "Prepare financial documents", category: "Finance", done: false },
  { id: "visa-file", label: "Visa file review", category: "Visa", done: false },
  { id: "biometrics", label: "Book biometrics appointment", category: "Visa", done: false },
  { id: "insurance", label: "Student health insurance", category: "Pre-Departure", done: false },
  { id: "accommodation", label: "Finalize accommodation", category: "Pre-Departure", done: false },
  { id: "flight", label: "Book flight tickets", category: "Pre-Departure", done: false },
];

const storageKey = "goglobal-application-tracker";

const ApplicationTracker = () => {
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);
  const [newTaskLabel, setNewTaskLabel] = useState("");
  const [newCategory, setNewCategory] = useState(categories[0]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let next = defaultTasks;
    const stored = window.localStorage.getItem(storageKey);
    if (stored) {
      next = JSON.parse(stored);
    }
    const params = new URLSearchParams(window.location.search);
    const shared = params.get("tracker");
    if (shared) {
      try {
        const decoded = decodeURIComponent(atob(shared));
        next = JSON.parse(decoded);
        toast.success("Tracker loaded from shared link.");
      } catch {
        toast.error("Shared tracker link is invalid.");
      }
    }
    setTasks(next);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(storageKey, JSON.stringify(tasks));
  }, [tasks]);

  const stats = useMemo(() => {
    const completed = tasks.filter((task) => task.done).length;
    const total = tasks.length;
    return {
      completed,
      total,
      remaining: total - completed,
      progress: total === 0 ? 0 : Math.round((completed / total) * 100),
    };
  }, [tasks]);

  const groupedTasks = useMemo(() => {
    return categories
      .map((category) => ({
        category,
        tasks: tasks.filter((task) => task.category === category),
      }))
      .filter((group) => group.tasks.length > 0);
  }, [tasks]);

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              done: !task.done,
            }
          : task,
      ),
    );
  };

  const removeTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const addTask = () => {
    const label = newTaskLabel.trim();
    if (!label) return;

    setTasks((prev) => [
      ...prev,
      {
        id: `custom-${Date.now()}`,
        label,
        category: newCategory,
        done: false,
        isCustom: true,
      },
    ]);
    setNewTaskLabel("");
  };

  const resetTasks = () => {
    setTasks(defaultTasks);
  };

  const handleCopyShareLink = async () => {
    if (typeof window === "undefined") return;
    try {
      const encoded = btoa(encodeURIComponent(JSON.stringify(tasks)));
      const url = `${window.location.origin}${window.location.pathname}?tracker=${encoded}#application-tracker`;
      await navigator.clipboard.writeText(url);
      toast.success("Share link copied. Send it to the student.");
    } catch {
      toast.error("Could not copy the share link.");
    }
  };

  return (
    <section id="application-tracker" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 right-0 w-[40%] bg-gradient-to-l from-primary/10 to-transparent" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <Badge className="w-fit bg-accent/15 text-accent" variant="secondary">
              <ClipboardList className="w-4 h-4 mr-2" />
              Application Tracker
            </Badge>
            <h2 className="section-title">Know exactly what is left to complete</h2>
            <p className="section-subtitle">
              Students can track every step in the process, from LOI and essays to visa and pre-departure tasks. Your
              counsellor can review the checklist and guide the next steps.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="surface-card p-4">
                <CheckCircle2 className="w-6 h-6 text-primary mb-3" />
                <p className="font-semibold text-foreground">Progress visibility</p>
                <p className="text-sm text-muted-foreground">See what is done and what is still pending.</p>
              </div>
              <div className="surface-card p-4">
                <CheckCircle2 className="w-6 h-6 text-primary mb-3" />
                <p className="font-semibold text-foreground">Document clarity</p>
                <p className="text-sm text-muted-foreground">Clear lists for SOP, LOI, essays, and proofs.</p>
              </div>
              <div className="surface-card p-4">
                <CheckCircle2 className="w-6 h-6 text-primary mb-3" />
                <p className="font-semibold text-foreground">Timeline ready</p>
                <p className="text-sm text-muted-foreground">Stay on schedule across intakes.</p>
              </div>
              <div className="surface-card p-4">
                <CheckCircle2 className="w-6 h-6 text-primary mb-3" />
                <p className="font-semibold text-foreground">Custom tasks</p>
                <p className="text-sm text-muted-foreground">Add anything specific to a university or country.</p>
              </div>
            </div>
          </div>

          <div className="surface-card p-6 lg:p-8">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="text-sm text-muted-foreground">Progress</p>
                <p className="text-2xl font-semibold text-foreground">
                  {stats.completed} of {stats.total} done
                </p>
                <p className="text-sm text-muted-foreground">{stats.remaining} tasks remaining</p>
              </div>
              <div className="flex flex-col gap-2">
                <Button variant="outline" size="sm" onClick={handleCopyShareLink} className="gap-2">
                  <LinkIcon className="w-4 h-4" />
                  Share
                </Button>
                <Button variant="outline" size="sm" onClick={resetTasks} className="gap-2">
                  <RotateCcw className="w-4 h-4" />
                  Reset
                </Button>
              </div>
            </div>

            <Progress value={stats.progress} className="h-3" />
            <p className="mt-2 text-xs text-muted-foreground">{stats.progress}% complete</p>

            <div className="mt-6 space-y-6 max-h-[360px] overflow-y-auto pr-2">
              {groupedTasks.map((group) => (
                <div key={group.category} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-foreground">{group.category}</p>
                    <Badge variant="outline" className="text-[10px]">
                      {group.tasks.filter((task) => task.done).length}/{group.tasks.length}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    {group.tasks.map((task) => (
                      <div
                        key={task.id}
                        className="flex items-start justify-between gap-3 rounded-2xl border border-border/60 bg-background/70 px-4 py-3"
                      >
                        <label className="flex items-start gap-3 text-sm text-foreground cursor-pointer">
                          <Checkbox
                            checked={task.done}
                            onCheckedChange={() => toggleTask(task.id)}
                            className="mt-1"
                          />
                          <span className={task.done ? "line-through text-muted-foreground" : ""}>
                            {task.label}
                          </span>
                        </label>
                        {task.isCustom && (
                          <button
                            type="button"
                            onClick={() => removeTask(task.id)}
                            className="text-xs text-muted-foreground hover:text-primary"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-border/60 pt-4 space-y-3">
              <p className="text-sm font-semibold text-foreground">Add a custom task</p>
              <div className="grid sm:grid-cols-[1fr_150px_auto] gap-3">
                <Input
                  value={newTaskLabel}
                  onChange={(event) => setNewTaskLabel(event.target.value)}
                  placeholder="e.g., Portfolio review"
                />
                <Select value={newCategory} onValueChange={setNewCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button onClick={addTask}>Add</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationTracker;
