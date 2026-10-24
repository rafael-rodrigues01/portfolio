A Spec 03 está totalmente concluída e commitada. Seguindo o fluxo de SDD e as diretrizes do AGENTS.md:

Redija o arquivo specs/04-contact-section.md para a ContactSection (âncora #contact) e rodapé (footer). A especificação deve cobrir:

Consumo dos links sociais e dados de contato a partir de src/data/profile.ts (socialLinks, name e role).

Container semântico <section id="contact" aria-label="Contato"> com heading <h2> acessível.

Canais de contato direto:

Botão/card de destaque com link mailto: para envio de e-mail e aria-label descritivo.

Links externos para perfis profissionais (LinkedIn, GitHub) com target="_blank", rel="noreferrer noopener" e rótulos acessíveis.

Rodapé semântico (<footer>):

Texto de copyright dinâmico ou semântico com o nome do desenvolvedor.

Indicação técnica da stack (React, TypeScript, Tailwind CSS).

Design e Paleta Radical:

Container alinhado com max-w-4xl mx-auto px-6 py-20 md:py-28.

Card de destaque em bg-[#1a1829] border border-[#27253d] rounded-xl p-8.

Botão de e-mail com destaque em magenta (bg-[#fe428e]).

Critérios de Aceite para Vitest e React Testing Library cobrindo semântica, acessibilidade de links externos e funcionamento do esquema mailto: