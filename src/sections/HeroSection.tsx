import React from 'react'
import { profileData } from '../data/profile'

export const HeroSection: React.FC = () => {
  const { name, role, bio, socialLinks } = profileData

  return (
    <section
      id="hero"
      aria-label="Apresentação Principal"
      className="flex min-h-[85vh] flex-col items-center justify-center py-20 px-6 text-center md:py-28"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-3">
          <p className="text-sm font-medium tracking-widest text-[#fe428e] uppercase">
            Olá, meu nome é
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-[#f0efff] sm:text-5xl md:text-6xl">
            {name}
          </h1>
        </div>

        <p className="text-xl font-medium tracking-tight text-[#00e8c6] sm:text-2xl md:text-3xl">
          {role}
        </p>

        <p className="mx-auto max-w-2xl text-base text-[#a9a6c6] leading-relaxed sm:text-lg">
          {bio}
        </p>

        {/* Chamadas para Ação (CTAs) */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg bg-[#fe428e] px-6 py-3 text-base font-medium text-white shadow-md shadow-[#fe428e]/20 transition-all duration-200 hover:bg-[#e03178] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fe428e]"
          >
            Ver Projetos
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-[#27253d] bg-[#1a1829] px-6 py-3 text-base font-medium text-[#f0efff] transition-all duration-200 hover:border-[#fe428e] hover:text-[#fe428e] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fe428e]"
          >
            Contato
          </a>
        </div>

        {/* Links Sociais */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil do GitHub"
            className="inline-flex items-center justify-center rounded-lg border border-[#27253d] bg-[#1a1829] p-3 text-[#f0efff] transition-all duration-200 hover:border-[#fe428e] hover:text-[#fe428e] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fe428e]"
          >
            <svg
              className="h-5 w-5 fill-current"
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span className="sr-only">GitHub</span>
          </a>

          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil do LinkedIn"
            className="inline-flex items-center justify-center rounded-lg border border-[#27253d] bg-[#1a1829] p-3 text-[#f0efff] transition-all duration-200 hover:border-[#fe428e] hover:text-[#fe428e] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fe428e]"
          >
            <svg
              className="h-5 w-5 fill-current"
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span className="sr-only">LinkedIn</span>
          </a>

          <a
            href={`mailto:${socialLinks.email}`}
            aria-label="Enviar e-mail"
            className="inline-flex items-center justify-center rounded-lg border border-[#27253d] bg-[#1a1829] p-3 text-[#f0efff] transition-all duration-200 hover:border-[#fe428e] hover:text-[#fe428e] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fe428e]"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              role="img"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <span className="sr-only">E-mail</span>
          </a>
        </div>
      </div>
    </section>
  )
}
