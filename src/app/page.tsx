import { HomePage } from "@/components/HomePage";
import { links, siteUrl } from "@/data/content";

// Structured data so search engines know who this site is about.
const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pragya Rajput",
  jobTitle: "Full-stack developer",
  url: siteUrl,
  sameAs: [links.github, links.linkedin],
  address: { "@type": "PostalAddress", addressLocality: "New Delhi", addressCountry: "IN" },
  knowsAbout: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AI applications"],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }} />
      <HomePage />
    </>
  );
}
