import Card from '@/components/Card/Card';
import { CardSliderProps } from '@/types';
import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import './CardSlider.module.scss';

const CardSlider = ({ cards, imgHeight, className }: CardSliderProps) => {
  const [maxHeight, setMaxHeight] = useState('auto');
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    let currentMaxHeight = 0;
    cardRefs.current.forEach((ref) => {
      if (ref) {
        currentMaxHeight = Math.max(currentMaxHeight, ref.offsetHeight);
      }
    });

    if (currentMaxHeight > 0 && currentMaxHeight !== parseInt(maxHeight || '0')) {
      setMaxHeight(`${currentMaxHeight}px`);
    }
  }, [cards, maxHeight]);

  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={2.5}
      modules={[Navigation, Pagination, Autoplay]}
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
            style={{ height: maxHeight, display: 'flex' }}
          >
            {<Card item={item} imgHeight={imgHeight} />}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSlider;
