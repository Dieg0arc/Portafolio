import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import WordsPullUp from './WordsPullUp'

interface Project {
  number: string
  name: string
  description: string
  category: string
  stack: string[]
  url: string
  live?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    number: '01',
    name: 'WebTure',
    description: 'Sitio institucional para agencia de desarrollo colombiana con animaciones GSAP y diseño editorial responsivo.',
    category: 'Web · Agencia',
    stack: ['Astro', 'GSAP', 'Tailwind CSS'],
    url: 'https://github.com/Dieg0arc/WebTure',
    live: 'https://webture.vercel.app',
    featured: true,
  },
  {
    number: '02',
    name: 'HORUS',
    description: 'Modelos de visión por computador con redes convolucionales para clasificación de imágenes.',
    category: 'AI / ML · Research',
    stack: ['Python', 'Deep Learning', 'CNN'],
    url: 'https://github.com/Dieg0arc/HORUS',
  },
  {
    number: '03',
    name: 'Landing Sylva',
    description: 'Landing page de producto con animaciones scroll-driven y vitrina de bolsas compostables. Diseño natural y orgánico.',
    category: 'Web · Producto',
    stack: ['Astro', 'Scroll Animations', 'Tailwind CSS'],
    url: 'https://github.com/Dieg0arc/Landing-Sylva',
    live: 'https://landing-sylva.vercel.app',
  },
  {
    number: '04',
    name: 'Social-Cue',
    description: 'Red social académica de conocimiento: backend en Go, frontend en Nuxt3, base de datos MongoDB.',
    category: 'Full Stack · Académico',
    stack: ['Vue / Nuxt3', 'Go Echo', 'MongoDB'],
    url: 'https://github.com/Dieg0arc/Social-Cue',
  },
  {
    number: '05',
    name: 'Tibuchina Web',
    description: 'Página web institucional que muestra historia, misión, servicios y proyectos. Posiciona a la organización como referente ambiental y cultural.',
    category: 'Web · Institucional',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    url: 'https://github.com/Dieg0arc/Tibuchina-Web',
    live: 'https://tibuchina.vercel.app',
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className={project.featured ? 'project-featured' : ''}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        backgroundColor: '#181612',
        borderRadius: '1rem',
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        position: 'relative',
        border: '1px solid #2c2924',
        gridColumn: project.featured ? 'span 2' : 'span 1',
        transition: 'border-color 0.3s',
        cursor: 'default',
      }}
      whileHover={{ borderColor: 'rgba(200, 144, 58, 0.3)' }}
    >
      {/* Number + links */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span style={{
          fontSize: '0.6875rem',
          color: '#7d7568',
          letterSpacing: '0.1em',
          fontFamily: '"Bricolage Grotesque", sans-serif',
        }}>
          {project.number}
        </span>
        <div style={{ display: 'flex', gap: '0.4rem' }}>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver demo de ${project.name}`}
              title="Ver demo en vivo"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                border: '1px solid rgba(200,144,58,0.35)',
                color: '#c8903a',
                fontSize: '0.6rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                transition: 'color 0.2s, border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(200,144,58,0.15)'
                e.currentTarget.style.borderColor = '#c8903a'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = 'rgba(200,144,58,0.35)'
              }}
            >
              LIVE
            </a>
          )}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver ${project.name} en GitHub`}
            title="Ver en GitHub"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '2rem',
              height: '2rem',
              borderRadius: '50%',
              border: '1px solid #2c2924',
              color: 'rgba(237,234,219,0.4)',
              transition: 'color 0.2s, border-color 0.2s, background 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#edeadb'
              e.currentTarget.style.borderColor = '#c8903a'
              e.currentTarget.style.background = 'rgba(200,144,58,0.1)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'rgba(237,234,219,0.4)'
              e.currentTarget.style.borderColor = '#2c2924'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      {/* Category */}
      <span style={{
        fontSize: '0.6875rem',
        color: '#c8903a',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
      }}>
        {project.category}
      </span>

      {/* Name */}
      <h3 style={{
        fontFamily: '"Bricolage Grotesque", sans-serif',
        fontWeight: 700,
        fontSize: project.featured ? 'clamp(1.5rem, 3vw, 2.25rem)' : 'clamp(1.125rem, 2vw, 1.5rem)',
        letterSpacing: '-0.03em',
        color: '#edeadb',
        lineHeight: 1.1,
        margin: 0,
      }}>
        {project.name}
      </h3>

      {/* Description */}
      <p style={{
        fontSize: '0.875rem',
        color: '#7d7568',
        lineHeight: 1.6,
        flex: 1,
        maxWidth: project.featured ? '48ch' : '36ch',
      }}>
        {project.description}
      </p>

      {/* Stack */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto' }}>
        {project.stack.map((tech) => (
          <span
            key={tech}
            style={{
              fontSize: '0.6875rem',
              color: 'rgba(237,234,219,0.5)',
              backgroundColor: '#201e19',
              padding: '0.25rem 0.625rem',
              borderRadius: '999px',
              letterSpacing: '0.03em',
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-60px' })

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        backgroundColor: '#000',
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '3rem',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: '0.6875rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#c8903a',
                marginBottom: '1rem',
              }}
            >
              Proyectos
            </motion.p>
            <WordsPullUp
              text="Trabajo seleccionado"
              as="h2"
              delay={0.05}
              style={{
                fontFamily: '"Bricolage Grotesque", sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                letterSpacing: '-0.04em',
                color: '#edeadb',
                lineHeight: 1.05,
              }}
            />
          </div>
          <motion.a
            href="https://github.com/Dieg0arc"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontSize: '0.8125rem',
              color: 'rgba(237,234,219,0.4)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.375rem',
              transition: 'color 0.2s',
            }}
            whileHover={{ color: '#edeadb' } as any}
          >
            Ver todos en GitHub <ArrowUpRight size={13} />
          </motion.a>
        </div>

        {/* Grid */}
        <div className="projects-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '0.75rem',
        }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.number} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
