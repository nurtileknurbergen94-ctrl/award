import { Reveal } from './Reveal'

interface PageHeroProps {
  eyebrow?: string
  title: string
  subtitle?: string
  image?: string
  imageAlt?: string
}

export function PageHero({ eyebrow, title, subtitle, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-award-gold/10 pt-28 pb-14 md:pt-36 md:pb-20">
      <div className="absolute inset-0 texture-overlay opacity-60" />
      <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-award-burgundy/20 blur-3xl" />
      <div className="absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-award-gold/10 blur-3xl" />

      <div className="container-award relative grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-wide text-award-cream sm:text-5xl md:text-6xl">
            <span className="text-gradient-gold">{title}</span>
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-award-muted md:text-lg">
              {subtitle}
            </p>
          )}
          <div className="gold-line mt-8 max-w-xs" />
        </Reveal>

        {image && (
          <Reveal delay={0.15} className="relative">
            <div className="overflow-hidden rounded-sm border border-award-gold/20 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
              <img
                src={image}
                alt={imageAlt || title}
                className="aspect-[4/3] w-full object-cover object-center"
                loading="eager"
              />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
