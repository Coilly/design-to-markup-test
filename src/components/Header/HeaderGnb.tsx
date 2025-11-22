import Button from '@/components/Button/Button';
import Logo from '@/components/Logo/Logo';
import Text from '@/components/Text/Text';
import useDeviceStore from '@/store/useDeviceStore';
import { GnbItem } from '@/types';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import styles from './Header.module.scss';
import HeaderUtil from './HeaderUtil';

interface GnbProps {
  gnbs: GnbItem[];
}

const HeaderGnb = ({ gnbs }: GnbProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { isMobile } = useDeviceStore();
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
    hamburgerButtonRef.current?.focus();
  };

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const MenuItems = () => (
    <nav className={styles.gnb_wrap}>
      {gnbs.map((item) => (
        <Button as='link' key={item.id} href={item.link} className={styles.gnb_item}>
          <Text as='span' variant={isClient && isMobile ? 'heading2' : 'link'}>
            {item.title}
          </Text>
        </Button>
      ))}
    </nav>
  );

  if (!isClient || !isMobile) {
    return (
      <div className={styles.gnb}>
        <Logo />
        <MenuItems />
        <HeaderUtil />
      </div>
    );
  }

  return (
    <>
      <div className={styles.gnb}>
        <Logo />
        <Button
          className={styles.hamburger_button}
          onClick={openMenu}
          ariaLabel='메뉴 열기'
          ariaExpanded={isMenuOpen}
          ariaControls='mobile-menu'
        >
          <span className={styles.hamburger_icon}></span>
          <span className={styles.hamburger_icon}></span>
          <span className={styles.hamburger_icon}></span>
        </Button>
      </div>

      <div
        ref={menuRef}
        id='mobile-menu'
        className={clsx(styles.menu, isMenuOpen && styles.menu_open)}
        aria-hidden={!isMenuOpen}
        role='dialog'
        aria-modal='true'
        aria-label='모바일 메뉴'
      >
        <div className={styles.menu_header}>
          <Logo />
          <Button
            className={styles.menu_close}
            onClick={closeMenu}
            ariaLabel='메뉴 닫기'
          >
            <span></span>
          </Button>
        </div>
        <div className={styles.menu_content}>
          <div className={styles.sub}>
            <Button as='link' href='/' className={styles.sub_main} onClick={closeMenu}>
              <Text as='span' variant='heading2'>
                Home
              </Text>
            </Button>
            <Button as='link' href='/' className={styles.sub_main} onClick={closeMenu}>
              <Text as='span' variant='heading2'>
                Service
              </Text>
            </Button>
            <div className={styles.sub_wrap}>
              <MenuItems />
            </div>
          </div>
          <div className={styles.util}>
            <HeaderUtil />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderGnb;
