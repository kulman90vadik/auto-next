'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './heroSlider.module.scss';
import { Pagination, Autoplay } from 'swiper/modules';
import { FC } from 'react';
import { heroslider } from '@/app/data/heroslider';
// import { getAllSlide } from '@/app/services/getSlider';

const HeroSlider:FC = () => {
  // const getSlides = await getAllSlide();
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{delay: 4000}}
        pagination={{type: 'fraction'}}
        modules={[Autoplay, Pagination]}
        className={styles.heroSlider}
      >
        {heroslider && heroslider.map((slide: heroSliderType) => {
          return (
            <SwiperSlide key={slide.id}>
            <Image
                  className={styles.image}
                  src={slide.image}
                  priority
                  fill
                  alt='Jaguar'
              />
            </SwiperSlide>
          )
        })}
      
      </Swiper>
    </>

  );
}
 
export default HeroSlider;