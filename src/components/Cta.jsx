import { EMAIL, FACEBOOK_URL } from '../config.js'

export default function Cta() {
  return (
    <section id="cta" className="cta">
      <div className="container cta-inner">
        <div className="cta-copy">
          <h2 className="cta-title">Put your shop one tap away.</h2>
          <p className="cta-lead">
            Message us on Facebook or email{' '}
            <a href={`mailto:${EMAIL}`} className="cta-email-link">
              {EMAIL}
            </a>{' '}
            and tell us about your business. We will set up your card and page.
          </p>
        </div>
        <div className="button-row">
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="btn btn-white">
            Message us on Facebook
          </a>
          <a href={`mailto:${EMAIL}`} className="btn btn-ghost">
            Email us
          </a>
        </div>
      </div>
    </section>
  )
}
