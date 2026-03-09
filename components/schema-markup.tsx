export function SchemaMarkup() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'East Coast Boat Removal',
    image: 'https://eastcoastboatremoval.com/logo.png',
    description: 'Professional boat removal and disposal services across Florida. Licensed, insured, and available 24/7.',
    telephone: '+15614040669',
    url: 'https://eastcoastboatremoval.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '',
      addressLocality: 'Florida',
      addressCountry: 'US',
    },
    areaServed: [
      'Fort Lauderdale',
      'Miami',
      'Tampa',
      'Naples',
      'Cape Coral',
      'Sarasota',
      'Key West',
      'Palm Beach',
    ],
    priceRange: '$$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '08:00',
        closes: '16:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/eastcoastboatremoval',
      'https://www.youtube.com/eastcoastboatremoval',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
