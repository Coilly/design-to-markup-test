import { IconProps } from '@/types';
import clsx from 'clsx';
import styles from './Icon.module.scss';

const Icon = ({
  icon: SVGComponent,
  variant = 'medium',
  color,
  className,
  ariaLabel,
  ...svgProps
}: IconProps) => {
  const iconSize = typeof variant === 'number' ? `${variant}px` : variant;

  const finalClassName = clsx(styles.icon, styles[`variant-${variant}`], className);

  const style = {
    width: iconSize,
    height: iconSize,
    fill: color || 'currentColor',
  };

  return (
    <span className={finalClassName} style={style} role='img' aria-label={ariaLabel}>
      <SVGComponent {...svgProps} className={styles.svg} />
    </span>
  );
};

export default Icon;
