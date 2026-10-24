# Portfolio - Diretrizes e Arquitetura

## 1. Visão Geral
Landing page pessoal e profissional contendo: Hero (Home), Sobre Mim, Projetos em Destaque e Contato.
O objetivo é performance máxima, código limpo, acessibilidade (a11y) e boas práticas de engenharia.

## 2. Stack Tecnológica
- **Build Tool:** Vite
- **UI:** React 19+
- **Linguagem:** TypeScript (strict mode ativado, zero `any`)
- **Estilização:** Tailwind CSS v4+
- **Ícones:** Lucide React
- **Testes:** Vitest + React Testing Library

## 3. Estrutura de Diretórios
```text
src/
├── components/          # Componentes reutilizáveis (Navbar, Footer, Button, Card)
│   └── ui/              # Componentes atômicos
├── sections/            # Seções da landing page (Hero, About, Projects, Contact)
├── data/                # Dados estáticos tipados (projetos, links, bio)
├── types/               # Definições de tipos TypeScript
└── tests/               # Testes unitários e de integração

```

## 4. Regras e Restrições para o Agente (IA)
1. **TDD / Testes Primeiro:** Nenhuma seção ou componente de lógica/apresentação de dados deve ser implementado sem antes termos um arquivo de teste correspondente no Vitest.
2. **Dados Desacoplados:** Não coloque conteúdo chumbado (hardcoded) direto no JSX dos componentes. Todo dado deve vir de `src/data/` com tipagem estrita definida em `src/types/`.
3. **TypeScript Estrito:** Não use `any` ou type assertions forçadas (`as unknown as ...`). Defina interfaces explícitas para cada entidade.
4. **Sem Pacotes Extras sem Permissão:** Não execute `npm i` ou adicione bibliotecas externas sem pedir autorização explícita e justificar a necessidade técnica.
5. **Acessibilidade (a11y):** Botões, links externos e formulários devem conter tags semânticas e atributos `aria-*` adequados.
6. **Spec-Driven Development (SDD):** Toda implementação deve ser precedida por uma especificação técnica aprovada na pasta `specs/`. O agente deve ler a spec correspondente antes de gerar testes e código, tratando os "Critérios de Aceite" como a definição estrita de conclusão.

## 5. Diretrizes de Design & Paleta (Tema Radical / Anurag Hazra)
- **Fundo da página:** `bg-[#141321]`
- **Cards e contêineres:** `bg-[#1a1829] border border-[#27253d]`
- **Tipografia:** 
  - Títulos: `text-[#f0efff] font-bold tracking-tight`
  - Textos de apoio / bio: `text-[#a9a6c6] leading-relaxed`
- **Acentos e Botões:**
  - Botão Primário (CTA): `bg-[#fe428e] text-white hover:bg-[#e03178] font-medium shadow-md shadow-[#fe428e]/20`
  - Botão Secundário / Links de Redes: `bg-[#1a1829] border border-[#27253d] text-[#f0efff] hover:border-[#fe428e] hover:text-[#fe428e] transition-all`
  - Badges de tecnologias: `bg-[#00e8c6]/10 text-[#00e8c6] border border-[#00e8c6]/20 text-xs px-2.5 py-1 rounded-full`