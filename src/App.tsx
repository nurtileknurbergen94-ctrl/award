import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import { Layout } from './components/Layout'
import { I18nProvider } from './i18n/I18nContext'
import { DEFAULT_LOCALE, isLocale, LOCALE_STORAGE_KEY } from './i18n/types'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
import { ServiceDetail } from './pages/ServiceDetail'
import { Catalog } from './pages/Catalog'
import { ProductDetail } from './pages/ProductDetail'
import { Medals } from './pages/Medals'
import { Trophies } from './pages/Trophies'
import { Souvenirs } from './pages/Souvenirs'
import { Printing3D } from './pages/Printing3D'
import { Galvanic } from './pages/Galvanic'
import { Portfolio } from './pages/Portfolio'
import { Contacts } from './pages/Contacts'
import { Order } from './pages/Order'
import { NotFound } from './pages/NotFound'

function LocaleRedirect() {
  const saved =
    typeof window !== 'undefined' ? localStorage.getItem(LOCALE_STORAGE_KEY) : null
  const locale = isLocale(saved) ? saved : DEFAULT_LOCALE
  return <Navigate to={`/${locale}`} replace />
}

function LocaleGate() {
  const { lang } = useParams()
  if (!isLocale(lang)) {
    return <Navigate to={`/${DEFAULT_LOCALE}`} replace />
  }
  return (
    <I18nProvider>
      <Layout />
    </I18nProvider>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LocaleRedirect />} />
      <Route path="/:lang" element={<LocaleGate />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="catalog/:slug" element={<ProductDetail />} />
        <Route path="medals" element={<Medals />} />
        <Route path="trophies" element={<Trophies />} />
        <Route path="souvenirs" element={<Souvenirs />} />
        <Route path="printing" element={<Printing3D />} />
        <Route path="galvanic" element={<Galvanic />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="order" element={<Order />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<LocaleRedirect />} />
    </Routes>
  )
}
