export const contacts = {
  brand: 'AWARD',
  slogan: {
    ru: 'Создаём вещи, достойные признания',
    kk: 'Мойындауға лайық заттар жасаймыз',
  },
  tagline: {
    ru: 'От идеи до совершенства',
    kk: 'Идеядан мінсіздікке дейін',
  },
  geography: {
    ru: 'Весь Казахстан',
    kk: 'Бүкіл Қазақстан',
  },
  instagram: {
    handle: '@award.kz',
    url: 'https://www.instagram.com/award.kz/',
  },
  whatsapp: {
    display: '+7 775 341 0289',
    e164: '77753410289',
    url: 'https://wa.me/77753410289',
  },
  phone: {
    display: '+7 701 333 3253',
    tel: 'tel:+77013333253',
  },
} as const

export function buildWhatsAppUrl(message: string): string {
  return `${contacts.whatsapp.url}?text=${encodeURIComponent(message)}`
}
