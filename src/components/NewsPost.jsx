import { AnimatePresence, motion } from 'framer-motion'
import { CalendarDays, ChevronDown, ImageIcon } from 'lucide-react'
import { useState } from 'react'
import { AssetImage } from './AssetImage'
import { ImageCarousel } from './ImageCarousel'

export function NewsPost({ post }) {
  const [expanded, setExpanded] = useState(false)
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

            <ImageCarousel images={images} title={post.title || 'Galería de la novedad'} />
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}
