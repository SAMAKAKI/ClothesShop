import React from 'react'
import { FaFire } from 'react-icons/fa6'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Product } from '../product';

export const New: React.FC = () => {
  return (
    <div className='mt-5'>
      <h2 className="text-3xl flex items-center gap-2 font-bold text-white"><FaFire className='text-orange-400'/>New</h2>
      <Swiper spaceBetween={50} slidesPerView={4} modules={[Navigation]} navigation>
        <SwiperSlide>
        </SwiperSlide>
      </Swiper>
      <Product colors={['#ffa567', '#aa34ff', '#fadbef']} img='/jordan.png' price={1200.00} stars={5} title='NIKE Jordan 4 Retro - Thunder'/>
    </div>
  )
}
