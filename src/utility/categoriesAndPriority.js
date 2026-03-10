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
      "bg-green-500/15 border-green-500/40 text-green-300 hover:bg-green-500/10 hover:border-green-500/50 hover:text-green-200",
    dot: "bg-green-500",
    checkedStyle: "bg-green-500 border-green-400 text-white",
  },
  {
    label: "Medium",
    value: "medium",
    uncheckedStyle:
      "bg-yellow-500/15 border-yellow-500/40 text-yellow-300 hover:bg-yellow-500/10 hover:border-yellow-500/50 hover:text-yellow-200",
    dot: "bg-yellow-500",
    // checked state — full solid color for the button box
    checkedStyle: "bg-yellow-500 border-yellow-400 text-black",
  },
  {
    label: "High",
    value: "high",
    uncheckedStyle:
      "bg-pink-600/15 border-pink-600/40 text-pink-300 hover:bg-pink-600/10 hover:border-pink-600/50 hover:text-pink-200",
    dot: "bg-pink-600",
    checkedStyle: "bg-pink-600 border-pink-500 text-white",
  },
];
