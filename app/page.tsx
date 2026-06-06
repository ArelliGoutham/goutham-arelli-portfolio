import { BackendFoundation } from "@/components/BackendFoundation";
import { ContactPanel } from "@/components/ContactPanel";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Hero } from "@/components/Hero";
import { McpDirection } from "@/components/McpDirection";
import { McpNexusCaseStudy } from "@/components/McpNexusCaseStudy";
import { RevealSection } from "@/components/RevealSection";
import { Shell } from "@/components/Shell";
import { SignalStrip } from "@/components/SignalStrip";
import { StackMatrix } from "@/components/StackMatrix";

export default function Home() {
  return (
    <Shell>
      <Hero />
      <RevealSection>
        <SignalStrip />
      </RevealSection>
      <RevealSection delay={80}>
        <BackendFoundation />
      </RevealSection>
      <RevealSection delay={80}>
        <McpDirection />
      </RevealSection>
      <RevealSection delay={80}>
        <McpNexusCaseStudy />
      </RevealSection>
      <RevealSection delay={80}>
        <ExperienceTimeline />
      </RevealSection>
      <RevealSection delay={80}>
        <StackMatrix />
      </RevealSection>
      <RevealSection delay={80}>
        <ContactPanel />
      </RevealSection>
    </Shell>
  );
}
