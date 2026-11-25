import type { ProcessStep, Profile, Project, ProjectDetail, ProjectProcess } from '../types'

const note = (label: string) => `TODO: short note about ${label.toLowerCase()}.`

const processStep = (slug: string, key: string, label: string): ProcessStep => ({
  description: note(label),
  images: [
    {
      src: `/images/projects/${slug}/design-process/${key}-1.jpg`,
      alt: `${label} process image for ${slug}`,
      width: 1200,
      height: 800,
    },
  ],
})

const textOnlyStep = (label: string): ProcessStep => ({
  description: note(label),
  images: [],
})

const namedStep = (src: string, alt: string, width: number, height: number, label: string): ProcessStep => ({
  description: note(label),
  images: [{ src, alt, width, height }],
})

const emptyDetail = (
  slug: string,
  role: string,
  timeline: string,
  tools: string[],
  processOverride?: Partial<ProjectProcess>,
): ProjectDetail => ({
  description: 'TODO: project description.',
  timeline,
  role,
  overview: 'TODO: project overview.',
  tools,
  problem: 'TODO: the problem.',
  researchAndSolution: 'TODO: research and approach.',
  process: {
    ia: processStep(slug, 'ia', 'Information architecture'),
    designSystem: processStep(slug, 'design-system', 'Design system'),
    loFi: processStep(slug, 'lofi', 'Low-fidelity wireframes'),
    hiFi: processStep(slug, 'hifi', 'High-fidelity design'),
    prototyping: processStep(slug, 'prototyping', 'Prototyping'),
    ...processOverride,
  },
  learnings: 'TODO: what I learned.',
})

export const profile: Profile = {
  name: 'Aulia Fatika Rahmadani',
  role: 'UI/UX Designer',
  location: 'Semarang, Central Java, Indonesia',
  coordinates: 'LAT -6.99  LON 110.42',
  status: 'SYS/READY',
  photo: {
    src: '/images/profile/me.jpg',
    alt: 'Portrait of Aulia Fatika Rahmadani, UI/UX Designer',
    width: 2359,
    height: 3145,
  },
  intro: 'I map user flows and build prototypes you can click.',
  bio: [
    'A Computer Engineering Technology graduate from Politeknik Negeri Semarang with UI/UX experience from internships and competitions. I map user flows, sketch wireframes, and build interactive prototypes.',
    'I build wireframes and prototypes in Figma. I use AI agents to automate repetitive design work and turn visual concepts into working interfaces.',
  ],
  experiences: [
    {
      company: 'CV. Techarea Indonesia Jaya',
      role: 'UI/UX Designer Intern',
      period: 'Jul 2025 – Dec 2025',
      highlights: [
        'Designed and delivered UI/UX solutions for more than 50 digital pages across desktop and mobile in Figma, from low-fidelity wireframes to high-fidelity prototypes.',
        'Built and maintained a design system with UI components, color palettes, typography, and reusable assets.',
        'Worked with developers and project managers across 5 active client projects to speed up design handoff.',
      ],
    },
  ],
  skills: {
    design: [
      'User Research',
      'User Flow',
      'Wireframing Lo-Fi & Hi-Fi',
      'Design System',
      'Prototyping',
      'AI-Assisted Design',
      'Usability Testing',
    ],
    soft: ['Problem Solving', 'Attention to Detail', 'Time Management', 'Cross-Functional Collaboration', 'Fast Learner'],
  },
  tools: ['Figma', 'FigJam', 'OpenCode', 'Adobe Illustrator', 'Canva', 'Notion'],
  education: {
    school: 'Semarang State Polytechnic',
    degree: 'Diploma 4, Computer Engineering Technology',
    gpa: '3.81 / 4.00',
  },
  contact: {
    email: 'auliafatika@outlook.com',
    linkedin: 'https://linkedin.com/in/auliafatika',
    behance: null,
    dribbble: null,
  },
}

