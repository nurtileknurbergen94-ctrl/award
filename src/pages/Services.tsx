import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SEO } from '../components/SEO'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { services } from '../data/services'
import { useI18n, useLocalizedPath } from '../i18n/I18nContext'

export function Services() {
  const { t } = useI18n()
  const to = useLocalizedPath()

  return (
    <>
      <SEO
        title={t('meta.servicesTitle')}
        description={t('meta.servicesDescription')}
        path="/services"
        image="/references/ref-02-services.jpeg"
      />
      <PageHero
        eyebrow={t('common.tagline')}
        title={t('services.pageTitle')}
        subtitle={t('services.pageSubtitle')}
        image="/references/ref-02-services.jpeg"
      />

      <section className="py-16 md:py-24">
        <div className="container-award grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.05}>
              <Link to={to(`/services/${service.slug}`)} className="card-surface group block h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={t(`services.items.${service.id}.title`)}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-sm bg-award-black/70 px-2 py-1 font-display text-sm text-award-gold">
                    0{i + 1}
                  </span>
                </div>
                <div className="p-5">
                  <h2 className="font-display text-2xl text-award-gold">
                    {t(`services.items.${service.id}.title`)}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-award-muted">
                    {t(`services.items.${service.id}.short`)}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-award-cream/80 group-hover:text-award-gold">
                    {t('common.learnMore')} <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
