# Spec 01: Seção Principal (HeroSection)

**Status:** Concluído (Testes passando)

## 1. Objetivo
Apresentar o profissional no topo da página (Hero), estabelecendo a primeira impressão através de identificação clara (nome, cargo e bio resumida), canais de redes sociais, chamadas para ação (CTAs) e um card interativo com estética de código/editor (`CodeCard`) posicionado ao lado direito em telas médias/grandes (desktop/tablet landscape).

## 2. Contratos & Tipos
- **Tipagem:** [`ProfileInfo`](file:///C:/dev/projects/Portfolio-rafael/src/types/index.ts) definida em `src/types/index.ts`.
- **Fonte de Dados:** [`profileData`](file:///C:/dev/projects/Portfolio-rafael/src/data/profile.ts) importada de `src/data/profile.ts`.
- **Componente Auxiliar:** [`CodeCard`](file:///C:/dev/projects/Portfolio-rafael/src/components/CodeCard.tsx) em `src/components/CodeCard.tsx`.
  - *Nota Técnica / Regra AGENTS.md:* Para cumprir a regra de "Dados Desacoplados", dados como `name`, `role`, `focus` e `mindset` exibidos no card devem idealmente ser fornecidos via props tipadas ou integrados com `src/data/profile.ts` em vez de ficarem chumbados, ou o card deve receber props tipadas opcionais/obrigatórias.

## 3. Requisitos Funcionais
- [x] Exibir o nome do profissional em destaque através de uma tag semântica `<h1>` utilizando `profileData.name`.
- [x] Exibir o cargo / especialidade profissional utilizando `profileData.role`.
- [x] Exibir a biografia resumida utilizando `profileData.bio`.
- [x] Renderizar botões de Chamada para Ação (CTA):
  - Botão / link **"Ver Projetos"** direcionando para a âncora `#projects`.
  - Botão / link **"Contato"** direcionando para a âncora `#contact`.
- [x] Renderizar links acessíveis para as redes sociais a partir de `profileData.socialLinks`:
  - GitHub (`socialLinks.github`)
  - LinkedIn (`socialLinks.linkedin`)
  - E-mail (`socialLinks.email`) com link `mailto:`
- [x] Renderizar o componente [`CodeCard`](file:///C:/dev/projects/Portfolio-rafael/src/components/CodeCard.tsx) posicionado à direita do conteúdo textual em layouts desktop/telas médias a grandes.

## 4. Requisitos Não-Funcionais, Layout & Acessibilidade (a11y)
- **Acessibilidade (a11y):**
  - Título principal estruturado com elemento semântico `<h1>`.
  - Links externos para redes sociais devem conter `target="_blank"`, `rel="noreferrer noopener"` e atributos `aria-label` descritivos (ex.: `"Perfil do GitHub"`, `"Perfil do LinkedIn"`).
  - Link de e-mail deve possuir `aria-label="Enviar e-mail"` e esquema de URL `mailto:`.
  - Links/botões de CTA com textos claros e foco visual navegável por teclado.
  - O elemento visual do `CodeCard` deve possuir estrutura semântica ou rótulo acessível (`aria-label` / `role="region"` ou informativo complementar) sem prejudicar usuários de leitores de tela.
- **Responsividade & Layout (Grid / Flex 2 Colunas):**
  - **Mobile (< 1024px / lg):** Layout empilhado (coluna única), com o conteúdo principal (apresentação, CTA, links) seguido ou antecedido pelo `CodeCard`, ou centralizado com espaçamento fluido.
  - **Desktop (>= 1024px / lg):** Layout de duas colunas (ex: `grid lg:grid-cols-2` ou `flex lg:flex-row items-center justify-between`):
    - **Lado Esquerdo:** Conteúdo textual (saudação, nome em `h1`, cargo, bio, CTAs e links sociais alinhados à esquerda ou balanceados).
    - **Lado Direito:** Componente [`CodeCard`](file:///C:/dev/projects/Portfolio-rafael/src/components/CodeCard.tsx) centralizado/alinhado à direita dentro do contêiner.
- **Design & Tailwind CSS v4:**
  - Paleta alinhada ao AGENTS.md (`bg-[#191919]`, `bg-[#222222]`, `border-[#333333]`, destaque `#6D83F2`, texto `#F8F8F8` e `#A0A0A0`).

## 5. Critérios de Aceite (Definição para Vitest & React Testing Library)
1. **Renderização de Dados Textuais:**
   - Deve renderizar o nome definido em `profileData.name` dentro de uma tag `<h1>`.
   - Deve renderizar o texto correspondente a `profileData.role`.
   - Deve renderizar o texto correspondente a `profileData.bio`.
2. **Botões de Ação (CTAs):**
   - Deve renderizar um link com texto legível "Ver Projetos" e atributo `href="#projects"`.
   - Deve renderizar um link com texto legível "Contato" e atributo `href="#contact"`.
3. **Links Sociais e Acessibilidade:**
   - Deve renderizar o link para o GitHub com o atributo `href` igual a `profileData.socialLinks.github`, contendo `target="_blank"`, `rel="noreferrer noopener"` e `aria-label`.
   - Deve renderizar o link para o LinkedIn com o atributo `href` igual a `profileData.socialLinks.linkedin`, contendo `target="_blank"`, `rel="noreferrer noopener"` e `aria-label`.
   - Deve renderizar o link de e-mail com o atributo `href` igual a `mailto:${profileData.socialLinks.email}` e `aria-label`.
4. **Integração do CodeCard:**
   - Deve renderizar o componente `CodeCard` dentro da seção Hero.
   - O `CodeCard` deve estar contido na estrutura de duas colunas/layout à direita do bloco textual principal.
   - Garantir que elementos-chave ou identificador do card (ex.: texto de arquivo `portfolio.tsx`, status `ready to build` ou `testId`) estejam presentes no DOM dentro da seção.
