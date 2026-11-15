import { Instagram, MessageCircle, Phone, MapPin } from 'lucide-react'
import { SEO } from '../components/SEO'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { ContactForm } from '../components/ContactForm'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { contacts, buildWhatsAppUrl } from '../data/contacts'
import { useI18n } from '../i18n/I18nContext'

export function Contacts() {
  const { t } = useI18n()

  return (
    <>
      <SEO
        title={t('meta.contactsTitle')}
        description={t('meta.contactsDescription')}
        path="/contacts"
      />
      <PageHero title={t('contactsPage.pageTitle')} subtitle={t('contactsPage.pageSubtitle')} />

      <section className="py-16">
        <div className="container-award grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-8">
            <div>
              <h2 className="font-display text-2xl text-award-gold">{t('contactsPage.channelsTitle')}</h2>
              <div className="mt-5 space-y-3">
                <a
                  href={buildWhatsAppUrl(t('whatsapp.default'))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 border border-award-gold/15 bg-award-graphite/60 px-4 py-4 text-sm text-award-cream transition hover:border-award-gold/40"
                >
                  <MessageCircle className="h-5 w-5 text-award-gold" />
                  <span>
                    WhatsApp
                    <br />
                    <span className="text-award-muted">{contacts.whatsapp.display}</span>
                  </span>
                </a>
                <a
                  href={contacts.phone.tel}
                  className="flex items-center gap-3 border border-award-gold/15 bg-award-graphite/60 px-4 py-4 text-sm text-award-cream transition hover:border-award-gold/40"
                >
                  <Phone className="h-5 w-5 text-award-gold" />
                  <span>
                    {t('common.call')}
                    <br />
                    <span className="text-award-muted">{contacts.phone.display}</span>
                  </span>
                </a>
                <a
                  href={contacts.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 border border-award-gold/15 bg-award-graphite/60 px-4 py-4 text-sm text-award-cream transition hover:border-award-gold/40"
                >
                  <Instagram className="h-5 w-5 text-award-gold" />
                  <span>
                    Instagram
                    <br />
                    <span className="text-award-muted">{contacts.instagram.handle}</span>
                  </span>
                </a>
              </div>
            </div>

            <div className="border border-award-gold/15 bg-award-black/40 p-5">
              <div className="mb-2 flex items-center gap-2 text-award-gold">
                <MapPin className="h-4 w-4" />
                <h3 className="font-display text-xl">{t('contactsPage.geoTitle')}</h3>
              </div>
              <p className="text-sm leading-relaxed text-award-muted">{t('contactsPage.geoText')}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <WhatsAppButton />
              <a href={contacts.phone.tel} className="btn-outline">
                <Phone className="h-4 w-4" />
                {t('common.call')}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mb-5 font-display text-2xl text-award-cream">{t('contactsPage.formTitle')}</h2>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
