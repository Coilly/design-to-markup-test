import { $PcBreakPoint } from '@/types';
import { create } from 'zustand';

type DeviceState = {
  width: number;
  isMobile: boolean;
  setWidth: (w: number) => void;
};

const getInitialWidth = () => (typeof window !== 'undefined' ? window.innerWidth : 1024);

const useDeviceStore = create<DeviceState>((set) => ({
  width: getInitialWidth(),
  isMobile: getInitialWidth() < $PcBreakPoint,
  setWidth: (width: number) => set({ width: width, isMobile: width < $PcBreakPoint }),
}));

export default useDeviceStore;
