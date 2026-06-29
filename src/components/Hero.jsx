import { useEffect, useRef } from 'react'
import LottieSlot from './LottieSlot'
// Animaciones de After Effects (descomentar cuando tengás cada .json):
// import pixData from '../animations/pix.json'        // Animación #2 (Integrante 2)
// import fondoData from '../animations/fondo.json'    // Animación #3 (Integrante 3)
// import botonData from '../animations/boton.json'    // Animación #4 (Integrante 4)
import './Hero.css'

export default function Hero() {
  const layersRef = useRef(null)

  // Efecto parallax SOLO del placeholder de fondo (mientras no esté la animación de AE).
  // Cuando metás el fondo animado de After Effects, este efecto deja de aplicar.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const layers = layersRef.current?.querySelectorAll('[data-speed]')
      layers?.forEach((layer) => {
        const speed = parseFloat(layer.dataset.speed)
        layer.style.transform = `translateY(${y * speed}px)`
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="hero" id="hero">
      {/* ===== ANIMACIÓN #3 (Integrante 3): Fondo decorativo (After Effects) =====
          Reemplazá el placeholder de abajo por tu fondo animado.
          - Si lo exportás a Lottie:  <LottieSlot data={fondoData} className="hero__bg" />
          - Si lo exportás a MP4:     <video className="hero__bg-video" src="/assets/animations/fondo.mp4"
                                             autoPlay muted loop playsInline /> */}
      <LottieSlot className="hero__bg" loop>
        <div className="hero__parallax" ref={layersRef}>
          <div className="hero__stars" data-speed="0.15" />
          <div className="hero__mountains hero__mountains--back" data-speed="0.05" />
          <div className="hero__mountains hero__mountains--front" data-speed="0.12" />
        </div>
      </LottieSlot>

      <div className="container hero__content reveal">
        <span className="hero__badge">Próximamente · 2026</span>

        <h1 className="hero__title">
          SALTA. REPARA.
          <br />
          <span className="text-magenta glow-text-magenta">EXPLORA.</span>
        </h1>

        <p className="hero__subtitle">
          Un mundo de neón se está corrompiendo. Ayudá a <strong>Pix</strong> a saltar
          entre glitches y reparar el código antes de que el universo digital desaparezca.
        </p>

        {/* ===== ANIMACIÓN #2 (Integrante 2): Personaje "Pix" — el cubo central (After Effects) =====
            Reemplazá el placeholder por:  <LottieSlot data={pixData} className="hero__pix" loop /> */}
        <LottieSlot className="hero__pix" loop>
          {/* Placeholder temporal del cubo, hasta que esté el Lottie de Pix */}
          <div className="pix-placeholder" aria-label="Personaje Pix">
            <span className="pix-placeholder__eye" />
            <span className="pix-placeholder__eye pix-placeholder__eye--right" />
            <span className="pix-placeholder__mouth" />
          </div>
        </LottieSlot>

        <div className="hero__actions">
          {/* ===== ANIMACIÓN #4 (Integrante 4): Botón "JUGAR" animado (After Effects) =====
              El botón sigue funcionando como enlace. Tu animación (glitch, pulso, etc.)
              va como capa encima: reemplazá el placeholder del LottieSlot por botonData. */}
          <a href="#download" className="btn btn-primary hero__play" data-text="▶ JUGAR">
            <span className="hero__play-label">▶ JUGAR</span>
            <LottieSlot className="hero__play-anim" loop>
              {/* Placeholder temporal: glitch en CSS hasta que esté la animación de AE */}
              <span className="btn-glitch-overlay" data-text="▶ JUGAR" />
            </LottieSlot>
          </a>
          <a href="#about" className="btn btn-ghost">
            Ver más
          </a>
        </div>
      </div>

      <a href="#about" className="hero__scroll-hint" aria-label="Bajar">
        <span />
      </a>
    </header>
  )
}
