import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import WhySquirkle from '../components/WhySquirkle';
import PhotoStack from '../components/PhotoStack';
import ImageGrid from '../components/ImageGrid';
import ContactUs from '../components/ContactUs';
import SectionHeading from '../components/SectionHeading';

export default function Home() {
  return (
    <div>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Squirkle – Fast, Affordable & Quality Services</title>
        <meta name="google-site-verification" content="olC1_Gb8cLRnmf3Eg5kA-5izEOtjc_RAlUv--shYQog" />
        <meta name="description" content="Squirkle offers fast, affordable, and quality services tailored for students and clients. Communicative every step of the way." />
        <meta name="keywords" content="squirkle, affordable services, fast services, quality, student-friendly" />
        <meta name="author" content="Squirkle" />
        <link rel="canonical" href="https://squirkle-website.vercel.app/" />

        {/* Open Graph (Facebook, LinkedIn previews) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://squirkle-website.vercel.app/" />
        <meta property="og:title" content="Squirkle – Fast, Affordable & Quality Services" />
        <meta property="og:description" content="Squirkle offers fast, affordable, and quality services tailored for students and clients." />

        {/* Instagram Card */}
        <meta name="Instagram:card" content="summary_large_image" />
        <meta name="Instagram:url" content="https://www.instagram.com/squirkleph/" />
        <meta name="Instagram:title" content="Squirkle – Fast, Affordable & Quality Services" />
        <meta name="Instagram:description" content="Squirkle offers fast, affordable, and quality services tailored for students and clients." />
      </Helmet>

      <Hero />
      <WhySquirkle />

      <SectionHeading>Our Process</SectionHeading>
      <div className="pb-8">
        <PhotoStack />
      </div>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-8">
        <SectionHeading eyebrow="Rates">Pricelist</SectionHeading>
        <ImageGrid />
      </section>

      <div id="contact" className="flex scroll-mt-24 items-center justify-center py-12">
        <ContactUs />
      </div>
    </div>
  );
}
