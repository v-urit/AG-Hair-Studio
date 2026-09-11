/**
 * Server-rendered JSON-LD structured data for AG Hair Studio.
 * LocalBusiness (HairSalon subtype) schema for SEO, Google Maps, and rich snippets.
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://aghair.ie"

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "@id": `${SITE_URL}/#salon`,
  name: "AG Hair Studio",
  alternateName: "Agnes Burke Hairdressing",
  url: SITE_URL,
  image: `${SITE_URL}/images/hero_hair_studio.jpg`,
  logo: `${SITE_URL}/images/hero_hair_studio.jpg`,
  description:
    "Mullingar's premier luxury hair studio on Ross Rd by Agnes Burke. Bespoke precision cutting, French balayage, Olaplex bond therapy, and couture bridal styling. Rated 5.0 on Google.",
  telephone: "+353 44 934 1234",
  priceRange: "€€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Credit Card, Debit Card",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ross Rd, Scregg",
    addressLocality: "Mullingar",
    addressRegion: "Westmeath",
    addressCountry: "IE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.5259941,
    longitude: -7.3340708,
  },
  hasMap: `${SITE_URL}/#location`,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Thursday"],
      opens: "09:00",
      closes: "19:30",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "3",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://www.facebook.com/AgnesBurkeHairdressing/",
  ],
  makesOffer: {
    "@type": "OfferCatalog",
    name: "Hair Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Signature Precision Cut & Blowdry" },
        price: "65",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "French Freehand Balayage & Gloss Melt" },
        price: "165",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Olaplex Bond Intense Scalp & Hair Therapy" },
        price: "55",
        priceCurrency: "EUR",
      },
    ],
  },
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/booking`,
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
    name: "Book a hair appointment",
  },
}

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "AG Hair Studio",
  publisher: { "@id": `${SITE_URL}/#salon` },
}

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  )
}
