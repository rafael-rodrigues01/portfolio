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
            <p className="text-sm font-medium tracking-widest text-[#6D83F2] uppercase">
              Vamos conversar?
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-[#F8F8F8] sm:text-4xl">
              Entre em Contato
            </h2>
          </div>

          <div className="bg-[#222222] border border-[#333333] rounded-xl p-8 md:p-10 space-y-6 shadow-xl shadow-black/30">
            <p className="text-base sm:text-lg text-[#A0A0A0] leading-relaxed max-w-xl mx-auto">
              Estou sempre aberto a novas oportunidades, colaborações em projetos desafiadores ou uma boa conversa sobre tecnologia.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={`mailto:${socialLinks.email}`}
                aria-label={`Enviar e-mail para ${name}`}
                className="inline-flex items-center justify-center rounded-lg bg-[#6D83F2] px-8 py-3.5 text-base font-semibold text-white shadow-md shadow-[#6D83F2]/20 transition-all duration-200 hover:bg-[#586ee0] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6D83F2]"
              >
                Enviar E-mail
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil do LinkedIn"
                className="inline-flex items-center justify-center rounded-lg border border-[#333333] bg-[#222222] px-6 py-3.5 text-sm font-medium text-[#F8F8F8] transition-all duration-200 hover:border-[#6D83F2] hover:text-[#6D83F2] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6D83F2]"
              >
                LinkedIn
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil do GitHub"
                className="inline-flex items-center justify-center rounded-lg border border-[#333333] bg-[#222222] px-6 py-3.5 text-sm font-medium text-[#F8F8F8] transition-all duration-200 hover:border-[#6D83F2] hover:text-[#6D83F2] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6D83F2]"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer
        role="contentinfo"
        className="w-full border-t border-[#333333] bg-[#191919] py-8 px-6 text-center text-sm text-[#A0A0A0]"
      >
        <div className="max-w-4xl mx-auto space-y-2">
          <p>
            © {currentYear} <span className="text-[#F8F8F8] font-medium">{name}</span>. Todos os direitos reservados.
          </p>
          <p className="text-xs text-[#A0A0A0]/80">
            Desenvolvido com <span className="text-[#6D83F2]">React</span>, <span className="text-[#6D83F2]">TypeScript</span> e <span className="text-[#6D83F2]">Tailwind CSS</span>.
          </p>
        </div>
      </footer>
    </>
  )
}
