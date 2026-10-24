# Spec 05: Barra de Navegação (Navbar)

**Status:** Concluído (Testes passando)

## 1. Objetivo
Fornecer um cabeçalho fixo com navegação global acessível, permitindo ao usuário navegar rapidamente entre as seções da landing page ("Sobre Mim", "Projetos em Destaque" e "Contato") ou retornar ao topo, mantendo consistência visual e usabilidade em desktop e dispositivos móveis.

## 2. Contratos & Tipos
- **Fonte de Dados:** Consumo opcional ou direto de `profileData.name` de `src/data/profile.ts` para o logotipo / identificação visual à esquerda.
- **Componente:** `src/components/Navbar.tsx` posicionado no topo da composição principal em `src/App.tsx`.

## 3. Requisitos Funcionais
- [ ] Conter elemento semântico `<nav>` com atributo de acessibilidade `aria-label="Navegação principal"`.
- [ ] Exibir identificação do desenvolvedor / logotipo à esquerda, apontando para o topo (`#` ou `#hero`).
- [ ] Conter links de navegação para todas as seções mapeadas:
  - Link **"Sobre"** direcionando para `#about`.
  - Link **"Projetos"** direcionando para `#projects`.
  - Link **"Contato"** direcionando para `#contact`.

## 4. Requisitos Não-Funcionais, Design & Acessibilidade (a11y)
- **Estrutura & Semântica:**
  - Tag semântica `<header>` envolvendo a tag `<nav aria-label="Navegação principal">`.
  - Links com elementos âncora `<a>` nativos e semânticos.
  - Suporte completo a navegação por teclado com anéis de foco visíveis (`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fe428e]`).
- **Posicionamento & Estilo (Tema Radical):**
  - **Fixação no Topo:** `sticky top-0 z-50 w-full backdrop-blur-md bg-[#141321]/80 border-b border-[#27253d] transition-all`.
  - **Container Interno:** `max-w-4xl mx-auto px-6 h-16 flex items-center justify-between`.
  - **Logo / Identificação:** `font-bold tracking-tight text-[#f0efff] hover:text-[#fe428e] transition-colors`.
  - **Links de Navegação:**
    - Texto: `text-sm font-medium text-[#a9a6c6] hover:text-[#fe428e] transition-colors`.
    - Espaçamento: `flex items-center gap-6`.
- **Responsividade:**
  - Layout compacto e fluido que se adapta confortavelmente a larguras mobile e desktop.

## 5. Critérios de Aceite (Definição para Vitest & React Testing Library)
1. **Identificação e Semântica de Navegação:**
   - Deve renderizar uma tag `<nav>` acessível pelo `role="navigation"` com o nome acessível "Navegação principal" (`aria-label="Navegação principal"`).
2. **Presença dos Links de Navegação:**
   - Deve renderizar um link para "Sobre" contendo o atributo `href="#about"`.
   - Deve renderizar um link para "Projetos" contendo o atributo `href="#projects"`.
   - Deve renderizar um link para "Contato" contendo o atributo `href="#contact"`.
3. **Identificação / Retorno ao Topo:**
   - Deve renderizar um link de logo/nome apontando para o topo (`#` ou `#hero`).
