import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import WordsPullUp from './WordsPullUp'

const skillGroups = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Astro', 'Vue / Nuxt', 'Tailwind CSS', 'Three.js', 'GSAP', 'Framer Motion'],
  },
  {
    category: 'Backend',
    items: ['Python', 'Java', 'Go (Echo)', 'Node.js', 'REST APIs', 'Microservices'],
  },
  {
    category: 'Mobile',
    items: ['Kotlin', 'Jetpack Compose', 'Android SDK', 'Navigation', 'Forms'],
  },
  {
    category: 'Tools & Ops',
    items: ['Git / GitHub', 'Docker', 'CI / CD', 'MongoDB', 'PostgreSQL', 'Linux'],
  },
]

export default function Skills() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-60px' })

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        backgroundColor: '#000',
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      <div style={{ maxWidth: '72rem', margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: '0.6875rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#c8903a',
            marginBottom: '1rem',
          }}
        >
          Stack
        </motion.p>
        <WordsPullUp
          text="Tecnologías y herramientas"
          as="h2"
          delay={0.05}
          style={{
            fontFamily: '"Bricolage Grotesque", sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            letterSpacing: '-0.04em',
            color: '#edeadb',
            lineHeight: 1.05,
            marginBottom: 'clamp(3rem, 6vw, 5rem)',
          }}
        />

        {/* Skills table — editorial layout */}
        <div style={{
          border: '1px solid #2c2924',
          borderRadius: '1.25rem',
          overflow: 'hidden',
          backgroundColor: '#181612',
        }}>
        <div className="skills-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0',
        }}>
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              className="skill-group"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: gi * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                padding: '1.75rem',
                borderRight: gi < skillGroups.length - 1 ? '1px solid #2c2924' : 'none',
                backgroundColor: '#181612',
              }}
            >
              {/* Category label */}
              <div style={{
                fontSize: '0.6875rem',
                color: '#c8903a',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                paddingBottom: '1rem',
                marginBottom: '1rem',
                borderBottom: '1px solid #2c2924',
              }}>
                {group.category}
              </div>

              {/* Items */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {group.items.map((item, ii) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: gi * 0.1 + ii * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{
                      fontSize: 'clamp(0.875rem, 1.4vw, 1rem)',
                      color: '#edeadb',
                      fontFamily: '"Bricolage Grotesque", sans-serif',
                      fontWeight: 400,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}