export const projects: Project[] = [
  {
    slug: 'kolaborasi',
    title: 'KOLABORASI',
    summary: 'A corporate website redesign with responsive wireframes and components for desktop and mobile.',
    showcase: {
      src: '/images/projects/kolaborasi/showcase.jpg',
      alt: 'Showcase image for the KOLABORASI project',
      width: 5760,
      height: 3240,
    },
    categories: ['Web', 'Redesign'],
    featured: true,
    detail: emptyDetail('kolaborasi', 'UI/UX Designer', 'Oct 2025 – Nov 2025', ['Figma', 'FigJam'], {
      ia: textOnlyStep('Information architecture'),
      designSystem: namedStep(
        '/images/projects/kolaborasi/design-process/design-system.png',
        'KOLABORASI design system',
        1203,
        736,
        'Design system',
      ),
      loFi: namedStep(
        '/images/projects/kolaborasi/design-process/lofi.png',
        'KOLABORASI low-fidelity wireframes',
        1920,
        1031,
        'Low-fidelity wireframes',
      ),
      hiFi: namedStep(
        '/images/projects/kolaborasi/design-process/hifi%20new.png',
        'KOLABORASI high-fidelity design',
        1920,
        1034,
        'High-fidelity design',
      ),
      prototyping: namedStep(
        '/images/projects/kolaborasi/design-process/prototyping.png',
        'KOLABORASI prototype',
        1920,
        1037,
        'Prototyping',
      ),
    }),
  },
  {
    slug: 'joynest',
    title: 'Joynest',
    summary: 'A safe digital space for mental health, with guided meditation and mood tracking.',
    showcase: {
      src: '/images/projects/joynest/showchase.jpg',
      alt: 'Showcase image for the Joynest project',
      width: 3840,
      height: 2160,
    },
    categories: ['Mobile', 'Health'],
    detail: emptyDetail('joynest', 'UI/UX Designer', 'Nov 2024 – Dec 2024', ['Figma', 'FigJam'], {
      ia: {
        label: 'IA & user flow',
        images: [
          {
            src: '/images/projects/joynest/design-process/IA.jpg',
            alt: 'Joynest information architecture',
            width: 6240,
            height: 4000,
            description: 'TODO: describe the information architecture.',
          },
          {
            src: '/images/projects/joynest/design-process/user%20flow.jpg',
            alt: 'Joynest user flow',
            width: 11232,
            height: 5952,
            description: 'TODO: describe the user flow.',
          },
        ],
      },
      designSystem: namedStep(
        '/images/projects/joynest/design-process/design-system.png',
        'Joynest design system',
        1260,
        956,
        'Design system',
      ),
      loFi: namedStep(
        '/images/projects/joynest/design-process/lofi.png',
        'Joynest low-fidelity wireframes',
        1920,
        1041,
        'Low-fidelity wireframes',
      ),
      hiFi: namedStep(
        '/images/projects/joynest/design-process/hifi.png',
        'Joynest high-fidelity design',
        1920,
        1031,
        'High-fidelity design',
      ),
      prototyping: namedStep(
        '/images/projects/joynest/design-process/prototyping.png',
        'Joynest prototype',
        1920,
        1038,
        'Prototyping',
      ),
    }),
  },
  {
    slug: 'pantausiswa',
    title: 'Pantausiswa',
    summary: 'A teacher-parent communication app that makes reports and messages easier to follow.',
    showcase: {
      src: '/images/projects/pantausiswa/showcase.jpg',
      alt: 'Showcase image for the Pantausiswa project',
      width: 1200,
      height: 800,
    },
    categories: ['Mobile', 'Education'],
    detail: emptyDetail('pantausiswa', 'UI/UX Designer', 'Sep 2024 – Oct 2024', ['Figma', 'FigJam']),
  },
  {
    slug: 'sirata',
    title: 'SIRATA',
    summary: 'An integrated letter management system for student requests and admin work.',
    showcase: {
      src: '/images/projects/sirata/showcase.jpg',
      alt: 'Showcase image for the SIRATA project',
      width: 1200,
      height: 800,
    },
    categories: ['System', 'Administration'],
    detail: emptyDetail('sirata', 'UI/UX Designer', 'Mar 2024 – Jul 2024', ['Figma', 'FigJam']),
  },
]
