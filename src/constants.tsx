import { GithubIcon, MdiLinkedin, TwitterXIcon } from '~/components/ui/icons';

export const RESUME = {
  name: 'Hana Jeong',
  initials: 'HJ',
  location: 'Daegu, South Korea, KST',
  locationLink: 'https://www.google.com/maps/place/Daegu',
  about:
    'Detail-oriented Full Stack Engineer dedicated to building high-quality products.',
  summary: (
    <>
      프론트엔드에 강점을 가진 풀스택 개발자로, React 기반 고성능 애플리케이션과
      Nest.js 서버 개발을 전문으로 합니다. 실시간 협업 시스템 구축 경험과 함께
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
      company: '(주)해피에듀테크',
      link: 'https://film.io',
      badges: [
        'Remote',
        'React',
        'Next.js',
        'TypeScript',
        'Nest.js',
        'Flutter',
      ],
      title: 'Frontend Lead & Cross-Platform App Developer',
      // logo: ConsultlyLogo,
      start: '2024.05',
      end: '2025.05',
      description: (
        <>
          <ul className="list-inside list-disc">
            <li className="list-item">
              관리자 웹 애플리케이션 UI/UX 디자인 및 프론트엔드 개발
            </li>
            <li className="list-item">
              AI 디지털 교과서 웹 애플리케이션 개발 - 크로스플랫폼 애플리케이션
              (매쓰튜터 프로젝트) 디자인 및 개발
            </li>
            <li className="list-item">
              UI/UX 개발: Tailwind CSS를 활용한 디자인 시스템 적용 및 최적화
            </li>
            <li className="list-item">최신 프레임워크 및 라이브러리 활용</li>
            <li className="list-item">상태 관리 및 데이터 패칭</li>
            <li className="list-item">
              협업 및 코드 품질 관리: 모듈화 및 성능 최적화
            </li>
          </ul>
        </>
      ),
    },
    {
      company: '(주)플리카',
      link: 'https://parabol.co',
      badges: ['Remote', 'React', 'Next.js', 'TypeScript', 'Java', 'Flutter'],
      title: 'Frontend Lead & Cross-Platform App Developer',
      // logo: ParabolLogo,
      start: '2022.07',
      end: '2024.04',
      description: (
        <>
          <ul className="list-inside list-disc">
            <li className="list-item">
              플리카랜드 웹 애플리케이션 UI/UX 디자인 및 프론트엔드 개발
            </li>
            <li className="list-item">
              MVP 개발: 크로스플랫폼 애플리케이션 (SHADE 프로젝트) 디자인 및
              개발
            </li>
            <li className="list-item">
              외부 프로젝트 개발: 기업 웹 애플리케이션 디자인 및 개발
              (CLICKSPACE, 관악S밸리 등)
            </li>
            <li className="list-item">
              UI/UX 개선: 주요 페이지 사용자 경험 및 인터페이스 개선
            </li>
            <li className="list-item">
              백엔드 연동 경험: Supabase, Spring Boot, Node.js, MariaDB
            </li>
          </ul>
        </>
      ),
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
