import { TextProps } from '@/types';
import clsx from 'clsx';
import type { ElementType as ReactElementType } from 'react';
import styles from './Text.module.scss';

const Text = ({ as = 'p', variant, className, children }: TextProps) => {
  const Element = as as ReactElementType;
  const finalClassName = clsx(className, variant && styles[`variant-${variant}`]);

  return <Element className={finalClassName}>{children}</Element>;
};

export default Text;
