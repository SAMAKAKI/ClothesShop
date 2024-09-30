import React from 'react'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export const PreviewCarousel: React.FC = () => {
  return (
    <Swiper
      className='mt-[100px]'
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className="w-full h-[500px] bg-zinc-800/50"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[500px] bg-red-500"></div></SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[500px] bg-green-500"></div></SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[500px] bg-blue-500"></div></SwiperSlide>
    </Swiper>
  )
}

