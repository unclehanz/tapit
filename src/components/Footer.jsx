import Logo from './Logo.jsx'
import { FACEBOOK_URL, FOOTER_DETAILS } from '../config.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Logo size={30} light />
        <div className="footer-meta">
          <span>{FOOTER_DETAILS}</span>
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="footer-link">
            Find us on Facebook
          </a>
        </div>
        <div className="footer-copy">© {new Date().getFullYear()} TAP-IT</div>
      </div>
    </footer>
  )
}
