# Spec 01: Seção Principal (HeroSection)

## 1. Objetivo
Apresentar o profissional logo no topo da página (Hero), estabelecendo a primeira impressão com apresentação clara de identidade (nome, cargo e bio resumida), canais de redes sociais e chamadas para ação principais direcionando o usuário para as seções de projetos e contato.

## 2. Contratos & Tipos
- Utiliza a tipagem [`ProfileInfo`](file:///C:/dev/projects/Portfolio-rafael/src/types/index.ts) definida em `src/types/index.ts`.
- Fonte de dados única: [`profileData`](file:///C:/dev/projects/Portfolio-rafael/src/data/profile.ts) importada de `src/data/profile.ts`.

## 3. Requisitos Funcionais
- [ ] Renderizar o nome do profissional em destaque através de uma tag semântica `<h1>`.
- [ ] Exibir o cargo / especialidade profissional.
- [ ] Exibir a biografia resumida.
- [ ] Renderizar botões / links de chamada para ação (CTA):
  - Botão "Ver Projetos" apontando para a âncora `#projects`.
  - Botão "Contato" apontando para a âncora `#contact` (ou link de e-mail/contato conforme configurado).
- [ ] Renderizar links das redes sociais a partir de `profileData.socialLinks`:
  - GitHub (`socialLinks.github`)
  - LinkedIn (`socialLinks.linkedin`)
  - E-mail (`socialLinks.email`, com prefixo `mailto:` ou link direto correspondente)

## 4. Requisitos Não-Funcionais, Layout & Acessibilidade (a11y)
- **Acessibilidade:**
  - O título principal deve usar a tag semântica `<h1>`.
  - Links externos para redes sociais devem conter `target="_blank"`, `rel="noreferrer noopener"` e atributo `aria-label` descritivo (ex.: `"Acessar perfil no GitHub de [Nome]"` e `"Acessar perfil no LinkedIn de [Nome]"`).
  - O link de e-mail deve possuir `aria-label="Enviar e-mail para [Nome]"`.
  - Botões/links de ação rápida devem ter textos explícitos ou atributos acessíveis.
- **Responsividade & Tailwind CSS:**
  - Layout adaptável: alinhamento centralizado ou limpo em telas menores (mobile) e espaçamento/alinhamento fluido em telas maiores (`md:`, `lg:`).
  - Utilização de classes utilitárias modernas do Tailwind CSS v4 sem valores fixos arbitrários que quebrem o viewport.

## 5. Critérios de Aceite (Testes Obrigatórios com Vitest & RTL)
1. **Renderização de Dados:**
   - Deve renderizar com sucesso o nome contido em `profileData.name` dentro de um heading de nível 1 (`<h1>`).
   - Deve exibir o cargo (`profileData.role`) e o resumo da bio (`profileData.bio`).
2. **Ações de Navegação (CTAs):**
   - Deve conter um link/botão "Ver Projetos" com `href="#projects"`.
   - Deve conter um link/botão "Contato" com `href="#contact"` (ou link correspondente da seção de contato).
3. **Links Sociais e Acessibilidade:**
   - Deve renderizar os links de GitHub e LinkedIn com suas respectivas URLs configuradas em `profileData.socialLinks`.
   - Links externos devem possuir `target="_blank"`, `rel="noreferrer noopener"` e atributo `aria-label` descritivo para leitores de tela.
   - Deve renderizar o link de e-mail com prefixo `mailto:` apontando para o e-mail cadastrado.
