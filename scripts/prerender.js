// Renders the app to static HTML and injects it into the built index.html, so
// the page has real content before any JS runs. No headless browser and no
// extra dependency — react-dom/server ships with react-dom.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'

const { render, renderLegal } = await import('../dist-ssr/entry-server.js')

const SITE = 'https://www.gharinspect.in'
const shell = readFileSync('dist/index.html', 'utf8')

// --- home page: inject into the built shell ---
const MARKER = '<div id="root"></div>'
if (!shell.includes(MARKER)) {
  throw new Error(`prerender: could not find ${MARKER} in dist/index.html`)
}
const appHtml = render()
writeFileSync('dist/index.html', shell.replace(MARKER, `<div id="root">${appHtml}</div>`))

// --- legal pages: fully static, no client JS at all ---
// They reuse the app's hashed stylesheet, so pull whatever the build emitted.
const cssHref = shell.match(/<link rel="stylesheet"[^>]*href="([^"]+)"/)?.[1]
if (!cssHref) throw new Error('prerender: could not find the built stylesheet in dist/index.html')

const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;')

for (const page of renderLegal()) {
  const doc = `<!doctype html>
<html lang="en-IN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escape(page.title)} — GharInspect</title>
    <meta name="description" content="${escape(page.description)}" />
    <meta name="theme-color" content="#0B1220" />
    <link rel="canonical" href="${SITE}/${page.slug}" />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="GharInspect" />
    <meta property="og:title" content="${escape(page.title)} — GharInspect" />
    <meta property="og:description" content="${escape(page.description)}" />
    <meta property="og:url" content="${SITE}/${page.slug}" />
    <meta property="og:image" content="${SITE}/og.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" crossorigin href="${cssHref}" />
  </head>
  <body>${page.html}</body>
</html>
`
  mkdirSync(`dist/${page.slug}`, { recursive: true })
  writeFileSync(`dist/${page.slug}/index.html`, doc)
}

rmSync('dist-ssr', { recursive: true, force: true })

const pages = renderLegal().map((p) => `/${p.slug}`).join(', ')
console.log(
  `prerendered ${(appHtml.length / 1024).toFixed(1)} KB into dist/index.html, plus static ${pages}`,
)
