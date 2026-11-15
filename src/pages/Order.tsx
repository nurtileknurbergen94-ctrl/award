import { SEO } from '../components/SEO'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { ContactForm } from '../components/ContactForm'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { contacts } from '../data/contacts'
import { useI18n } from '../i18n/I18nContext'
import { Phone, Instagram } from 'lucide-react'

export function Order() {
  const { t } = useI18n()

  return (
    <>
      <SEO title={t('meta.orderTitle')} description={t('meta.orderDescription')} path="/order" />
      <PageHero title={t('order.pageTitle')} subtitle={t('order.pageSubtitle')} />

      <section className="py-16">
        <div className="container-award grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.1} className="space-y-6">
            <div className="border border-award-gold/15 bg-award-graphite/50 p-6">
              <h2 className="font-display text-2xl text-award-gold">{t('footer.contacts')}</h2>
              <p className="mt-3 text-sm text-award-muted">{t('contactsPage.geoText')}</p>
              <div className="mt-6 space-y-3">
                <WhatsAppButton className="w-full justify-center" />
                <a href={contacts.phone.tel} className="btn-outline w-full justify-center">
                  <Phone className="h-4 w-4" />
                  {contacts.phone.display}
                </a>
                <a
                  href={contacts.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full justify-center"
                >
                  <Instagram className="h-4 w-4" />
                  {contacts.instagram.handle}
                </a>
              </div>
            </div>
            <p className="text-sm text-award-muted">{t('printing.attachNote')}</p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
