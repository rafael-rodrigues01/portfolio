import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProjectsSection } from '../sections/ProjectsSection'
import { projectsData } from '../data/profile'

describe('ProjectsSection', () => {
  it('renders section title and accessible region', () => {
    render(<ProjectsSection />)

    const section = screen.getByRole('region', { name: /projetos/i })
    expect(section).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 2, name: /projetos em destaque/i })
    expect(heading).toBeInTheDocument()
  })

  it('renders all projects from projectsData with title, tags, description and links', () => {
    render(<ProjectsSection />)

    projectsData.forEach((project) => {
      // Title as heading level 3
      const projectTitle = screen.getByRole('heading', { level: 3, name: project.title })
      expect(projectTitle).toBeInTheDocument()

      // Description
      expect(screen.getByText(project.description)).toBeInTheDocument()

      // Tags
      project.tags.forEach((tag) => {
        expect(screen.getByText(tag)).toBeInTheDocument()
      })

      // GitHub link with accessible name
      const githubLink = screen.getByRole('link', {
        name: new RegExp(`código fonte do ${project.title}|ver código de ${project.title}|github`, 'i'),
      })
      expect(githubLink).toHaveAttribute('href', project.githubUrl)
      expect(githubLink).toHaveAttribute('target', '_blank')
      expect(githubLink).toHaveAttribute('rel', expect.stringContaining('noreferrer'))

      // Live link if available
      if (project.liveUrl) {
        const liveLink = screen.getByRole('link', {
          name: new RegExp(`ver demo do ${project.title}|acessar ${project.title}|projeto ao vivo`, 'i'),
        })
        expect(liveLink).toHaveAttribute('href', project.liveUrl)
        expect(liveLink).toHaveAttribute('target', '_blank')
        expect(liveLink).toHaveAttribute('rel', expect.stringContaining('noreferrer'))
      }
    })
  })
})
