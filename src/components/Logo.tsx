import { Link } from 'react-router-dom'
import { useLocalizedPath } from '../i18n/I18nContext'

interface LogoProps {
  className?: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const to = useLocalizedPath()
  const iconSize = size === 'lg' ? 44 : size === 'sm' ? 28 : 36
  const textClass =
    size === 'lg'
      ? 'text-2xl tracking-[0.2em]'
      : size === 'sm'
        ? 'text-sm tracking-[0.18em]'
        : 'text-lg tracking-[0.2em]'

  return (
    <Link to={to('/')} className={`group inline-flex items-center gap-3 ${className}`}>
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden
        className="transition-transform duration-500 group-hover:scale-105"
      >
        <path d="M32 6L52 48H40L32 30L24 48H12L32 6Z" fill="#C9A568" />
        <path d="M32 22L40 40H24L32 22Z" fill="#101010" />
        <path d="M20 52H44V56H20V52Z" fill="#C9A568" />
      </svg>
      {showText && (
        <span className={`font-display font-semibold text-award-gold ${textClass}`}>AWARD</span>
      )}
    </Link>
  )
}
