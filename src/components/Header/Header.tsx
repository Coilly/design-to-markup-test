import { GnbData } from '@/types/data';
import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import HeaderGnb from './HeaderGnb';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.header_scrolled : ''}`}>
      <div className={styles.header_wrap}>
        <HeaderGnb gnbs={GnbData} />
      </div>
    </header>
  );
};

export default Header;
