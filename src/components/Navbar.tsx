import React from 'react'

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#141321]/80 border-b border-[#27253d] transition-all">
      <nav
        aria-label="Navegação principal"
        className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-end"
      >
        <div className="flex items-center gap-6">
          <a
            href="#hero"
            className="text-sm font-medium text-[#a9a6c6] hover:text-[#fe428e] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fe428e]"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-[#a9a6c6] hover:text-[#fe428e] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fe428e]"
          >
            Sobre
          </a>

          <a
            href="#projects"
            className="text-sm font-medium text-[#a9a6c6] hover:text-[#fe428e] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fe428e]"
          >
            Projetos
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-[#a9a6c6] hover:text-[#fe428e] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fe428e]"
          >
            Contato
          </a>
        </div>
      </nav>
    </header>
  )
}
