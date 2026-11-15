import { useMemo, useState, type FormEvent, type ReactNode } from 'react'
import { CheckCircle2, Paperclip } from 'lucide-react'
import { buildWhatsAppUrl } from '../data/contacts'
import { useI18n } from '../i18n/I18nContext'

const CATEGORY_KEYS = [
  'cups',
  'medals',
  'souvenirs',
  'print3d',
  'metal',
  'custom',
  'galvanic',
  'other',
] as const

interface FormState {
  name: string
  phone: string
  category: string
  description: string
  size: string
  quantity: string
  fileName: string
}

const empty: FormState = {
  name: '',
  phone: '',
  category: '',
  description: '',
  size: '',
  quantity: '',
  fileName: '',
}

export function ContactForm({ defaultCategory = '' }: { defaultCategory?: string }) {
  const { t } = useI18n()
  const [form, setForm] = useState<FormState>({ ...empty, category: defaultCategory })
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [prepared, setPrepared] = useState<{ url: string; hasFile: boolean } | null>(null)

  const categoryLabel = useMemo(() => {
    if (!form.category) return ''
    return t(`order.categories.${form.category}`)
  }, [form.category, t])

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) next.name = t('order.errors.name')
    if (!form.phone.trim()) next.phone = t('order.errors.phone')
    if (!form.category) next.category = t('order.errors.category')
    if (!form.description.trim()) next.description = t('order.errors.description')
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const message = t('order.whatsappTemplate', {
      name: form.name.trim(),
      phone: form.phone.trim(),
      category: categoryLabel,
      description: form.description.trim(),
      size: form.size.trim() || '—',
      quantity: form.quantity.trim() || '—',
      files: form.fileName || '—',
    })

    setPrepared({
      url: buildWhatsAppUrl(message),
      hasFile: Boolean(form.fileName),
    })
  }

  const field = (
    key: keyof FormState,
    label: string,
    node: ReactNode,
    optional = false,
  ) => (
    <label className="block space-y-2">
      <span className="text-sm text-award-cream">
        {label}
        {optional ? (
          <span className="ml-2 text-xs text-award-muted">({t('common.optional')})</span>
        ) : (
          <span className="ml-1 text-award-gold">*</span>
        )}
      </span>
      {node}
      {errors[key] && <span className="block text-xs text-red-400">{errors[key]}</span>}
    </label>
  )

  if (prepared) {
    return (
      <div className="card-surface p-6 md:p-8">
        <div className="mb-4 flex items-center gap-3 text-award-gold">
          <CheckCircle2 className="h-6 w-6" />
          <h3 className="font-display text-2xl font-semibold text-award-cream">
            {t('order.successTitle')}
          </h3>
        </div>
        <p className="mb-4 text-sm leading-relaxed text-award-muted">{t('order.successText')}</p>
        {prepared.hasFile && (
          <p className="mb-6 rounded-sm border border-award-gold/20 bg-award-dark/60 px-4 py-3 text-sm text-award-gold-light">
            {t('order.fileHint')}
          </p>
        )}
        <div className="flex flex-wrap gap-3">
          <a href={prepared.url} target="_blank" rel="noopener noreferrer" className="btn-primary">
            {t('order.openWhatsApp')}
          </a>
          <button
            type="button"
            className="btn-outline"
            onClick={() => {
              setPrepared(null)
              setForm({ ...empty, category: defaultCategory })
            }}
          >
            {t('common.back')}
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="card-surface space-y-5 p-6 md:p-8" noValidate>
      {field(
        'name',
        t('order.name'),
        <input
          className="input-field"
          value={form.name}
          onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
          autoComplete="name"
        />,
      )}

      {field(
        'phone',
        t('order.phone'),
        <input
          className="input-field"
          type="tel"
          value={form.phone}
          onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
          autoComplete="tel"
          placeholder="+7 ..."
        />,
      )}

      {field(
        'category',
        t('order.category'),
        <select
          className="input-field"
          value={form.category}
          onChange={(e) => setForm((s) => ({ ...s, category: e.target.value }))}
        >
          <option value="">{t('order.selectCategory')}</option>
          {CATEGORY_KEYS.map((key) => (
            <option key={key} value={key}>
              {t(`order.categories.${key}`)}
            </option>
          ))}
        </select>,
      )}

      {field(
        'description',
        t('order.description'),
        <textarea
          className="input-field min-h-32 resize-y"
          value={form.description}
          onChange={(e) => setForm((s) => ({ ...s, description: e.target.value }))}
        />,
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        {field(
          'size',
          t('order.size'),
          <input
            className="input-field"
            value={form.size}
            onChange={(e) => setForm((s) => ({ ...s, size: e.target.value }))}
          />,
          true,
        )}
        {field(
          'quantity',
          t('order.quantity'),
          <input
            className="input-field"
            type="number"
            min={1}
            value={form.quantity}
            onChange={(e) => setForm((s) => ({ ...s, quantity: e.target.value }))}
          />,
          true,
        )}
      </div>

      <label className="block space-y-2">
        <span className="text-sm text-award-cream">
          {t('order.file')}
          <span className="ml-2 text-xs text-award-muted">({t('common.optional')})</span>
        </span>
        <div className="flex flex-wrap items-center gap-3">
          <label className="btn-outline cursor-pointer !py-2.5">
            <Paperclip className="h-4 w-4" />
            {t('common.attachFile')}
            <input
              type="file"
              className="hidden"
              accept="image/*,.pdf,.stl,.obj,.zip"
              onChange={(e) =>
                setForm((s) => ({
                  ...s,
                  fileName: e.target.files?.[0]?.name ?? '',
                }))
              }
            />
          </label>
          {form.fileName && (
            <span className="text-sm text-award-muted">
              {t('common.fileSelected')}: {form.fileName}
            </span>
          )}
        </div>
      </label>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        {t('order.submit')}
      </button>
    </form>
  )
}
