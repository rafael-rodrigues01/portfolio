Os testes da Spec 05 falharam pelo motivo correto na fase RED. Agora vamos para a fase GREEN de implementação e integração:

Consulte specs/05-navbar-component.md e as diretrizes do AGENTS.md.

Crie o componente src/components/Navbar.tsx:

Envolvido em <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#141321]/80 border-b border-[#27253d] transition-all">.

Contendo elemento semântico <nav aria-label="Navegação principal"> com container centralizado (max-w-4xl mx-auto px-6 h-16 flex items-center justify-between).

Identificação à esquerda com link para o topo (href="#" ou href="#hero"), exibindo o nome de profileData.name ou inicial/logo, com text-[#f0efff] font-bold tracking-tight hover:text-[#fe428e].

Lista de links à direita em flex items-center gap-6:

Link 'Sobre' com href="#about".

Link 'Projetos' com href="#projects".

Link 'Contato' com href="#contact".

Estilos de texto: text-sm font-medium text-[#a9a6c6] hover:text-[#fe428e] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fe428e].

Integre o componente no topo do arquivo src/App.tsx, posicionando <Navbar/> imediatamente antes de <HeroSection/> dentro do container principal.

Execute npm test -- --run para garantir que todas as suítes (Specs 01 a 05) passem 100% em verde.

Atualize o cabeçalho de specs/05-navbar-component.md para **Status:** Concluído (Testes passando).

Execute npm run build para certificar que o build de produção do Vite compila perfeitamente sem falhas de tipo.