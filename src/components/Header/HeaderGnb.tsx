import Button from '@/components/Button/Button';
import Img from '@/components/Img/Img';
import Text from '@/components/Text/Text';
import { GnbItem } from '@/types';
import styles from './Header.module.scss';

interface GnbProps {
  gnbs: GnbItem[];
}

const HeaderGnb = ({ gnbs }: GnbProps) => {
  return (
    <div className={styles.gnb}>
      <Button as='link' href='/'>
        <Img as='span' src='image/logo.png' alt='신테카바이오 로고' width={109} height={22} />
      </Button>

      <nav className={styles.gnb_wrap}>
        {gnbs.map((item, index) => (
          <Button as='link' key={`gnb-item-${index}`} href={item.link}>
            <Text as='span' variant='link'>
              {item.title}
            </Text>
          </Button>
        ))}
      </nav>
    </div>
  );
};

export default HeaderGnb;
