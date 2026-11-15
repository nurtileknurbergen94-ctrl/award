import { Link } from 'react-router-dom'
import { useI18n, useLocalizedPath } from '../i18n/I18nContext'

export function NotFound() {
  const { t, locale } = useI18n()
  const to = useLocalizedPath()

  return (
    <section className="container-award flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
      <p className="font-display text-7xl text-award-gold">404</p>
      <h1 className="mt-4 font-display text-3xl text-award-cream">
        {locale === 'kk' ? 'Бет табылмады' : 'Страница не найдена'}
      </h1>
      <Link to={to('/')} className="btn-primary mt-8">
        {t('nav.home')}
      </Link>
    </section>
  )
}
