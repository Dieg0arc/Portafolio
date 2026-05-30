import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Award } from 'lucide-react'
import WordsPullUp from './WordsPullUp'

// ── Actualiza estos datos con tus certificados reales ──────

interface Certificate {
  id: string
  year: string
  platform: string
  platformColor: string
  title: string
  description: string
  url?: string
  featured?: boolean
}

const certificates: Certificate[] = [
  {
    id: '01',
    year: '2026',
    platform: 'Alexander von Humboldt',
    platformColor: '#c8903a',
    title: 'Ingeniería de Software',
    description: 'Corporación Universitaria Empresarial Alexander von Humboldt, Colombia. Miembro activo del semillero de investigación en Deep Learning y redes convolucionales — Semillero HORUS.',
    featured: true,
  },
  {
    id: '02',
    year: '2024',
    platform: 'CertiProf',
    platformColor: '#e85d04',
    title: 'Scrum Foundation Professional Certification',
    description: 'SFPC™ — Fundamentos de metodologías ágiles, roles Scrum, sprints y gestión de backlog.',
  },
  {
    id: '03',
    year: '2024',
    platform: 'Cisco Networking Academy',
    platformColor: '#049fd9',
    title: 'Python Essentials 1',
    description: 'Fundamentos de Python: tipos de datos, estructuras de control, funciones y manejo de errores.',
  },
]

// ── Certificate card ───────────────────────────────────────

function CertCard({ cert, index }: { cert: Certificate; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      style={{
        gridColumn: cert.featured ? 'span 2' : 'span 1',
        backgroundColor: '#181612',
        border: '1px solid #2c2924',
        borderRadius: '1rem',
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.875rem',
        transition: 'border-color 0.3s',
        position: 'relative',
        overflow: 'hidden',
      }}
      whileHover={{ borderColor: 'rgba(200,144,58,0.35)' }}
    >
      {/* Accent line top */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '1.75rem',
          right: '1.75rem',
          height: '2px',
          background: `linear-gradient(90deg, ${cert.platformColor}55, transparent)`,
          borderRadius: '0 0 2px 2px',
        }}
      />

      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {cert.featured ? (
            <Award size={13} color={cert.platformColor} />
          ) : null}
          <span
            style={{
              fontSize: '0.625rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: cert.platformColor,
              fontFamily: '"Bricolage Grotesque", sans-serif',
            }}
          >
            {cert.platform}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <span style={{ fontSize: '0.625rem', color: '#7d7568', letterSpacing: '0.06em' }}>
            {cert.year}
          </span>
          {cert.url && cert.url !== '#' && (
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver certificado: ${cert.title}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '1.75rem',
                height: '1.75rem',
                borderRadius: '50%',
                border: '1px solid #2c2924',
                color: 'rgba(237,234,219,0.35)',
                transition: 'color 0.2s, border-color 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#edeadb'
                e.currentTarget.style.borderColor = 'rgba(237,234,219,0.3)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'rgba(237,234,219,0.35)'
                e.currentTarget.style.borderColor = '#2c2924'
              }}
            >
              <ExternalLink size={11} />
            </a>
          )}
        </div>
      </div>

      {/* Id */}
      <span style={{ fontSize: '0.6875rem', color: '#3d3830', fontFamily: '"Bricolage Grotesque", sans-serif', letterSpacing: '0.08em' }}>
        {cert.id}
      </span>

      {/* Title */}
      <h3
        style={{
          fontFamily: '"Bricolage Grotesque", sans-serif',
          fontWeight: cert.featured ? 700 : 600,
          fontSize: cert.featured ? 'clamp(1.25rem, 2.5vw, 1.75rem)' : 'clamp(1rem, 1.8vw, 1.25rem)',
          color: '#edeadb',
          lineHeight: 1.15,
          letterSpacing: '-0.03em',
          margin: 0,
        }}
      >
        {cert.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: '0.8125rem',
          color: '#7d7568',
          lineHeight: 1.65,
          margin: 0,
          maxWidth: cert.featured ? '52ch' : '36ch',
        }}
      >
        {cert.description}
      </p>
    </motion.div>
  )
}

// ── Main section ───────────────────────────────────────────

export default function Certificates() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-60px' })

  return (
    <section
      id="certificates"
      ref={ref}
      aria-label="Certificados y logros"
      style={{
        backgroundColor: '#000',
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)',
        
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        {/* Header */}
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
          Certificados & Logros
        </motion.p>

        <WordsPullUp
          text="Aprendizaje continuo"
          as="h2"
          delay={0.05}
          style={{
            fontFamily: '"Bricolage Grotesque", sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            letterSpacing: '-0.04em',
            color: '#edeadb',
            lineHeight: 1.05,
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          }}
        />

        {/* Grid */}
        <div
          className="cert-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '0.75rem',
          }}
        >
          {certificates.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
