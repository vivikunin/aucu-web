import { Newspaper } from 'lucide-react'
import { AnimatedSection } from '../components/AnimatedSection'
import { DecorativeBubbles } from '../components/DecorativeBubbles'
import { NewsPost } from '../components/NewsPost'
import { newsPosts } from '../data/site'

export function Novedades() {
  return (
    <div className="page-frame">
      <DecorativeBubbles />

      <section className="news-hero">
        <div className="mx-auto max-w-6xl px-4 pb-6 pt-16 md:pb-8 md:pt-24">
          <p className="eyebrow">AUCU informa</p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Novedades
          </h1>
          <p className="news-hero-intro">
            Noticias, actividades y contenidos de interés para consumidores y nuestra comunidad.
          </p>
        </div>
      </section>

      <AnimatedSection className="section-shell news-section">
        {newsPosts.length > 0 ? (
          <div className="news-list">
            {newsPosts.map((post) => (
              <NewsPost post={post} key={post.id} />
            ))}
          </div>
        ) : (
          <div className="news-empty">
            <Newspaper size={38} />
            <h2>Próximamente</h2>
            <p>En este espacio compartiremos las novedades de AUCU.</p>
          </div>
        )}
      </AnimatedSection>
    </div>
  )
}
