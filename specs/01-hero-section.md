# Spec 01: Seção Principal (HeroSection)

**Status:** Concluído (Testes passando)

## 1. Objetivo
Apresentar o profissional no topo da página (Hero), estabelecendo a primeira impressão através de identificação clara (nome, cargo e bio resumida), canais de redes sociais e chamadas para ação (CTAs) que direcionem o usuário para as seções de projetos e contato.

## 2. Contratos & Tipos
- **Tipagem:** [`ProfileInfo`](file:///C:/dev/projects/Portfolio-rafael/src/types/index.ts) definida em `src/types/index.ts`.
- **Fonte de Dados:** [`profileData`](file:///C:/dev/projects/Portfolio-rafael/src/data/profile.ts) importada de `src/data/profile.ts`.

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

## 4. Requisitos Não-Funcionais, Layout & Acessibilidade (a11y)
- **Acessibilidade (a11y):**
  - Título principal estruturado com elemento semântico `<h1>`.
  - Links externos para redes sociais devem conter `target="_blank"`, `rel="noreferrer noopener"` e atributos `aria-label` descritivos (ex.: `"Perfil do GitHub"`, `"Perfil do LinkedIn"`).
  - Link de e-mail deve possuir `aria-label="Enviar e-mail"` e esquema de URL `mailto:`.
  - Links/botões de CTA com textos claros e foco visual navegável por teclado.
- **Responsividade & Tailwind CSS:**
  - Layout mobile-first, com alinhamento e espaçamentos fluidos para dispositivos móveis e desktops (`sm:`, `md:`, `lg:`).
  - Utilização de classes utilitárias do Tailwind CSS v4, mantendo estilo limpo e alta legibilidade.

## 5. Critérios de Aceite (Definição para Vitest & React Testing Library)
1. **Renderização de Dados:**
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
