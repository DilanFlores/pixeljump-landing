import './Footer.css'

const SOCIALS = ['Discord', 'YouTube', 'X', 'Instagram']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">
            <span className="text-cyan">PIXEL</span>
            <span className="text-magenta">JUMP</span>
          </span>
          <p className="footer__tagline">Salta. Repara. Explora.</p>
        </div>

        <ul className="footer__socials">
          {SOCIALS.map((s) => (
            <li key={s}>
              <a href="#hero">{s}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer__bottom">
        <p>
          Proyecto Final · Multimedios I · 2026 — Juego ficticio creado con fines
          académicos.
        </p>
        {/* Reemplazá por los nombres de tu grupo */}
        <p className="footer__credits">Hecho por: Integrante 1 · Integrante 2 · Integrante 3</p>
      </div>
    </footer>
  )
}
