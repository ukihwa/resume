import { GithubIcon, MdiLinkedin, TwitterXIcon } from '~/components/ui/icons';

export const RESUME = {
  name: 'Hana Jeong',
  initials: 'HJ',
  location: 'Daegu, South Korea, KST',
  locationLink: 'https://www.google.com/maps/place/Daegu',
  about:
    '품질 높은 제품 구현을 위해 세세한 부분까지 신경 쓰는 풀스택 개발자입니다.',
  summary: (
    <>
      프론트엔드에 강점을 가진 풀스택 개발자로, React 기반 고성능 애플리케이션과
      Node.js 서버 개발을 전문으로 합니다. 실시간 협업 시스템 구축 경험과 함께
      기술 아키텍처 설계 및 원격 팀 관리 능력을 보유하고 있습니다.
    </>
  ),
  avatarUrl: 'https://avatars.githubusercontent.com/u/193446077?v=4',
  personalWebsiteUrl: 'https://ukihwa.github.io',
  contact: {
    email: 'ukihwa@gmail.com',
    tel: '+48530213401',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/ukihwa',
        icon: GithubIcon,
      },
      {
        name: 'X',
        url: 'https://x.com/ukihwa',
        icon: TwitterXIcon,
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/ukihwa/',
        icon: MdiLinkedin,
      },
    ],
  },
  education: [
    {
      school: 'Wrocław University of Technology',
      degree: "Bachelor's Degree in Control systems engineering and Robotics",
      start: '2007',
      end: '2010',
    },
  ],
  work: [
    {
      company: 'Film.io',
      link: 'https://film.io',
      badges: ['Remote', 'React', 'Next.js', 'TypeScript', 'Node.js'],
      title: 'Software Architect',
      // logo: ConsultlyLogo,
      start: '2024',
      end: null,
      description: (
        <>
          Leading technical architecture of a blockchain-based film funding
          platform.
          <ul className="list-inside list-disc">
            <li>
              Architecting migration from CRA to Next.js for improved
              performance, SEO, and DX
            </li>
            <li>
              Established release process enabling faster deployments and
              reliable rollbacks
            </li>
            <li>
              Implementing system-wide monitoring and security improvements
            </li>
          </ul>
        </>
      ),
    },
    {
      company: 'Parabol',
      link: 'https://parabol.co',
      badges: [
        'Remote',
        'React',
        'TypeScript',
        'Node.js',
        'GraphQL',
        'Tailwind CSS',
      ],
      title: 'Senior Full Stack Developer',
      // logo: ParabolLogo,
      start: '2021',
      end: '2024',
      description: (
        <>
          Senior developer and squad leader for an enterprise agile meeting
          platform.
          <ul className="list-inside list-disc">
            <li>
              Built design system with Tailwind CSS, improving development speed
              and time to market
            </li>
            <li>
              Implemented engineering practices: PR automation, code review
              guidelines, and workflows
            </li>
            <li>
              Open source contributions to Relay DevTools and React i18n tooling
            </li>
          </ul>
        </>
      ),
    },
    {
      company: 'Clevertech',
      link: 'https://clevertech.biz',
      badges: ['Remote', 'React', 'TypeScript', 'Node.js', 'Android', 'Kotlin'],
      title: 'Lead Android Developer → Full Stack Developer',
      // logo: ClevertechLogo,
      start: '2015',
      end: '2021',
      description: (
        <>
          Successfully transitioned from mobile to full-stack development while
          leading distributed teams.
          <ul className="list-inside list-disc">
            <li>
              Led frontend team at Evercast, building real-time platform
              supporting 30+ users per room with HD streaming and collaboration
              tools
            </li>
            <li>
              Developed offline-first Android app for DKMS, improving donor
              registration process
            </li>
            <li>
              Led development teams across multiple successful client projects
            </li>
          </ul>
        </>
      ),
    },
    {
      company: 'Jojo Mobile',
      link: 'https://bsgroup.eu/',
      badges: ['On Site', 'Android', 'Java', 'Kotlin'],
      title: 'Android Developer → Lead Android Developer',
      // logo: JojoMobileLogo,
      start: '2012',
      end: '2015',
      description: (
        <>
          First Android developer, grew and led a team of 15+ engineers while
          establishing engineering culture.
          <ul className="list-inside list-disc">
            <li>
              Developed apps for major Polish companies including LOT, Polskie
              Radio, and Agora
            </li>
            <li>Built and mentored high-performing mobile development team</li>
          </ul>
        </>
      ),
    },
    {
      company: 'Nokia Siemens Networks',
      link: 'https://www.nokia.com',
      badges: ['On Site', 'C/C++', 'LTE', 'Agile'],
      title: 'C/C++ Developer',
      // logo: NSNLogo,
      start: '2010',
      end: '2012',
      description:
        'Developed software for LTE base stations at enterprise scale, gaining strong fundamentals in software architecture, testing practices, and cross-team collaboration.',
    },
  ],
  skills: [
    'React/Next.js/Remix',
    'TypeScript',
    'Tailwind CSS',
    'Design Systems',
    'WebRTC',
    'WebSockets',
    'Node.js',
    'GraphQL',
    'Relay',
    'System Architecture',
    'Remote Team Leadership',
  ],
  projects: [
    {
      title: 'Monito',
      techStack: ['TypeScript', 'Next.js', 'Browser Extension', 'PostgreSQL'],
      description:
        'Browser extension for debugging web applications. Includes taking screenshots, screen recording, E2E tests generation and generating bug reports',
      // logo: MonitoLogo,
      link: {
        label: 'monito.dev',
        href: 'https://monito.dev/',
      },
    },
    {
      title: 'Consultly',
      techStack: [
        'TypeScript',
        'Next.js',
        'Vite',
        'GraphQL',
        'WebRTC',
        'Tailwind CSS',
        'PostgreSQL',
        'Redis',
      ],
      description:
        'Platform for online consultations with real-time video meetings and scheduling',
      // logo: ConsultlyLogo,
      link: {
        label: 'consultly.com',
        href: 'https://consultly.com/',
      },
    },
    {
      title: 'Minimalist CV',
      techStack: ['TypeScript', 'Next.js', 'Tailwind CSS'],
      description:
        'An open source minimalist, print friendly CV template with a focus on readability and clean design. >9k stars on GitHub',
      // logo: MonitoLogo,
      link: {
        label: 'Minimalist CV',
        href: 'https://github.com/BartoszJarocki/cv',
      },
    },
  ],
} as const;
