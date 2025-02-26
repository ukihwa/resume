import { GithubIcon, MdiLinkedin, TwitterXIcon } from '~/components/ui/icons';
import { HappyedutechLogo, PlikaLogo } from '~/images/logos';

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
      school: '엘리스 SW Engineer 트랙 1기',
      badges: ['React', 'TypeScript', 'Styled Components', 'Redux', 'Node.js'],
      degree: (
        <>
          <ul className="list-inside list-disc">
            <li className="list-item">
              4개월 동안 웹 프론트엔드 기술 집중 학습
            </li>
            <li className="list-item">
              웹 표준, 웹 접근성, 크로스 브라우징에 대한 이해
            </li>
            <li className="list-item">자바스크립트 동작 원리 심화 학습</li>
            <li className="list-item">
              React.js 및 Node.js를 활용한 웹 서비스 개발 경험
            </li>
            <li className="list-item">Git을 이용한 협업 및 코드 관리 경험</li>
            <li className="list-item">
              Agile Scrum 방법론 적용한 프로젝트 진행
            </li>
          </ul>
        </>
      ),
      start: '2021.10',
      end: '2022.02',
    },
    {
      school: '대구가톨릭대학교 (4년제)',
      badges: [],
      degree: '일어일문전공',
      start: '2012.03',
      end: '2018.02',
    },
  ],
  work: [
    {
      company: '(주)해피에듀테크',
      link: 'https://www.happyedutech.com/',
      badges: [
        'Remote',
        'React',
        'Next.js',
        'TypeScript',
        'Nest.js',
        'Flutter',
      ],
      title: 'Frontend Lead & Cross-Platform App Developer',
      logo: HappyedutechLogo,
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
      link: 'https://plika.land/ko',
      badges: ['Remote', 'React', 'Next.js', 'TypeScript', 'Java', 'Flutter'],
      title: 'Frontend Lead & Cross-Platform App Developer',
      logo: PlikaLogo,
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
    'React/Next.js/Remix/Astro',
    'TypeScript',
    'Tailwind CSS',
    'Emotion',
    'Design Systems',
    'WebSockets',
    'Zustand',
    'Redux',
    'Jotai',
    'TanStack Query',
    'Nest.js',
    'Java',
    'System Architecture',
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
