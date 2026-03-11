// Category color config — paste this wherever you define categories
export const CATEGORIES = [
  {
    label: "Personal",
    // Warm rose — contrasts the cool purple theme
    style:
      "bg-rose-500/15 border-rose-500/40 text-rose-300 hover:bg-rose-500/20 border-rose-500/50",
    dot: "bg-rose-400",
    badge: "bg-rose-500/20 text-rose-300 border border-rose-500/30",
  },
  {
    label: "Work",
    // Cyan/teal — professional, pops on dark slate
    style: "bg-cyan-500/15 border-cyan-500/40 text-cyan-300",
    dot: "bg-cyan-400",
    badge: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",
  },
  {
    label: "Health",
    // Emerald green — life/vitality energy
    style: "bg-emerald-500/15 border-emerald-500/40 text-emerald-300",
    dot: "bg-emerald-400",
    badge: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
  },
  {
    label: "Financial",
    // Amber/golden — knowledge and curiosity
    style: "bg-amber-500/15 border-amber-500/40 text-amber-300",
    dot: "bg-amber-400",
    badge: "bg-amber-500/20 text-amber-300 border border-amber-500/30",
  },
  {
    label: "others",
    // Fuchsia — sits inside your purple theme but distinct enough
    style: "bg-fuchsia-500/15 border-fuchsia-500/40 text-fuchsia-300",
    dot: "bg-fuchsia-400",
    badge: "bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30",
  },
];

export const PRIORITIES = [
  {
    label: "Low",
    value: "low",
    uncheckedStyle:
      "bg-emerald-500/5 border-emerald-500/40 text-emerald-300 hover:bg-emerald-400/10 hover:border-emerald-400/50 hover:text-emerald-200",
    dot: "bg-emerald-500",
    checkedStyle: "bg-emerald-700 border-emerald-700 text-white hover:bg-emerald-800 hover:border-emerald-800 hover:-translate-y-0.5",
  },
  {
    label: "Medium",
    value: "medium",
    uncheckedStyle:
      "bg-amber-400/5 border-amber-400/40 text-amber-300 hover:bg-amber-500/10 hover:border-amber-500/50 hover:text-amber-200",
    dot: "bg-amber-500",
    // checked state — full solid color for the button box
    checkedStyle: "bg-amber-500 border-amber-400 text-black hover:bg-amber-600 hover:border-amber-500 hover:-translate-y-0.5",
  },
  {
    label: "High",
    value: "high",
    uncheckedStyle:
      "bg-rose-600/5 border-rose-600/40 text-rose-300 hover:bg-rose-600/10 hover:border-rose-600/50 hover:text-rose-200",
    dot: "bg-rose-600",
    checkedStyle: "bg-rose-600 border-rose-500 text-white hover:bg-rose-700 hover:border-rose-600 hover:-translate-y-0.5",
  },
];
