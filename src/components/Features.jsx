const features = [
  {
    title: 'Tap or scan',
    short: 'NFC for newer phones, QR for the rest.',
    text: 'NFC for newer phones, a QR code for everyone else. Both open the same page.',
  },
  {
    title: 'Update without reprinting',
    short: 'Change your menu or hours. Same card.',
    text: 'Your card points to a link we manage. Change your menu, promo or hours and the same card keeps working.',
  },
  {
    title: 'Your brand, your page',
    short: 'Your logo, colors and photos.',
    text: 'Your logo, colors and photos on a fast, mobile-first page that looks like your business.',
  },
  {
    title: 'Menu, catalog and links',
    short: 'Products, Facebook, Messenger, map pin.',
    text: 'Show products or services, and link to Facebook, Messenger, Viber, Instagram or your map pin.',
  },
  {
    title: 'Payment QR button',
    short: 'Add your GCash or Maya QR.',
    text: 'Add your GCash or Maya QR so customers can pay straight from your page.',
  },
]

export default function Features() {
  return (
    <section id="features" className="section section-pale">
      <div className="container stack-lg">
        <div className="section-head">
          <h2 className="section-title">Everything your customers need, one tap away.</h2>
        </div>
        <div className="card-row">
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <h3 className="card-title">
                {f.title}
                {f.badge && <span className="badge">{f.badge}</span>}
              </h3>
              <p className="card-text">
                <span className="only-desktop">{f.text}</span>
                <span className="only-mobile">{f.short}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
