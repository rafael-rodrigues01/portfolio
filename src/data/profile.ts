import type { ProfileInfo, Project } from '../types'

export const profileData: ProfileInfo = {
  name: 'Rafael Rodrigues',
  role: 'Desenvolvedor Frontend / Full Stack',
  bio: 'Construindo aplicações web modernas, acessíveis e escaláveis com foco em engenharia limpa.',
  location: 'Brasil',
  socialLinks: {
    github: 'https://github.com/rafael-rodrigues01',
    linkedin: 'https://www.linkedin.com/in/rafaelrodriguesdev/',
    email: 'rahrodrigues.dev@gmail.com',
  },
}

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Projeto 1',
    description: 'Breve descrição técnica do problema e solução do projeto 1.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/seu-usuario/projeto-1',
    liveUrl: 'https://projeto1.dev',
    featured: true,
  },
]