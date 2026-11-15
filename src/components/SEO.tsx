import { useEffect } from 'react'
import { useI18n } from '../i18n/I18nContext'

interface SEOProps {
  title: string
  description: string
  image?: string
  path?: string
}

export function SEO({
  title,
  description,
  image = '/references/ref-01-hero.jpeg',
  path = '',
}: SEOProps) {
  const { locale } = useI18n()
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://award.kz'
  const url = `${origin}/${locale}${path}`

  useEffect(() => {
    document.title = title

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.content = content
    }

    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:image', `${origin}${image}`)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:locale', locale === 'kk' ? 'kk_KZ' : 'ru_RU')
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url

    const setAlt = (hreflang: string, href: string) => {
      let link = document.querySelector(
        `link[rel="alternate"][hreflang="${hreflang}"]`,
      ) as HTMLLinkElement | null
      if (!link) {
        link = document.createElement('link')
        link.rel = 'alternate'
        link.hreflang = hreflang
        document.head.appendChild(link)
      }
      link.href = href
    }

    const pathOnly = path || ''
    setAlt('ru', `${origin}/ru${pathOnly}`)
    setAlt('kk', `${origin}/kk${pathOnly}`)
    setAlt('x-default', `${origin}/ru${pathOnly}`)
  }, [title, description, image, url, locale, origin, path])

  return null
}
