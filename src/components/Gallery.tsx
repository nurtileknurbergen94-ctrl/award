import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'
import { motion, AnimatePresence } from 'framer-motion'

interface GalleryProps {
  images: { src: string; alt: string }[]
  columns?: 2 | 3 | 4
}

export function Gallery({ images, columns = 3 }: GalleryProps) {
  const { t } = useI18n()
  const [active, setActive] = useState<number | null>(null)
  const colClass =
    columns === 2
      ? 'sm:grid-cols-2'
      : columns === 4
        ? 'sm:grid-cols-2 lg:grid-cols-4'
        : 'sm:grid-cols-2 lg:grid-cols-3'

  return (
    <>
      <div className={`grid grid-cols-1 gap-4 ${colClass}`}>
        {images.map((img, i) => (
          <button
            key={`${img.src}-${i}`}
            type="button"
            onClick={() => setActive(i)}
            className="group relative overflow-hidden rounded-sm border border-award-gold/15 bg-award-graphite text-left"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/35">
              <ZoomIn className="h-7 w-7 text-award-gold opacity-0 transition group-hover:opacity-100" />
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal
            aria-label={t('common.gallery')}
          >
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full border border-award-gold/30 bg-award-black/80 p-2 text-award-cream"
              onClick={() => setActive(null)}
              aria-label={t('common.close')}
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={images[active].src}
              alt={images[active].alt}
              className="max-h-[85vh] max-w-[95vw] rounded-sm object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
