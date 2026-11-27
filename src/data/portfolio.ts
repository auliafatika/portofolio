import type { Certification, Documentation, ProcessStep, Profile, Project } from '../types'

const imageStep = (
  src: string,
  alt: string,
  width: number,
  height: number,
  description: string,
): ProcessStep => ({
  description,
  images: [{ src, alt, width, height }],
})

export const profile: Profile = {
  name: 'Aulia Fatika Rahmadani',
  role: 'UI/UX Designer',
  heroRole: 'UI/UX Designer, Product Designer & Web Development',
  location: 'Semarang, Central Java, Indonesia',
  coordinates: 'LAT -6.99  LON 110.42',
  status: 'SYS/READY',
  photo: {
    src: '/images/profile/me.webp',
    alt: 'Portrait of Aulia Fatika Rahmadani, UI/UX Designer',
    width: 800,
    height: 1067,
  },
  intro: 'I build clean, intuitive screens people actually enjoy using.',
  bio: [
    'Hey, nice to meet you! 👋 I’m Aulia, a Computer Engineering Tech grad from Polines with UI/UX experience from internships and plenty of case studies. My daily loop? Mapping user flows, sketching rough wireframes, and crafting smooth, interactive prototypes. ✨',
    'I build wireframes and prototypes in Figma. I use AI agents to automate repetitive design work and turn visual concepts into working interfaces.',
  ],
  fullBio: [
    'Hey there! I’m Aulia Fatika Rahmadani, a UI/UX and product designer obsessed with turning chaotic ideas into super smooth, user-friendly digital experiences. I spend most of my time in Figma building intuitive user flows, crisp wireframes, and scalable design systems that actually make sense to real people.',
    'Coming from a computer engineering background, I love bridging the gap between aesthetic visuals and technical feasibility. When I’m not micro-adjusting pixels or testing out prototypes, you’ll probably find me diving into new design trends, tweaking passion projects, or hunting for inspiration for my next build. Always down to connect and collab on cool digital products!',
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
    behance: 'https://www.behance.net/auliafatikar',
    dribbble: 'https://dribbble.com/auliafatika',
  },
}

