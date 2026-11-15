import { Link, Navigate, useParams } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { Gallery } from '../components/Gallery'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { getProductBySlug } from '../data/products'
import { useI18n, useLocalizedPath } from '../i18n/I18nContext'

export function ProductDetail() {
  const { slug } = useParams()
  const { t } = useI18n()
  const to = useLocalizedPath()
  const product = slug ? getProductBySlug(slug) : undefined

  if (!product) return <Navigate to={to('/catalog')} replace />

  const name = t(`catalog.products.${product.slug}.name`)
  const desc = t(`catalog.products.${product.slug}.desc`)

  return (
    <>
      <SEO
        title={t('meta.productTitle', { name })}
        description={desc}
        path={`/catalog/${product.slug}`}
        image={product.image}
      />
      <PageHero
        eyebrow={t(`catalog.categories.${product.category}`)}
        title={name}
        subtitle={desc}
        image={product.image}
      />

      <section className="py-16">
        <div className="container-award grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-award-gold">{product.id.toUpperCase()}</p>
            <h2 className="mt-3 font-display text-3xl text-award-cream">{name}</h2>
            <p className="mt-4 text-base leading-relaxed text-award-muted">{desc}</p>
            <p className="mt-4 text-sm text-award-gold/80">
              {t(`catalog.subcategories.${product.subcategory}`)}
            </p>
            <p className="mt-6 text-sm text-award-muted">{t('common.demoNote')}</p>
          </Reveal>
          <Reveal delay={0.1} className="space-y-3">
            <Link to={to('/order')} className="btn-primary w-full justify-center">
              {t('catalog.orderIndividual')}
            </Link>
            <WhatsAppButton messageKey="whatsapp.custom" className="w-full justify-center" />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-award-gold/10 py-16">
        <div className="container-award">
          <Reveal className="mb-8">
            <h2 className="section-title">
              <span className="text-gradient-gold">{t('common.gallery')}</span>
            </h2>
          </Reveal>
          <Gallery images={product.gallery.map((src) => ({ src, alt: name }))} />
        </div>
      </section>
    </>
  )
}
