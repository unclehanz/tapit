import { FACEBOOK_URL, HOSTING_NOTE, PLANS } from '../config.js'

export default function Pricing() {

  return (
    <section id="pricing" className="section section-pale">
      <div className="container stack-lg">
        <div className="section-head">
          <h2 className="section-title">Simple pricing</h2>
          <p className="section-lead">
            <span className="only-desktop">Pick the card that fits your business. </span>
            {HOSTING_NOTE}
          </p>
        </div>
        <div className="card-row card-row-stretch">
          {PLANS.map((p) => (
            <div key={p.name} className={p.featured ? 'plan-card plan-featured' : 'plan-card'}>
              {p.badge && <span className="plan-badge">{p.badge}</span>}
              <div className="plan-head">
                <h3 className="plan-name">{p.name}</h3>
              </div>
              <div className="plan-money">
                <div className="plan-price-row">
                  <span className="plan-price">{p.price}</span>
                  <span className="plan-note">{p.note}</span>
                </div>
                {p.hosting && (
                  <div className="plan-hosting-row">
                    <span className="hosting-opt">
                      <span className="plan-hosting-price">{p.hosting.price}</span>
                      <span className="plan-hosting-note">{p.hosting.note}</span>
                    </span>
                    <span className="hosting-opt hosting-opt-alt">
                      <span className="plan-hosting-price">{p.hosting.altPrice}</span>
                      <span className="plan-hosting-note">{p.hosting.altNote}</span>
                      <span className="hosting-save">{p.hosting.altLabel}</span>
                    </span>
                  </div>
                )}
              </div>
              <ul className="plan-list">
                {p.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={p.featured ? 'btn btn-white plan-cta' : 'btn btn-outline plan-cta'}
              >
                Get the {p.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