export const projects: Project[] = [
  {
    slug: 'kolaborasi',
    title: 'KOLABORASI',
    summary: 'A corporate website redesign with responsive wireframes and components for desktop and mobile.',
    showcase: {
      src: '/images/projects/kolaborasi/showcase.webp',
      alt: 'Showcase image for the KOLABORASI project',
      width: 1440,
      height: 810,
    },
    categories: ['Web', 'Redesign'],
    featured: true,
    detail: {
      description: `Redesigned the official corporate website for Kolaborasi.co, a venture-building company, during a UI/UX Designer Internship at CV. Techarea Indonesia Jaya (2025).

Focused on modernizing the visual identity, clarifying company positioning, and delivering a cohesive, responsive experience across desktop and mobile devices.`,
      timeline: '2025',
      role: 'UI/UX Designer Intern',
      overview: `UI/UX Designer Intern (end-to-end IA, design system, wireframing, high-fidelity UI, and interactive prototyping).

Complete overhaul of core marketing and venture-showcase pages, responsive breakpoints (desktop & mobile), and reusable component libraries.

- +35–45% improvement in content scannability and information comprehension through clearer visual hierarchy.
- ~40% reduction in UI handoff and iteration time by establishing modular Figma components and auto-layout rules.
- 100% cross-device layout consistency across desktop and mobile viewports.`,
      tools: ['Figma', 'FigJam'],
      problem: `- The previous interface lacked modern typography, high-contrast visual rhythm, and editorial polish expected from a venture builder.
- Dense blocks of copy and fragmented sections made it difficult for founders and partners to quickly grasp what Kolaborasi.co builds and how they collaborate.
- Layout elements did not adapt smoothly between desktop and mobile screens, leading to friction on smaller viewports.`,
      researchAndSolution: `- Conducted heuristic evaluation and visual audit of the existing Kolaborasi.co website to pinpoint readability bottlenecks and navigation gaps.
- Benchmarked global venture studios and modern B2B tech websites to align structural patterns with industry standards.

- Restructured page storytelling around bold editorial headlines (e.g., "Most people optimize. We build.", "We are in the business of conviction"), alternating dark-mode and light-mode sections to pace visual attention.
- Highlighted key credibility metrics (10+, 40+, $10M+) and venture case studies upfront to build immediate trust with founders and investors.`,
      process: {
        ia: {
          description: `Hero & Conviction Statement → Track Record Metrics → Venture Building Process (How We Work) → Portfolio & Outcomes → Collaboration Criteria (Who We're a Fit For) → Call-to-Action.`,
          images: [],
        },
        designSystem: imageStep(
          '/images/projects/kolaborasi/design-process/design-system.webp',
          'KOLABORASI design system',
          1203,
          736,
          `Built a scalable token and component library in Figma featuring standardized typography scales, high-contrast monochrome + coral-red accent palettes, responsive grids, buttons, cards, and navigation states using Auto Layout and Variants.`,
        ),
        loFi: imageStep(
          '/images/projects/kolaborasi/design-process/lofi.webp',
          'KOLABORASI low-fidelity wireframes',
          1792,
          962,
          `Mapped structural wireframes to validate content hierarchy, section pacing, and responsive stacking behavior before applying visual styling.`,
        ),
        hiFi: imageStep(
          '/images/projects/kolaborasi/design-process/hifi%20new.webp',
          'KOLABORASI high-fidelity design',
          1792,
          965,
          `Crafted polished desktop and mobile screens combining bold Swiss-editorial typography, high-contrast dark/light section blocks, custom spot illustrations, and structured venture showcase cards.`,
        ),
        prototyping: imageStep(
          '/images/projects/kolaborasi/design-process/prototyping.webp',
          'KOLABORASI prototype',
          1600,
          864,
          `Linked desktop and mobile flows into interactive Figma prototypes simulating real scrolling transitions, hover states, and responsive navigation menus.`,
        ),
      },
      learnings: `- Learned how to translate a bold, editorial brand identity into a clean, functional interface without sacrificing readability or conversion clarity.
- Strengthened practical mastery of Figma Auto Layout, reusable design systems, and multi-breakpoint adaptation for real client deliverables.
- Improved the ability to justify design decisions using structured UX rationale and align business goals with user needs in an agency environment.`,
    },
  },
  {
    slug: 'joynest',
    title: 'Joynest',
    summary: 'A safe digital space for mental health, with guided meditation and mood tracking.',
    showcase: {
      src: '/images/projects/joynest/showchase.webp',
      alt: 'Showcase image for the Joynest project',
      width: 1600,
      height: 900,
    },
    categories: ['Mobile', 'Health'],
    detail: {
      description: `Joynest is a mobile mental health application developed for the Techcomfest UI/UX Competition to provide a safe, empathetic, and supportive digital space for managing emotional well-being.

Designed between November and December 2024, the app integrates daily mood tracking, guided meditation, reflective journaling, peer and AI-assisted conversation (JoyBot and community spaces), and psychologist counseling into one cohesive mobile experience.`,
      timeline: 'Nov 2024 – Dec 2024',
      role: 'UI/UX Designer',
      overview: `UI/UX Designer (end-to-end IA, user flows, design system, wireframing, high-fidelity UI, and interactive prototyping using Figma and FigJam).

Complete mobile app design covering onboarding, emotional check-ins, self-care activities, community/AI chat, and professional counseling booking.`,
      tools: ['Figma', 'FigJam'],
      problem: `- Users seeking emotional support often rely on separate apps for journaling, meditation, and professional consultations, creating unnecessary friction.
- Many health platforms feel overly formal or overwhelming when users are already stressed or emotionally drained.
- Without clear guidance, gentle daily prompts, and reassuring visual feedback, users easily abandon self-care routines early on.`,
      researchAndSolution: `- Analyzed common emotional barriers and user drop-off points in existing mental health and self-care mobile apps.
- Mapped user needs across different emotional states, from quick daily check-ins to deeper professional counseling.

- Paired warm, welcoming visual cues and friendly mascot illustrations (JoyBot) with straightforward task paths so users can find the right support immediately.
- Organized core capabilities, including "Bagaimana perasaanmu hari ini?" mood check-ins, mindfulness and guided meditation, personal journaling, JoyBot chat companions, and counseling scheduling, into clear, low-friction flows.`,
      process: {
        ia: {
          label: 'IA & user flow',
          description: '',
          images: [
            {
              src: '/images/projects/joynest/design-process/IA.webp',
              alt: 'Joynest information architecture',
              width: 1792,
              height: 1149,
              description: `Structured the app around five primary destinations: Beranda, Meditasi, Obrolan, Jurnal, and Konseling, supported by secondary utilities on Beranda (Profil, Streak, Notifikasi, and Mood Tracker).

Connected recurring vertical modules across sections, including Perkembangan Emosi, Meditasi Mindfulness, Meditasi Terpadu, Jurnal Buat Kamu, Sesi Konseling, Riwayat Jurnal, Layanan Konseling, and Artikel Terkait, so self-care prompts and educational articles stay accessible as users scroll.`,
            },
            {
              src: '/images/projects/joynest/design-process/user%20flow.webp',
              alt: 'Joynest user flow',
              width: 1792,
              height: 950,
              description: `Built an authentication entry check (Sudah Login / Sudah Punya Akun) that routes returning users straight to Beranda and guides new users through registration or login.

Mapped dedicated end-to-end journeys from Beranda into Meditasi (articles, guided meditation, and breathing/music mindfulness), Obrolan (community threads, anonymous posting, and JoyBot character preferences/chat), Jurnal (selecting a journal type, writing, saving, and viewing history), and Konseling (choosing a counseling type, psychologist, payment, and consultation or reading articles).`,
            },
          ],
        },
        designSystem: imageStep(
          '/images/projects/joynest/design-process/design-system.webp',
          'Joynest design system',
          1260,
          956,
          `Built an accessible Figma design system featuring warm orange and soft lavender color accents, clean typography, friendly character illustrations, and standardized UI components.

Defined consistent cards, buttons, mood indicators, and navigation states to maintain visual harmony across sensitive mental health workflows.`,
        ),
        loFi: imageStep(
          '/images/projects/joynest/design-process/lofi.webp',
          'Joynest low-fidelity wireframes',
          1792,
          972,
          `Created structural wireframes to validate screen layouts, content hierarchy, and flow sequence before applying final colors and illustrations.

Tested early layouts for mood check-in cards, meditation audio players, journal prompts, and psychologist booking steps to keep every screen focused and easy to scan.`,
        ),
        hiFi: imageStep(
          '/images/projects/joynest/design-process/hifi.webp',
          'Joynest high-fidelity design',
          1792,
          962,
          `Crafted polished mobile interfaces combining warm color palettes, approachable illustrations (including the JoyBot mascot and emotion check-in visuals), and clean card layouts.

Balanced emotional warmth with clear action buttons so users can move smoothly between reflecting, calming down, chatting, and booking support.`,
        ),
        prototyping: imageStep(
          '/images/projects/joynest/design-process/prototyping.webp',
          'Joynest prototype',
          1792,
          969,
          `Connected key screens across onboarding, mood tracking, meditation, journaling, chat, and counseling flows into an interactive Figma prototype.

Simulated end-to-end user journeys to verify navigation pacing, button placement, and screen transitions across core features.`,
        ),
      },
      learnings: `- Learned how to turn empathetic design principles into concrete interface decisions, such as calm visual pacing, predictable component behavior, and clear user flows.
- Strengthened practical skills in building accessible, consistent component libraries in Figma under tight competition timelines.
- Understood how thoughtful tone, mascot guidance, and organized navigation make mental health tools feel safe, trustworthy, and effortless to use.`,
    },
  },
  {
    slug: 'perhutani',
    title: 'Perhutani',
    summary: 'A landing page redesign for Perhutani, documented from the original design to the new direction.',
    showcase: {
      src: '/images/projects/perhutani/showcase.webp',
      alt: 'Showcase image for the Perhutani project',
      width: 1280,
      height: 720,
    },
    categories: ['Web', 'Redesign'],
    detail: {
      description: `A self-initiated UI/UX redesign of the homepage for Perum Perhutani, a state-owned enterprise (BUMN) managing sustainable forest resources and community partnerships across Java and Madura.

The original landing page needed restructuring to improve content clarity, visual hierarchy, and responsiveness so visitors could scan Perhutani's forestry initiatives, business units, and updates more effortlessly across desktop and mobile devices.`,
      timeline: '2025 (Self-initiated project)',
      role: 'UI/UX Designer',
      overview: `UI/UX Designer (information architecture, design system, wireframing, high-fidelity UI, and interactive prototyping in Figma).

Homepage redesign covering brand storytelling, forest management & sustainability highlights, business units, publications/updates, and responsive desktop and mobile layouts.`,
      tools: ['Figma'],
      problem: `- Visitors looking for Perhutani's core mission, forestry programs, and unit updates faced crowded layouts and competing visual elements that slowed down scanning.
- Key headlines, environmental photography, and supporting copy lacked clear contrast and pacing to guide user attention naturally.
- Sections needed clearer responsive adaptation so desktop and mobile visitors could navigate smoothly without layout friction.`,
      researchAndSolution: `- Audited the existing Perhutani landing page to identify layout bottlenecks, content priority gaps, and readability issues.
- Reviewed modern corporate and sustainability-focused web layouts to see how editorial storytelling and structured grids improve comprehension.

- Reorganized the landing page into clear, scannable sections pairing forest photography and green brand accents with structured cards and concise copy.
- Designed responsive desktop and mobile screens with consistent spacing and clear typographic hierarchy so users can grasp Perhutani's role and offerings quickly.`,
      before: {
        src: '/images/projects/perhutani/design%20before.webp',
        alt: 'Perhutani landing page before the redesign',
        width: 1440,
        height: 1139,
        description: 'The landing page before the redesign.',
      },
      process: {
        ia: {
          description: `Grouped Perhutani's core information into a logical top-to-bottom flow covering brand overview, forestry commitment ("Terus Hijaukan Negeri"), business units, and publications/updates.

Prioritized scannable headings and balanced content blocks so visitors can locate key institutional details without feeling overwhelmed.`,
          images: [],
        },
        designSystem: imageStep(
          '/images/projects/perhutani/design-process/design%20system.webp',
          'Perhutani design system',
          1792,
          968,
          `Created a cohesive Figma design system anchored in Perhutani's green identity, clean typography, card layouts, and reusable UI components.

Standardized spacing, buttons, and content blocks to keep desktop and mobile screens consistent and accessible.`,
        ),
        loFi: imageStep(
          '/images/projects/perhutani/design-process/lofi.webp',
          'Perhutani low-fidelity wireframes',
          1792,
          967,
          `Mapped out structural wireframes first to test section order, content density, and responsive stacking before applying visual styling.

Validated how text blocks, imagery, and cards flow across desktop and mobile viewports to prevent clutter early on.`,
        ),
        hiFi: imageStep(
          '/images/projects/perhutani/design-process/hifi.webp',
          'Perhutani high-fidelity design',
          1792,
          969,
          `Translated wireframes into high-fidelity desktop and mobile interfaces featuring lush forest photography, green accents, structured grids, and clear callouts.

Balanced visual warmth with readable typography so each section communicates its message clearly at a glance.`,
        ),
        prototyping: {
          description: `Connected desktop and mobile screens in Figma into an interactive prototype to walk through scrolling flow, section transitions, and layout responsiveness.

Allowed smooth review of how content adapts across screen sizes before finalizing presentation views.`,
          images: [],
        },
      },
      learnings: `- Learned how thoughtful landing page structure and visual hierarchy help users absorb complex institutional information quickly.
- Strengthened practical skills in moving from low-fidelity wireframes to responsive high-fidelity screens and interactive prototypes in Figma.`,
    },
  },
  {
    slug: 'novacare',
    title: 'Novacare',
    summary: 'A clinic management dashboard that brings scheduling and patient information into one view.',
    showcase: {
      src: '/images/projects/novacare/showcase.webp',
      alt: 'Showcase image for the Novacare project',
      width: 1792,
      height: 1008,
    },
    categories: ['Dashboard', 'Health'],
    detail: {
      description: `Novacare is a clinic management platform designed to simplify daily healthcare operations for general practitioner clinics.

This project focused on designing a centralized, all-in-one dashboard interface to streamline patient queue monitoring, real-time doctor availability, and billing checkouts for clinic administrators and medical personnel.`,
      timeline: '2026',
      role: 'UI/UX Designer',
      overview: `UI/UX Designer (information architecture, user flows, design system, low-fidelity wireframes, high-fidelity UI components, and interactive prototyping in Figma).

End-to-end clinic operations dashboard covering patient check-ins, active and upcoming queues, missed queue handling, doctor consultation tracking, and billing checkouts.`,
      tools: ['Figma'],
      problem: `- Clinic administrators often juggle separate screens or manual records to track patient arrivals, doctor schedules, and payment checkouts, slowing down daily operations.
- Without clear visual grouping and status indicators, dense operational data can overwhelm front-desk staff during peak clinic hours.
- Managing upcoming patients, missed queues, and post-consultation checkouts requires quick, single-screen visibility so patients are not kept waiting unnecessarily.`,
      researchAndSolution: `- Analyzed typical front-desk and general clinic workflows to map the critical touchpoints from patient check-in to consultation and final billing.
- Identified key operational metrics and real-time status states clinic staff need to monitor at a glance.

- Designed a centralized command dashboard anchored by top-level summary KPIs (Today's Patients, Queued Patients, Doctors on Duty, Today's Revenue) and a quick Check In Patient action.
- Organized real-time modules for Doctors, Upcoming Queues, Missed Queues, and Checkout into scannable cards with color-coded status badges and direct action buttons.`,
      process: {
        ia: {
          description: `Structured the platform around a clear left-sidebar navigation (Dashboard, Patients, Queues, Doctors, Billing, Reports, Settings, and Help Center) paired with global search for patients, IDs, or doctors.

Arranged the main dashboard view into logical operational zones so clinic staff can monitor daily metrics at the top and manage doctor status, queues, and billing checkouts simultaneously below.`,
          images: [],
        },
        designSystem: imageStep(
          '/images/projects/novacare/design-process/design%20system.webp',
          'Novacare design system',
          1339,
          890,
          `Built a clean, scalable Figma design system centered on medical-grade blues, neutral light surfaces, high-contrast status pills, and crisp typography.

Standardized reusable dashboard widgets, data tables, action buttons, and queue cards to ensure visual consistency and fast recognition across high-density screens.`,
        ),
        loFi: imageStep(
          '/images/projects/novacare/design-process/lofi.webp',
          'Novacare low-fidelity wireframes',
          1440,
          1024,
          `Created structured low-fidelity wireframes to validate grid proportions, card placement, and operational task flows before applying final styling.

Tested early layouts for queue tables, doctor availability cards, and checkout summaries to ensure dense clinical data remained easy to scan.`,
        ),
        hiFi: imageStep(
          '/images/projects/novacare/design-process/hifi.webp',
          'Novacare high-fidelity design',
          1440,
          1024,
          `Crafted polished high-fidelity dashboard screens featuring clear typographic hierarchy, color-coded queue statuses (Confirmed, Unconfirmed), and direct inline controls (Start Consultation, Cancel, Confirm, Rejoin Queue, Paid).

Balanced clean whitespace with dense operational controls so front-desk staff can act on patient records quickly without visual fatigue.`,
        ),
        prototyping: {
          description: `Connected core clinic workflows in Figma into an interactive prototype covering patient check-in, queue status updates, doctor consultation actions, and billing checkouts.

Enabled smooth end-to-end walkthroughs of front-desk operations to verify navigation speed and action clarity.`,
          images: [],
        },
      },
      learnings: `- Learned how to structure high-density operational data into clear, scannable visual hierarchies tailored for fast-paced clinic environments.
- Strengthened practical skills in balancing comprehensive functional controls with clean UI components so staff can complete repetitive tasks with minimal friction.`,
    },
  },
  {
    slug: 'pantausiswa',
    title: 'Pantausiswa',
    summary: 'A teacher-parent communication app that makes reports and messages easier to follow.',
    showcase: {
      src: '/images/projects/pantausiswa/showcase.webp',
      alt: 'Showcase image for the Pantausiswa project',
      width: 1600,
      height: 900,
    },
    categories: ['Mobile', 'Education'],
    detail: {
      description: `PantauSiswa is a teacher-parent communication mobile application developed as part of a team for the Hology 7.0 UI/UX Competition to improve information delivery, transparency, and parent engagement in elementary school education.

Designed between September and October 2024, the app centralizes student academic tracking, attendance updates, extracurricular progress, learning module recommendations, and direct teacher messaging into one accessible mobile platform.`,
      timeline: 'Sep 2024 – Oct 2024',
      role: 'UI/UX Designer',
      overview: `UI/UX Designer (user flow mapping, design system, wireframing, high-fidelity UI design, and interactive prototyping using Figma and FigJam).

End-to-end mobile experience covering invitation-code onboarding, student progress dashboards (Akumulasi Kehadiran, Akumulasi Nilai, Grafik Nilai), daily class updates, and direct teacher-parent chat.`,
      tools: ['Figma', 'FigJam'],
      problem: `- Parents often receive fragmented updates about their child's attendance, grades, and classroom activities through informal messaging groups or periodic paper reports.
- Without a dedicated space to view grade trends, extracurricular development, and tailored study materials, parents struggle to identify where their child needs extra support early on.
- Important school announcements and one-on-one discussions frequently get buried in general chat threads, slowing down follow-ups.`,
      researchAndSolution: `- Analyzed communication gaps and pain points between elementary school teachers and parents when monitoring daily student performance.
- Identified core information parents check most frequently (attendance, grades, teacher notes, and study recommendations) alongside simple onboarding needs.

- Designed an invitation-code onboarding flow so parents can quickly connect to their child's class and teacher records without complex setup.
- Structured the home dashboard around clear visual summaries, including attendance and grade rings, subject grade bar charts (Grafik Nilai), recommended learning modules (Rekomendasi Modul Belajar), and direct teacher chat lists.`,
      process: {
        ia: {
          label: 'User flow',
          description: '',
          images: [
            {
              src: '/images/projects/pantausiswa/design-process/userflow.webp',
              alt: 'Pantausiswa user flow',
              width: 1280,
              height: 801,
              description: `Mapped end-to-end journeys starting from onboarding via Google sign-in or teacher-provided invitation codes (Masukkan kode undangan yang telah diberikan oleh guru) into the main student monitoring dashboard.

Structured clear task paths for checking daily attendance and grade summaries, inspecting subject-level performance charts, browsing recommended study modules, viewing school notifications, and messaging teachers directly.`,
            },
          ],
        },
        designSystem: imageStep(
          '/images/projects/pantausiswa/design-process/design%20system.webp',
          'Pantausiswa design system',
          1740,
          983,
          `Built a cohesive Figma design system anchored in friendly sky-blue primary tones, clear semantic status colors (green, orange, and red indicators for attendance, grades, and extracurriculars), clean typography, and approachable educational illustrations.

Created reusable UI components, progress rings, bar charts, teacher contact rows, and navigation bars to maintain visual consistency across team deliverables.`,
        ),
        loFi: imageStep(
          '/images/projects/pantausiswa/design-process/lofi.webp',
          'Pantausiswa low-fidelity wireframes',
          1792,
          974,
          `Created structural low-fidelity wireframes to align on screen hierarchy, reporting layouts, and messaging flows before applying final colors and illustrations.

Tested early card arrangements for attendance summaries, subject grade charts, and teacher directories so dense student data stayed clean and easy to scan.`,
        ),
        hiFi: imageStep(
          '/images/projects/pantausiswa/design-process/hifi.webp',
          'Pantausiswa high-fidelity design',
          1792,
          971,
          `Crafted polished high-fidelity mobile screens pairing friendly classroom illustrations with clear data visualizations, scannable subject cards, and intuitive teacher messaging layouts.

Balanced approachable visual warmth with structured reporting widgets so parents can review academic updates and contact teachers effortlessly.`,
        ),
        prototyping: imageStep(
          '/images/projects/pantausiswa/design-process/prototyping.webp',
          'Pantausiswa prototype',
          1792,
          966,
          `Connected core user journeys in Figma into an interactive prototype covering account linking, dashboard navigation, grade and attendance inspection, notification checks, and teacher-parent chat.

Enabled team walkthroughs and usability checks to refine flow clarity and interaction pacing ahead of competition deadlines.`,
        ),
      },
      learnings: `- Learned how to collaborate effectively within a design team while aligning user needs with competition constraints and tight submission timelines.
- Strengthened practical skills in turning student performance metrics and teacher-parent messaging into intuitive, consistent mobile interfaces.`,
    },
  },
]

