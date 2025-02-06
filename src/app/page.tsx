import { Header } from '~/components/header';
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
        className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4"
        aria-label="Resume Content"
      >
        <Header />
      </section>
    </main>
  );
}
