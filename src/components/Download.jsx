import { useState } from 'react'
import './Download.css'

export default function Download() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!valid) {
      setError('Ingresá un correo válido para avisarte del lanzamiento.')
      return
    }
    setError('')
    setSent(true)
    setEmail('')
  }

  return (
    <section className="section download" id="download">
      <div className="container download__inner reveal">
        <p className="section-tag">Sé el primero</p>
        <h2 className="section-title">
          Descargá <span className="text-cyan glow-text-cyan">PixelJump</span>
        </h2>
        <p className="download__text">
          Disponible próximamente en PC. Dejá tu correo y te avisamos el día del
          lanzamiento con un descuento de pre-venta.
        </p>

        <div className="download__stores">
          <button className="btn btn-primary" type="button">▶ STEAM</button>
          <button className="btn btn-ghost" type="button">itch.io</button>
        </div>

        {sent ? (
          <p className="download__success">
            ¡Listo! 🎮 Te avisaremos cuando Pix esté listo para saltar.
          </p>
        ) : (
          <form className="download__form" onSubmit={handleSubmit} noValidate>
            <input
              type="email"
              placeholder="tucorreo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="download__input"
            />
            <button type="submit" className="btn btn-primary">Avísame</button>
          </form>
        )}
        {error && <p className="download__error">{error}</p>}
      </div>
    </section>
  )
}
