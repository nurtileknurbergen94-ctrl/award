import { useMemo, useState } from 'react'
import { SEO } from '../components/SEO'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { Gallery } from '../components/Gallery'
import { InstagramBanner } from '../components/InstagramBanner'
import { portfolioItems } from '../data/products'
import { useI18n } from '../i18n/I18nContext'

const FILTERS = ['all', 'cups', 'medals', 'print3d', 'souvenirs', 'metal', 'custom'] as const

export function Portfolio() {
  const { t } = useI18n()
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('all')

  const images = useMemo(() => {
    const items =
      filter === 'all' ? portfolioItems : portfolioItems.filter((i) => i.category === filter)
    return items.map((item) => ({
      src: item.image,
      alt: `${t(`portfolio.filters.${item.category}`)} — ${item.id}`,
    }))
  }, [filter, t])

  return (
    <>
      <SEO
        title={t('meta.portfolioTitle')}
        description={t('meta.portfolioDescription')}
        path="/portfolio"
        image="/references/ref-01-hero.jpeg"
      />
      <PageHero title={t('portfolio.pageTitle')} subtitle={t('portfolio.pageSubtitle')} />

      <section className="py-12 md:py-16">
        <div className="container-award">
          <Reveal className="mb-8 rounded-sm border border-award-gold/20 bg-award-burgundy/20 px-5 py-4 text-sm text-award-cream/90">
            {t('portfolio.demoBanner')}
          </Reveal>

          <div className="mb-8 flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`rounded-sm border px-3 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                  filter === f
                    ? 'border-award-gold bg-award-gold text-award-black'
                    : 'border-award-gold/25 text-award-muted hover:border-award-gold/50 hover:text-award-gold'
                }`}
              >
                {t(`portfolio.filters.${f}`)}
              </button>
            ))}
          </div>

          {images.length === 0 ? (
            <p className="py-16 text-center text-award-muted">{t('common.noResults')}</p>
          ) : (
            <Gallery images={images} columns={3} />
          )}
        </div>
      </section>

      <InstagramBanner />
    </>
  )
}
