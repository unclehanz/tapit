import { STOP_PLAN_POLICY } from '../config.js'

const items = [
  {
    q: 'Does it work on iPhone and Android?',
    a: 'Most recent phones can read NFC cards, and the QR code works on any phone with a camera. We test every card on both before delivery.',
  },
  {
    q: 'Can I change my page after I get the card?',
    a: 'Yes. The card points to a link we manage, so we can update your page or move it without printing a new card.',
  },
  {
    q: 'Will it work inside an acrylic stand?',
    a: 'Yes, NFC reads through acrylic and plastic when the card sits close to the surface. It does not work through metal.',
  },
  {
    q: 'What happens if I stop the monthly plan?',
    a: STOP_PLAN_POLICY,
  },
]

export default function Faq() {
  return (
    <section id="faq" className="section">
      <div className="container container-narrow stack-md">
        <h2 className="section-title">Questions</h2>
        <div className="faq-list">
          {items.map((it) => (
            <details key={it.q} className="faq-item">
              <summary className="faq-q">{it.q}</summary>
              <p className="faq-a">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
