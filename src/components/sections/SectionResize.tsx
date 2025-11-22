import useDeviceStore from '@/store/useDeviceStore';
import { ResizeProps } from '@/types';
import { useEffect } from 'react';

const SectionResize = ({ children }: ResizeProps) => {
  const setWidth = useDeviceStore((set) => set.setWidth as (width: number) => void);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const onResize = () => setWidth(window.innerWidth);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [setWidth]);

  return <div>{children}</div>;
};

export default SectionResize;
