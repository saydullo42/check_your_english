"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { levels } from "@/lib/levels";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 shrink-0 border-r border-gray-200 bg-gray-50 p-4">
      <Link href="/" className="mb-6 block text-xl font-bold">
        CheckEnglish
      </Link>
      <nav className="space-y-4">
        {levels.map((level) => (
          <div key={level.slug}>
            <p className="font-semibold">{level.label}</p>
            <ul className="mt-1 ml-3 space-y-1 border-l border-gray-300 pl-3">
              {level.topics.map((topic) => {
                const href = `/${level.slug}/${topic.slug}`;
                return (
                  <li key={topic.slug}>
                    <Link
                      href={href}
                      className={cn(
                        "block rounded px-2 py-1 text-sm hover:bg-gray-200",
                        pathname === href && "bg-blue-100 text-blue-700"
                      )}
                    >
                      {topic.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
