import HeroArt from './HeroArt.jsx'
import { EMAIL, FACEBOOK_URL } from '../config.js'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="eyebrow">NFC + QR CARDS FOR LOCAL BUSINESSES</div>
          <h1 className="hero-title">One tap opens your whole shop.</h1>
          <p className="hero-lead">
            <span className="only-desktop">
              TAP-IT gives your business an NFC card with a QR code. Customers tap or scan, and your own mobile page
            opens: menu, hours, map, messages and payment, always up to date.
            </span>
            <span className="only-mobile">An NFC card with a QR code. Tap or scan and your shop's page opens.</span>
          </p>
          <div className="button-row">
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Message us on Facebook
            </a>
            <a href="#how" className="btn btn-outline">
              See how it works
            </a>
          </div>
          <p className="hero-email">
            Or email us at{' '}
            <a href={`mailto:${EMAIL}`} className="hero-email-link">
              {EMAIL}
            </a>
          </p>
          <p className="hero-note only-desktop">No app needed for your customers. The QR code works on any phone camera.</p>
        </div>
        <div className="hero-visual">
          <HeroArt />
        </div>
      </div>
    </section>
  )
}
