const pinFace = {
  backgroundColor: '#1d6b89',
  backgroundImage:
    'radial-gradient(circle at 32% 24%, rgba(255,255,255,.55), rgba(255,255,255,0) 42%), radial-gradient(circle, rgba(0,0,0,0) 64%, rgba(0,0,0,.18) 100%)',
  boxShadow: '0 10px 16px -8px rgba(29,95,128,.6), inset 0 -4px 8px rgba(0,0,0,.15)',
};

/**
 * A pin drawn to scale with CSS inches. Round pins sit inside a dashed outline
 * of the largest round size, so the sizes are easy to compare.
 */
export default function PinSizeCompare({ size, shape = 'round', largest = 2.25 }) {
  const square = shape === 'square';

  return (
    <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
      <div
        className="relative grid shrink-0 place-items-center"
        style={{ width: `${largest}in`, height: `${largest}in` }}
      >
        {!square && (
          <span aria-hidden="true" className="absolute inset-0 rounded-full border-2 border-dashed border-brand/25" />
        )}
        <span
          className="relative grid place-items-center text-sm font-bold text-white transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)] motion-reduce:transition-none"
          style={{
            ...pinFace,
            width: `${size}in`,
            height: `${size}in`,
            borderRadius: square ? '14%' : '9999px',
          }}
        >
          {size}&quot;
        </span>
      </div>
      <p className="text-sm text-brand-dark/70">
        {square
          ? 'Drawn to scale.'
          : `Drawn to scale. The dashed ring is our largest round size, ${largest}".`}
      </p>
    </div>
  );
}
