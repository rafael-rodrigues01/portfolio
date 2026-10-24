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

## 5. Diretrizes de Design & Paleta (Modern Dark / Slate-Indigo)
- **Fundo da página:** `bg-[#191919]`
- **Cards e contêineres:** `bg-[#222222] border border-[#333333]`
- **Tipografia:** Fonte Montserrat. Títulos em `text-[#F8F8F8] font-bold`, textos de apoio em `text-[#A0A0A0] leading-relaxed`.
- **Botões Primários (CTA):** `bg-[#6D83F2] text-white hover:bg-[#586ee0] transition-all duration-200 active:scale-95 shadow-md shadow-[#6D83F2]/20`
- **Botões Secundários / Redes:** `bg-[#222222] border border-[#333333] text-[#F8F8F8] hover:border-[#6D83F2] hover:text-[#6D83F2] transition-all duration-200`
- **Badges de Tecnologias:** `bg-[#6D83F2]/10 text-[#6D83F2] border border-[#6D83F2]/20 text-xs px-2.5 py-1 rounded-full font-medium`