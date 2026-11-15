export type ServiceId =
  | 'design'
  | 'modeling'
  | 'awards'
  | 'branding'
  | 'souvenirs'
  | 'printing'
  | 'architecture'
  | 'custom'
  | 'galvanic'

export interface Service {
  id: ServiceId
  slug: string
  image: string
  gallery: string[]
  examplesKey: string
}

export const services: Service[] = [
  {
    id: 'design',
    slug: 'design',
    image: '/references/ref-02-services.jpeg',
    gallery: ['/references/ref-02-services.jpeg', '/references/ref-01-hero.jpeg', '/references/ref-04-trophies.jpeg'],
    examplesKey: 'design',
  },
  {
    id: 'modeling',
    slug: 'modeling',
    image: '/references/ref-06.jpeg',
    gallery: ['/references/ref-06.jpeg', '/references/ref-02-services.jpeg', '/references/ref-07.jpeg'],
    examplesKey: 'modeling',
  },
  {
    id: 'awards',
    slug: 'awards',
    image: '/references/ref-04-trophies.jpeg',
    gallery: ['/references/ref-04-trophies.jpeg', '/references/ref-03.jpeg', '/references/ref-01-hero.jpeg'],
    examplesKey: 'awards',
  },
  {
    id: 'branding',
    slug: 'branding',
    image: '/references/ref-05.jpeg',
    gallery: ['/references/ref-05.jpeg', '/references/ref-01-hero.jpeg', '/references/ref-03.jpeg'],
    examplesKey: 'branding',
  },
  {
    id: 'souvenirs',
    slug: 'souvenirs',
    image: '/references/ref-05.jpeg',
    gallery: ['/references/ref-05.jpeg', '/references/ref-01-hero.jpeg', '/references/ref-04-trophies.jpeg'],
    examplesKey: 'souvenirs',
  },
  {
    id: 'printing',
    slug: 'printing',
    image: '/references/ref-06.jpeg',
    gallery: ['/references/ref-06.jpeg', '/references/ref-07.jpeg', '/references/ref-02-services.jpeg'],
    examplesKey: 'printing',
  },
  {
    id: 'architecture',
    slug: 'architecture',
    image: '/references/ref-06.jpeg',
    gallery: ['/references/ref-06.jpeg', '/references/ref-01-hero.jpeg', '/references/ref-02-services.jpeg'],
    examplesKey: 'architecture',
  },
  {
    id: 'custom',
    slug: 'custom',
    image: '/references/ref-01-hero.jpeg',
    gallery: ['/references/ref-01-hero.jpeg', '/references/ref-06.jpeg', '/references/ref-04-trophies.jpeg'],
    examplesKey: 'custom',
  },
  {
    id: 'galvanic',
    slug: 'galvanic',
    image: '/references/ref-07.jpeg',
    gallery: ['/references/ref-07.jpeg', '/references/ref-04-trophies.jpeg', '/references/ref-03.jpeg'],
    examplesKey: 'galvanic',
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
