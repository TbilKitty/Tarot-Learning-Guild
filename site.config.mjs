// One place for the settings you'll change. Run `npm run build` (or push to GitHub,
// which builds automatically) after editing.
export const SITE = {
  // Your final address, no trailing slash. Used for links Google sees (canonical URLs, sitemap).
  url: process.env.SITE_URL || 'https://tarotlearningguide.com',
  name: 'Tarot Learning Guide',
  tagline: 'Learn the cards. Keep your own judgment.',
  // Where readers (and Google's reviewers) can reach you. Shown on the About and Privacy pages.
  contactEmail: process.env.CONTACT_EMAIL || 'readuvall@gmail.com',
  // Leave blank until AdSense approves the site. Then paste your publisher ID, e.g. 'ca-pub-1234567890123456'.
  // While blank, NO ad code or ads.txt is published.
  adsenseClient: process.env.ADSENSE_CLIENT || '',
};
