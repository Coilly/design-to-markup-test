import { GnbData } from '@/types/data';
import styles from './Header.module.scss';
import HeaderGnb from './HeaderGnb';
import HeaderUtil from './HeaderUtil';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_wrap}>
        <HeaderGnb gnbs={GnbData} />
        <HeaderUtil />
      </div>
    </header>
  );
};

export default Header;
