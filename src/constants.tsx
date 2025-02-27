import { GithubIcon, InstagramIcon } from '~/components/ui/icons';
import {
  HappyedutechLogo,
  MathtutorLogo,
  PlikalandLogo,
  PlikaLogo,
} from '~/images/logos';

export const RESUME = {
  name: 'Hana Jeong',
  initials: 'HJ',
  location: 'Daegu, South Korea, KST',
  locationLink: 'https://www.google.com/maps/place/Daegu',
  about:
    'Detail-oriented Full Stack Engineer dedicated to building high-quality products.',
  summary: (
    <>
      사용자와 자연스럽게 상호작용하는 경험을 만들고, 복잡한 것을 단순하고
      직관적으로 개선하는 것에 열정을 가진 풀스택 개발자입니다.
      <br /> React 기반의 고성능 애플리케이션과 Nest.js 서버 개발을 전문으로
      하며, 실시간 협업 시스템 구축 및 기술 아키텍처 설계 경험을 보유하고
      있습니다. 이타성의 자기계발을 실천하며, 주변 사람들에게 도움을 주는 것에서
      큰 동기를 얻습니다. 세상의 지식을 내 것으로 만들어 더 나은 서비스를 만드는
      데 기여하고자 합니다.
    </>
  ),
  avatarUrl:
    'https://www.saramin.co.kr/zf_user/persons/picture?idx=21398293|87b8fdeb20b3a5c4182d4673e6561d54449b5666dcef784d775b1c8bac7d0dfd',
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
        name: 'Instagram',
        url: 'https://instagram.com/ukihwa',
        icon: InstagramIcon,
      },
      // {
      //   name: 'X',
      //   url: 'https://x.com/ukihwa',
      //   icon: TwitterXIcon,
      // },
      // {
      //   name: 'LinkedIn',
      //   url: 'https://www.linkedin.com/in/ukihwa/',
      //   icon: MdiLinkedin,
      // },
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
      link: 'https://plika.io',
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
      title: '매쓰튜터',
      techStack: ['React', 'Flutter', 'Firebase', 'NestJs', 'MySQL', 'AWS'],
      description:
        'AI 기반 수학 문제 풀이 서비스, 매쓰튜터. 사진만 찍으면 AI가 단계별 풀이, 개념 설명, 유사 문제, 개념 영상, 전자칠판 편집을 제공합니다. 새로운 UI와 기능을 적용했습니다.',
      logo: MathtutorLogo,
      link: {
        label: 'mathtutor',
        href: 'https://play.google.com/store/apps/details?id=kr.mathtutor&hl=ko',
      },
    },
    {
      title: 'PLIKALAND',
      techStack: [
        'TypeScript',
        'Next.js',
        'Spring Boot',
        'MariaDB',
        'Three.js',
        'WebGL',
        'Unity',
        'WebSocket',
        'Supabase',
      ],
      description:
        '3D 가상 공간을 구축하고 소통할 수 있는 메타버스 플랫폼. 3D 오브젝트 업로드 및 커스터마이징, 인벤토리, 포털 기능을 제공하며, 실시간 채팅과 음성·영상 대화를 지원합니다. WebGL 로딩 최적화, Next.js 마이그레이션, CI/CD 자동화를 통해 개발 생산성을 높였습니다.',
      logo: PlikalandLogo,
      link: {
        label: 'plika.land',
        href: 'https://plika.land/ko',
      },
    },
    {
      title: 'SHADE',
      techStack: [
        'TypeScript',
        'Next.js',
        'Flutter',
        'Riverpod',
        'WebSocket',
        'Supabase',
      ],
      description:
        '건설 현장의 문서를 효율적으로 관리하는 서비스. 출퇴근 및 인적 관리, 문서 작성 및 업로드, 관리자 결재, 서류 보관 및 보안 기능을 제공합니다. MVVVM 패턴과 Riverpod을 활용해 생산성을 높였으며, Supabase를 기반으로 사용자 인증 시스템을 구축했습니다.',
      // logo: ShadeLogo,
      link: {
        label: 'shade.so',
        href: 'https://shade.so',
      },
    },
    {
      title: '관악S밸리',
      techStack: [
        'TypeScript',
        'Next.js',
        'Spring Boot',
        'MariaDB',
        'Three.js',
        'WebGL',
        'Unity',
        'WebSocket',
      ],
      description:
        '관악S밸리를 위한 전용 3D 가상 공간 서비스. 3D 맵 뷰어, 가상 공간 및 콘텐츠 관리, 실시간 채팅, 음성·영상 대화를 지원하며, 3D 오브젝트 업로드 및 커스터마이징 기능을 제공합니다. Redux와 RTK Query를 활용해 상태 관리와 데이터 패칭을 최적화했으며, 유지보수와 CS 이슈 대응을 강화했습니다.',
      logo: PlikalandLogo,
      link: {
        label: 'svalley.plika.land',
        href: 'https://svalley.plika.land/',
      },
    },
    {
      title: 'CLICKSPACE',
      techStack: [
        'TypeScript',
        'Next.js',
        'Spring Boot',
        'MariaDB',
        'Three.js',
        'WebGL',
        'Unity',
        'WebSocket',
      ],
      description:
        '숙명아이를 위한 전용 3D 가상 공간 서비스. 3D 가상 공간 및 콘텐츠 관리, 실시간 채팅, 음성·영상 대화, 3D 오브젝트 업로드 및 커스터마이징 기능을 제공합니다. Headless UI를 활용해 애니메이션 트랜지션을 개선하고, WebGL 로딩 최적화 및 Redux, RTK Query를 활용한 효율적인 상태 관리와 데이터 패칭을 구현했습니다.',
      logo: PlikalandLogo,
      link: {
        label: 'clickspace.kr',
        href: 'https://clickspace.kr',
      },
    },
  ],
} as const;
