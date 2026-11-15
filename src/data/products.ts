export type ProductCategory =
  | 'cups'
  | 'medals'
  | 'souvenirs'
  | 'print3d'
  | 'metal'

export interface Product {
  id: string
  slug: string
  category: ProductCategory
  subcategory: string
  image: string
  gallery: string[]
  isDemo: true
}

/** Demo catalogue examples based on brand references — not real completed orders. */
export const products: Product[] = [
  {
    id: 'k-01',
    slug: 'sports-cup-globe',
    category: 'cups',
    subcategory: 'sports',
    image: '/references/ref-04-trophies.jpeg',
    gallery: ['/references/ref-04-trophies.jpeg', '/references/ref-01-hero.jpeg'],
    isDemo: true,
  },
  {
    id: 'k-02',
    slug: 'designer-trophy-star',
    category: 'cups',
    subcategory: 'designer',
    image: '/references/ref-01-hero.jpeg',
    gallery: ['/references/ref-01-hero.jpeg', '/references/ref-04-trophies.jpeg'],
    isDemo: true,
  },
  {
    id: 'k-03',
    slug: 'sports-statuette',
    category: 'cups',
    subcategory: 'statuettes',
    image: '/references/ref-04-trophies.jpeg',
    gallery: ['/references/ref-04-trophies.jpeg', '/references/ref-06.jpeg'],
    isDemo: true,
  },
  {
    id: 'k-04',
    slug: 'corporate-award',
    category: 'cups',
    subcategory: 'corporate',
    image: '/references/ref-01-hero.jpeg',
    gallery: ['/references/ref-01-hero.jpeg', '/references/ref-05.jpeg'],
    isDemo: true,
  },
  {
    id: 'm-01',
    slug: 'round-medal',
    category: 'medals',
    subcategory: 'round',
    image: '/references/ref-03.jpeg',
    gallery: ['/references/ref-03.jpeg', '/references/ref-01-hero.jpeg'],
    isDemo: true,
  },
  {
    id: 'm-02',
    slug: 'shaped-medal',
    category: 'medals',
    subcategory: 'shaped',
    image: '/references/ref-03.jpeg',
    gallery: ['/references/ref-03.jpeg', '/references/ref-07.jpeg'],
    isDemo: true,
  },
  {
    id: 'm-03',
    slug: 'square-opening-medal',
    category: 'medals',
    subcategory: 'square',
    image: '/references/ref-03.jpeg',
    gallery: ['/references/ref-03.jpeg', '/references/ref-05.jpeg'],
    isDemo: true,
  },
  {
    id: 'm-04',
    slug: 'custom-shape-medal',
    category: 'medals',
    subcategory: 'custom',
    image: '/references/ref-03.jpeg',
    gallery: ['/references/ref-03.jpeg', '/references/ref-01-hero.jpeg'],
    isDemo: true,
  },
  {
    id: 's-01',
    slug: 'desk-souvenir-horse',
    category: 'souvenirs',
    subcategory: 'desk',
    image: '/references/ref-05.jpeg',
    gallery: ['/references/ref-05.jpeg', '/references/ref-01-hero.jpeg'],
    isDemo: true,
  },
  {
    id: 's-02',
    slug: 'keychain-set',
    category: 'souvenirs',
    subcategory: 'keychains',
    image: '/references/ref-05.jpeg',
    gallery: ['/references/ref-05.jpeg', '/references/ref-03.jpeg'],
    isDemo: true,
  },
  {
    id: 's-03',
    slug: 'commemorative-plate',
    category: 'souvenirs',
    subcategory: 'plates',
    image: '/references/ref-05.jpeg',
    gallery: ['/references/ref-05.jpeg', '/references/ref-07.jpeg'],
    isDemo: true,
  },
  {
    id: 's-04',
    slug: 'corporate-gift-set',
    category: 'souvenirs',
    subcategory: 'corporate',
    image: '/references/ref-05.jpeg',
    gallery: ['/references/ref-05.jpeg', '/references/ref-01-hero.jpeg'],
    isDemo: true,
  },
  {
    id: 'p-01',
    slug: 'portrait-figurine',
    category: 'print3d',
    subcategory: 'portrait',
    image: '/references/ref-06.jpeg',
    gallery: ['/references/ref-06.jpeg', '/references/ref-02-services.jpeg'],
    isDemo: true,
  },
  {
    id: 'p-02',
    slug: 'architectural-model',
    category: 'print3d',
    subcategory: 'architecture',
    image: '/references/ref-06.jpeg',
    gallery: ['/references/ref-06.jpeg', '/references/ref-01-hero.jpeg'],
    isDemo: true,
  },
  {
    id: 'p-03',
    slug: 'sports-figurine',
    category: 'print3d',
    subcategory: 'sports',
    image: '/references/ref-06.jpeg',
    gallery: ['/references/ref-06.jpeg', '/references/ref-04-trophies.jpeg'],
    isDemo: true,
  },
  {
    id: 'p-04',
    slug: 'prototype-part',
    category: 'print3d',
    subcategory: 'prototypes',
    image: '/references/ref-06.jpeg',
    gallery: ['/references/ref-06.jpeg', '/references/ref-07.jpeg'],
    isDemo: true,
  },
  {
    id: 'mt-01',
    slug: 'metal-decorative',
    category: 'metal',
    subcategory: 'decorative',
    image: '/references/ref-07.jpeg',
    gallery: ['/references/ref-07.jpeg', '/references/ref-04-trophies.jpeg'],
    isDemo: true,
  },
  {
    id: 'mt-02',
    slug: 'engraved-metal',
    category: 'metal',
    subcategory: 'engraving',
    image: '/references/ref-07.jpeg',
    gallery: ['/references/ref-07.jpeg', '/references/ref-05.jpeg'],
    isDemo: true,
  },
  {
    id: 'mt-03',
    slug: 'galvanic-finish-piece',
    category: 'metal',
    subcategory: 'galvanic',
    image: '/references/ref-07.jpeg',
    gallery: ['/references/ref-07.jpeg', '/references/ref-03.jpeg'],
    isDemo: true,
  },
]

export const portfolioItems = [
  { id: 'pf-1', category: 'cups' as const, image: '/references/ref-04-trophies.jpeg' },
  { id: 'pf-2', category: 'medals' as const, image: '/references/ref-03.jpeg' },
  { id: 'pf-3', category: 'print3d' as const, image: '/references/ref-06.jpeg' },
  { id: 'pf-4', category: 'souvenirs' as const, image: '/references/ref-05.jpeg' },
  { id: 'pf-5', category: 'metal' as const, image: '/references/ref-07.jpeg' },
  { id: 'pf-6', category: 'custom' as const, image: '/references/ref-01-hero.jpeg' },
  { id: 'pf-7', category: 'cups' as const, image: '/references/ref-01-hero.jpeg' },
  { id: 'pf-8', category: 'print3d' as const, image: '/references/ref-02-services.jpeg' },
  { id: 'pf-9', category: 'souvenirs' as const, image: '/references/ref-05.jpeg' },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
