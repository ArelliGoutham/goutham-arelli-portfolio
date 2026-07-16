import { BackendFoundation } from "@/components/BackendFoundation";
import { ContactPanel } from "@/components/ContactPanel";
import { Education } from "@/components/Education";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Hero } from "@/components/Hero";
import { McpDirection } from "@/components/McpDirection";
import { McpNexusCaseStudy } from "@/components/McpNexusCaseStudy";
import { P3pCaseStudy } from "@/components/P3pCaseStudy";
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
      <RevealSection delay={60}>
        <BackendFoundation />
      </RevealSection>
      <RevealSection delay={60}>
        <P3pCaseStudy />
      </RevealSection>
      <RevealSection delay={60}>
        <ExperienceTimeline />
      </RevealSection>
      <RevealSection delay={60}>
        <McpDirection />
      </RevealSection>
      <RevealSection delay={60}>
        <McpNexusCaseStudy />
      </RevealSection>
      <RevealSection delay={60}>
        <StackMatrix />
      </RevealSection>
      <RevealSection delay={60}>
        <Education />
      </RevealSection>
      <RevealSection delay={60}>
        <ContactPanel />
      </RevealSection>
    </Shell>
  );
}
