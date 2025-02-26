import BadgeList from '~/components/badge-list';
import { Card, CardContent, CardHeader } from '~/components/ui/card';
import { Section } from '~/components/ui/section';
import { RESUME } from '~/constants';

type WorkExperience = (typeof RESUME)['work'][number];

interface WorkPeriodProps {
  start: WorkExperience['start'];
  end?: WorkExperience['end'];
}

/**
 * Displays the work period in a consistent format
 */
function WorkPeriod({ start, end }: WorkPeriodProps) {
  return (
    <div
      className="text-gray-500 text-sm tabular-nums"
      aria-label={`Employment period: ${start} to ${end ?? 'Present'}`}
    >
      {start} - {end ?? 'Present'}
    </div>
  );
}

interface CompanyLinkProps {
  company: WorkExperience['company'];
  link: WorkExperience['link'];
}

/**
 * Renders company name with optional link
 */
function CompanyLink({ company, link }: CompanyLinkProps) {
  return (
    <a
      className="hover:underline"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${company} company website`}
    >
      {company}
    </a>
  );
}

interface WorkExperienceItemProps {
  work: WorkExperience;
}

/**
 * Individual work experience card component
 * Handles responsive layout for badges (mobile/desktop)
 */
function WorkExperienceItem({ work }: WorkExperienceItemProps) {
  const { company, link, badges, title, start, end, description } = work;

  return (
    <Card className="py-1 print:py-0">
      <CardHeader className="print:space-y-1">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none print:text-sm">
            <CompanyLink company={company} link={link} />
          </h3>
          <WorkPeriod start={start} end={end} />
        </div>

        <h4 className="font-mono text-sm font-semibold leading-none print:text-[12px]">
          {title}
        </h4>
        <BadgeList className="hidden gap-x-1 sm:inline-flex" badges={badges} />
      </CardHeader>

      <CardContent>
        <div className="mt-2 text-pretty text-xs text-foreground/80 print:mt-1 print:text-[10px]">
          {description}
        </div>
        <div className="mt-2">
          <BadgeList
            className="-mx-2 flex-wrap gap-1 sm:hidden"
            badges={badges}
          />
        </div>
      </CardContent>
    </Card>
  );
}

interface WorkExperienceProps {
  work: (typeof RESUME)['work'];
}

/**
 * Main work experience section component
 * Renders a list of work experiences in chronological order
 */
export function WorkExperience({ work }: WorkExperienceProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="work-experience">
        Work Experience
      </h2>
      <div
        className="space-y-4 print:space-y-0"
        role="feed"
        aria-labelledby="work-experience"
      >
        {work.map((item) => (
          <article key={`${item.company}-${item.start}`} role="article">
            <WorkExperienceItem work={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
