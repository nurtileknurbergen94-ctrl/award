import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { Gallery } from '../components/Gallery'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { useI18n, useLocalizedPath } from '../i18n/I18nContext'

const CATS = ['sports', 'designer', 'statuettes', 'custom', 'corporate'] as const
const BASES = ['plastic', 'stone', 'acrylic', 'wood'] as const
const PERSONAL = ['engraving', 'logo', 'text', 'design'] as const

export function Trophies() {
  const { t } = useI18n()
  const to = useLocalizedPath()

  return (
    <>
      <SEO
        title={t('meta.trophiesTitle')}
        description={t('meta.trophiesDescription')}
        path="/trophies"
        image="/references/ref-04-trophies.jpeg"
      />
      <PageHero
        title={t('trophies.pageTitle')}
        subtitle={t('trophies.pageSubtitle')}
        image="/references/ref-04-trophies.jpeg"
      />

      <section className="py-16">
        <div className="container-award grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATS.map((cat, i) => (
            <Reveal key={cat} delay={i * 0.05}>
              <article className="card-surface h-full overflow-hidden">
                <img
                  src={i % 2 === 0 ? '/references/ref-04-trophies.jpeg' : '/references/ref-01-hero.jpeg'}
                  alt={t(`trophies.categories.${cat}.title`)}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="p-5">
                  <h2 className="font-display text-2xl text-award-gold">
                    {t(`trophies.categories.${cat}.title`)}
                  </h2>
                  <p className="mt-2 text-sm text-award-muted">
                    {t(`trophies.categories.${cat}.desc`)}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-award-gold/10 bg-award-graphite/40 py-16">
        <div className="container-award grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="mb-6 font-display text-3xl text-award-cream">{t('trophies.basesTitle')}</h2>
            <div className="grid grid-cols-2 gap-3">
              {BASES.map((b) => (
                <div key={b} className="border border-award-gold/15 bg-award-black/40 px-4 py-6 text-center text-sm text-award-cream">
                  {t(`trophies.bases.${b}`)}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mb-6 font-display text-3xl text-award-cream">{t('trophies.personalTitle')}</h2>
            <div className="grid grid-cols-2 gap-3">
              {PERSONAL.map((p) => (
                <div key={p} className="border border-award-gold/15 bg-award-black/40 px-4 py-6 text-center text-sm text-award-cream">
                  {t(`trophies.personal.${p}`)}
                </div>
              ))}
            </div>
          </Reveal>
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
            images={[
              { src: '/references/ref-04-trophies.jpeg', alt: t('trophies.pageTitle') },
              { src: '/references/ref-01-hero.jpeg', alt: t('nav.trophies') },
              { src: '/references/ref-02-services.jpeg', alt: t('common.examples') },
            ]}
          />
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to={to('/order')} className="btn-primary">
              {t('trophies.cta')}
            </Link>
            <WhatsAppButton messageKey="whatsapp.trophies" />
          </div>
        </div>
      </section>
    </>
  )
}
