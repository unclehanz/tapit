const PHONE_DEPTH = 14
const CARD_DEPTH = 6

const chips = ['Meals', 'Drinks', 'Dessert']

const menu = [
  { name: 'Chicken Adobo', note: 'Rice included', price: '₱120' },
  { name: 'Pancit Canton', note: 'Good for 2', price: '₱80' },
  { name: 'Lumpia', note: '10 pieces', price: '₱60' },
  { name: 'Sinigang', note: 'Hot and sour', price: '₱140' },
  { name: 'Iced Coffee', note: 'Large', price: '₱65' },
  { name: 'Halo-halo', note: 'Best seller', price: '₱70' },
]

// Stack of identical rounded shapes one pixel apart: gives the phone and card real thickness.
function Edges({ depth, className }) {
  return Array.from({ length: depth }, (_, i) => (
    <span key={i} className={className} style={{ transform: `translateZ(${-(i + 1)}px)` }} />
  ))
}

export default function HeroArt() {
  return (
    <div
      className="hero-3d"
      role="img"
      aria-label="A 3D NFC card with ripple rings next to a phone showing a shop page with menu, hours, message and pay buttons"
    >
      <div className="scene3d" aria-hidden="true">
        <div className="scene-disc" />
        <div className="floor-shadow" />
        <div className="stage">
          <div className="phone3d">
            <Edges depth={PHONE_DEPTH} className="phone-edge" />
            <div className="phone-back" style={{ transform: `translateZ(${-(PHONE_DEPTH + 1)}px) rotateY(180deg)` }} />
            <div className="phone-front">
              <span className="phone-notch" />
              <div className="screen-idle">
                <svg viewBox="0 0 80 80" className="idle-art">
                  <circle cx="40" cy="40" r="7" fill="#1D4ED8" />
                  <circle cx="40" cy="40" r="17" fill="none" stroke="#1D4ED8" strokeWidth="4" />
                  <circle cx="40" cy="40" r="28" fill="none" stroke="#93C5FD" strokeWidth="4" />
                </svg>
                <span className="idle-text">Tap an NFC card to open</span>
              </div>
              <span className="tap-burst" />
              <span className="tap-burst tap-burst-2" />
              <div className="screen-popup">
                <span className="popup-dot" />
                <span className="popup-text">
                  <span className="popup-title">TAP-IT</span>
                  <span className="popup-url">Opening your shop…</span>
                </span>
              </div>
              <div className="screen-menu">
              <div className="phone-head">
                <span className="phone-shop">Your Shop</span>
                <span className="phone-open">Open daily</span>
              </div>
              <div className="phone-chips">
                {chips.map((c, i) => (
                  <span key={c} className={`phone-chip phone-chip-${i + 1}`}>
                    {c}
                  </span>
                ))}
              </div>
              <div className="menu-viewport">
                <div className="menu-track">
                  {[...menu, ...menu].map((m, i) => (
                    <div key={i} className="menu-row">
                      <span className="menu-thumb">{m.name[0]}</span>
                      <span className="menu-text">
                        <span className="menu-name">{m.name}</span>
                        <span className="menu-note">{m.note}</span>
                      </span>
                      <span className="menu-price">{m.price}</span>
                    </div>
                  ))}
                </div>
                <span className="menu-fade" />
              </div>
              <div className="phone-order">
                <span className="phone-order-btn">Order on Messenger</span>
              </div>
              </div>
              <span className="glass-sheen" />
            </div>
          </div>

          <div className="card3d">
            <Edges depth={CARD_DEPTH} className="card-edge" />
            <div className="card-back" style={{ transform: `translateZ(${-(CARD_DEPTH + 1)}px) rotateY(180deg)` }} />
            <div className="card-front">
              <svg viewBox="0 0 250 156" className="card-art">
                <g fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round">
                  <path d="M28 42 V30 Q28 20 38 20 H50" />
                  <path d="M110 20 H122 Q132 20 132 30 V42" />
                  <path d="M28 114 V126 Q28 136 38 136 H50" />
                  <path d="M110 136 H122 Q132 136 132 126 V114" />
                </g>
                <circle cx="80" cy="78" r="9" fill="#FFFFFF" />
                <circle cx="80" cy="78" r="22" fill="none" stroke="#FFFFFF" strokeWidth="5" />
                <circle cx="80" cy="78" r="36" fill="none" stroke="#93C5FD" strokeWidth="5" />
                <text
                  x="226"
                  y="140"
                  textAnchor="end"
                  fontFamily="Poppins, sans-serif"
                  fontWeight="700"
                  fontSize="22"
                  fill="#FFFFFF"
                >
                  TAP-IT
                </text>
              </svg>
              <span className="tap-ring" />
              <span className="tap-ring tap-ring-2" />
              <span className="glass-sheen" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
