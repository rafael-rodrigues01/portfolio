import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AboutSection } from '../sections/AboutSection'
import { profileData } from '../data/profile'

describe('AboutSection (Spec 02)', () => {
  describe('1. Identificação da Seção e Acessibilidade', () => {
    it('deve renderizar a tag <section> com id="about" e aria-label="Sobre Mim"', () => {
      render(<AboutSection />)

      const section = screen.getByRole('region', { name: /sobre mim/i })
      expect(section).toBeInTheDocument()
      expect(section).toHaveAttribute('id', 'about')
    })

    it('deve renderizar um heading h2 com o texto "Sobre Mim"', () => {
      render(<AboutSection />)

      const heading = screen.getByRole('heading', { level: 2, name: /sobre mim/i })
      expect(heading).toBeInTheDocument()
    })
  })

  describe('2. Renderização de Biografia', () => {
    it('deve renderizar o texto correspondente à biografia detalhada (profileData.aboutBio)', () => {
      render(<AboutSection />)

      expect(screen.getByText(profileData.aboutBio)).toBeInTheDocument()
    })
  })

  describe('3. Renderização de Competências (Skills)', () => {
    it('deve renderizar um heading h3 identificando a seção de tecnologias/stack', () => {
      render(<AboutSection />)

      const subHeading = screen.getByRole('heading', {
        level: 3,
        name: /tecnologias|habilidades|competências|stack/i,
      })
      expect(subHeading).toBeInTheDocument()
    })

    it('deve renderizar cada item presente em profileData.skills dentro de elementos semânticos <li>', () => {
      render(<AboutSection />)

      const listItems = screen.getAllByRole('listitem')
      const itemTexts = listItems.map((item) => item.textContent?.trim())

      profileData.skills.forEach((skill) => {
        expect(itemTexts).toContain(skill)
      })
    })
  })
})
