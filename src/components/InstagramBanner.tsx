import { Instagram } from 'lucide-react'
import { contacts } from '../data/contacts'
import { useI18n } from '../i18n/I18nContext'
import { Reveal } from './Reveal'

export function InstagramBanner() {
  const { t } = useI18n()

  return (
    <section className="border-y border-award-gold/10 bg-award-graphite/50 py-14">
      <div className="container-award">
        <Reveal className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <p className="section-eyebrow">{contacts.instagram.handle}</p>
            <h2 className="font-display text-3xl font-semibold text-award-cream md:text-4xl">
              {t('common.moreWorksInstagram')}
            </h2>
          </div>
          <a
            href={contacts.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Instagram className="h-4 w-4" />
            {t('common.instagram')}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
