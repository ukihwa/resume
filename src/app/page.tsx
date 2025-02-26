import { Education } from '~/components/education';
import { Header } from '~/components/header';
import { Summary } from '~/components/summary';
import { WorkExperience } from '~/components/work-experience';
import { RESUME } from '~/constants';

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
        </div>
      </section>
    </main>
  );
}
