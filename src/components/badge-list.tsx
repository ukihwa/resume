import { Badge } from '~/components/ui/badge';
import { cn } from '~/lib/utils';

type Badges = readonly string[];

interface BadgeListProps {
  className?: string;
  badges: Badges;
}

export default function BadgeList({ className, badges }: BadgeListProps) {
  if (badges.length === 0) return null;

  return (
    <ul
      className={cn('inline-flex list-none gap-x-1 p-0', className)}
      aria-label="Technologies used"
    >
      {badges.map((badge) => (
        <li key={badge}>
          <Badge
            variant="secondary"
            className="align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
          >
            {badge}
          </Badge>
        </li>
      ))}
    </ul>
  );
}
