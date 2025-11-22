import Card from '@/components/Card/Card';
import useDeviceStore from '@/store/useDeviceStore';
import { CardSliderProps } from '@/types';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const CardSlider = ({ cards, imgHeight, className }: CardSliderProps) => {
  const [maxHeight, setMaxHeight] = useState('auto');
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const swiperRef = useRef<SwiperType | null>(null);

  const { isMobile } = useDeviceStore();

  const calculateMaxHeight = useCallback(() => {
    let max = 0;
    cardRefs.current.forEach((ref) => {
      if (ref) {
        const cardElement = ref.querySelector('.card') as HTMLElement;
        if (cardElement) {
          const height = cardElement.offsetHeight;
          if (height > max) {
            max = height;
          }
        } else {
          const height = ref.offsetHeight;
          if (height > max) {
            max = height;
          }
        }
      }
    });

    if (max > 0) {
      const newHeight = `${max}px`;
      setMaxHeight((prev) => {
        if (prev !== newHeight) {
          return newHeight;
        }
        return prev;
      });
    }
  }, []);

  useEffect(() => {
    setMaxHeight('auto');

    const timer = setTimeout(() => {
      calculateMaxHeight();
    }, 200);

    const images = document.querySelectorAll('.swiper-slide img');
    let loadedCount = 0;
    const totalImages = images.length;

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        setTimeout(() => {
          calculateMaxHeight();
        }, 100);
      }
    };

    if (totalImages > 0) {
      images.forEach((img) => {
        if ((img as HTMLImageElement).complete) {
          loadedCount++;
        } else {
          img.addEventListener('load', handleImageLoad);
          img.addEventListener('error', handleImageLoad);
        }
      });

      if (loadedCount === totalImages) {
        setTimeout(() => {
          calculateMaxHeight();
        }, 100);
      }
    }

    return () => {
      clearTimeout(timer);
      images.forEach((img) => {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleImageLoad);
      });
    };
  }, [cards, isMobile, calculateMaxHeight]);

  return (
    <Swiper
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      onResize={() => {
        setTimeout(() => {
          calculateMaxHeight();
        }, 100);
      }}
      onUpdate={() => {
        setTimeout(() => {
          calculateMaxHeight();
        }, 100);
      }}
      observer={true}
      observeParents={true}
      spaceBetween={16}
      slidesPerView={isMobile ? 1.5 : 2.5}
      slidesOffsetAfter={16}
      modules={[Pagination, Autoplay]}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 4500,
      }}
      speed={500}
      className={className}
    >
      {cards.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            ref={(el) => {
              if (el) cardRefs.current[index] = el;
            }}
            style={{
              minHeight: maxHeight,
              display: 'flex',
            }}
          >
            {<Card item={item} imgHeight={imgHeight} />}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSlider;
