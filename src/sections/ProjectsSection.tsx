import React from 'react'
import { projectsData } from '../data/profile'
import { ProjectCard } from '../components/ProjectCard'

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      aria-label="Projetos em Destaque"
      className="flex flex-col items-center justify-center py-20 px-6 md:py-28"
    >
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <div className="space-y-3">
          <p className="text-sm font-medium tracking-widest text-[#6D83F2] uppercase">
            Meu Portfólio
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#F8F8F8] sm:text-4xl">
            Projetos em Destaque
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
