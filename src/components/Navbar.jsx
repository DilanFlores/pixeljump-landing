import { useState, useEffect } from 'react'
import LottieSlot from './LottieSlot'
// ===== ANIMACIÓN #1 (Integrante 1): Logo =====
// Cuando tengás el logo exportado de After Effects, descomentá la línea de abajo:
// import logoData from '../animations/logo.json'
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        {/* ===== ANIMACIÓN #1 (Integrante 1): Logo animado (After Effects → Lottie) =====
            Cuando tengás logo.json, pasalo así:  <LottieSlot data={logoData} ... /> */}
        <a href="#hero" className="navbar__logo">
          <LottieSlot className="navbar__logo-anim">
            {/* Placeholder temporal (texto) hasta que esté la animación de AE */}
            <span className="text-cyan glow-text-cyan">PIXEL</span>
            <span className="text-magenta glow-text-magenta">JUMP</span>
          </LottieSlot>
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
