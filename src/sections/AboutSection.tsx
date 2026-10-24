import React from 'react'
import { profileData } from '../data/profile'

export const AboutSection: React.FC = () => {
  const { aboutBio, skills } = profileData

  return (
    <section
      id="about"
      aria-label="Sobre Mim"
      className="flex flex-col items-center justify-center py-20 px-6 md:py-28"
    >
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <div className="space-y-3">
          <p className="text-sm font-medium tracking-widest text-[#fe428e] uppercase">
            Conheça mais
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#f0efff] sm:text-4xl">
            Sobre Mim
          </h2>
        </div>

        <div className="bg-[#1a1829] border border-[#27253d] rounded-xl p-6 md:p-8 space-y-6">
          <p className="text-base text-[#a9a6c6] leading-relaxed sm:text-lg">
            {aboutBio}
          </p>

          <div className="space-y-4 pt-4 border-t border-[#27253d]">
            <h3 className="text-xl font-semibold text-[#f0efff]">
              Tecnologias & Ferramentas
            </h3>

            <ul className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="bg-[#00e8c6]/10 text-[#00e8c6] border border-[#00e8c6]/20 text-xs sm:text-sm px-3 py-1.5 rounded-full font-medium transition-all hover:border-[#00e8c6]/50"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
