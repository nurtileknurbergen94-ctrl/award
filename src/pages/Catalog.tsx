import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import { SEO } from '../components/SEO'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { products, type ProductCategory } from '../data/products'
import { useI18n, useLocalizedPath } from '../i18n/I18nContext'

const FILTERS: Array<'all' | ProductCategory> = [
  'all',
  'cups',
  'medals',
  'souvenirs',
  'print3d',
  'metal',
]

export function Catalog() {
  const { t } = useI18n()
  const to = useLocalizedPath()
  const [category, setCategory] = useState<(typeof FILTERS)[number]>('all')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return products.filter((p) => {
      const matchCat = category === 'all' || p.category === category
      const name = t(`catalog.products.${p.slug}.name`).toLowerCase()
      const desc = t(`catalog.products.${p.slug}.desc`).toLowerCase()
      const matchQ = !q || name.includes(q) || desc.includes(q) || p.id.includes(q)
      return matchCat && matchQ
    })
  }, [category, query, t])

  return (
    <>
      <SEO
        title={t('meta.catalogTitle')}
        description={t('meta.catalogDescription')}
        path="/catalog"
        image="/references/ref-04-trophies.jpeg"
      />
      <PageHero
        title={t('catalog.pageTitle')}
        subtitle={t('catalog.pageSubtitle')}
        image="/references/ref-04-trophies.jpeg"
      />

      <section className="py-12 md:py-16">
        <div className="container-award">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setCategory(f)}
                  className={`rounded-sm border px-3 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                    category === f
                      ? 'border-award-gold bg-award-gold text-award-black'
                      : 'border-award-gold/25 text-award-muted hover:border-award-gold/50 hover:text-award-gold'
                  }`}
                >
                  {t(`catalog.categories.${f}`)}
                </button>
              ))}
            </div>
            <label className="relative block w-full max-w-sm">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-award-muted" />
              <input
                className="input-field pl-10"
                placeholder={t('catalog.searchPlaceholder')}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
          </div>

          <p className="mb-6 text-sm text-award-muted">{t('common.demoNote')}</p>

          {filtered.length === 0 ? (
            <p className="py-16 text-center text-award-muted">{t('common.noResults')}</p>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((product, i) => (
                <Reveal key={product.id} delay={(i % 6) * 0.04}>
                  <Link to={to(`/catalog/${product.slug}`)} className="card-surface group block h-full">
                    <div className="overflow-hidden">
                      <img
                        src={product.image}
                        alt={t(`catalog.products.${product.slug}.name`)}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-award-gold/70">
                        {product.id.toUpperCase()} · {t(`catalog.categories.${product.category}`)}
                      </p>
                      <h2 className="mt-2 font-display text-2xl text-award-cream">
                        {t(`catalog.products.${product.slug}.name`)}
                      </h2>
                      <p className="mt-2 line-clamp-2 text-sm text-award-muted">
                        {t(`catalog.products.${product.slug}.desc`)}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
