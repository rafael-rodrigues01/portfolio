import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ContactSection } from '../sections/ContactSection'
import { profileData } from '../data/profile'

describe('ContactSection & Footer (Spec 04)', () => {
  describe('1. Identificação da Seção e Acessibilidade', () => {
    it('deve renderizar a tag <section> com id="contact" e acessível via role="region"', () => {
      render(<ContactSection />)

      const section = screen.getByRole('region', { name: /contato/i })
      expect(section).toBeInTheDocument()
      expect(section).toHaveAttribute('id', 'contact')
    })

    it('deve renderizar um heading h2 com o texto associado a contato', () => {
      render(<ContactSection />)

      const heading = screen.getByRole('heading', { level: 2, name: /contato/i })
      expect(heading).toBeInTheDocument()
    })
  })

  describe('2. Canais de Contato Direto e Links', () => {
    it('deve renderizar um link para envio de e-mail com protocolo mailto e aria-label descritivo', () => {
      render(<ContactSection />)

      const emailLink = screen.getByRole('link', { name: /e-mail|email/i })
      expect(emailLink).toBeInTheDocument()
      expect(emailLink).toHaveAttribute('href', `mailto:${profileData.socialLinks.email}`)
    })

    it('deve renderizar os links externos para LinkedIn e GitHub com atributos seguros e acessíveis', () => {
      render(<ContactSection />)

      const linkedinLink = screen.getByRole('link', { name: /linkedin/i })
      expect(linkedinLink).toBeInTheDocument()
      expect(linkedinLink).toHaveAttribute('href', profileData.socialLinks.linkedin)
      expect(linkedinLink).toHaveAttribute('target', '_blank')
      expect(linkedinLink).toHaveAttribute('rel', expect.stringContaining('noreferrer'))

      const githubLink = screen.getByRole('link', { name: /github/i })
      expect(githubLink).toBeInTheDocument()
      expect(githubLink).toHaveAttribute('href', profileData.socialLinks.github)
      expect(githubLink).toHaveAttribute('target', '_blank')
      expect(githubLink).toHaveAttribute('rel', expect.stringContaining('noreferrer'))
    })
  })

  describe('3. Rodapé Semântico (Footer)', () => {
    it('deve renderizar uma tag <footer> acessível pelo role="contentinfo"', () => {
      render(<ContactSection />)

      const footer = screen.getByRole('contentinfo')
      expect(footer).toBeInTheDocument()
    })

    it('deve conter no rodapé o nome do profissional e menções a React, TypeScript e Tailwind CSS', () => {
      render(<ContactSection />)

      const footer = screen.getByRole('contentinfo')
      const footerScope = within(footer)

      expect(footerScope.getByText(new RegExp(profileData.name, 'i'))).toBeInTheDocument()
      expect(footerScope.getByText(/react/i)).toBeInTheDocument()
      expect(footerScope.getByText(/typescript/i)).toBeInTheDocument()
      expect(footerScope.getByText(/tailwind/i)).toBeInTheDocument()
    })
  })
})
