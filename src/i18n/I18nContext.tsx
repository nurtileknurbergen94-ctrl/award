import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import ru from '../locales/ru.json'
import kk from '../locales/kk.json'
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  isLocale,
  type Locale,
} from './types'

type Dict = typeof ru

const dictionaries: Record<Locale, Dict> = { ru, kk }

type I18nContextValue = {
  locale: Locale
  t: (path: string, vars?: Record<string, string | number>) => string
  setLocale: (locale: Locale) => void
  switchLocale: (locale: Locale) => void
}

const I18nContext = createContext<I18nContextValue | null>(null)

function getByPath(obj: unknown, path: string): string | undefined {
  const parts = path.split('.')
  let current: unknown = obj
  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = (current as Record<string, unknown>)[part]
    } else {
      return undefined
    }
  }
  return typeof current === 'string' ? current : undefined
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const params = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const paramLocale = isLocale(params.lang) ? params.lang : DEFAULT_LOCALE
  const [locale, setLocaleState] = useState<Locale>(paramLocale)

  useEffect(() => {
    if (paramLocale !== locale) {
      setLocaleState(paramLocale)
    }
  }, [paramLocale, locale])

  useEffect(() => {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale)
    document.documentElement.lang = locale === 'kk' ? 'kk' : 'ru'
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(LOCALE_STORAGE_KEY, next)
  }, [])

  const switchLocale = useCallback(
    (next: Locale) => {
      setLocale(next)
      const parts = location.pathname.split('/')
      if (isLocale(parts[1])) {
        parts[1] = next
      } else {
        parts.splice(1, 0, next)
      }
      navigate(`${parts.join('/')}${location.search}${location.hash}`)
    },
    [location.hash, location.pathname, location.search, navigate, setLocale],
  )

  const t = useCallback(
    (path: string, vars?: Record<string, string | number>) => {
      const value =
        getByPath(dictionaries[locale], path) ??
        getByPath(dictionaries.ru, path) ??
        path
      if (!vars) return value
      return Object.entries(vars).reduce(
        (acc, [key, val]) => acc.replace(new RegExp(`{{${key}}}`, 'g'), String(val)),
        value,
      )
    },
    [locale],
  )

  const value = useMemo(
    () => ({ locale, t, setLocale, switchLocale }),
    [locale, t, setLocale, switchLocale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}

export function useLocalizedPath() {
  const { locale } = useI18n()
  return useCallback(
    (path = '') => {
      const clean = path.startsWith('/') ? path : `/${path}`
      if (clean === '/') return `/${locale}`
      return `/${locale}${clean}`
    },
    [locale],
  )
}
