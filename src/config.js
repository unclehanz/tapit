// Edit the values in this file to change the contact details and prices across the whole site.

export const BRAND = 'TAP-IT'

export const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61596028916345'

export const EMAIL = 'contact.tapitservices@gmail.com'

// Footer line.
export const FOOTER_DETAILS = 'TAP-IT · Lucena, Quezon, Philippines'

// Shown in the FAQ item "What happens if I stop the monthly plan?"
export const STOP_PLAN_POLICY =
  'Your page stays online for 7 days after a missed payment. After that it is taken offline, but we keep your content for 30 days so you can switch it back on by paying your hosting. Your card is yours to keep. The page link is managed by TAP-IT, so the card only opens your page while hosting is active. Your logo, photos and text always belong to you, and you can ask us for a copy at any time.'

// Hosting note shown under the pricing cards.
export const HOSTING_NOTE = 'Free hosting for the first 3 months, then ₱50 per month.'

// Pricing cards. Set `featured: true` on one plan to highlight it, and add `badge: 'TEXT'` to label it.
export const PLANS = [
  {
    name: 'Socials Card',
    price: '₱250',
    note: 'one-time payment',
    items: ['NFC card with QR code', 'Opens your Facebook page', 'Programmed, locked and tested'],
  },
  {
    name: 'Menu Card',
    price: '₱350',
    note: 'one-time payment',
    hosting: {
      price: '₱50',
      note: 'per month hosting',
      altPrice: '₱500',
      altNote: 'per year hosting',
      altLabel: 'Save ₱100',
    },
    items: ['NFC card with QR code', 'Mobile menu page for your business', 'Hosting free for the first 3 months'],
    featured: true,
    badge: 'RECOMMENDED',
  },
  {
    name: 'Business Card',
    price: '₱600',
    note: 'one-time payment',
    hosting: {
      price: '₱50',
      note: 'per month hosting',
      altPrice: '₱500',
      altNote: 'per year hosting',
      altLabel: 'Save ₱100',
    },
    items: [
      'NFC card with QR code',
      'Complete website for your business',
      'Menu or catalog, hours, map and links',
      'Hosting free for the first 3 months',
    ],
  },
]
