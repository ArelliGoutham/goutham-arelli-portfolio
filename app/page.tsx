import { BackendFoundation } from "@/components/BackendFoundation";
import { ContactPanel } from "@/components/ContactPanel";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Hero } from "@/components/Hero";
import { McpDirection } from "@/components/McpDirection";
import { McpNexusCaseStudy } from "@/components/McpNexusCaseStudy";
import { Shell } from "@/components/Shell";
import { SignalStrip } from "@/components/SignalStrip";
import { StackMatrix } from "@/components/StackMatrix";

export default function Home() {
  return (
    <Shell>
      <Hero />
      <SignalStrip />
      <BackendFoundation />
      <McpDirection />
      <McpNexusCaseStudy />
      <ExperienceTimeline />
      <StackMatrix />
      <ContactPanel />
    </Shell>
  );
}
