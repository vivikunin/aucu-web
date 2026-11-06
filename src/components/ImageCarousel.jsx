import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react'
import { useState } from 'react'
import { AssetImage } from './AssetImage'

export function ImageCarousel({ images = [], title = 'Galería de imágenes', className = '' }) {
  const [activeImage, setActiveImage] = useState(0)

  if (images.length === 0) {
    return null
  }

  const currentImage = images[activeImage]
  const imageAlt = currentImage.alt || `${title} — imagen ${activeImage + 1}`

  const showPreviousImage = () => {
    setActiveImage((current) => (current - 1 + images.length) % images.length)
  }

  const showNextImage = () => {
    setActiveImage((current) => (current + 1) % images.length)
  }

  return (
    <div className={`news-carousel ${className}`} aria-label={title}>
      <div className="news-carousel-stage" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentImage.src}
            className={`news-carousel-slide ${currentImage.portrait ? 'news-carousel-slide-portrait' : ''}`}
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -14 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            {currentImage.href ? (
              <a
                className="news-carousel-link"
                href={currentImage.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Abrir ${imageAlt}`}
              >
                <CarouselImage image={currentImage} alt={imageAlt} />
              </a>
            ) : (
              <CarouselImage image={currentImage} alt={imageAlt} />
            )}
          </motion.div>
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              type="button"
              className="news-carousel-arrow news-carousel-arrow-left"
              onClick={showPreviousImage}
              aria-label="Ver imagen anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              className="news-carousel-arrow news-carousel-arrow-right"
              onClick={showNextImage}
              aria-label="Ver imagen siguiente"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="news-carousel-dots" aria-label="Seleccionar imagen">
          {images.map((image, index) => (
            <button
              type="button"
              key={image.src}
              className={`news-carousel-dot ${index === activeImage ? 'news-carousel-dot-active' : ''}`}
              onClick={() => setActiveImage(index)}
              aria-label={`Ver imagen ${index + 1}`}
              aria-current={index === activeImage ? 'true' : undefined}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function CarouselImage({ image, alt }) {
  return (
    <AssetImage
      src={image.src}
      alt={alt}
      className="news-post-image"
      imgClassName="news-carousel-media"
      fallback={
        <div className="news-post-image-fallback">
          <ImageIcon size={28} />
          <span>Imagen no disponible</span>
        </div>
      }
    />
  )
}
