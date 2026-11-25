import { Helmet } from 'react-helmet-async';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import Button from '../components/Button';
import ProductCard from '../components/products/ProductCard';
import { SHOPEE_URL } from '../constants';

import clockCharm from '../assets/products/ClockCharm.jpg';
import heartCharm from '../assets/products/HeartCharm.jpg';
import keyCharm from '../assets/products/KeyCharm.jpg';
import skeletonCharm from '../assets/products/SkeletonCharm.jpg';
import starCharm from '../assets/products/StarCharm.jpg';
import wingsCharm from '../assets/products/WingsCharm.jpg';
import chainsawManStickers from '../assets/products/ChainsawManStickers.jpg';
import emojiClips from '../assets/products/EmojiClips.jpg';
import angryClip from '../assets/products/AngryClip.jpg';
import bubbleClip from '../assets/products/BubbleClip.jpg';
import starClip from '../assets/products/StarClip.jpg';
import surprisedClip from '../assets/products/SurprisedClip.jpg';
import worriedClip from '../assets/products/WorriedClip.jpg';

const CHARMS_8BIT_URL = 'https://shopee.ph/Headphone-Charms-8-bit-Set-i.648980465.28983710398';
const CHARMS_NATURE_URL = 'https://shopee.ph/Headphone-Charms-Nature-Set-i.648980465.24044099074';
const CHAINSAW_MAN_URL =
  'https://shopee.ph/Chainsawman-Anime-%E2%80%A2-Waterproof-Matte-Stickers-%E2%80%A2-1mo6en-i.648980465.56401740578?extraParams=%7B%22display_model_id%22%3A365160970335%7D';
const HAIR_CLIPS_URL = 'https://shopee.ph/product/648980465/41827096306/';

const products = [
  {
    id: 'headphone-charms',
    name: 'Headphone charms',
    price: '₱160 per pair',
    blurb: '3D-printed charms for your headphones, sold in pairs.',
    variants: {
      label: 'Charm design',
      initial: 'wings',
      items: [
        { value: 'wings', label: 'Wings', photo: wingsCharm, alt: 'White wing charms on black headphones', link: CHARMS_NATURE_URL },
        { value: 'clock', label: 'Clock', photo: clockCharm, alt: '8-bit clock charm on pink headphones', link: CHARMS_8BIT_URL },
        { value: 'heart', label: 'Heart', photo: heartCharm, alt: '8-bit heart charm on pink headphones', link: CHARMS_8BIT_URL },
        { value: 'key', label: 'Key', photo: keyCharm, alt: '8-bit key charm on pink headphones', link: CHARMS_8BIT_URL },
        { value: 'skeleton', label: 'Skeleton', photo: skeletonCharm, alt: '8-bit skull charm on pink headphones', link: CHARMS_8BIT_URL },
        { value: 'star', label: 'Star', photo: starCharm, alt: '8-bit star charm on pink headphones', link: CHARMS_8BIT_URL },
      ],
    },
  },
  {
    id: 'chainsaw-man-stickers',
    name: 'Chainsaw Man stickers',
    price: '₱40–₱165',
    blurb: 'Waterproof matte stickers of your favorite Chainsaw Man characters.',
    photo: { src: chainsawManStickers, alt: 'Chainsaw Man character sticker designs' },
    link: CHAINSAW_MAN_URL,
  },
  {
    id: 'emoji-hair-clips',
    name: 'Emoji hair clips',
    price: '₱60–₱200',
    blurb: 'Hair clips shaped like your favorite reaction emojis.',
    link: HAIR_CLIPS_URL,
    variants: {
      label: 'Clip design',
      initial: 'all',
      items: [
        { value: 'all', label: 'All designs', photo: emojiClips, alt: 'All emoji hair clip designs together' },
        { value: 'angry', label: 'Angry', photo: angryClip, alt: 'Red angry emoji hair clip' },
        { value: 'bubble', label: 'Bubble', photo: bubbleClip, alt: 'Speech bubble hair clip' },
        { value: 'star', label: 'Star', photo: starClip, alt: 'Yellow star hair clip' },
        { value: 'surprised', label: 'Surprised', photo: surprisedClip, alt: 'Red double exclamation hair clip' },
        { value: 'worried', label: 'Worried', photo: worriedClip, alt: 'Blue sweat drop hair clip' },
      ],
    },
  },
];

export default function Products() {
  return (
    <div>
      <Helmet>
        <title>Shop – Headphone charms, stickers & hair clips | Squirkle</title>
        <meta
          name="description"
          content="Shop Squirkle's 3D-printed headphone charms, Chainsaw Man stickers, and emoji hair clips on Shopee."
        />
        <link rel="canonical" href="https://squirkle-website.vercel.app/products" />
      </Helmet>


      <section className="mx-auto max-w-6xl px-4 pt-8 text-center sm:px-8 md:pt-14">
        <h1 className="text-4xl font-bold leading-[1.1] text-brand sm:text-5xl">Shop our products</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-brand-dark/80">
          Ready-made goodies you can order straight from our shop.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl items-start gap-6 px-4 py-10 sm:px-8 md:grid-cols-2 md:py-14 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-8">
        <div className="flex flex-col items-center gap-6 rounded-[2rem] border border-brand/10 bg-white/80 px-6 py-10 text-center shadow-sm backdrop-blur-sm md:flex-row md:justify-between md:px-12 md:text-left">
          <div>
            <h2 className="text-2xl font-bold text-brand sm:text-3xl">Want something custom?</h2>
            <p className="mt-2 text-brand-dark/80">Send us your design, or browse everything else in our Shopee shop.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Button to="/#contact">
              Get a quote <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button href={SHOPEE_URL} variant="shopee">
              <ShoppingBag size={18} aria-hidden="true" /> Visit our Shopee shop
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
