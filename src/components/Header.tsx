import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Phone, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { contacts } from '../data/contacts'
import { useI18n, useLocalizedPath } from '../i18n/I18nContext'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Logo } from './Logo'

const NAV = [
  { key: 'home', path: '/' },
  { key: 'services', path: '/services' },
  { key: 'catalog', path: '/catalog' },
  { key: 'portfolio', path: '/portfolio' },
  { key: 'customProjects', path: '/printing' },
  { key: 'contacts', path: '/contacts' },
] as const

export function Header() {
  const { t } = useI18n()
  const to = useLocalizedPath()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm tracking-wide transition-colors ${
      isActive ? 'text-award-gold' : 'text-award-cream/80 hover:text-award-gold'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'border-b border-award-gold/15 bg-award-black/95 backdrop-blur-md shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="container-award flex h-16 items-center justify-between gap-4 md:h-20">
        <Logo size="sm" />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {NAV.map((item) => (
            <NavLink key={item.key} to={to(item.path)} end={item.path === '/'} className={linkClass}>
              {t(`nav.${item.key}`)}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={contacts.phone.tel}
            className="inline-flex items-center gap-1.5 text-xs text-award-muted transition hover:text-award-gold"
          >
            <Phone className="h-3.5 w-3.5" />
            {contacts.phone.display}
          </a>
          <LanguageSwitcher />
          <Link to={to('/order')} className="btn-primary !px-4 !py-2.5 text-xs">
            {t('nav.discussProject')}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="rounded-sm border border-award-gold/30 p-2 text-award-gold"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-award-gold/10 bg-award-black lg:hidden"
          >
            <nav className="container-award flex flex-col gap-1 py-4" aria-label="Mobile">
              {NAV.map((item) => (
                <NavLink
                  key={item.key}
                  to={to(item.path)}
                  end={item.path === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-sm px-3 py-3 text-base ${
                      isActive
                        ? 'bg-award-gold/10 text-award-gold'
                        : 'text-award-cream hover:bg-award-dark'
                    }`
                  }
                >
                  {t(`nav.${item.key}`)}
                </NavLink>
              ))}
              <div className="mt-3 grid gap-2 border-t border-award-gold/10 pt-4">
                <a href={contacts.phone.tel} className="btn-outline justify-center">
                  <Phone className="h-4 w-4" />
                  {t('common.call')}
                </a>
                <Link
                  to={to('/order')}
                  onClick={() => setOpen(false)}
                  className="btn-primary justify-center"
                >
                  {t('nav.discussProject')}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
