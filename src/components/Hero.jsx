import LottieSlot from './LottieSlot'
// Animaciones de After Effects (descomentar cuando tengás cada .json):
// import pixData from '../animations/pix.json'        // Animación #2 (Integrante 2)
import fondoVideo from '../animations/fondo.mp4'       // Animación #3 (Integrante 3) ✅ MP4
// import botonData from '../animations/boton.json'    // Animación #4 (Integrante 4)
import './Hero.css'

export default function Hero() {
  return (
    <header className="hero" id="hero">
      {/* ===== ANIMACIÓN #3 (Integrante 3): Fondo decorativo en MP4 (After Effects) ===== */}
      <video
        className="hero__bg-video"
        src={fondoVideo}
        autoPlay
        muted
        loop
        playsInline
      />

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
