# Spec 04: Seção de Contato e Rodapé (ContactSection & Footer)

**Status:** Concluído (Testes passando)

## 1. Objetivo
Disponibilizar os canais diretos de comunicação e conexões profissionais de Rafael Rodrigues sob a âncora `#contact`, além de fornecer um rodapé semântico (`<footer>`) com informações de autoria e stack técnica do portfólio.

## 2. Contratos & Tipos
- **Tipagem:** [`ProfileInfo`](file:///C:/dev/projects/Portfolio-rafael/src/types/index.ts) definida em `src/types/index.ts`:
  - `name`: string
  - `role`: string
  - `socialLinks`: objeto com `email`, `linkedin` e `github`.
- **Fonte de Dados:** [`profileData`](file:///C:/dev/projects/Portfolio-rafael/src/data/profile.ts) importada de `src/data/profile.ts`.
- **Componentes:**
  - `src/sections/ContactSection.tsx`: Seção principal de contato (`<section id="contact">`) integrando o rodapé (`<footer>`).

## 3. Requisitos Funcionais
- [x] Âncora de navegação e identificador com `id="contact"` e acessibilidade via `aria-label="Contato"`.
- [x] Heading de nível 2 (`<h2>`) com o título da seção (ex.: "Entre em Contato").
- [x] Card de chamada para ação direta contendo link `mailto:` direcionando para `profileData.socialLinks.email`.
- [x] Links sociais profissionais para:
  - LinkedIn (`profileData.socialLinks.linkedin`)
  - GitHub (`profileData.socialLinks.github`)
- [x] Rodapé semântico (`<footer>`):
  - Informações de copyright/autoria contendo o nome do desenvolvedor (`profileData.name`).
  - Menção às principais tecnologias utilizadas no desenvolvimento do portfólio (React, TypeScript, Tailwind CSS).

## 4. Requisitos Não-Funcionais, Design & Acessibilidade (a11y)
- **Estrutura & Semântica:**
  - Seção estruturada com `<section id="contact" aria-label="Contato">`.
  - Links externos configurados obrigatoriamente com `target="_blank"`, `rel="noreferrer noopener"` e atributos `aria-label` descritivos (ex.: `"Perfil do LinkedIn"`, `"Perfil do GitHub"`).
  - Link de envio de e-mail com protocolo `mailto:` e `aria-label="Enviar e-mail para Rafael Rodrigues"`.
  - Elemento semântico `<footer>` com `role="contentinfo"`.
- **Design & Paleta Radical:**
  - **Container da Seção:** `max-w-4xl mx-auto px-6 py-20 md:py-28 text-center`.
  - **Card de Contato:** `bg-[#1a1829] border border-[#27253d] rounded-xl p-8 md:p-10 space-y-6 shadow-xl shadow-black/30`.
  - **Tipografia:**
    - Título da seção (`h2`): `text-[#f0efff] font-bold tracking-tight text-3xl sm:text-4xl`.
    - Textos de apoio/descrição: `text-[#a9a6c6] text-base sm:text-lg leading-relaxed max-w-xl mx-auto`.
  - **Botão Principal de E-mail:**
    - `bg-[#fe428e] text-white hover:bg-[#e03178] px-8 py-3.5 rounded-lg text-base font-medium shadow-lg shadow-[#fe428e]/25 transition-all duration-200 active:scale-95 inline-flex items-center gap-2`.
  - **Botões/Links Secundários de Redes Sociais:**
    - `bg-[#141321] border border-[#27253d] text-[#f0efff] hover:border-[#fe428e] hover:text-[#fe428e] px-6 py-3.5 rounded-lg text-sm font-medium transition-all duration-200 active:scale-95 inline-flex items-center gap-2`.
  - **Rodapé (`<footer>`):**
    - `border-t border-[#27253d] bg-[#141321] py-8 px-6 text-center text-sm text-[#a9a6c6] space-y-2`.
    - Menção de tecnologias com destaque: `<span className="text-[#00e8c6]">`.
- **Responsividade:**
  - Layout centralizado e fluido adaptado para qualquer resolução móvel ou desktop.

## 5. Critérios de Aceite (Definição para Vitest & React Testing Library)
1. **Identificação da Seção e Acessibilidade:**
   - Deve renderizar uma tag `<section>` com `id="contact"` e acessível pelo `role="region"` com nome associado a `/contato/i`.
   - Deve renderizar um heading de nível 2 (`<h2>`) com texto contendo `/contato/i`.
2. **Canais de Contato Direto e Links:**
   - Deve renderizar um link para o envio de e-mail com o atributo `href` igual a `mailto:${profileData.socialLinks.email}` e atributo `aria-label` descritivo.
   - Deve renderizar os links externos para LinkedIn e GitHub com `target="_blank"`, `rel` contendo `noreferrer` e atributos `aria-label` descritivos.
3. **Rodapé Semântico (Footer):**
   - Deve renderizar uma tag semântica `<footer>` acessível pelo `role="contentinfo"`.
   - Deve conter no rodapé o nome do profissional (`profileData.name`) e a menção às tecnologias principais (`React`, `TypeScript`, `Tailwind CSS`).
