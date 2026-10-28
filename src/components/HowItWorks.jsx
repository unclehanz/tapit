const steps = [
  {
    title: 'We build your page',
    short: 'Send us your logo, photos and menu. We build your page.',
    text: 'Send us your logo, photos, menu or catalog, hours and links. We turn them into a clean mobile page in your colors.',
  },
  {
    title: 'We prepare your card',
    short: 'We program the card and print your QR code.',
    text: 'Your NFC card is programmed and locked, with a QR code printed on it. We test it on iPhone and Android before delivery.',
  },
  {
    title: 'Customers tap or scan',
    short: 'Your page opens at once. No app needed.',
    text: 'They touch their phone to the card or scan the QR code, and your page opens right away. Nothing to download.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="section">
      <div className="container stack-lg">
        <div className="section-head">
          <h2 className="section-title">Set up once. Tap forever.</h2>
          <p className="section-lead only-desktop">We handle the page and the card. You hand the card to your customers.</p>
        </div>
        <div className="card-row">
          {steps.map((s, i) => (
            <div key={s.title} className="step-card">
              <div className="step-num" aria-hidden="true">
                {i + 1}
              </div>
              <h3 className="card-title">{s.title}</h3>
              <p className="card-text">
                <span className="only-desktop">{s.text}</span>
                <span className="only-mobile">{s.short}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
