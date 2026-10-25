import { notFound } from "next/navigation";
import { levels } from "@/lib/levels";

export default async function TopicPage({
  params,
}: {
  params: Promise<{ level: string; topic: string }>;
}) {
  const { level, topic } = await params;
  const l = levels.find((x) => x.slug === level);
  const t = l?.topics.find((x) => x.slug === topic);
  if (!l || !t) notFound();

  return (
    <div>
      <p className="text-sm text-gray-500">{l.label}</p>
      <h1 className="text-3xl font-bold">{t.label}</h1>
    </div>
  );
}
