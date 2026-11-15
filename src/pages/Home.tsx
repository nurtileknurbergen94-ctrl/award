import { Link } from 'react-router-dom'
import {
  Diamond,
  Layers,
  PenTool,
  UserRound,
  ArrowRight,
} from 'lucide-react'
import { SEO } from '../components/SEO'
import { Reveal } from '../components/Reveal'
import { Logo } from '../components/Logo'
import { Gallery } from '../components/Gallery'
import { InstagramBanner } from '../components/InstagramBanner'
import { useI18n, useLocalizedPath } from '../i18n/I18nContext'

const CAPABILITIES = [
  { key: 'cups', path: '/trophies', image: '/references/ref-04-trophies.jpeg' },
  { key: 'medals', path: '/medals', image: '/references/ref-03.jpeg' },
  { key: 'print', path: '/printing', image: '/references/ref-06.jpeg' },
  { key: 'souvenirs', path: '/souvenirs', image: '/references/ref-05.jpeg' },
  { key: 'galvanic', path: '/galvanic', image: '/references/ref-07.jpeg' },
  { key: 'custom', path: '/order', image: '/references/ref-01-hero.jpeg' },
] as const

const WHY = [
  { key: 'design', icon: PenTool },
  { key: 'details', icon: Diamond },
  { key: 'tech', icon: Layers },
  { key: 'personal', icon: UserRound },
] as const

export function Home() {
  const { t } = useI18n()
  const to = useLocalizedPath()

  return (
    <>
      <SEO title={t('meta.homeTitle')} description={t('meta.homeDescription')} />

      <section className="relative min-h-[100svh] overflow-hidden pt-24 md:pt-28">
        <div className="absolute inset-0">
          <img
            src="/references/ref-01-hero.jpeg"
            alt=""
            className="h-full w-full object-cover opacity-35"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-r from-award-black via-award-black/92 to-award-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-award-black via-transparent to-award-black/40" />
          <div className="absolute inset-0 texture-overlay" />
        </div>

        <div className="container-award relative grid min-h-[calc(100svh-7rem)] items-center gap-10 pb-16 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <Logo size="lg" className="mb-8" />
            <p className="section-eyebrow">{t('common.tagline')}</p>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-wide text-award-cream sm:text-5xl md:text-6xl lg:text-[3.6rem]">
              <span className="text-gradient-gold">{t('hero.title')}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-award-muted md:text-lg">
              {t('hero.description')}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={to('/order')} className="btn-primary">
                {t('hero.ctaPrimary')}
              </Link>
              <Link to={to('/portfolio')} className="btn-outline">
                {t('hero.ctaSecondary')}
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative hidden lg:block">
            <div className="overflow-hidden rounded-sm border border-award-gold/25 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
              <img
                src="/references/ref-01-hero.jpeg"
                alt={t('hero.title')}
                className="aspect-[4/5] w-full object-cover object-[70%_center]"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 h-24 w-24 border border-award-gold/40" />
            <div className="absolute -right-4 -top-4 h-16 w-16 border border-award-burgundy/50" />
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-award">
          <Reveal className="mb-12 text-center">
            <p className="section-eyebrow">{t('common.brand')}</p>
            <h2 className="section-title">
              <span className="text-gradient-gold">{t('home.capabilitiesTitle')}</span>
            </h2>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((item, i) => (
              <Reveal key={item.key} delay={i * 0.06}>
                <Link to={to(item.path)} className="card-surface group block h-full">
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={t(`home.capabilities.${item.key}.title`)}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-2xl text-award-gold">
                      {t(`home.capabilities.${item.key}.title`)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-award-muted">
                      {t(`home.capabilities.${item.key}.desc`)}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-award-cream/80 transition group-hover:text-award-gold">
                      {t('common.learnMore')} <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-award-gold/10 bg-award-graphite/40 py-20">
        <div className="container-award">
          <Reveal className="mb-12 text-center">
            <h2 className="section-title">
              <span className="text-gradient-gold">{t('home.whyTitle')}</span>
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((item, i) => {
              const Icon = item.icon
              return (
                <Reveal key={item.key} delay={i * 0.08}>
                  <div className="h-full border border-award-gold/15 bg-award-black/40 p-6 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-award-gold/40">
                      <Icon className="h-6 w-6 text-award-gold" />
                    </div>
                    <h3 className="font-display text-xl text-award-cream">
                      {t(`home.why.${item.key}.title`)}
                    </h3>
                    <p className="mt-2 text-sm text-award-muted">{t(`home.why.${item.key}.desc`)}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-award">
          <Reveal className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="section-eyebrow">{t('common.gallery')}</p>
              <h2 className="section-title">
                <span className="text-gradient-gold">{t('home.worksTitle')}</span>
              </h2>
            </div>
            <Link to={to('/portfolio')} className="btn-outline">
              {t('common.viewAll')}
            </Link>
          </Reveal>
          <p className="mb-6 text-sm text-award-muted">{t('common.demoNote')}</p>
          <Gallery
            images={[
              { src: '/references/ref-04-trophies.jpeg', alt: t('nav.trophies') },
              { src: '/references/ref-03.jpeg', alt: t('nav.medals') },
              { src: '/references/ref-05.jpeg', alt: t('nav.souvenirs') },
              { src: '/references/ref-06.jpeg', alt: t('nav.printing') },
              { src: '/references/ref-07.jpeg', alt: t('nav.galvanic') },
              { src: '/references/ref-01-hero.jpeg', alt: t('common.brand') },
            ]}
          />
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-award-burgundy/25" />
        <div className="absolute inset-0 texture-overlay" />
        <div className="container-award relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-semibold text-award-cream md:text-5xl">
              {t('home.ideaTitle')}
            </h2>
            <p className="mt-5 text-base text-award-cream/80 md:text-lg">{t('home.ideaDescription')}</p>
            <Link to={to('/order')} className="btn-primary mt-8">
              {t('home.ideaCta')}
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-award">
          <Reveal className="mb-12 text-center">
            <h2 className="section-title">
              <span className="text-gradient-gold">{t('home.stepsTitle')}</span>
            </h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-5">
            {[1, 2, 3, 4, 5].map((n, i) => (
              <Reveal key={n} delay={i * 0.07}>
                <div className="relative h-full border border-award-gold/15 bg-award-graphite/60 p-5">
                  <span className="font-display text-3xl text-award-gold/50">0{n}</span>
                  <h3 className="mt-3 font-display text-xl text-award-cream">
                    {t(`home.steps.${n}.title`)}
                  </h3>
                  <p className="mt-2 text-sm text-award-muted">{t(`home.steps.${n}.desc`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <InstagramBanner />

      <section className="py-20">
        <div className="container-award">
          <Reveal className="overflow-hidden rounded-sm border border-award-gold/20 bg-gradient-to-br from-award-dark to-award-black p-10 text-center md:p-16">
            <h2 className="font-display text-3xl font-semibold tracking-wide text-award-gold md:text-5xl">
              {t('home.finalCtaTitle')}
            </h2>
            <Link to={to('/contacts')} className="btn-primary mt-8">
              {t('home.finalCtaButton')}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
