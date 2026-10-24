import { Navbar } from './components/Navbar'
import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { ContactSection } from './sections/ContactSection'

function App() {
  return (
    <main className="min-h-screen bg-[#191919] text-[#F8F8F8] selection:bg-[#6D83F2]/30 selection:text-[#6D83F2]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}

export default App
