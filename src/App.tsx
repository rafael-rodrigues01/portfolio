import { Navbar } from './components/Navbar'
import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { ContactSection } from './sections/ContactSection'

function App() {
  return (
    <main className="min-h-screen bg-[#141321] text-[#f0efff] selection:bg-[#fe428e]/30 selection:text-[#fe428e]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}

export default App
