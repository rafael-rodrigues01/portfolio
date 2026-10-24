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
  aboutBio: 'Desenvolvedor focado na construção de interfaces modernas, arquiteturas resilientes e código limpo. Experiência prática no desenvolvimento de soluções completas, aplicando rigor de engenharia, acessibilidade e performance em cada entrega.',
  skills: [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'Next.js',
    'Vite',
    'Vitest',
    'Git',
    'Python',
    'Docker',
    'PostgreSQL',
  ],
}

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Plataforma de Monitoramento de Métricas',
    description: 'Dashboard interativo para visualização em tempo real de telemetria e métricas de infraestrutura, com arquitetura reativa e cache otimizado.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    githubUrl: 'https://github.com/rafael-rodrigues01/metrics-dashboard',
    liveUrl: 'https://metrics-dashboard.dev',
    featured: true,
  },
  {
    id: '2',
    title: 'Design System & Component Library',
    description: 'Biblioteca de componentes atômicos com conformidade estrita de acessibilidade (WCAG 2.1 AA), suporte a temas dinâmicos e testes automatizados.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vitest'],
    githubUrl: 'https://github.com/rafael-rodrigues01/radical-ui',
    liveUrl: 'https://radical-ui.dev',
    featured: true,
  },
  {
    id: '3',
    title: 'API de Gestão de Microsserviços',
    description: 'API escalável e resiliente construída para orquestração assíncrona de eventos, validação com tipagem estrita e persistência relacional.',
    tags: ['Node.js', 'TypeScript', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/rafael-rodrigues01/service-manager-api',
    featured: false,
  },
]
