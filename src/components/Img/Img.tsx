import { ImgProps } from '@/types';
import clsx from 'clsx';
import styles from './Img.module.scss';

const Img = ({
  as = 'figure',
  src,
  variant = 'default',
  alt,
  className,
  width,
  height,
}: ImgProps) => {
  const Element = as as React.ElementType;
  const finalClassName = clsx(styles.thumbnail, variant && styles[`variant-${variant}`], className);

  return (
    <Element className={finalClassName} style={{ width: width, height: height }}>
      <img src={src} alt={alt} />
    </Element>
  );
};

export default Img;
