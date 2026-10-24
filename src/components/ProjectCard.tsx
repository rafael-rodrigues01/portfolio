import React from 'react'
import type { Project } from '../types'

interface ProjectCardProps {
  project: Project
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, tags, githubUrl, liveUrl } = project

  return (
    <article className="flex flex-col justify-between rounded-xl border border-[#27253d] bg-[#1a1829] p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:border-[#fe428e]/50">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold tracking-tight text-[#f0efff]">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-[#a9a6c6]">
          {description}
        </p>

        <ul className="flex flex-wrap gap-2 pt-1" aria-label={`Tecnologias utilizadas no ${title}`}>
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-[#00e8c6]/20 bg-[#00e8c6]/10 px-2.5 py-1 text-xs font-medium text-[#00e8c6]"
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
          className="inline-flex items-center justify-center rounded-lg border border-[#27253d] bg-[#141321] px-4 py-2 text-sm font-medium text-[#f0efff] transition-all duration-200 hover:border-[#fe428e] hover:text-[#fe428e] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fe428e]"
        >
          Código Fonte
        </a>

        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver demo ao vivo do projeto ${title}`}
            className="inline-flex items-center justify-center rounded-lg bg-[#fe428e] px-4 py-2 text-sm font-medium text-white shadow-md shadow-[#fe428e]/20 transition-all duration-200 hover:bg-[#e03178] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fe428e]"
          >
            Demo ao Vivo
          </a>
        )}
      </div>
    </article>
  )
}
