export type Topic = { slug: string; label: string };
export type Level = { slug: string; label: string; topics: Topic[] };

const topics: Topic[] = [
  { slug: "grammar", label: "Grammar" },
  { slug: "reading", label: "Reading" },
  { slug: "vocabulary", label: "Vocabulary" },
  { slug: "listening", label: "Listening" },
  { slug: "exercise", label: "Exercise" },
];

export const levels: Level[] = [
  { slug: "beginner", label: "Beginner", topics },
  { slug: "elementary", label: "Elementary", topics },
  { slug: "intermediate", label: "Intermediate", topics },
  { slug: "advanced", label: "Advanced", topics },
];
