import { useEffect, useRef, useState } from 'react'
import LottieSlot from './LottieSlot'
// Animaciones de After Effects (descomentar cuando tengás cada .json):
// import fondoData from '../animations/fondo.json'    // Animación #3 (Integrante 3)
// import botonData from '../animations/boton.json'    // Animación #4 (Integrante 4)
import './Hero.css'

export default function Hero() {
  const layersRef = useRef(null)
  // Animación #2 (Pix, el cubo): video MP4/WebM exportado desde After Effects
  // (public/assets/images/pix.webm + pix.mp4). Si no carga, se muestra el placeholder CSS.
  const [pixVideoError, setPixVideoError] = useState(false)

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
            Renderizado desde AE como video con transparencia (pix.webm con alpha real +
            pix.mp4 de respaldo). Si los archivos no cargan, se muestra el placeholder CSS. */}
        <div className="hero__pix">
          {pixVideoError ? (
            <div className="pix-placeholder" aria-label="Personaje Pix">
              <span className="pix-placeholder__eye" />
              <span className="pix-placeholder__eye pix-placeholder__eye--right" />
              <span className="pix-placeholder__mouth" />
            </div>
          ) : (
            <video
              className="hero__pix-video"
              autoPlay
              loop
              muted
              playsInline
              onError={() => setPixVideoError(true)}
              aria-label="Personaje Pix saltando"
            >
              <source src="/assets/images/pix-animation/pix.webm" type="video/webm" />
              <source src="/assets/images/pix-animation/pix.mp4" type="video/mp4" />
            </video>
          )}
        </div>

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
