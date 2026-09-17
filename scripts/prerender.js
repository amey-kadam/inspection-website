// Renders the app to static HTML and injects it into the built index.html, so
// the page has real content before any JS runs. No headless browser and no
// extra dependency — react-dom/server ships with react-dom.
import { readFileSync, writeFileSync, rmSync } from 'node:fs'

const { render } = await import('../dist-ssr/entry-server.js')

const shell = readFileSync('dist/index.html', 'utf8')
const appHtml = render()

const MARKER = '<div id="root"></div>'
if (!shell.includes(MARKER)) {
  throw new Error(`prerender: could not find ${MARKER} in dist/index.html`)
}

writeFileSync('dist/index.html', shell.replace(MARKER, `<div id="root">${appHtml}</div>`))
rmSync('dist-ssr', { recursive: true, force: true })

console.log(`prerendered ${(appHtml.length / 1024).toFixed(1)} KB of HTML into dist/index.html`)
