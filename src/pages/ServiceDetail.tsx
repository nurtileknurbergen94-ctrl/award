import { Link, Navigate, useParams } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { Gallery } from '../components/Gallery'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { getServiceBySlug } from '../data/services'
import { useI18n, useLocalizedPath } from '../i18n/I18nContext'
import { buildWhatsAppUrl } from '../data/contacts'

export function ServiceDetail() {
  const { slug } = useParams()
  const { t } = useI18n()
  const to = useLocalizedPath()
  const service = slug ? getServiceBySlug(slug) : undefined

  if (!service) return <Navigate to={to('/services')} replace />

  const title = t(`services.items.${service.id}.title`)
  const message = t('services.whatsappMessage', { service: title })

  return (
    <>
      <SEO
        title={t('meta.serviceTitle', { name: title })}
        description={t(`services.items.${service.id}.short`)}
        path={`/services/${service.slug}`}
        image={service.image}
      />
      <PageHero
        eyebrow={t('nav.services')}
        title={title}
        subtitle={t(`services.items.${service.id}.short`)}
        image={service.image}
      />

      <section className="py-16">
        <div className="container-award grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <h2 className="font-display text-3xl text-award-cream">{title}</h2>
            <p className="mt-5 text-base leading-relaxed text-award-muted">
              {t(`services.items.${service.id}.full`)}
            </p>
            <div className="mt-8">
              <h3 className="mb-3 font-display text-xl text-award-gold">{t('common.examples')}</h3>
              <p className="text-sm leading-relaxed text-award-cream/80">
                {t(`services.items.${service.id}.examples`)}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-4">
            <a href={buildWhatsAppUrl(message)} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center">
              {t('common.orderService')}
            </a>
            <WhatsAppButton message={message} className="w-full justify-center" />
            <Link to={to('/order')} className="btn-outline w-full justify-center">
              {t('common.orderCustom')}
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-award-gold/10 bg-award-graphite/40 py-16">
        <div className="container-award">
          <Reveal className="mb-10">
            <h2 className="section-title">
              <span className="text-gradient-gold">{t('common.process')}</span>
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="border border-award-gold/15 bg-award-black/40 p-5">
                <span className="font-display text-2xl text-award-gold/50">0{n}</span>
                <h3 className="mt-2 font-display text-lg text-award-cream">
                  {t(`services.steps.${n}.title`)}
                </h3>
                <p className="mt-2 text-sm text-award-muted">{t(`services.steps.${n}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-award">
          <Reveal className="mb-8">
            <h2 className="section-title">
              <span className="text-gradient-gold">{t('common.gallery')}</span>
            </h2>
            <p className="mt-3 text-sm text-award-muted">{t('common.demoNote')}</p>
          </Reveal>
          <Gallery
            images={service.gallery.map((src) => ({ src, alt: title }))}
            columns={3}
          />
        </div>
      </section>
    </>
  )
}
