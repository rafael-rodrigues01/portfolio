import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HeroSection } from '../sections/HeroSection'
import { profileData } from '../data/profile'

describe('HeroSection', () => {
  describe('1. Renderização de Dados', () => {
    it('deve renderizar o nome contido em profileData.name dentro de um heading h1', () => {
      render(<HeroSection />)

      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading).toBeInTheDocument()
      expect(heading).toHaveTextContent(profileData.name)
    })

    it('deve renderizar o cargo (profileData.role) e a biografia resumida (profileData.bio)', () => {
      render(<HeroSection />)

      expect(screen.getByText(profileData.role)).toBeInTheDocument()
      expect(screen.getByText(profileData.bio)).toBeInTheDocument()
    })
  })

  describe('2. Botões de Ação (CTAs)', () => {
    it('deve renderizar o link CTA "Ver Projetos" apontando para a âncora #projects', () => {
      render(<HeroSection />)

      const projectsCta = screen.getByRole('link', { name: /ver projetos/i })
      expect(projectsCta).toBeInTheDocument()
      expect(projectsCta).toHaveAttribute('href', '#projects')
    })

    it('deve renderizar o link CTA "Contato" apontando para a âncora #contact', () => {
      render(<HeroSection />)

      const contactCta = screen.getByRole('link', { name: /contato/i })
      expect(contactCta).toBeInTheDocument()
      expect(contactCta).toHaveAttribute('href', '#contact')
    })
  })

  describe('3. Links Sociais e Acessibilidade', () => {
    it('deve renderizar o link para o GitHub com atributos corretos e acessíveis', () => {
      render(<HeroSection />)

      const githubLink = screen.getByRole('link', { name: /github/i })
      expect(githubLink).toBeInTheDocument()
      expect(githubLink).toHaveAttribute('href', profileData.socialLinks.github)
      expect(githubLink).toHaveAttribute('target', '_blank')
      expect(githubLink).toHaveAttribute('rel', expect.stringContaining('noopener'))
      expect(githubLink).toHaveAttribute('rel', expect.stringContaining('noreferrer'))
    })

    it('deve renderizar o link para o LinkedIn com atributos corretos e acessíveis', () => {
      render(<HeroSection />)

      const linkedinLink = screen.getByRole('link', { name: /linkedin/i })
      expect(linkedinLink).toBeInTheDocument()
      expect(linkedinLink).toHaveAttribute('href', profileData.socialLinks.linkedin)
      expect(linkedinLink).toHaveAttribute('target', '_blank')
      expect(linkedinLink).toHaveAttribute('rel', expect.stringContaining('noopener'))
      expect(linkedinLink).toHaveAttribute('rel', expect.stringContaining('noreferrer'))
    })

    it('deve renderizar o link de e-mail com protocolo mailto e atributo acessível', () => {
      render(<HeroSection />)

      const emailLink = screen.getByRole('link', { name: /e-mail|email/i })
      expect(emailLink).toBeInTheDocument()
      expect(emailLink).toHaveAttribute('href', `mailto:${profileData.socialLinks.email}`)
    })
  })

  describe('4. Integração do CodeCard', () => {
    it('deve renderizar o componente CodeCard na seção Hero com seus elementos característicos', () => {
      render(<HeroSection />)

      expect(screen.getByText('portfolio.tsx')).toBeInTheDocument()
      expect(screen.getByText('ready to build')).toBeInTheDocument()
    })
  })
})
