import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { Gallery } from '../components/Gallery'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { useI18n, useLocalizedPath } from '../i18n/I18nContext'

const TYPES = ['round', 'shaped', 'square', 'custom'] as const
const COATINGS = ['gold', 'silver', 'bronze', 'antique', 'blackNickel', 'copper'] as const
const ENAMEL = ['red', 'blue', 'green', 'white', 'black'] as const
const RIBBONS = ['solid', 'bicolor', 'print', 'custom'] as const

const enamelColors: Record<(typeof ENAMEL)[number], string> = {
  red: '#8B1E2D',
  blue: '#1E4A8B',
  green: '#1F6B45',
  white: '#F5F0E8',
  black: '#1A1A1A',
}

const coatingColors: Record<(typeof COATINGS)[number], string> = {
  gold: 'linear-gradient(145deg,#E8C995,#C9A568,#8B7340)',
  silver: 'linear-gradient(145deg,#F0F0F0,#A8A8A8,#6E6E6E)',
  bronze: 'linear-gradient(145deg,#D4A574,#8B5E3C,#5C3A22)',
  antique: 'linear-gradient(145deg,#C9A568,#7A6238,#3D2E18)',
  blackNickel: 'linear-gradient(145deg,#4A4A4A,#1F1F1F,#0A0A0A)',
  copper: 'linear-gradient(145deg,#E0A070,#B87333,#6B3F1D)',
}

export function Medals() {
  const { t } = useI18n()
  const to = useLocalizedPath()

  return (
    <>
      <SEO
        title={t('meta.medalsTitle')}
        description={t('meta.medalsDescription')}
        path="/medals"
        image="/references/ref-03.jpeg"
      />
      <PageHero
        title={t('medals.pageTitle')}
        subtitle={t('medals.pageSubtitle')}
        image="/references/ref-03.jpeg"
      />

      <section className="py-16">
        <div className="container-award">
          <Reveal className="mb-10">
            <h2 className="section-title">
              <span className="text-gradient-gold">{t('medals.typesTitle')}</span>
            </h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {TYPES.map((type, i) => (
              <Reveal key={type} delay={i * 0.06}>
                <article className="card-surface h-full p-6">
                  <span className="font-display text-2xl text-award-gold/50">0{i + 1}</span>
                  <h3 className="mt-2 font-display text-2xl text-award-gold">
                    {t(`medals.types.${type}.title`)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-award-muted">
                    {t(`medals.types.${type}.desc`)}
                  </p>
                  <p className="mt-4 text-xs uppercase tracking-[0.18em] text-award-cream/70">
                    {t(`medals.types.${type}.size`)}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-award-gold/10 bg-award-graphite/40 py-16">
        <div className="container-award space-y-12">
          <Reveal>
            <h2 className="section-title">
              <span className="text-gradient-gold">{t('medals.optionsTitle')}</span>
            </h2>
          </Reveal>

          <div>
            <h3 className="mb-5 font-display text-xl text-award-cream">{t('medals.coatingsTitle')}</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {COATINGS.map((c) => (
                <div key={c} className="text-center">
                  <div
                    className="mx-auto h-16 w-16 rounded-full border border-award-gold/20 shadow-inner"
                    style={{ background: coatingColors[c] }}
                  />
                  <p className="mt-2 text-xs text-award-muted">{t(`medals.coatings.${c}`)}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-display text-xl text-award-cream">{t('medals.enamelTitle')}</h3>
            <div className="flex flex-wrap gap-4">
              {ENAMEL.map((c) => (
                <div key={c} className="text-center">
                  <div
                    className="mx-auto h-12 w-12 rounded-full border border-white/10"
                    style={{ background: enamelColors[c] }}
                  />
                  <p className="mt-2 text-xs text-award-muted">{t(`medals.enamel.${c}`)}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-display text-xl text-award-cream">{t('medals.ribbonsTitle')}</h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {RIBBONS.map((r) => (
                <div key={r} className="border border-award-gold/15 bg-award-black/40 px-4 py-5 text-center text-sm text-award-cream">
                  {t(`medals.ribbons.${r}`)}
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm text-award-muted">{t('medals.note')}</p>
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
              { src: '/references/ref-03.jpeg', alt: t('medals.pageTitle') },
              { src: '/references/ref-01-hero.jpeg', alt: t('nav.medals') },
              { src: '/references/ref-07.jpeg', alt: t('common.coatings') },
            ]}
          />
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to={to('/order')} className="btn-primary">
              {t('medals.cta')}
            </Link>
            <WhatsAppButton messageKey="whatsapp.medals" />
          </div>
        </div>
      </section>
    </>
  )
}
