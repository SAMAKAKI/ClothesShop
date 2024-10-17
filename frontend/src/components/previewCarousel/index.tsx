import React from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { SwiperElement } from '../swiperElement';

export const PreviewCarousel: React.FC = () => {
  return (
    <Swiper
      className='mt-[100px]'
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 5000,
        disableOnInteraction: true
      }}
      rewind
      pagination={{ clickable: true }}
      loop
    >
      <SwiperSlide>
        <SwiperElement description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur voluptate eos nihil, possimus quis, veritatis maxime similique dolores voluptates iste debitis fugit neque repudiandae, tenetur numquam obcaecati delectus! ...' title='NIKE Jordan 4 Retro - Thunder' price={1200.00} stars={5} colors={['#ffa567', '#aa34ff', '#fadbef']} img={'/jordan.png'}/>
      </SwiperSlide>
      <SwiperSlide>
        <SwiperElement description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur voluptate eos nihil, possimus quis, veritatis maxime similique dolores voluptates iste debitis fugit neque repudiandae, tenetur numquam obcaecati delectus! ...' title='NIKE Jordan 4 Retro - Thunder' price={1200.00} stars={5} colors={['#ffa567', '#aa34ff', '#fadbef']} img={'/jordan.png'}/>
      </SwiperSlide>
      
    </Swiper>
  )
}

