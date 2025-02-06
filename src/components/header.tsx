import { GlobeIcon, MailIcon } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { RESUME } from '~/constants';

interface LocationLinkProps {
  location: typeof RESUME.location;
  locationLink: typeof RESUME.locationLink;
}

function LocationLink({ location, locationLink }: LocationLinkProps) {
  return (
    <p className="max-w-md items-center text-pretty font-mono text-xs text-foreground">
      <a
        className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
        href={locationLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Location: ${location}`}
      >
        <GlobeIcon className="size-3" aria-hidden="true" />
        {location}
      </a>
    </p>
  );
}

interface SocialButtonProps {
  href: string;
  icon: React.ElementType;
  label: string;
}

function SocialButton({ href, icon: Icon, label }: SocialButtonProps) {
  return (
    <a
      className="hover:bg-selection hover:text-body rounded p-1 transition-colors"
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="size-4" aria-hidden="true" />
    </a>
  );
}

interface ContactButtonsProps {
  contact: typeof RESUME.contact;
  personalWebsiteUrl?: string;
}

function ContactButtons({ contact, personalWebsiteUrl }: ContactButtonsProps) {
  return (
    <div
      className="flex gap-x-1 pt-1 font-mono text-sm text-foreground/80 print:hidden"
      role="list"
      aria-label="Contact links"
    >
      {personalWebsiteUrl && (
        <SocialButton
          href={personalWebsiteUrl}
          icon={GlobeIcon}
          label="Personal website"
        />
      )}
      {contact.email && (
        <SocialButton
          href={`mailto:${contact.email}`}
          icon={MailIcon}
          label="Email"
        />
      )}
      {contact.social.map((social) => (
        <SocialButton
          key={social.name}
          href={social.url}
          icon={social.icon}
          label={social.name}
        />
      ))}
    </div>
  );
}

interface PrintContactProps {
  contact: typeof RESUME.contact;
  personalWebsiteUrl?: string;
}

function PrintContact({ contact, personalWebsiteUrl }: PrintContactProps) {
  return (
    <div
      className="hidden gap-x-2 font-mono text-sm text-foreground/80 print:flex print:text-[12px]"
      aria-label="Print contact information"
    >
      {personalWebsiteUrl && (
        <>
          <a
            className="underline hover:text-foreground/70"
            href={personalWebsiteUrl}
          >
            {new URL(personalWebsiteUrl).hostname}
          </a>
          <span aria-hidden="true">/</span>
        </>
      )}
      {contact.email && (
        <>
          <a
            className="underline hover:text-foreground/70"
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </a>
          <span aria-hidden="true">/</span>
        </>
      )}
      {contact.tel && (
        <a
          className="underline hover:text-foreground/70"
          href={`tel:${contact.tel}`}
        >
          {contact.tel}
        </a>
      )}
    </div>
  );
}

/**
 * Header component displaying personal information and contact details
 */
export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex-1 space-y-1.5">
        <h1 className="text-2xl font-bold" id="resume-name">
          {RESUME.name}
        </h1>
        <p
          className="max-w-md text-pretty font-mono text-sm text-foreground/80 print:text-[12px]"
          aria-labelledby="resume-name"
        >
          {RESUME.about}
        </p>

        <LocationLink
          location={RESUME.location}
          locationLink={RESUME.locationLink}
        />

        <ContactButtons
          contact={RESUME.contact}
          personalWebsiteUrl={RESUME.personalWebsiteUrl}
        />

        <PrintContact
          contact={RESUME.contact}
          personalWebsiteUrl={RESUME.personalWebsiteUrl}
        />
      </div>

      <Avatar className="size-28" aria-hidden="true">
        <AvatarImage
          alt={`${RESUME.name}'s profile picture`}
          src={RESUME.avatarUrl}
        />
        <AvatarFallback>{RESUME.initials}</AvatarFallback>
      </Avatar>
    </header>
  );
}
