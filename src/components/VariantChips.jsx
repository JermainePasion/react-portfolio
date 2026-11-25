import clsx from 'clsx';

/** Pill buttons for picking one option (a size, a design...). Used on Services and Products. */
export default function VariantChips({ label, items, value, onChange }) {
  return (
    <div role="radiogroup" aria-label={label} className="flex flex-wrap gap-2">
      {items.map((item) => {
        const active = item.value === value;
        return (
          <button
            key={item.value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(item.value)}
            className={clsx(
              'rounded-full px-3 py-1 text-sm font-semibold transition-colors duration-200',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40',
              active ? 'bg-brand text-white' : 'bg-brand/8 text-brand hover:bg-brand/15'
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
