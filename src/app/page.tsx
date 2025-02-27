import { Metadata } from 'next';

import { CommandMenu } from '~/components/command-menu';
import { Education } from '~/components/education';
import { Header } from '~/components/header';
import { Projects } from '~/components/projects';
import { Skills } from '~/components/skills';
import { Summary } from '~/components/summary';
import { WorkExperience } from '~/components/work-experience';
import { RESUME } from '~/constants';

export const metadata: Metadata = {
  title: `${RESUME.name} - Resume`,
  description: RESUME.about,
  openGraph: {
    title: `${RESUME.name} - Resume`,
    description: RESUME.about,
    type: 'profile',
    locale: 'ko_KR',
    images: [
      {
        url: 'https://cv.jarocki.me/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${RESUME.name}'s profile picture`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${RESUME.name} - Resume`,
    description: RESUME.about,
    images: ['https://cv.jarocki.me/opengraph-image'],
  },
};

/**
 * Transform social links for command menu
 */
function getCommandMenuLinks() {
  const links = [];

  if (RESUME.personalWebsiteUrl) {
    links.push({
      url: RESUME.personalWebsiteUrl,
      title: 'Personal Website',
    });
  }

  return [
    ...links,
    ...RESUME.contact.social.map((socialMediaLink) => ({
      url: socialMediaLink.url,
      title: socialMediaLink.name,
    })),
  ];
}

export default function Home() {
  return (
    <main
      className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-11"
      id="main-content"
    >
      <div className="sr-only">
        <h1>{RESUME.name}&apos;s Resume</h1>
      </div>

      <section
        className="bg-white mx-auto w-full max-w-2xl space-y-8 print:space-y-4"
        aria-label="Resume Content"
      >
        <Header />

        <div className="space-y-8 print:space-y-4">
          <Summary summary={RESUME.summary} />
          <WorkExperience work={RESUME.work} />
          <Education education={RESUME.education} />
          <Skills skills={RESUME.skills} />
          <Projects projects={RESUME.projects} />
        </div>
      </section>

      <nav className="print:hidden" aria-label="Quick navigation">
        <CommandMenu links={getCommandMenuLinks()} />
      </nav>
    </main>
  );
}
