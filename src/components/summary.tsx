import { Section } from '~/components/ui/section';
import { RESUME } from '~/constants';

interface AboutProps {
  summary: typeof RESUME.summary;
  className?: string;
}

/**
 * Summary section component
 * Displays a summary of professional experience and goals
 */
export function Summary({ summary, className }: AboutProps) {
  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="about-section">
        About
      </h2>
      <div
        className="font-mono text-pretty text-sm text-foreground/80 print:text-[12px]"
        aria-labelledby="about-section"
      >
        {summary}
      </div>
    </Section>
  );
}
