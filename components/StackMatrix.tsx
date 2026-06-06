import { stackGroups } from "@/content/stack";
import { SectionHeader } from "@/components/SectionHeader";

export function StackMatrix() {
  return (
    <section id="stack" className="border-b border-ink/15 py-14">
      <SectionHeader
        eyebrow="Stack"
        title="Tools grouped by how they show up in the work."
        description="The emphasis is backend delivery, reliability, and system design. MCP and agentic commerce are current exploration areas where I am applying that foundation."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {stackGroups.map((group) => (
          <article key={group.title} className="rounded-sm border border-ink/15 bg-panel p-5">
            <h3 className="font-display text-xl font-bold text-ink">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-sm border border-ink/15 bg-paper px-3 py-1.5 font-mono text-xs text-ink/72">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
