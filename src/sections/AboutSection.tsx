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
          <p className="text-sm font-medium tracking-widest text-[#6D83F2] uppercase">
            Conheça mais
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#F8F8F8] sm:text-4xl">
            Sobre Mim
          </h2>
        </div>

        <div className="bg-[#222222] border border-[#333333] rounded-xl p-6 md:p-8 space-y-6">
          <p className="text-base text-[#A0A0A0] leading-relaxed sm:text-lg">
            {aboutBio}
          </p>

          <div className="space-y-4 pt-4 border-t border-[#333333]">
            <h3 className="text-xl font-semibold text-[#F8F8F8]">
              Tecnologias & Ferramentas
            </h3>

            <ul className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="bg-[#6D83F2]/10 text-[#6D83F2] border border-[#6D83F2]/20 text-xs sm:text-sm px-3 py-1.5 rounded-full font-medium transition-all hover:border-[#6D83F2]/50"
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
