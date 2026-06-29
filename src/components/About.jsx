import './About.css'

const FEATURES = [
  {
    icon: '🦘',
    title: 'Salta',
    color: 'var(--cyan)',
    text: 'Controles precisos de un solo botón. Encadená saltos imposibles entre plataformas flotantes.',
  },
  {
    icon: '🛠️',
    title: 'Repara',
    color: 'var(--magenta)',
    text: 'Cada zona corrupta que tocás vuelve a la vida. Restaurá el color y la música del mundo.',
  },
  {
    icon: '🌌',
    title: 'Explora',
    color: 'var(--yellow)',
    text: 'Tres mundos llenos de secretos, coleccionables ocultos y jefes glitcheados.',
  },
]

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about__head reveal">
          <p className="section-tag">El juego</p>
          <h2 className="section-title">¿Qué es PixelJump?</h2>
          <p className="about__intro">
            Un juego indie de plataformas retro donde lo retro y lo moderno chocan en
            neón. La corrupción digital amenaza el universo de Pix, y solo tus reflejos
            pueden salvarlo. Nostalgia arcade de los 80 con estética synthwave.
          </p>
        </div>

        <div className="about__grid">
          {FEATURES.map((f, i) => (
            <article
              className="feature-card reveal"
              key={f.title}
              style={{ '--accent': f.color, transitionDelay: `${i * 0.12}s` }}
            >
              <div className="feature-card__icon">{f.icon}</div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__text">{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
