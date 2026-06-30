import { useEffect, useState } from 'react'
import Lottie from 'lottie-react'

/**
 * Hueco reutilizable para una animación.
 *
 * COMO USARLO con tu animación de After Effects:
 *   1. Exporta tu animación a JSON con el plugin Bodymovin/LottieFiles.
 *   2. Guarda el .json en: src/animations/
 *   3. Importalo donde uses este componente y pasalo en la prop "data":
 *        import pixData from '../animations/pix.json'
 *        <LottieSlot data={pixData} />
 *
 * Mientras no haya animación, muestra el "placeholder" (children) para que
 * la página se vea completa durante el desarrollo.
 */
export default function LottieSlot({ data, loop = true, cover = false, className = '', children }) {
  const [animationData, setAnimationData] = useState(data || null)

  useEffect(() => {
    setAnimationData(data || null)
  }, [data])

  if (!animationData) {
    // Todavía no se ha colocado la animación: mostramos el placeholder.
    return <div className={`lottie-slot ${className}`}>{children}</div>
  }

  // cover = la animación llena el contenedor sin franjas (como background-size: cover)
  const rendererSettings = cover ? { preserveAspectRatio: 'xMidYMid slice' } : undefined

  return (
    <div className={`lottie-slot ${className}`}>
      <Lottie animationData={animationData} loop={loop} rendererSettings={rendererSettings} />
    </div>
  )
}
