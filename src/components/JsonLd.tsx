import { socialLinks } from "@/data/site";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mehrsa Mohajeri",
  jobTitle: "Front-End Developer",
  url: "https://mehrsamohajeri.com",
  email: "contact@mehrsamohajeri.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tehran",
    addressCountry: "IR",
  },
  sameAs: [
    socialLinks.linkedin,
    socialLinks.github,
    socialLinks.instagram,
    socialLinks.telegram,
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}