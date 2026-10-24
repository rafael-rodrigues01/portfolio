import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProjectsSection } from '../sections/ProjectsSection'
import { ProjectCard } from '../components/ProjectCard'
import { projectsData } from '../data/profile'
import type { Project } from '../types'

describe('ProjectsSection (Spec 03)', () => {
  describe('1. Identificação da Seção e Acessibilidade', () => {
    it('deve renderizar a tag <section> com id="projects" e acessível via role="region"', () => {
      render(<ProjectsSection />)

      const section = screen.getByRole('region', { name: /projetos/i })
      expect(section).toBeInTheDocument()
      expect(section).toHaveAttribute('id', 'projects')
    })

    it('deve renderizar um heading h2 com o texto "Projetos em Destaque"', () => {
      render(<ProjectsSection />)

      const heading = screen.getByRole('heading', { level: 2, name: /projetos em destaque/i })
      expect(heading).toBeInTheDocument()
    })
  })

  describe('2. Renderização de Dados e Cards', () => {
    it('deve renderizar todos os projetos de projectsData com título h3, descrição e tags', () => {
      render(<ProjectsSection />)

      projectsData.forEach((project) => {
        const title = screen.getByRole('heading', { level: 3, name: project.title })
        expect(title).toBeInTheDocument()

        const card = title.closest('article')
        expect(card).not.toBeNull()

        if (card) {
          const cardScope = within(card)
          expect(cardScope.getByText(project.description)).toBeInTheDocument()

          project.tags.forEach((tag) => {
            expect(cardScope.getByText(tag)).toBeInTheDocument()
          })
        }
      })
    })
  })

  describe('3. Links e Comportamento Condicional (ProjectCard & ProjectsSection)', () => {
    it('deve renderizar o link para o GitHub com atributos adequados para todos os projetos', () => {
      render(<ProjectsSection />)

      projectsData.forEach((project) => {
        const title = screen.getByRole('heading', { level: 3, name: project.title })
        const card = title.closest('article')
        expect(card).not.toBeNull()

        if (card) {
          const githubLink = within(card).getByRole('link', {
            name: new RegExp(`código fonte|código de ${project.title}|github`, 'i'),
          })
          expect(githubLink).toHaveAttribute('href', project.githubUrl)
          expect(githubLink).toHaveAttribute('target', '_blank')
          expect(githubLink).toHaveAttribute('rel', expect.stringContaining('noreferrer'))
        }
      })
    })

    it('deve renderizar o link de demo ao vivo apenas quando liveUrl for fornecido', () => {
      const projectWithLive: Project = {
        id: 'test-with-live',
        title: 'Projeto Com Demo',
        description: 'Descrição teste com live',
        tags: ['React'],
        githubUrl: 'https://github.com/test/repo',
        liveUrl: 'https://live-demo.dev',
      }

      const projectWithoutLive: Project = {
        id: 'test-without-live',
        title: 'Projeto Sem Demo',
        description: 'Descrição teste sem live',
        tags: ['TypeScript'],
        githubUrl: 'https://github.com/test/repo-no-live',
      }

      const { rerender } = render(<ProjectCard project={projectWithLive} />)

      const liveLink = screen.getByRole('link', {
        name: /ver demo ao vivo/i,
      })
      expect(liveLink).toBeInTheDocument()
      expect(liveLink).toHaveAttribute('href', projectWithLive.liveUrl)
      expect(liveLink).toHaveAttribute('target', '_blank')
      expect(liveLink).toHaveAttribute('rel', expect.stringContaining('noreferrer'))

      rerender(<ProjectCard project={projectWithoutLive} />)

      const liveLinkAbsent = screen.queryByRole('link', {
        name: /ver demo ao vivo/i,
      })
      expect(liveLinkAbsent).not.toBeInTheDocument()
    })
  })
})
