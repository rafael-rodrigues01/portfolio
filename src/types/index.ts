export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  githubUrl: string
  liveUrl?: string
  featured?: boolean
}

export interface ProfileInfo {
  name: string
  role: string
  bio: string
  aboutBio: string
  skills: string[]
  location: string
  socialLinks: {
    github: string
    linkedin: string
    email: string
  }
}