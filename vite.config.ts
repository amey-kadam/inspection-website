import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, type Plugin } from 'vite'
import { faqs, plans } from './src/data/content.ts'

const SITE = 'https://www.gharinspect.in'

// Cities are taken from the testimonials on the page. Keep this list matching
// where inspections are genuinely carried out.
const AREA_SERVED = ['Pune', 'Mumbai', 'Thane', 'Bengaluru', 'Hyderabad', 'Delhi NCR']

const org = { '@id': `${SITE}/#organization` }
const business = { '@id': `${SITE}/#business` }

const priceOf = (price: string) => {
  const digits = price.replace(/[^\d]/g, '')
  return digits ? Number(digits) : null
}

function structuredData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        ...org,
        name: 'GharInspect',
        url: `${SITE}/`,
        logo: `${SITE}/favicon.svg`,
        email: 'support@gharinspect.in',
        telephone: '+91-90219-07313',
        description:
          'Professional home inspection services for new-possession and resale properties in India.',
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE}/#website`,
        url: `${SITE}/`,
        name: 'GharInspect',
        inLanguage: 'en-IN',
        publisher: org,
      },
      {
        '@type': 'HomeAndConstructionBusiness',
        ...business,
        name: 'GharInspect',
        parentOrganization: org,
        url: `${SITE}/`,
        telephone: '+91-90219-07313',
        email: 'support@gharinspect.in',
        image: `${SITE}/favicon.svg`,
        priceRange: '₹₹',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '101 Business Park, MG Road',
          addressLocality: 'Pune',
          addressRegion: 'Maharashtra',
          postalCode: '411001',
          addressCountry: 'IN',
        },
        areaServed: AREA_SERVED.map((name) => ({ '@type': 'City', name })),
      },
      {
        '@type': 'Service',
        '@id': `${SITE}/#service`,
        serviceType: 'Home inspection',
        provider: business,
        areaServed: AREA_SERVED.map((name) => ({ '@type': 'City', name })),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Home inspection packages',
          itemListElement: plans.map((plan) => {
            const price = priceOf(plan.price)
            return {
              '@type': 'Offer',
              name: plan.name,
              description: plan.suitableFor,
              itemOffered: { '@type': 'Service', name: `${plan.name} home inspection` },
              ...(price === null
                ? { availability: 'https://schema.org/InStock' }
                : { price, priceCurrency: 'INR' }),
            }
          }),
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE}/#faq`,
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  }
}

// Injected at build time rather than rendered by React: the app is a client-only
// SPA, so schema emitted from a component would be invisible to any crawler that
// does not execute JS — which is most of the ones this markup is for.
function jsonLd(): Plugin {
  return {
    name: 'gharinspect-json-ld',
    transformIndexHtml() {
      return [
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          // Escaping "<" keeps a stray </script> in the data from closing the tag.
          children: JSON.stringify(structuredData()).replace(/</g, '\\u003c'),
          injectTo: 'head' as const,
        },
      ]
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), jsonLd()],
})
