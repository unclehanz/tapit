const audiences = [
  'Cafes and restaurants',
  'Salons and barbershops',
  'Clinics',
  'Boutiques',
  'Resorts and stays',
  'Real estate agents',
  'Freelancers',
]

export default function Audience() {
  return (
    <section className="section">
      <div className="container stack-md">
        <h2 className="section-title section-title-sm">Made for shops and service businesses</h2>
        <ul className="chip-row">
          {audiences.map((a) => (
            <li key={a} className="chip">
              {a}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
