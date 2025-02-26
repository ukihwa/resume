import BadgeList from '~/components/badge-list';
import { Card, CardContent, CardHeader } from '~/components/ui/card';
import { Section } from '~/components/ui/section';
import { RESUME } from '~/constants';

type Education = (typeof RESUME)['education'][number];

interface EducationPeriodProps {
  start: Education['start'];
  end: Education['end'];
  badges?: Education['badges'];
}

/**
 * Displays the education period in a consistent format
 */
function EducationPeriod({ start, end }: EducationPeriodProps) {
  return (
    <div
      className="text-gray-500 text-sm tabular-nums"
      aria-label={`Period: ${start} to ${end}`}
    >
      {start} - {end}
    </div>
  );
}

interface EducationItemProps {
  education: Education;
}

/**
 * Individual education card component
 */
function EducationItem({ education }: EducationItemProps) {
  const { school, start, end, degree } = education;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3
            className="font-semibold leading-none"
            id={`education-${school.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {school}
          </h3>
          <EducationPeriod start={start} end={end} />
        </div>
        {education.badges.length > 0 && <BadgeList badges={education.badges} />}
      </CardHeader>
      <CardContent
        className="mt-2 text-pretty text-xs text-foreground/80 print:mt-1 print:text-[10px]"
        aria-labelledby={`education-${school
          .toLowerCase()
          .replace(/\s+/g, '-')}`}
      >
        {degree}
      </CardContent>
    </Card>
  );
}

interface EducationListProps {
  education: readonly Education[];
}

/**
 * Main education section component
 * Renders a list of education experiences
 */
export function Education({ education }: EducationListProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="education-section">
        Education
      </h2>
      <div
        className="space-y-4"
        role="feed"
        aria-labelledby="education-section"
      >
        {education.map((item) => (
          <article key={item.school} role="article">
            <EducationItem education={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
