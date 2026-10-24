# Spec 03: Seção de Projetos em Destaque (ProjectsSection & ProjectCard)

**Status:** Concluído (Testes passando)

## 1. Objetivo
Apresentar de forma visual, organizada e acessível os principais projetos desenvolvidos por Rafael Rodrigues, mapeados para a âncora `#projects`. A seção destaca o valor técnico de cada trabalho (problema, solução e stack) e fornece pontos de acesso ao código fonte (GitHub) e versão de demonstração em produção (demo ao vivo), quando disponível.

## 2. Contratos & Tipos
- **Tipagem:** [`Project`](file:///C:/dev/projects/Portfolio-rafael/src/types/index.ts) definida em `src/types/index.ts`:
  ```typescript
  export interface Project {
    id: string
    title: string
    description: string
    tags: string[]
    githubUrl: string
    liveUrl?: string
    featured?: boolean
  }
  ```
- **Fonte de Dados:** [`projectsData`](file:///C:/dev/projects/Portfolio-rafael/src/data/profile.ts) importada de `src/data/profile.ts`.
- **Componentes:**
  - `src/sections/ProjectsSection.tsx`: Container da seção com âncora `#projects`, cabeçalho semântico e grid responsivo.
  - `src/components/ProjectCard.tsx`: Componente reutilizável de apresentação que recebe uma prop `project: Project`.

## 3. Requisitos Funcionais
- [ ] Âncora de navegação e container semântico com `id="projects"` e `aria-label="Projetos em Destaque"`.
- [ ] Heading de nível 2 (`<h2>`) com o título da seção (ex.: "Projetos em Destaque").
- [ ] Renderização de cada projeto contido em `projectsData` através do componente `ProjectCard`.
- [ ] Cada `ProjectCard` deve apresentar:
  - Título do projeto em heading acessível de nível 3 (`<h3>`).
  - Descrição técnica do problema/solução.
  - Badges com as tags tecnológicas (`tags`).
  - Link obrigatório para o repositório no GitHub (`githubUrl`).
  - Link opcional para demo ao vivo (`liveUrl`), renderizado **apenas** quando o campo estiver preenchido.

## 4. Requisitos Não-Funcionais, Design & Acessibilidade (a11y)
- **Estrutura & Semântica:**
  - Seção envolvida em `<section id="projects" aria-label="Projetos em Destaque">`.
  - Grid de projetos estruturado como lista semântica (`<ul>` e `<li>`) ou artigos semânticos (`<article>`) para garantir suporte ótimo a tecnologias assistivas.
  - Links externos configurados com `target="_blank"`, `rel="noreferrer noopener"` e atributos `aria-label` descritivos (ex.: `"Ver código fonte do {title}"` e `"Ver demo ao vivo do {title}"`).
- **Design & Paleta Radical:**
  - **Container da Seção:** `max-w-4xl mx-auto px-6 py-20 md:py-28`.
  - **Grid de Projetos:** `grid grid-cols-1 md:grid-cols-2 gap-6`.
  - **Card (`ProjectCard`):** `bg-[#1a1829] border border-[#27253d] rounded-xl p-6 flex flex-col justify-between hover:border-[#fe428e]/50 transition-all duration-300 shadow-lg shadow-black/20`.
  - **Tipografia:**
    - Título da seção (`h2`): `text-[#f0efff] font-bold tracking-tight text-3xl sm:text-4xl`.
    - Título do card (`h3`): `text-[#f0efff] font-semibold text-xl tracking-tight`.
    - Descrição: `text-[#a9a6c6] text-sm leading-relaxed`.
  - **Badges de Tecnologias:**
    - `bg-[#00e8c6]/10 text-[#00e8c6] border border-[#00e8c6]/20 text-xs px-2.5 py-1 rounded-full font-medium`.
  - **Links / Botões de Ação:**
    - Botão primário (Demo/Live): `bg-[#fe428e] text-white hover:bg-[#e03178] px-4 py-2 rounded-lg text-sm font-medium shadow-md shadow-[#fe428e]/20 transition-all active:scale-95`.
    - Botão secundário (Código GitHub): `bg-[#141321] border border-[#27253d] text-[#f0efff] hover:border-[#fe428e] hover:text-[#fe428e] px-4 py-2 rounded-lg text-sm font-medium transition-all active:scale-95`.
- **Responsividade:**
  - Mobile: coluna única fluida.
  - Desktop (`md:` e superior): grid de duas colunas alinhadas com altura consistente.

## 5. Critérios de Aceite (Definição para Vitest & React Testing Library)
1. **Identificação da Seção e Acessibilidade:**
   - Deve renderizar uma `<section>` acessível pelo `role="region"` com nome associado a `/projetos/i` e atributo `id="projects"`.
   - Deve conter um heading de nível 2 (`<h2>`) com texto contendo `/projetos em destaque/i`.
2. **Renderização de Dados e Cards:**
   - Deve renderizar todos os itens da coleção `projectsData`.
   - Cada item deve conter seu título em heading `<h3>`.
   - Cada item deve exibir sua descrição textual completa.
   - Cada tag da lista `tags` do projeto deve ser renderizada como elemento visível.
3. **Links e Comportamento Condicional:**
   - O link para o GitHub deve existir em todos os cards, possuir o `href` correto (`githubUrl`), `target="_blank"`, `rel` contendo `noreferrer` e nome acessível claro.
   - Se o projeto possuir `liveUrl`, o link para demo ao vivo deve ser renderizado com `target="_blank"`, `rel` contendo `noreferrer` e nome acessível claro.
   - Se o projeto **não** possuir `liveUrl`, o link de demo ao vivo **não** deve ser renderizado no DOM daquele card.
