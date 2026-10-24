import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { ProjectsSection } from './sections/ProjectsSection'

function App() {
  return (
    <main className="min-h-screen bg-[#141321] text-[#f0efff]">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  )
}

export default App
