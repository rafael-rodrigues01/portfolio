Os testes da Spec 02 falharam pelo motivo correto (fase RED concluída). Agora vamos para a fase GREEN:

Consulte specs/02-about-section.md e as diretrizes do AGENTS.md.

Crie o componente src/sections/AboutSection.tsx implementando:

Tag <section id="about" aria-label="Sobre Mim">.

Heading <h2> com o título "Sobre Mim".

Parágrafo(s) consumindo profileData.aboutBio.

Heading <h3> para a seção de habilidades (ex.: "Tecnologias & Ferramentas").

Lista semântica (<ul> e <li>) iterando sobre profileData.skills com badges estilizadas.

Aplique a paleta Radical:

Card container: bg-[#1a1829] border border-[#27253d] rounded-xl p-6 md:p-8.

Títulos em #f0efff e corpo de texto em #a9a6c6.

Badges de skills em bg-[#00e8c6]/10 text-[#00e8c6] border border-[#00e8c6]/20.

Execute npm test -- --run para garantir que tanto os testes da Spec 01 quanto da Spec 02 passem 100% em verde.

Atualize o cabeçalho de specs/02-about-section.md para **Status:** Concluído (Testes passando).