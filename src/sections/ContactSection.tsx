import React from 'react'
import { profileData } from '../data/profile'

export const ContactSection: React.FC = () => {
  const { name, socialLinks } = profileData
  const currentYear = new Date().getFullYear()

  return (
    <>
      <section
        id="contact"
        aria-label="Contato"
        className="flex flex-col items-center justify-center py-20 px-6 md:py-28"
      >
        <div className="w-full max-w-4xl mx-auto space-y-8 text-center">
          <div className="space-y-3">
            <p className="text-sm font-medium tracking-widest text-[#fe428e] uppercase">
              Vamos conversar?
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-[#f0efff] sm:text-4xl">
              Entre em Contato
            </h2>
          </div>

          <div className="bg-[#1a1829] border border-[#27253d] rounded-xl p-8 md:p-10 space-y-6 shadow-xl shadow-black/30">
            <p className="text-base sm:text-lg text-[#a9a6c6] leading-relaxed max-w-xl mx-auto">
              Estou sempre aberto a novas oportunidades, colaborações em projetos desafiadores ou uma boa conversa sobre tecnologia.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={`mailto:${socialLinks.email}`}
                aria-label={`Enviar e-mail para ${name}`}
                className="inline-flex items-center justify-center rounded-lg bg-[#fe428e] px-8 py-3.5 text-base font-medium text-white shadow-lg shadow-[#fe428e]/25 transition-all duration-200 hover:bg-[#e03178] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fe428e]"
              >
                Enviar E-mail
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil do LinkedIn"
                className="inline-flex items-center justify-center rounded-lg border border-[#27253d] bg-[#141321] px-6 py-3.5 text-sm font-medium text-[#f0efff] transition-all duration-200 hover:border-[#fe428e] hover:text-[#fe428e] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fe428e]"
              >
                LinkedIn
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil do GitHub"
                className="inline-flex items-center justify-center rounded-lg border border-[#27253d] bg-[#141321] px-6 py-3.5 text-sm font-medium text-[#f0efff] transition-all duration-200 hover:border-[#fe428e] hover:text-[#fe428e] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fe428e]"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer
        role="contentinfo"
        className="w-full border-t border-[#27253d] bg-[#141321] py-8 px-6 text-center text-sm text-[#a9a6c6]"
      >
        <div className="max-w-4xl mx-auto space-y-2">
          <p>
            © {currentYear} <span className="text-[#f0efff] font-medium">{name}</span>. Todos os direitos reservados.
          </p>
          <p className="text-xs text-[#a9a6c6]/80">
            Desenvolvido com <span className="text-[#00e8c6]">React</span>, <span className="text-[#00e8c6]">TypeScript</span> e <span className="text-[#00e8c6]">Tailwind CSS</span>.
          </p>
        </div>
      </footer>
    </>
  )
}
