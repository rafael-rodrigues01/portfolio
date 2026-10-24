import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Navbar } from '../components/Navbar'

describe('Navbar (Spec 05)', () => {
  describe('1. Identificação e Semântica de Navegação', () => {
    it('deve renderizar a tag <nav> acessível via role="navigation" com aria-label="Navegação principal"', () => {
      render(<Navbar />)

      const nav = screen.getByRole('navigation', { name: /navegação principal/i })
      expect(nav).toBeInTheDocument()
    })
  })

  describe('2. Presença dos Links de Navegação', () => {
    it('deve renderizar os links de ancoragem para as seções Home, Sobre, Projetos e Contato', () => {
      render(<Navbar />)

      const homeLink = screen.getByRole('link', { name: /^home$/i })
      expect(homeLink).toBeInTheDocument()
      expect(homeLink).toHaveAttribute('href', expect.stringMatching(/^#$|^#hero$/))

      const aboutLink = screen.getByRole('link', { name: /^sobre$/i })
      expect(aboutLink).toBeInTheDocument()
      expect(aboutLink).toHaveAttribute('href', '#about')

      const projectsLink = screen.getByRole('link', { name: /^projetos$/i })
      expect(projectsLink).toBeInTheDocument()
      expect(projectsLink).toHaveAttribute('href', '#projects')

      const contactLink = screen.getByRole('link', { name: /^contato$/i })
      expect(contactLink).toBeInTheDocument()
      expect(contactLink).toHaveAttribute('href', '#contact')
    })

    it('não deve renderizar o nome do perfil isolado no início como logotipo', () => {
      render(<Navbar />)

      const nameLink = screen.queryByRole('link', { name: /rafael rodrigues/i })
      expect(nameLink).not.toBeInTheDocument()
    })
  })
})
