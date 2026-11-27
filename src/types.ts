export type ImageAsset = {
  src: string
  alt: string
  width: number
  height: number
}

export type Experience = {
  company: string
  role: string
  period: string
  highlights: string[]
}

export type ProcessImage = ImageAsset & {
  description?: string
}

export type ProcessStep = {
  label?: string
  description?: string
  images: ProcessImage[]
}

export type ProjectProcess = {
  ia: ProcessStep
  designSystem: ProcessStep
  loFi: ProcessStep
  hiFi: ProcessStep
  prototyping: ProcessStep
}

export type ProjectDetail = {
  description: string
  before?: ProcessImage
  timeline: string
  role: string
  overview: string
  tools: string[]
  problem: string
  researchAndSolution: string
  process: ProjectProcess
  learnings: string
}

export type Project = {
  slug: string
  title: string
  summary: string
  showcase: ImageAsset
  categories: string[]
  featured?: boolean
  detail: ProjectDetail
}

export type Contact = {
  email: string
  linkedin: string
  behance: string
  dribbble: string
}

export type Documentation = {
  title: string
  image: ImageAsset
  label: string
  url: string | null
}

export type Certification = {
  title: string
  issuer: string
  score?: string
  period: string
  location?: string
  documentLabel: string
  documentUrl: string | null
  kind: 'experience' | 'certification'
}

export type Profile = {
  name: string
  role: string
  heroRole: string
  location: string
  coordinates: string
  status: string
  photo: ImageAsset
  intro: string
  bio: string[]
  fullBio: string[]
  experiences: Experience[]
  skills: { design: string[]; soft: string[] }
  tools: string[]
  education: { school: string; degree: string; gpa: string }
  contact: Contact
}
