import clsx from 'clsx';

export default function SectionHeading({ as = 'h2', eyebrow, children, className }) {
  const Tag = as;
  return (
    <div className={clsx('m-10 flex flex-col items-center text-center', className)}>
      {eyebrow && (
        <span className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand/70">
          {eyebrow}
        </span>
      )}
      <Tag className="text-2xl font-bold uppercase tracking-widest text-brand sm:text-3xl">
        {children}
      </Tag>
      <span aria-hidden="true" className="mt-3 h-1 w-12 rounded-full bg-brand/30" />
    </div>
  );
}
