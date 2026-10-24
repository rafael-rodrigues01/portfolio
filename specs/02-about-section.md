# Spec 02: Seção Sobre Mim (AboutSection)

**Status:** Concluído (Testes passando)

## 1. Objetivo
Apresentar informações detalhadas sobre a trajetória, formação e foco profissional de Rafael Rodrigues, além de exibir as principais competências técnicas / stack tecnológica de forma visual, estruturada e acessível, mapeada para a âncora `#about`.

## 2. Contratos & Tipos
- **Tipagem:** [`ProfileInfo`](file:///C:/dev/projects/Portfolio-rafael/src/types/index.ts) definida em `src/types/index.ts`, contemplando os campos:
  - `aboutBio`: string contendo a biografia expandida (ou array de parágrafos/blocos de texto para formatação semântica).
  - `skills`: array de strings (`string[]`) contendo as competências e tecnologias da stack principal (ex.: React, TypeScript, Tailwind CSS, Node.js, etc.).
- **Fonte de Dados:** [`profileData`](file:///C:/dev/projects/Portfolio-rafael/src/data/profile.ts) importada de `src/data/profile.ts`.

## 3. Requisitos Funcionais
- [ ] Conter a âncora de navegação e identificador com `id="about"`.
- [ ] Exibir o título da seção através de um heading semântico `<h2>` (ex.: "Sobre Mim").
- [ ] Renderizar o conteúdo da biografia expandida a partir de `profileData.aboutBio` (ou estrutura equivalente desacoplada).
- [ ] Renderizar a lista de competências técnicas / stack a partir de `profileData.skills` em formato de lista ou grid de badges/cards.

## 4. Requisitos Não-Funcionais, Design & Acessibilidade (a11y)
- **Estrutura & Semântica:**
  - Seção envolvida em tag `<section id="about" aria-label="Sobre Mim">`.
  - Heading de nível 2 (`<h2>`) para o título da seção.
  - Subtítulo ou heading `<h3>` para a seção de competências (ex.: "Tecnologias & Ferramentas").
  - A lista de habilidades deve utilizar elementos semânticos de lista (`<ul>` e `<li>`) para suporte adequado a leitores de tela.
- **Design & Paleta (Tema Radical):**
  - **Container:** `max-w-4xl mx-auto px-6 py-20 md:py-28`.
  - **Cards & Contêineres:** `bg-[#1a1829] border border-[#27253d] rounded-xl p-6 md:p-8`.
  - **Tipografia:**
    - Título da seção: `text-[#f0efff] font-bold tracking-tight text-3xl sm:text-4xl`.
    - Textos da biografia: `text-[#a9a6c6] leading-relaxed text-base sm:text-lg space-y-4`.
    - Título do bloco de habilidades: `text-[#f0efff] font-semibold text-xl`.
  - **Badges de Tecnologias:**
    - `bg-[#00e8c6]/10 text-[#00e8c6] border border-[#00e8c6]/20 text-xs sm:text-sm px-3 py-1.5 rounded-full font-medium transition-all hover:border-[#00e8c6]/50`.
- **Responsividade:**
  - Layout mobile-first fluido com espaçamentos proporcionais em resoluções móveis e desktops (`sm:`, `md:`, `lg:`).

## 5. Critérios de Aceite (Definição para Vitest & React Testing Library)
1. **Identificação da Seção e Acessibilidade:**
   - Deve renderizar uma tag `<section>` com `id="about"` e acessível pelo `role="region"` com nome associado a "Sobre Mim" (`aria-label="Sobre Mim"`).
   - Deve renderizar um heading de nível 2 (`<h2>`) com o texto "Sobre Mim" (case-insensitive).
2. **Renderização de Biografia:**
   - Deve renderizar o texto correspondente à biografia detalhada (`aboutBio`) proveniente de `profileData`.
3. **Renderização de Competências (Skills):**
   - Deve renderizar cada item presente na lista `profileData.skills` dentro de elementos semânticos de lista (`<li>`), contendo o nome exato da tecnologia.
   - Deve conter um heading acessível de nível 3 (`<h3>`) identificando a seção de habilidades/stack.
