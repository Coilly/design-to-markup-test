import Button from '@/components/Button/Button';
import Img from '@/components/Img/Img';
import clsx from 'clsx';
import styles from './Logo.module.scss';

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={clsx(styles.logo, className)}>
      <Button as='link' href='/'>
        <Img as='span' src='image/logo.png' alt='신테카바이오 로고' width={109} height={22} />
      </Button>
    </div>
  );
};

export default Logo;

