import React from 'react'
import type { Project } from '../types'

interface ProjectCardProps {
  project: Project
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, tags, githubUrl, liveUrl } = project

  return (
    <article className="flex flex-col justify-between rounded-xl border border-[#333333] bg-[#222222] p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:border-[#6D83F2]/50">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold tracking-tight text-[#F8F8F8]">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-[#A0A0A0]">
          {description}
        </p>

        <ul className="flex flex-wrap gap-2 pt-1" aria-label={`Tecnologias utilizadas no ${title}`}>
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-[#6D83F2]/20 bg-[#6D83F2]/10 px-2.5 py-1 text-xs font-medium text-[#6D83F2]"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-6">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver código fonte do projeto ${title}`}
          className="inline-flex items-center justify-center rounded-lg border border-[#333333] bg-[#222222] px-4 py-2 text-sm font-medium text-[#F8F8F8] transition-all duration-200 hover:border-[#6D83F2] hover:text-[#6D83F2] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6D83F2]"
        >
          Código Fonte
        </a>

        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver demo ao vivo do projeto ${title}`}
            className="inline-flex items-center justify-center rounded-lg bg-[#6D83F2] px-4 py-2 text-sm font-medium text-white shadow-md shadow-[#6D83F2]/20 transition-all duration-200 hover:bg-[#586ee0] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6D83F2]"
          >
            Demo ao Vivo
          </a>
        )}
      </div>
    </article>
  )
}
