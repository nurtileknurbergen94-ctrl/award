import { Link } from 'react-router-dom'
import { Instagram, MessageCircle, Phone } from 'lucide-react'
import { contacts } from '../data/contacts'
import { useI18n, useLocalizedPath } from '../i18n/I18nContext'
import { Logo } from './Logo'

export function Footer() {
  const { t } = useI18n()
  const to = useLocalizedPath()
  const year = new Date().getFullYear()

  const nav = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.services'), path: '/services' },
    { label: t('nav.catalog'), path: '/catalog' },
    { label: t('nav.portfolio'), path: '/portfolio' },
    { label: t('nav.contacts'), path: '/contacts' },
    { label: t('nav.discussProject'), path: '/order' },
  ]

  const directions = [
    { label: t('footer.directionsList.awards'), path: '/trophies' },
    { label: t('footer.directionsList.medals'), path: '/medals' },
    { label: t('footer.directionsList.souvenirs'), path: '/souvenirs' },
    { label: t('footer.directionsList.printing'), path: '/printing' },
    { label: t('footer.directionsList.galvanic'), path: '/galvanic' },
    { label: t('footer.directionsList.custom'), path: '/order' },
  ]

  return (
    <footer className="mt-20 border-t border-award-gold/15 bg-award-graphite">
      <div className="container-award grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-award-muted">{t('footer.about')}</p>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-award-gold">
            {t('common.geography')}
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-display text-lg text-award-cream">{t('footer.navigation')}</h3>
          <ul className="space-y-2">
            {nav.map((item) => (
              <li key={item.path}>
                <Link
                  to={to(item.path)}
                  className="text-sm text-award-muted transition hover:text-award-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-lg text-award-cream">{t('footer.directions')}</h3>
          <ul className="space-y-2">
            {directions.map((item) => (
              <li key={item.path + item.label}>
                <Link
                  to={to(item.path)}
                  className="text-sm text-award-muted transition hover:text-award-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-lg text-award-cream">{t('footer.contacts')}</h3>
          <div className="space-y-3 text-sm">
            <a
              href={contacts.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-award-muted transition hover:text-award-gold"
            >
              <MessageCircle className="h-4 w-4" />
              {contacts.whatsapp.display}
            </a>
            <a
              href={contacts.phone.tel}
              className="flex items-center gap-2 text-award-muted transition hover:text-award-gold"
            >
              <Phone className="h-4 w-4" />
              {contacts.phone.display}
            </a>
            <a
              href={contacts.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-award-muted transition hover:text-award-gold"
            >
              <Instagram className="h-4 w-4" />
              {contacts.instagram.handle}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-award-gold/10 py-5">
        <div className="container-award flex flex-col items-center justify-between gap-2 text-xs text-award-muted sm:flex-row">
          <p>
            © {year} AWARD. {t('footer.rights')}
          </p>
          <p className="tracking-[0.15em] text-award-gold/70">{t('common.tagline')}</p>
        </div>
      </div>
    </footer>
  )
}
