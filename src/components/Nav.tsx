import { motion } from 'framer-motion'

const links = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contacto', href: '#contact' },
]

export default function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        background: 'linear-gradient(to bottom, rgba(12,11,9,0.9) 0%, transparent 100%)',
        backdropFilter: 'blur(2px)',
      }}
    >
      <a
        href="#"
        style={{
          fontFamily: '"Bricolage Grotesque", sans-serif',
          fontWeight: 700,
          fontSize: '1.1rem',
          color: '#edeadb',
          textDecoration: 'none',
          letterSpacing: '-0.03em',
        }}
      >
        DR
      </a>

      <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              color: 'rgba(237, 234, 219, 0.6)',
              textDecoration: 'none',
              fontSize: '0.8125rem',
              letterSpacing: '0.02em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#edeadb')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(237, 234, 219, 0.6)')}
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://github.com/Dieg0arc"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: '#0c0b09',
            background: '#edeadb',
            textDecoration: 'none',
            fontSize: '0.8125rem',
            fontWeight: 600,
            padding: '0.4rem 0.875rem',
            borderRadius: '999px',
            letterSpacing: '0.01em',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          GitHub
        </a>
      </div>
    </motion.nav>
  )
}
