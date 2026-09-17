import { renderToString } from 'react-dom/server'
import App from './App.tsx'
import { LegalPage } from './components/LegalPage.tsx'
import { legalDocs } from './data/legal.ts'

export function render() {
  return renderToString(<App />)
}

export function renderLegal() {
  return legalDocs.map((doc) => ({
    slug: doc.slug,
    title: doc.title,
    description: doc.description,
    updatedISO: doc.updatedISO,
    html: renderToString(<LegalPage doc={doc} />),
  }))
}
