export type Locale = 'ru' | 'kk'

export const LOCALES: Locale[] = ['ru', 'kk']
export const DEFAULT_LOCALE: Locale = 'ru'
export const LOCALE_STORAGE_KEY = 'award-locale'

export function isLocale(value: string | undefined | null): value is Locale {
  return value === 'ru' || value === 'kk'
}
