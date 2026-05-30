import { useRef, useState } from 'react'
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

// ── Data ──────────────────────────────────────────────────

const navItems = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Logros', href: '#certificates' },
  { label: 'Contacto', href: '#contact' },
]

const ease = [0.16, 1, 0.3, 1] as const

// ── Dock nav ───────────────────────────────────────────────

function DockLink({
  item,
  mouseX,
}: {
  item: { label: string; href: string }
  mouseX: ReturnType<typeof useMotionValue<number>>
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [hovered, setHovered] = useState(false)

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const scaleRaw = useTransform(distance, [-130, 0, 130], [1, 1.5, 1])
  const scale = useSpring(scaleRaw, { mass: 0.08, stiffness: 200, damping: 14 })

  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Tooltip label */}
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            style={{
              position: 'absolute',
              bottom: '100%',
              marginBottom: '0.5rem',
              backgroundColor: 'rgba(12,11,9,0.9)',
              color: '#edeadb',
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.04em',
              padding: '0.25rem 0.625rem',
              borderRadius: '0.375rem',
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              border: '1px solid rgba(237,234,219,0.1)',
            }}
          >
            {item.label}
          </motion.span>
        )}
      </AnimatePresence>

      <motion.a
        ref={ref}
        href={item.href}
        style={{
          scale,
          transformOrigin: 'bottom center',
          display: 'inline-block',
          color: hovered ? '#edeadb' : 'rgba(237,234,219,0.65)',
          textDecoration: 'none',
          fontSize: 'clamp(0.6875rem, 1vw, 0.875rem)',
          letterSpacing: '0.01em',
          whiteSpace: 'nowrap',
          cursor: 'pointer',
          transition: 'color 0.15s',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {item.label}
      </motion.a>
    </div>
  )
}

function DockNav() {
  const mouseX = useMotionValue(Infinity)

  return (
    <div
      onMouseMove={e => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      style={{
        backgroundColor: '#000',
        borderRadius: '0 0 1.5rem 1.5rem',
        padding: '0.65rem 2.25rem 0.75rem',
        display: 'flex',
        alignItems: 'flex-end',
        gap: 'clamp(1.25rem, 3vw, 3.5rem)',
      }}
    >
      {navItems.map(item => (
        <DockLink key={item.href} item={item} mouseX={mouseX} />
      ))}
    </div>
  )
}

// ── Word pull-up helper ────────────────────────────────────

function PullUpWord({ word, delay }: { word: string; delay: number }) {
  return (
    <span style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}>
      <motion.span
        style={{ display: 'inline-block' }}
        initial={{ y: '105%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, delay, ease }}
      >
        {word}
      </motion.span>
    </span>
  )
}

// ── Main ──────────────────────────────────────────────────

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100svh',
        padding: '1rem',
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
      }}
    >
      {/* ─── Inner rounded container ─────────────────── */}
      <div
        style={{
          flex: 1,
          borderRadius: '2rem',
          overflow: 'hidden',
          position: 'relative',
          minHeight: 'calc(100svh - 2rem)',
        }}
      >
        {/* ── Background fallback color ─── */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: '#0a0906' }} />

        {/* ── Background video ──────────────────────────
            Reemplaza este src con tu propio video.
            Formatos recomendados: .mp4 (H.264) o .webm
            Puedes colocar el archivo en /public/hero.mp4
            y cambiar el src a "/hero.mp4"
        ──────────────────────────────────────────────── */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
            type="video/mp4"
          />
        </video>

        {/* Subtle dot grid — fades toward edges */}
        <div
          className="dot-grid"
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.35,
            pointerEvents: 'none',
            maskImage: 'radial-gradient(ellipse 75% 65% at 50% 35%, black 20%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 35%, black 20%, transparent 100%)',
          }}
        />

        {/* Noise overlay */}
        <div
          className="noise-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.55,
            mixBlendMode: 'overlay',
            pointerEvents: 'none',
          }}
        />

        {/* Vignette — dark top + dark bottom */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 32%, rgba(0,0,0,0.72) 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* ─── Nav pill ── centered, hangs from top ── */}
        <motion.nav
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            zIndex: 20,
          }}
        >
          <DockNav />
        </motion.nav>

        {/* ─── Bottom content ─────────────────────── */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          {/* 8-col / 4-col grid */}
          <div
            className="hero-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '8fr 4fr',
              alignItems: 'flex-end',
            }}
          >
            {/* Left — Giant name */}
            <div style={{ paddingLeft: 'clamp(0.5rem, 1.5vw, 1.25rem)' }}>
              <h1
                style={{
                  fontFamily: '"Bricolage Grotesque", sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(60px, 17vw, 195px)',
                  lineHeight: 0.88,
                  letterSpacing: '-0.06em',
                  color: '#edeadb',
                  margin: 0,
                  padding: 0,
                  whiteSpace: 'nowrap',
                }}
              >
                <div style={{ display: 'block', overflow: 'hidden' }}>
                  <PullUpWord word="Diego" delay={0.1} />
                  {' '}
                  <PullUpWord word="Dev" delay={0.2} />
                </div>
              </h1>
            </div>

            {/* Right — tagline + CTA */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                gap: '0.875rem',
                padding: 'clamp(0.75rem, 2vw, 1.5rem) clamp(0.75rem, 2vw, 1.5rem) clamp(1rem, 2.5vw, 2rem)',
              }}
            >
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5, ease }}
                style={{
                  fontSize: 'clamp(0.6875rem, 1.1vw, 0.9375rem)',
                  color: 'rgba(237,234,219,0.62)',
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                Ingeniero de Software en formación. Construyo interfaces, servicios y experiencias digitales con diseño y propósito.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.68, ease }}
                style={{ display: 'flex' }}
              >
                <a
                  href="#projects"
                  className="cta-btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.625rem',
                    backgroundColor: '#edeadb',
                    color: '#000',
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontFamily: '"Bricolage Grotesque", sans-serif',
                    fontSize: 'clamp(0.75rem, 1.1vw, 0.9375rem)',
                    padding: '0.5rem 0.625rem 0.5rem 1.125rem',
                    borderRadius: '999px',
                    letterSpacing: '-0.02em',
                    transition: 'gap 0.25s ease',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.gap = '0.9rem'
                    const circle = e.currentTarget.querySelector('.cta-circle') as HTMLElement
                    if (circle) circle.style.transform = 'scale(1.12)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.gap = '0.625rem'
                    const circle = e.currentTarget.querySelector('.cta-circle') as HTMLElement
                    if (circle) circle.style.transform = 'scale(1)'
                  }}
                >
                  Ver proyectos
                  <span
                    className="cta-circle"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 'clamp(1.875rem, 2.5vw, 2.25rem)',
                      height: 'clamp(1.875rem, 2.5vw, 2.25rem)',
                      backgroundColor: '#000',
                      borderRadius: '50%',
                      flexShrink: 0,
                      transition: 'transform 0.25s ease',
                    }}
                  >
                    <ArrowRight size={13} color="#edeadb" />
                  </span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