export const certifications: Certification[] = [
  {
    title: 'UI/UX Designer',
    issuer: 'CV. Techarea Indonesia Jaya',
    period: 'July 2025 – December 2025',
    documentLabel: 'See certification',
    documentUrl: '/certifications/UIUX%20Designer%20Intern.pdf',
    kind: 'experience',
  },
  {
    title: 'MikroTik Certified Network Associate (MTCNA)',
    issuer: 'Mikrotik',
    period: 'March 2026 – March 2029',
    documentLabel: 'See certification',
    documentUrl: '/certifications/MikroTik%20Certified%20Network%20Associate%20%28MTCNA%29.pdf',
    kind: 'certification',
  },
  {
    title: 'Test of English for International Communication (TOEIC)',
    issuer: 'PT International Test Center',
    score: 'Score 635',
    period: 'November 2025 – November 2027',
    documentLabel: 'See certification',
    documentUrl: '/certifications/Test%20of%20English%20for%20International%20Communication%20%28TOEIC%29.pdf',
    kind: 'certification',
  },
  {
    title: 'Computer and Network Engineering',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    period: 'June 2022 – June 2025',
    documentLabel: 'See certification',
    documentUrl: '/certifications/Computer%20and%20Network%20Engineering%20%28BNSP%29.pdf',
    kind: 'certification',
  },
]

export const documentations: Documentation[] = [
  {
    title: 'Internship',
    image: {
      src: '/images/documentations/internship.webp',
      alt: 'Documentation from the UI/UX design internship',
      width: 899,
      height: 666,
    },
    label: 'See documentation',
    url: null,
  },
  {
    title: 'Project Base Learning',
    image: {
      src: '/images/documentations/project%20base%20learning.webp',
      alt: 'Documentation from project-based learning',
      width: 900,
      height: 672,
    },
    label: 'See documentation',
    url: null,
  },
  {
    title: 'UMKM Support',
    image: {
      src: '/images/documentations/umkm%20support.webp',
      alt: 'Documentation from UMKM support activities',
      width: 900,
      height: 593,
    },
    label: 'See documentation',
    url: null,
  },
]
