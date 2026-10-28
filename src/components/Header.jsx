import Logo from './Logo.jsx'
import { FACEBOOK_URL } from '../config.js'

const links = [
  { href: '#how', label: 'How it works' },
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
]

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="brand-link" aria-label="TAP-IT home">
          <Logo />
        </a>
        <nav aria-label="Main" className="main-nav">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-small">
            Message us
          </a>
        </nav>
      </div>
    </header>
  )
}
