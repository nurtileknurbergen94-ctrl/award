import { useI18n } from '../i18n/I18nContext'
import type { Locale } from '../i18n/types'

export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { locale, switchLocale } = useI18n()

  const btn = (code: Locale, label: string) => (
    <button
      type="button"
      onClick={() => switchLocale(code)}
      className={`px-2.5 py-1 text-xs font-semibold tracking-wider transition-colors ${
        locale === code
          ? 'bg-award-gold text-award-black'
          : 'text-award-muted hover:text-award-gold'
      }`}
      aria-pressed={locale === code}
      aria-label={label}
    >
      {label}
    </button>
  )

  return (
    <div
      className={`inline-flex overflow-hidden rounded-sm border border-award-gold/30 ${className}`}
      role="group"
      aria-label="Language"
    >
      {btn('ru', 'RU')}
      {btn('kk', 'KZ')}
    </div>
  )
}
