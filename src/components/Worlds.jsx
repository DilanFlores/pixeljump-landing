import './Worlds.css'

const WORLDS = [
  {
    name: 'Bosque Pixel',
    color: 'var(--green)',
    desc: 'El punto de partida. Plataformas entre árboles de 8 bits y enemigos lentos.',
    tag: 'Mundo 1',
  },
  {
    name: 'Ciudad Neón',
    color: 'var(--magenta)',
    desc: 'Rascacielos synthwave, plataformas móviles y el primer jefe corrupto.',
    tag: 'Mundo 2',
  },
  {
    name: 'Vacío Glitch',
    color: 'var(--cyan)',
    desc: 'La realidad se rompe. Gravedad invertida y obstáculos que parpadean.',
    tag: 'Mundo 3',
  },
]

export default function Worlds() {
  return (
    <section className="section worlds" id="worlds">
      <div className="container">
        <div className="worlds__head reveal">
          <p className="section-tag">Explora</p>
          <h2 className="section-title">Tres mundos por reparar</h2>
        </div>

        <div className="worlds__grid">
          {WORLDS.map((w, i) => (
            <article
              className="world-card reveal"
              key={w.name}
              style={{ '--accent': w.color, transitionDelay: `${i * 0.12}s` }}
            >
              {/* HUECO IMAGEN: reemplazá este bloque por una captura del mundo (.webp) */}
              <div className="world-card__art">
                <span className="world-card__tag">{w.tag}</span>
              </div>
              <div className="world-card__body">
                <h3 className="world-card__name">{w.name}</h3>
                <p className="world-card__desc">{w.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
