import Img from '@/components/Img/Img';
import { CardProps } from '@/types';
import styles from './Card.module.scss';

const Card = ({ item, imgHeight }: CardProps) => {
  return (
    <div className={styles.card}>
      <Img
        as='span'
        variant='thumbnail'
        src={process.env.NEXT_PUBLIC_PUBLIC_URL + item.imgSrc}
        alt={item.ariaLabel}
        height={imgHeight}
      />
      <div className={styles.card_text}>
        <div className={styles.card_label}>{item.label}</div>
        <div className={styles.card_content}>{item.content}</div>
      </div>
    </div>
  );
};

export default Card;
