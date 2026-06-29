# 🎮 PixelJump — Landing Page

Landing page de lanzamiento del videojuego indie **ficticio** *PixelJump*, un
juego de plataformas retro con estética neón/synthwave.

> Proyecto Final · Multimedios I · Presentación: **3 de julio de 2026**

---

## 🚀 Cómo ejecutar

```bash
npm install      # solo la primera vez
npm run dev      # abre el servidor de desarrollo (http://localhost:5173)
```

Para generar la versión final (entregable):

```bash
npm run build    # genera la carpeta dist/ lista para entregar
npm run preview  # previsualiza el build
```

## 🧩 Tecnología

- **React + Vite** — componentes ordenados, una sección por archivo.
- **lottie-react** — para las animaciones exportadas de After Effects.
- CSS plano por componente (sin librerías de estilos).

## 📁 Estructura

```
src/
  components/      Una sección = un componente (.jsx + .css)
    Navbar        Barra de navegación + menú móvil   ← animación logo
    Hero          Portada: parallax, Pix, botón JUGAR ← animaciones 1 y 2
    About         "¿Qué es PixelJump?" (3 tarjetas hover)
    Worlds        Los 3 mundos (hover ilumina)
    Gallery       Carrusel de capturas
    Download      CTA + formulario con validación
    Footer        Créditos del grupo
    LottieSlot    Componente reutilizable para animaciones
  hooks/
    useScrollReveal   Aparición de elementos al hacer scroll
  animations/     ← tus .json de Lottie van aquí (ver LEEME.md)
public/
  assets/images/  ← tus imágenes .webp van aquí (ver LEEME.md)
```

---

## ✨ Animaciones — 4 hechas en After Effects (una por integrante)

Somos 4 integrantes → **4 animaciones**, todas creadas en After Effects, una por
persona. Cada una ya tiene su "hueco" (`<LottieSlot>`) listo en el código con un
placeholder temporal en CSS que se reemplaza al meter el `.json`.

| # | Integrante | Animación | Se aplica a | Archivo a crear | Hueco en el código |
|---|-----------|-----------|-------------|-----------------|--------------------|
| 1 | Integrante 1 | **Logo que se ensambla con pixeles** | Logo | `logo.json` | `Navbar.jsx` |
| 2 | Integrante 2 | **Pix saltando (el cubo central)** | Personaje / ilustración | `pix.json` | `Hero.jsx` |
| 3 | Integrante 3 | **Fondo neón animado** (estrellas, grid synthwave) | Fondo decorativo | `fondo.json` o `fondo.mp4` | `Hero.jsx` |
| 4 | Integrante 4 | **Botón "JUGAR" con glitch/pulso** | Botón / UI | `boton.json` | `Hero.jsx` |

> Variedad cubierta: **logo + personaje + fondo + botón** = cuatro aplicaciones
> distintas, justo lo que pide la rúbrica ✅

### Pasos para insertar cada animación
1. Exportá desde AE con el plugin **Bodymovin** a `.json` (o MP4 para el fondo).
2. Guardalo en `src/animations/` (o `public/assets/animations/` si es MP4).
3. En el componente, descomentá el `import` de arriba y pasá la data al `<LottieSlot data={...} />`.

Ver instrucciones detalladas en `src/animations/LEEME.md`. Mientras tanto, la
página usa **placeholders** en CSS, así nunca se ve incompleta.

---

## ✅ Checklist de la rúbrica

- [x] Header, sección principal, info del producto, galería
- [x] Colores coherentes, jerarquía, tipografía, distribución
- [x] Interactividad: hover, menú, carrusel, formulario, navegación interna
- [ ] 4 animaciones, todas en After Effects (1 por integrante)
- [ ] Procesamiento de imagen (capturas reales en `.webp`)
