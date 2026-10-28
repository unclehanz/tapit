import { BRAND } from '../config.js'

export default function Logo({ size = 38, light = false }) {
  const main = light ? '#FFFFFF' : '#1D4ED8'
  const ring = '#93C5FD'
  return (
    <span className={light ? 'logo logo-light' : 'logo'}>
      <svg width={size} height={size} viewBox="0 0 38 38" aria-hidden="true">
        <g fill="none" stroke={main} strokeWidth="2.6" strokeLinecap="round">
          <path d="M3 12 V8 Q3 3 8 3 H12" />
          <path d="M26 3 H30 Q35 3 35 8 V12" />
          <path d="M3 26 V30 Q3 35 8 35 H12" />
          <path d="M26 35 H30 Q35 35 35 30 V26" />
        </g>
        <circle cx="19" cy="19" r="3" fill={main} />
        <circle cx="19" cy="19" r="7" fill="none" stroke={main} strokeWidth="2.4" />
        <circle cx="19" cy="19" r="11" fill="none" stroke={ring} strokeWidth="2.4" />
      </svg>
      <span className="logo-text">{BRAND}</span>
    </span>
  )
}
