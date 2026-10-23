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
  location: string
  socialLinks: {
    github: string
    linkedin: string
    email: string
  }
}