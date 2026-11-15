import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { Gallery } from '../components/Gallery'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { useI18n, useLocalizedPath } from '../i18n/I18nContext'

const CATS = ['desk', 'keychains', 'plates', 'plaques', 'corporate', 'sets'] as const
const PERSONAL = ['engraving', 'print', 'logo', 'text'] as const

export function Souvenirs() {
  const { t } = useI18n()
  const to = useLocalizedPath()

  return (
    <>
      <SEO
        title={t('meta.souvenirsTitle')}
        description={t('meta.souvenirsDescription')}
        path="/souvenirs"
        image="/references/ref-05.jpeg"
      />
      <PageHero
        title={t('souvenirsPage.pageTitle')}
        subtitle={t('souvenirsPage.pageSubtitle')}
        image="/references/ref-05.jpeg"
      />

      <section className="py-16">
        <div className="container-award grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATS.map((cat, i) => (
            <Reveal key={cat} delay={i * 0.05}>
              <article className="card-surface h-full p-6">
                <span className="font-display text-2xl text-award-gold/40">0{i + 1}</span>
                <h2 className="mt-2 font-display text-2xl text-award-gold">
                  {t(`souvenirsPage.categories.${cat}.title`)}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-award-muted">
                  {t(`souvenirsPage.categories.${cat}.desc`)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-award-gold/10 bg-award-graphite/40 py-16">
        <div className="container-award">
          <Reveal className="mb-8">
            <h2 className="font-display text-3xl text-award-cream">{t('souvenirsPage.personalTitle')}</h2>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {PERSONAL.map((p) => (
              <div key={p} className="border border-award-gold/15 bg-award-black/40 px-4 py-8 text-center text-sm text-award-cream">
                {t(`souvenirsPage.personal.${p}`)}
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
            images={[
              { src: '/references/ref-05.jpeg', alt: t('souvenirsPage.pageTitle') },
              { src: '/references/ref-01-hero.jpeg', alt: t('nav.souvenirs') },
              { src: '/references/ref-03.jpeg', alt: t('common.personalization') },
            ]}
          />
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to={to('/order')} className="btn-primary">
              {t('souvenirsPage.cta')}
            </Link>
            <WhatsAppButton messageKey="whatsapp.souvenirs" />
          </div>
        </div>
      </section>
    </>
  )
}
