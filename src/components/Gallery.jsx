import { useState } from 'react'
import './Gallery.css'

// HUECO IMÁGENES: cambiá estos colores por capturas reales del juego (.webp)
// Ej: { src: '/assets/images/captura1.webp', caption: '...' }
const SLIDES = [
  { color: '#163d2e', accent: 'var(--green)', caption: 'Saltando en el Bosque Pixel' },
  { color: '#3d1438', accent: 'var(--magenta)', caption: 'Persecución en Ciudad Neón' },
  { color: '#0d2d3d', accent: 'var(--cyan)', caption: 'Gravedad rota en el Vacío Glitch' },
  { color: '#3a2f0a', accent: 'var(--yellow)', caption: 'Jefe corrupto nivel 2' },
]

export default function Gallery() {
  const [index, setIndex] = useState(0)

  const go = (dir) => {
    setIndex((prev) => (prev + dir + SLIDES.length) % SLIDES.length)
  }

  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <div className="gallery__head reveal">
          <p className="section-tag">Galería</p>
          <h2 className="section-title">Capturas del juego</h2>
        </div>

        <div className="gallery__carousel reveal">
          <button className="gallery__arrow" onClick={() => go(-1)} aria-label="Anterior">
            ‹
          </button>

          <div className="gallery__viewport">
            <div
              className="gallery__track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {SLIDES.map((slide, i) => (
                <div className="gallery__slide" key={i}>
                  {/* Si usás imagen real:  <img src={slide.src} alt={slide.caption} /> */}
                  <div
                    className="gallery__art"
                    style={{ background: slide.color, '--accent': slide.accent }}
                  >
                    <span className="gallery__frame-label">SCREENSHOT {i + 1}</span>
                  </div>
                  <p className="gallery__caption">{slide.caption}</p>
                </div>
              ))}
            </div>
          </div>

          <button className="gallery__arrow" onClick={() => go(1)} aria-label="Siguiente">
            ›
          </button>
        </div>

        <div className="gallery__dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`gallery__dot ${i === index ? 'is-active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Ir a la captura ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
