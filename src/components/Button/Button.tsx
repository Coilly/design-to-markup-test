import { ButtonProps } from '@/types';
import clsx from 'clsx';
import NextLink from 'next/link';
import type { ElementType as ReactElementType } from 'react';
import styles from './Button.module.scss';

const Button = ({ as = 'button', type = 'button', ...arg }: ButtonProps) => {
  const Element = (as === 'link' ? NextLink : as) as ReactElementType;

  const finalClassName = clsx(
    type && styles[type],
    arg.variant && styles[`variant-${arg.variant}`],
    arg.full && styles['full'],
    arg.bg && styles[`bg-${arg.bg}`],
    arg.className,
  );

  if (Element === NextLink && arg.href) {
    return (
      <NextLink
        href={arg.href}
        className={finalClassName}
        aria-label={arg.ariaLabel}
        role={arg.role}
      >
        {arg.children}
      </NextLink>
    );
  }
  return (
    <Element
      key={arg.key}
      type={type}
      className={finalClassName}
      onClick={arg.onClick}
      disabled={arg.disabled}
      aria-label={arg.ariaLabel}
      role={arg.role}
    >
      {arg.children}
    </Element>
  );
};

export default Button;
