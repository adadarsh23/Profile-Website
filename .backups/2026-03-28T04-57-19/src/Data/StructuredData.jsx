import React from 'react';

const StructuredData = () => {
  const baseUrl =
    typeof window !== 'undefined'
      ? window.location.origin
      : 'https://yourdomain.com';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'Ad Adarsh – Portfolio',
    description:
      'Portfolio of Ad Adarsh, a music producer showcasing projects, skills, and creative work.',
    inLanguage: 'en',
    publisher: {
      '@type': 'Person',
      '@id': `${baseUrl}/#person`,
      name: 'Ad Adarsh',
      url: baseUrl,
      sameAs: [
        'https://github.com/adadarsh23',
        'https://linkedin.com/in/adadarsh23',
      ],
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/?s={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
};

export default StructuredData;
