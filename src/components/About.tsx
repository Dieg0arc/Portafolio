import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import WordsPullUp from './WordsPullUp'

const ABOUT_TEXT = "Durante siete semestres he construido proyectos que van desde interfaces web con Astro y React hasta APIs de geolocalización en Python, aplicaciones Android en Kotlin y redes sociales académicas con Go y MongoDB. Me mueve la curiosidad de entender cómo funcionan las cosas y la satisfacción de construir algo que funcione bien y se vea bien."

function AnimatedChar({ char, index, total, scrollYProgress }: {
  char: string
  index: number
  total: number
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const start = index / total
  const end = Math.min(start + 0.08, 1)
  const opacity = useTransform(scrollYProgress, [start, end], [0.12, 1])
  return <motion.span style={{ opacity }}>{char}</motion.span>
}

function AnimatedParagraph() {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.25'],
  })
  const chars = ABOUT_TEXT.split('')

  return (
    <p
      ref={ref}
      style={{
        fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)',
        lineHeight: 1.8,
        color: '#edeadb',
        maxWidth: '62ch',
        margin: '0 auto',
        textAlign: 'center',
      }}
      aria-label={ABOUT_TEXT}
    >
      {chars.map((char, i) => (
        <AnimatedChar
          key={i}
          char={char}
          index={i}
          total={chars.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  )
}

const stats = [
  { value: '7mo', label: 'Semestre' },
  { value: '20+', label: 'Repositorios' },
  { value: '5+', label: 'Lenguajes' },
  { value: '2026', label: 'Graduación' },
]

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      ref={ref}
      style={{
        backgroundColor: '#000',
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: '0.6875rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#c8903a',
            marginBottom: '2.5rem',
          }}
        >
          Sobre mí
        </motion.p>

        {/* Headline */}
        <div style={{ marginBottom: '4rem' }}>
          <WordsPullUp
            text="Soy Diego Ramírez,"
            as="h2"
            delay={0.05}
            style={{
              fontFamily: '"Bricolage Grotesque", sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 5vw, 3.75rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              color: '#edeadb',
              marginBottom: '0.1em',
            }}
          />
          <WordsPullUp
            text="estudiante de Ingeniería de Software."
            as="h2"
            delay={0.2}
            style={{
              fontFamily: '"Bricolage Grotesque", sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(2rem, 5vw, 3.75rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              color: 'rgba(237,234,219,0.4)',
            }}
          />
        </div>

        {/* Scroll-animated paragraph */}
        <div style={{ marginBottom: '4.5rem' }}>
          <AnimatedParagraph />
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="stats-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            backgroundColor: '#2c2924',
            borderRadius: '1rem',
            overflow: 'hidden',
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                backgroundColor: '#181612',
                padding: '2rem 1.5rem',
                textAlign: 'center',
              }}
            >
              <div style={{
                fontFamily: '"Bricolage Grotesque", sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                color: '#edeadb',
                letterSpacing: '-0.04em',
                lineHeight: 1,
                marginBottom: '0.5rem',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '0.6875rem',
                color: '#7d7568',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
