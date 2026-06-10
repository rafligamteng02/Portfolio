const puppeteer = require('puppeteer-core')
const path = require('path')

const chromePaths = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  `${process.env.LOCALAPPDATA}\\Microsoft\\Edge\\Application\\msedge.exe`,
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
]

async function main() {
  const executablePath = chromePaths.find(p => {
    try { require('fs').accessSync(p); return true } catch { return false }
  })

  if (!executablePath) {
    console.error('Chrome/Edge not found')
    process.exit(1)
  }

  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  const page = await browser.newPage()

  const htmlPath = path.resolve(__dirname, '..', 'public', 'cv.html')
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' })

  const pdfPath = path.resolve(__dirname, '..', 'public', 'cv-rafli-anwar.pdf')
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, bottom: 0, left: 0, right: 0 },
  })

  await browser.close()
  console.log(`PDF saved: ${pdfPath}`)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
