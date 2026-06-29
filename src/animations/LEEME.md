# Carpeta de animaciones (Lottie / JSON)

Aquí van los archivos `.json` exportados desde After Effects con el plugin
**Bodymovin / LottieFiles**.

## Animaciones esperadas (4, una por integrante)

| Archivo sugerido | Animación | Componente |
|------------------|-----------|------------|
| `logo.json`      | Logo que se ensambla (Integrante 1) | `src/components/Navbar.jsx` |
| `pix.json`       | Pix saltando, el cubo central (Integrante 2) | `src/components/Hero.jsx` |
| `fondo.json` / `fondo.mp4` | Fondo neón animado (Integrante 3) | `src/components/Hero.jsx` |
| `boton.json`     | Botón JUGAR con glitch (Integrante 4) | `src/components/Hero.jsx` |

## Cómo enchufar una animación

1. Guardá el `.json` en esta carpeta.
2. En el componente, importalo y pasalo a `<LottieSlot>`:

```jsx
import pixData from '../animations/pix.json'

<LottieSlot data={pixData} className="hero__pix" />
```

Mientras no exista el archivo, se muestra el placeholder (el cuadrito de Pix
animado con CSS), así la página nunca se ve rota.

> ¿Vas a usar MP4 o GIF en vez de Lottie? Ponelos en `public/assets/` y usá
> una etiqueta `<video>` o `<img>` normal dentro del componente.
