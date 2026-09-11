import { AnimatePresence, motion } from 'framer-motion'
import { CalendarDays, ChevronDown, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react'
import { useState } from 'react'
import { AssetImage } from './AssetImage'

export function NewsPost({ post }) {
  const [expanded, setExpanded] = useState(false)
  const [activeImage, setActiveImage] = useState(0)
  const images = post.images ?? []
  const paragraphs = post.text?.split('\n').filter(Boolean) ?? []
  const contentId = `news-content-${post.id}`

  if (post.imageOnly && images.length > 0) {
    return (
      <article className="news-post news-post-image-only">
        {post.title && (
          <div className="news-post-copy">
            <h2>{post.title}</h2>
          </div>
        )}
        <AssetImage
          src={images[0].src}
          alt={images[0].alt || 'Novedad de AUCU'}
          className="news-post-standalone-image"
          fallback={
            <div className="news-post-image-fallback">
              <ImageIcon size={28} />
              <span>Imagen no disponible</span>
            </div>
          }
        />
      </article>
    )
  }

  const showPreviousImage = () => {
    setActiveImage((current) => (current - 1 + images.length) % images.length)
  }

  const showNextImage = () => {
    setActiveImage((current) => (current + 1) % images.length)
  }

  return (
    <article className={`news-post ${expanded ? 'news-post-expanded' : ''}`}>
      <div className="news-post-copy">
        {post.date && (
          <p className="news-post-date">
            <CalendarDays size={16} />
            {post.date}
          </p>
        )}
        {post.title && <h2>{post.title}</h2>}
        {!expanded && paragraphs.length > 0 && <p className="news-post-preview">{paragraphs[0]}</p>}

        <button
          type="button"
          className="news-post-toggle"
          aria-expanded={expanded}
          aria-controls={contentId}
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? 'Cerrar noticia' : 'Leer más'}
          <ChevronDown className="news-post-toggle-icon" size={19} />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id={contentId}
            className="news-post-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ height: { duration: 0.42, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.3 } }}
          >
            {paragraphs.length > 0 && (
              <div className="news-post-text">
                {paragraphs.map((paragraph, index) => (
                  <p key={`${post.id}-${index}`}>{paragraph}</p>
                ))}
              </div>
            )}

            {images.length > 0 && (
              <div className="news-carousel">
                <div className="news-carousel-stage">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={images[activeImage].src}
                      className={`news-carousel-slide ${images[activeImage].portrait ? 'news-carousel-slide-portrait' : ''}`}
                      initial={{ opacity: 0, x: 14 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -14 }}
                      transition={{ duration: 0.28, ease: 'easeOut' }}
                    >
                      {images[activeImage].href ? (
                        <a
                          className="news-carousel-link"
                          href={images[activeImage].href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Abrir ${post.title}`}
                        >
                          <AssetImage
                            src={images[activeImage].src}
                            alt={images[activeImage].alt || `${post.title} — imagen ${activeImage + 1}`}
                            className="news-post-image"
                            imgClassName="news-carousel-media"
                            fallback={
                              <div className="news-post-image-fallback">
                                <ImageIcon size={28} />
                                <span>Imagen no disponible</span>
                              </div>
                            }
                          />
                        </a>
                      ) : (
                        <AssetImage
                          src={images[activeImage].src}
                          alt={images[activeImage].alt || `${post.title} — imagen ${activeImage + 1}`}
                          className="news-post-image"
                          imgClassName="news-carousel-media"
                          fallback={
                            <div className="news-post-image-fallback">
                              <ImageIcon size={28} />
                              <span>Imagen no disponible</span>
                            </div>
                          }
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {images.length > 1 && (
                    <>
                      <button type="button" className="news-carousel-arrow news-carousel-arrow-left" onClick={showPreviousImage} aria-label="Ver imagen anterior">
                        <ChevronLeft size={24} />
                      </button>
                      <button type="button" className="news-carousel-arrow news-carousel-arrow-right" onClick={showNextImage} aria-label="Ver imagen siguiente">
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
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}
