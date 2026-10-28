# TAP-IT website

Landing page for TAP-IT: NFC cards with a QR code that open a shop's own mobile page.
Built with React and Vite.

## Run it

```bash
npm install
npm run dev
```

Then open the address Vite prints (usually http://localhost:5173).

Other commands:

```bash
npm run build     # production build into dist/
npm run preview   # serve the built site locally
npm run lint      # oxlint
```

## Edit the content

- `src/config.js` holds the Facebook page link, email, footer details, FAQ policy text and the pricing cards.
  Replace the bracketed placeholder in `STOP_PLAN_POLICY` with your real policy.
- `src/components/` has one file per section: Header, Hero, HowItWorks, Features, Audience, Pricing, Faq, Cta, Footer.
- `src/App.css` has the section styles and `src/index.css` has the colors and fonts (CSS variables at the top).
- `public/favicon.svg` is the browser tab icon.

## Colors

Navy `#0A2A6B`, blue `#1D4ED8`, sky `#93C5FD`, pale `#EEF3FB`, white.

Fonts: Poppins (headings) and DM Sans (body), loaded from Google Fonts in `index.html`.
