import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import StickyNav from './components/StickyNav'

export default function App() {
  return (
    <div style={{ backgroundColor: '#000', color: '#edeadb', fontFamily: 'Figtree, system-ui, sans-serif' }}>
      <StickyNav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
    </div>
  )
}
