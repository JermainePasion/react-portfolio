import { useCallback, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import Button from '../components/Button';
import ImageModal from '../components/ImageModal';
import ServiceCard from '../components/services/ServiceCard';
import { SHOPEE_URL } from '../constants';

import dieCutPhoto from '../assets/services/stickers.jpg';
import kissCutPhoto from '../assets/services/KissCutSticker.jpg';
import labelPhoto from '../assets/services/LabelStickers.jpg';
import pin125Photo from '../assets/services/125Pins.jpg';
import pin175Photo from '../assets/services/175Pins.jpg';
import pin225Photo from '../assets/services/225Pins.jpg';
import squarePinPhoto from '../assets/services/SquarePins.jpg';
import printing3dPhoto1 from '../assets/services/3dPrinting.jpg';
import printing3dPhoto2 from '../assets/services/3dPrinting2.jpg';
import printing3dPhoto3 from '../assets/services/3dPrinting3.jpg';
import printing3dPhoto4 from '../assets/services/3dPrinting4.jpg';
import printPhoto1 from '../assets/services/PrintsOne.jpg';
import printPhoto2 from '../assets/services/PrintsTwo.jpg';
import printPhoto3 from '../assets/services/PrintsThree.jpg';

import stickerPrices from '../assets/prices/Stickers.png';
import labelStickerPrices from '../assets/prices/LabelStickers.jpg';
import pin125Prices from '../assets/prices/ButtonPin125.png';
import pin175Prices from '../assets/prices/ButtonPin175.png';
import pin225Prices from '../assets/prices/ButtonPin225.png';
import squarePinPrices from '../assets/prices/SquarePin.jpg';
import squareMagnetPrices from '../assets/prices/SquareMagnet.jpg';
import printing3dPrices from '../assets/prices/3dPrint.png';
import artPrintPrices from '../assets/prices/ArtPrint.png';
import photoBoothPrices from '../assets/prices/PhotoBooth.png';
import instaxPrices from '../assets/prices/InstaxPrint.png';
import photocardPrices from '../assets/prices/PhotoCard.png';

const services = [
  {
    id: 'stickers',
    label: 'Stickers',
    blurb: 'Custom stickers made from your own designs, cut the way you like.',
    variants: {
      label: 'Sticker type',
      initial: 'die-cut',
      items: [
        {
          value: 'die-cut',
          label: 'Die-cut',
          photo: dieCutPhoto,
          alt: 'Die-cut stickers with coffee shop and character designs',
          text: 'Cut through the sticker and backing, following the shape of your design.',
          priceIndex: 0,
        },
        {
          value: 'kiss-cut',
          label: 'Kiss-cut',
          photo: kissCutPhoto,
          alt: 'Kiss-cut character stickers on their backing sheets',
          text: 'Cut through the sticker only, so it stays on its backing sheet.',
          priceIndex: 0,
        },
        {
          value: 'labels',
          label: 'Labels',
          photo: labelPhoto,
          alt: 'Round Squirkle logo label stickers',
          text: 'Paper label stickers in glossy or matte, great for packaging and branding. Available die-cut or kiss-cut.',
          priceIndex: 1,
        },
      ],
    },
    note: 'Sold per A4 sheet, with a minimum order of 3 sheets.',
    prices: [
      { src: stickerPrices, alt: 'Sticker prices' },
      { src: labelStickerPrices, alt: 'Label sticker prices' },
    ],
  },
  {
    id: 'button-pins',
    label: 'Button pins',
    blurb: 'Turn your art or photos into button pins you can wear or sell.',
    variants: {
      label: 'Pin size',
      initial: '1.75',
      items: [
        {
          value: '1.25',
          label: '1.25"',
          size: 1.25,
          photo: pin125Photo,
          alt: '1.25 inch button pins with a cartoon character design',
          note: 'Minimum order of 24 pins.',
          priceIndex: 0,
        },
        {
          value: '1.75',
          label: '1.75"',
          size: 1.75,
          photo: pin175Photo,
          alt: '1.75 inch anime character button pins',
          note: 'Minimum order of 15 pins.',
          priceIndex: 1,
        },
        {
          value: '2.25',
          label: '2.25"',
          size: 2.25,
          photo: pin225Photo,
          alt: '2.25 inch Snoopy Fan Club button pin held in a hand',
          note: 'Minimum order of 9 pins.',
          priceIndex: 2,
        },
        {
          value: 'square',
          label: 'Square',
          size: 2,
          shape: 'square',
          photo: squarePinPhoto,
          alt: 'Square button pins with character and movie designs',
          note: '2 inches (50 mm). Minimum order of 12 pins.',
          priceIndex: 3,
        },
      ],
    },
    prices: [
      { src: pin125Prices, alt: '1.25" button pin prices' },
      { src: pin175Prices, alt: '1.75" button pin prices' },
      { src: pin225Prices, alt: '2.25" button pin prices' },
      { src: squarePinPrices, alt: 'Square pin prices' },
      { src: squareMagnetPrices, alt: 'Square magnet prices' },
    ],
  },
  {
    id: '3d-printing',
    label: '3D printing',
    photos: [
      { src: printing3dPhoto1, alt: '3D-printed wing charms on a pair of headphones' },
      { src: printing3dPhoto2, alt: '3D-printed dragon emblem headphone charm' },
      { src: printing3dPhoto3, alt: '3D-printed pink graffiti-style lettering headphone charm' },
      { src: printing3dPhoto4, alt: '3D-printed red tribal heart headphone charm' },
    ],
    blurb: 'Small 3D-printed pieces, from fun accessories to school requirements.',
    options: ['Keychains', 'Headphone charms', 'School projects'],
    prices: [{ src: printing3dPrices, alt: '3D printing prices' }],
  },
  {
    id: 'prints',
    label: 'Prints',
    photos: [
      { src: printPhoto1, alt: 'Art print of a princess illustration' },
      { src: printPhoto2, alt: 'Anime character art print held in a hand' },
      { src: printPhoto3, alt: 'Stack of anime character art prints' },
    ],
    blurb: 'Prints for your artwork, photos, and personal designs.',
    options: ['Art prints', 'Photo booth prints', 'Instax-inspired prints', 'Photocards'],
    prices: [
      { src: artPrintPrices, alt: 'Art print prices' },
      { src: photoBoothPrices, alt: 'Photo booth print prices' },
      { src: instaxPrices, alt: 'Instax-inspired print prices' },
      { src: photocardPrices, alt: 'Photocard prices' },
    ],
  },
];

export default function Services() {

  const [pricesFor, setPricesFor] = useState(null);
  const closePrices = useCallback(() => setPricesFor(null), []);

  return (
    <div>
      <Helmet>
        <title>Services – Stickers, button pins, 3D printing & prints | Squirkle</title>
        <meta
          name="description"
          content="Custom stickers (die-cut, kiss-cut, and labels), 1.25, 1.75, 2.25 inch and square button pins, 3D printing, art prints, Instax-inspired prints, and photocards from Squirkle."
        />
        <link rel="canonical" href="https://squirkle-website.vercel.app/services" />
      </Helmet>

      <section className="mx-auto max-w-6xl px-4 pt-8 text-center sm:px-8 md:pt-14">
        <h1 className="text-4xl font-bold leading-[1.1] text-brand sm:text-5xl">What we print</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-brand-dark/80">
          Here&apos;s everything we can make for you.
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl items-start gap-6 px-4 py-10 sm:px-8 md:grid-cols-2 md:py-14">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onShowPrices={(start) => setPricesFor({ service, start })}
          />
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-8">
        <div className="flex flex-col items-center gap-6 rounded-[2rem] border border-brand/10 bg-white/80 px-6 py-10 text-center shadow-sm backdrop-blur-sm md:flex-row md:justify-between md:px-12 md:text-left">
          <div>
            <h2 className="text-2xl font-bold text-brand sm:text-3xl">Got a design? Let&apos;s print it.</h2>
            <p className="mt-2 text-brand-dark/80">Send us your files and we&apos;ll get back to you with a quote.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Button to="/#contact">
              Get a quote <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button href={SHOPEE_URL} variant="shopee">
              <ShoppingBag size={18} aria-hidden="true" /> Shop on Shopee
            </Button>
          </div>
        </div>
      </section>

      {pricesFor && (
        <ImageModal
          images={pricesFor.service.prices}
          startIndex={pricesFor.start}
          title={`${pricesFor.service.label} prices`}
          onClose={closePrices}
        />
      )}
    </div>
  );
}
