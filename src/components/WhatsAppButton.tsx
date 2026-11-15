import { MessageCircle } from 'lucide-react'
import { buildWhatsAppUrl } from '../data/contacts'
import { useI18n } from '../i18n/I18nContext'

interface WhatsAppButtonProps {
  messageKey?: string
  message?: string
  floating?: boolean
  className?: string
  label?: string
}

export function WhatsAppButton({
  messageKey = 'whatsapp.default',
  message,
  floating = false,
  className = '',
  label,
}: WhatsAppButtonProps) {
  const { t } = useI18n()
  const text = message ?? t(messageKey)
  const href = buildWhatsAppUrl(text)
  const display = label ?? (floating ? t('whatsapp.floatLabel') : t('common.writeWhatsApp'))

  if (floating) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/40 transition hover:scale-105 hover:brightness-110 md:bottom-8 md:right-8 ${className}`}
        aria-label={display}
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">{display}</span>
      </a>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-primary !bg-[#25D366] !text-white hover:!bg-[#2fe475] ${className}`}
    >
      <MessageCircle className="h-4 w-4" />
      {display}
    </a>
  )
}
