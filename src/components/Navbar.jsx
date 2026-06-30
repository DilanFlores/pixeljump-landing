import { useState, useEffect } from 'react'
// ===== ANIMACIÓN #1 (Integrante 1): Logo animado (video MP4 desde After Effects) =====
// Poné tu video exportado en:  public/assets/logo.mp4
// Si el archivo no existe, se muestra automáticamente el texto "PIXEL JUMP".
import './Navbar.css'

const LINKS = [
  { href: '#hero', label: 'Inicio' },
  { href: '#about', label: 'Juego' },
  { href: '#worlds', label: 'Mundos' },
  { href: '#gallery', label: 'Galería' },
  { href: '#download', label: 'Descargar' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  // Si el video del logo no se puede cargar, mostramos el texto de respaldo.
  const [logoError, setLogoError] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        {/* ===== ANIMACIÓN #1 (Integrante 1): Logo animado (After Effects → MP4) =====
            Poné el video en public/assets/logo.mp4 y aparece solo. */}
        <a href="#hero" className="navbar__logo">
          <div className="navbar__logo-anim">
            {logoError ? (
              // Respaldo: si no hay video todavía, mostramos el texto.
              <>
                <span className="text-cyan glow-text-cyan">PIXEL</span>
                <span className="text-magenta glow-text-magenta">JUMP</span>
              </>
            ) : (
              <video
                className="navbar__logo-video"
                autoPlay
                loop
                muted
                playsInline
                onError={() => setLogoError(true)}
              >
                {/* WebM con transparencia real (preferido) y MP4 de respaldo */}
                <source src="/assets/images/logo.webm" type="video/webm" />
                <source src="/assets/images/logo.mp4" type="video/mp4" />
              </video>
            )}
          </div>
        </a>

        <ul className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="navbar__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}
