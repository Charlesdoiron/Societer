export const homeJsonLd = `
  { "@context": "http://schema.org",
  "@type": "Website",
  "name": "Societer",
  "url": "https://societer.co",
  "description":
    "Première Maison de conseil en sustainable leadership, spécialisée en communication engagée, impact sociétal et diplomatie collaborative, SOCIETER révèle et démultiplie l’engagement du dirigeant et de l’entreprise dans le débat public mondial.",
  "sameAs": [
    "https://www.linkedin.com/company/societer/",
    "https://twitter.com/Societer_Paris",
    "https://www.instagram.com/societer_paris/"
  ],
  "inLanguage": "fr"}
`;

export const pageJsonLd = `
  {"@context": "http://schema.org/",
  "@id": "https://societer.co#organization",
  "@type": "Corporation",
  "name": "Societer",
  "legalname": "Societer",
  "description":
    "Première Maison de conseil en sustainable leadership, spécialisée en communication engagée, impact sociétal et diplomatie collaborative, SOCIETER révèle et démultiplie l’engagement du dirigeant et de l’entreprise dans le débat public mondial.",
  "url": "https://societer.co",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Paris, France",
    "postalCode": "75008 ",
    "streetAddress": "138, Boulevard Haussmann"
  },
  "telephone": "(+33)1 42 99 61 73 ",
  "sameAs": [
    "https://www.linkedin.com/company/societer/",
    "https://twitter.com/Societer_Paris",
    "https://www.instagram.com/societer_paris/"
  ]
}`;

export const contactJsonLd = `
 { "@context": "http://schema.org",
  "@type": "ContactPage",
  "inLanguage": "fr"}
`;

export const authorJsonLd = (name, url, img, jobTitle, lk) => `
 {"@context": "https://schema.org/",
  "@type": "Person",
  "name": "Aurélie Motta-Rivey",
  "url": "https://www.societer.co/fr/author/aurelie-motta-rivey",
  "image": "https://images.ctfassets.net/86i03dw6wwwc/1guExMUHv5IOmwZVTgDTMD/9ce31fd5fc82edac9473bd848839a6b5/aurelie_motta-rivey.jpg",
  "jobTitle": "Présidente et co-fondatrice",
  "worksFor": {
    "@type": "Organization",
    "name": "Societer"
  },
  "sameAs": [
    "https://www.linkedin.com/in/aur%C3%A9lie-motta-rivey-0b904a33?originalSubdomain=fr"
  ]
}
`;
