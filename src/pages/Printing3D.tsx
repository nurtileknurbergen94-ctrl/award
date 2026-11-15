import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { Gallery } from '../components/Gallery'
import { ContactForm } from '../components/ContactForm'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { useI18n, useLocalizedPath } from '../i18n/I18nContext'

const SECTIONS = ['portrait', 'corporate', 'architecture', 'prototypes', 'decor', 'sports'] as const
const MATERIALS = ['resin', 'abs', 'petg', 'nylon', 'engineering'] as const
const FINISH = ['matte', 'gloss', 'metallic', 'plating', 'ral'] as const

export function Printing3D() {
  const { t } = useI18n()
  const to = useLocalizedPath()

  return (
    <>
      <SEO
        title={t('meta.printingTitle')}
        description={t('meta.printingDescription')}
        path="/printing"
        image="/references/ref-06.jpeg"
      />
      <PageHero
        title={t('printing.pageTitle')}
        subtitle={t('printing.pageSubtitle')}
        image="/references/ref-06.jpeg"
      />

      <section className="py-16">
        <div className="container-award grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.map((s, i) => (
            <Reveal key={s} delay={i * 0.05}>
              <article className="card-surface h-full overflow-hidden">
                <img
                  src="/references/ref-06.jpeg"
                  alt={t(`printing.sections.${s}.title`)}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="p-5">
                  <span className="text-xs text-award-gold/60">0{i + 1}</span>
                  <h2 className="mt-1 font-display text-2xl text-award-gold">
                    {t(`printing.sections.${s}.title`)}
                  </h2>
                  <p className="mt-2 text-sm text-award-muted">{t(`printing.sections.${s}.desc`)}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-award-gold/10 bg-award-graphite/40 py-16">
        <div className="container-award">
          <Reveal className="mb-10">
            <h2 className="section-title">
              <span className="text-gradient-gold">{t('printing.processTitle')}</span>
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="border border-award-gold/15 bg-award-black/40 p-4">
                <span className="font-display text-2xl text-award-gold/50">0{n}</span>
                <h3 className="mt-2 font-display text-lg text-award-cream">
                  {t(`printing.process.${n}.title`)}
                </h3>
                <p className="mt-2 text-sm text-award-muted">{t(`printing.process.${n}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-award grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="mb-5 font-display text-3xl text-award-cream">{t('printing.materialsTitle')}</h2>
            <ul className="space-y-2">
              {MATERIALS.map((m) => (
                <li key={m} className="border border-award-gold/15 bg-award-graphite/50 px-4 py-3 text-sm text-award-cream">
                  {t(`printing.materials.${m}`)}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mb-5 font-display text-3xl text-award-cream">{t('printing.finishTitle')}</h2>
            <ul className="space-y-2">
              {FINISH.map((f) => (
                <li key={f} className="border border-award-gold/15 bg-award-graphite/50 px-4 py-3 text-sm text-award-cream">
                  {t(`printing.finish.${f}`)}
                </li>
              ))}
            </ul>
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
              { src: '/references/ref-06.jpeg', alt: t('printing.pageTitle') },
              { src: '/references/ref-02-services.jpeg', alt: t('nav.printing') },
              { src: '/references/ref-07.jpeg', alt: t('common.materials') },
            ]}
          />
        </div>
      </section>

      <section className="border-t border-award-gold/10 py-16">
        <div className="container-award grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <h2 className="font-display text-3xl text-award-gold">{t('printing.cta')}</h2>
            <p className="mt-4 text-sm text-award-muted">{t('printing.attachNote')}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to={to('/order')} className="btn-outline">
                {t('common.orderCustom')}
              </Link>
              <WhatsAppButton messageKey="whatsapp.printing" />
            </div>
          </Reveal>
          <ContactForm defaultCategory="print3d" />
        </div>
      </section>
    </>
  )
}
