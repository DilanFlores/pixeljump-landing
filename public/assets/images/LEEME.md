# Carpeta de imágenes

Aquí van las imágenes del proyecto, **optimizadas para web** (preferiblemente `.webp`).

## Procesamiento de imagen (requisito de la rúbrica)

Recordá aplicar y documentar para la presentación:
- **Corrección de color**: que todas las capturas tengan el mismo tono neón.
- **Eliminación de fondo**: el sprite de Pix en PNG transparente.
- **Optimización**: exportar a `.webp` para que la página cargue rápido.

## Dónde se usan

| Imagen | Componente | Nota |
|--------|-----------|------|
| Capturas del juego (4) | `src/components/Gallery.jsx` | Reemplazar los `<div>` de color por `<img>` |
| Arte de cada mundo (3) | `src/components/Worlds.jsx` | Reemplazar `world-card__art` |

Como están en `public/`, se referencian con ruta absoluta:
`<img src="/assets/images/captura1.webp" alt="..." />`
