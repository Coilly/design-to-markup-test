import Button from '@/components/Button/Button';
import Img from '@/components/Img/Img';
import Text from '@/components/Text/Text';
import styles from './Header.module.scss';

const HeaderUtil = () => {
  return (
    <div className={styles.util}>
      <Button className={styles.util_lang}>
        <Img as='span' src='/image/icon_earth.png' width={16} height={16} alt='지구본 아이콘' />
        <Text as='span' variant='b4'>
          한국어
        </Text>
        <Img as='span' src='/image/icon_arrow.png' width={16} height={16} alt='드롭다운 화살표' />
      </Button>

      <Button variant='M' bg='darkGreen' className={styles.util_login}>
        <Text as='span' variant='body1'>
          Login
        </Text>
      </Button>
    </div>
  );
};

export default HeaderUtil;
