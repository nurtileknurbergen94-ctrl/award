import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { Gallery } from '../components/Gallery'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { useI18n, useLocalizedPath } from '../i18n/I18nContext'

const COATINGS = ['gold', 'silver', 'nickel', 'chrome', 'copper', 'blackNickel'] as const
const APPS = ['decorative', 'print3d', 'hardware', 'awards'] as const

const swatches: Record<(typeof COATINGS)[number], string> = {
  gold: 'linear-gradient(145deg,#E8C995,#C9A568,#8B7340)',
  silver: 'linear-gradient(145deg,#F5F5F5,#B0B0B0,#707070)',
  nickel: 'linear-gradient(145deg,#D8D8D0,#9A9A90,#5A5A55)',
  chrome: 'linear-gradient(145deg,#FFFFFF,#C8C8C8,#888888)',
  copper: 'linear-gradient(145deg,#E8A878,#B87333,#6B3F1D)',
  blackNickel: 'linear-gradient(145deg,#555555,#222222,#0A0A0A)',
}

export function Galvanic() {
  const { t } = useI18n()
  const to = useLocalizedPath()

  return (
    <>
      <SEO
        title={t('meta.galvanicTitle')}
        description={t('meta.galvanicDescription')}
        path="/galvanic"
        image="/references/ref-07.jpeg"
      />
      <PageHero
        title={t('galvanic.pageTitle')}
        subtitle={t('galvanic.pageSubtitle')}
        image="/references/ref-07.jpeg"
      />

      <section className="py-16">
        <div className="container-award">
          <Reveal className="mb-10">
            <h2 className="section-title">
              <span className="text-gradient-gold">{t('common.coatings')}</span>
            </h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {COATINGS.map((c, i) => (
              <Reveal key={c} delay={i * 0.05}>
                <article className="card-surface flex h-full items-center gap-4 p-5">
                  <div
                    className="h-16 w-16 shrink-0 rounded-full border border-award-gold/20"
                    style={{ background: swatches[c] }}
                  />
                  <div>
                    <h3 className="font-display text-xl text-award-gold">
                      {t(`galvanic.coatings.${c}.title`)}
                    </h3>
                    <p className="mt-1 text-sm text-award-muted">
                      {t(`galvanic.coatings.${c}.desc`)}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-award-gold/10 bg-award-graphite/40 py-16">
        <div className="container-award">
          <Reveal className="mb-10">
            <h2 className="section-title">
              <span className="text-gradient-gold">{t('galvanic.applicationsTitle')}</span>
            </h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {APPS.map((a) => (
              <article key={a} className="border border-award-gold/15 bg-award-black/40 p-5">
                <h3 className="font-display text-xl text-award-cream">
                  {t(`galvanic.applications.${a}.title`)}
                </h3>
                <p className="mt-2 text-sm text-award-muted">
                  {t(`galvanic.applications.${a}.desc`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-award">
          <Reveal className="mb-10">
            <h2 className="section-title">
              <span className="text-gradient-gold">{t('galvanic.processTitle')}</span>
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="border border-award-gold/15 bg-award-graphite/50 p-5">
                <span className="font-display text-2xl text-award-gold/50">0{n}</span>
                <h3 className="mt-2 font-display text-lg text-award-cream">
                  {t(`galvanic.process.${n}.title`)}
                </h3>
                <p className="mt-2 text-sm text-award-muted">{t(`galvanic.process.${n}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-award-gold/10 bg-award-graphite/40 py-16">
        <div className="container-award">
          <Reveal className="mb-10">
            <h2 className="section-title">
              <span className="text-gradient-gold">{t('galvanic.beforeAfterTitle')}</span>
            </h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {(['raw', 'prepared', 'finished'] as const).map((step, i) => (
              <div key={step} className="overflow-hidden border border-award-gold/15">
                <img
                  src="/references/ref-07.jpeg"
                  alt={t(`galvanic.beforeAfter.${step}`)}
                  className={`aspect-square w-full object-cover ${i === 0 ? 'grayscale' : i === 1 ? 'contrast-125 saturate-50' : ''}`}
                  loading="lazy"
                />
                <p className="bg-award-black/60 px-4 py-3 text-center text-sm text-award-cream">
                  {t(`galvanic.beforeAfter.${step}`)}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-award-muted">{t('galvanic.disclaimer')}</p>
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
              { src: '/references/ref-07.jpeg', alt: t('galvanic.pageTitle') },
              { src: '/references/ref-04-trophies.jpeg', alt: t('common.coatings') },
              { src: '/references/ref-03.jpeg', alt: t('nav.medals') },
            ]}
          />
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to={to('/order')} className="btn-primary">
              {t('galvanic.cta')}
            </Link>
            <WhatsAppButton messageKey="whatsapp.galvanic" />
          </div>
        </div>
      </section>
    </>
  )
}
