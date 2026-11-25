import { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import Button from '../Button';
import VariantChips from '../VariantChips';

export default function ProductCard({ product }) {
  const { variants } = product;
  const [selected, setSelected] = useState(variants?.initial);

  const variant = variants?.items.find((v) => v.value === selected);
  const image = variant ? { src: variant.photo, alt: variant.alt } : product.photo;
  const link = variant?.link || product.link;

  return (
    <article className="overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-brand/10">
      <img
        key={image.src}
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="aspect-square w-full object-cover animate-photo-in motion-reduce:animate-none"
      />

      <div className="p-6">
        <h2 className="text-2xl font-bold text-brand">{product.name}</h2>
        <p className="mt-1 text-lg font-bold text-brand-dark">{product.price}</p>
        <p className="mt-2 text-brand-dark/80">{product.blurb}</p>

        {variants && (
          <div className="mt-4">
            <VariantChips label={variants.label} items={variants.items} value={selected} onChange={setSelected} />
          </div>
        )}

        <Button href={link} variant="shopee" size="sm" className="mt-6">
          <ShoppingBag size={16} aria-hidden="true" /> View on Shopee
        </Button>
      </div>
    </article>
  );
}
