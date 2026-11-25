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
  behance: string | null
  dribbble: string | null
}

export type Profile = {
  name: string
  role: string
  location: string
  coordinates: string
  status: string
  photo: ImageAsset
  intro: string
  bio: string[]
  experiences: Experience[]
  skills: { design: string[]; soft: string[] }
  tools: string[]
  education: { school: string; degree: string; gpa: string }
  contact: Contact
}
