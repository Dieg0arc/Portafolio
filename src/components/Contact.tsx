import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, GitFork } from 'lucide-react'

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-80px' })

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        backgroundColor: '#000',
        padding: 'clamp(5rem, 12vw, 10rem) clamp(1.5rem, 5vw, 4rem)',
        
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        {/* Big CTA text */}
        <div style={{ marginBottom: '3rem' }}>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#c8903a',
              marginBottom: '1.5rem',
            }}
          >
            Contacto
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: '"Bricolage Grotesque", sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
              letterSpacing: '-0.05em',
              lineHeight: 0.95,
              color: '#edeadb',
              margin: 0,
              maxWidth: '14ch',
            }}
          >
            ¿Construimos algo juntos?
          </motion.h2>
        </div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}
        >
          <a
            href="mailto:ramirezosorios92@gmail.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              backgroundColor: '#edeadb',
              color: '#0c0b09',
              textDecoration: 'none',
              fontWeight: 700,
              fontFamily: '"Bricolage Grotesque", sans-serif',
              fontSize: 'clamp(0.875rem, 1.5vw, 1.0625rem)',
              padding: '0.875rem 1.5rem 0.875rem 1.875rem',
              borderRadius: '999px',
              letterSpacing: '-0.02em',
              transition: 'transform 0.2s, opacity 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
          >
            Escribirme un correo
            <span style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '2rem',
              height: '2rem',
              backgroundColor: '#000',
              borderRadius: '50%',
            }}>
              <ArrowUpRight size={14} color="#edeadb" />
            </span>
          </a>

          <a
            href="https://github.com/Dieg0arc"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              backgroundColor: 'transparent',
              color: 'rgba(237,234,219,0.6)',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '0.9375rem',
              padding: '0.875rem 1.5rem',
              borderRadius: '999px',
              border: '1px solid #2c2924',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#edeadb'
              e.currentTarget.style.borderColor = 'rgba(237,234,219,0.25)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'rgba(237,234,219,0.6)'
              e.currentTarget.style.borderColor = '#2c2924'
            }}
          >
            <GitFork size={14} />
            @Dieg0arc
          </a>
        </motion.div>

        {/* Footer line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            marginTop: 'clamp(5rem, 10vw, 8rem)',
            paddingTop: '1.5rem',
            
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          <span style={{
            fontFamily: '"Bricolage Grotesque", sans-serif',
            fontWeight: 700,
            fontSize: '0.875rem',
            color: 'rgba(237,234,219,0.25)',
            letterSpacing: '-0.02em',
          }}>
            Diego Ramírez
          </span>
          <span style={{
            fontSize: '0.75rem',
            color: 'rgba(237,234,219,0.2)',
            letterSpacing: '0.04em',
          }}>
            Dieg<span style={{ color: '#c8903a', opacity: 0.7 }}>0</span>arc · Ingeniero de Software
          </span>
        </motion.div>
      </div>
    </section>
  )
}
