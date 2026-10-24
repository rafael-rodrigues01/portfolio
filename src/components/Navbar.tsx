import React from 'react'

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#191919]/80 border-b border-[#333333] transition-all">
      <nav
        aria-label="Navegação principal"
        className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-end"
      >
        <div className="flex items-center gap-6">
          <a
            href="#hero"
            className="text-sm font-medium text-[#A0A0A0] hover:text-[#6D83F2] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6D83F2]"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-[#A0A0A0] hover:text-[#6D83F2] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6D83F2]"
          >
            Sobre
          </a>

          <a
            href="#projects"
            className="text-sm font-medium text-[#A0A0A0] hover:text-[#6D83F2] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6D83F2]"
          >
            Projetos
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-[#A0A0A0] hover:text-[#6D83F2] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6D83F2]"
          >
            Contato
          </a>
        </div>
      </nav>
    </header>
  )
}
