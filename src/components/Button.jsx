import { Link } from 'react-router-dom';
import clsx from 'clsx';

const variants = {
  primary: 'bg-brand text-white shadow-md hover:bg-brand-dark hover:shadow-lg',
  outline: 'border-2 border-brand text-brand hover:bg-brand hover:text-white',
  ghost: 'text-brand hover:bg-brand/10',
  // Outline that turns Shopee orange on hover
  shopee: 'border-2 border-brand text-brand hover:border-shopee hover:bg-shopee hover:text-white hover:shadow-lg hover:shadow-shopee/25',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

/**
 * <Button>Send</Button>                      → <button>
 * <Button to="/products">Shop</Button>       → internal <Link>
 * <Button href="https://shopee.ph/...">      → external <a> (new tab)
 * <Button href="#contact">                   → in-page anchor
 */
export default function Button({ to, href, variant = 'primary', size = 'md', className, children, ...props }) {
  const classes = clsx(
    'inline-flex items-center justify-center gap-2 rounded-full font-bold uppercase tracking-wide',
    'transition-all duration-200 active:scale-[0.98] cursor-pointer',
    'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/30',
    'disabled:pointer-events-none disabled:opacity-60',
    variants[variant],
    sizes[size],
    className
  );

  if (to) {
    return <Link to={to} className={classes} {...props}>{children}</Link>;
  }

  if (href) {
    const external = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
        {...props}
      >
        {children}
      </a>
    );
  }

  return <button type="button" className={classes} {...props}>{children}</button>;
}
