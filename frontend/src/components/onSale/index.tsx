import React from 'react'
import { RiDiscountPercentFill } from 'react-icons/ri'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Product } from '../product'

import 'swiper/scss';
import 'swiper/scss/navigation';

export const OnSale: React.FC = () => {
  return (
    <div className='mt-10'>
      <h2 className="text-3xl flex items-center gap-2 font-bold text-white"><RiDiscountPercentFill  className='text-red-500'/>On Sale</h2>
      <Swiper slidesPerView={3} modules={[Navigation]} navigation>
        <SwiperSlide className='p-4'>
          <Product colors={['#ffa567', '#aa34ff', '#fadbef']} img='/jordan.png' price={1200.00} stars={5} title='NIKE Jordan 4 Retro - Thunder' status='onSale'/>
        </SwiperSlide>
        <SwiperSlide className='p-4'>
          <Product colors={['#ffa567', '#aa34ff', '#fadbef']} img='/jordan.png' price={1200.00} stars={5} title='NIKE Jordan 4 Retro - Thunder' status='onSale'/>
        </SwiperSlide>
        <SwiperSlide className='p-4'>
          <Product colors={['#ffa567', '#aa34ff', '#fadbef']} img='/jordan.png' price={1200.00} stars={5} title='NIKE Jordan 4 Retro - Thunder' status='onSale'/>
        </SwiperSlide>
        <SwiperSlide className='p-4'>
          <Product colors={['#ffa567', '#aa34ff', '#fadbef']} img='/jordan.png' price={1200.00} stars={5} title='NIKE Jordan 4 Retro - Thunder' status='onSale'/>
        </SwiperSlide>
        <SwiperSlide className='p-4'>
          <Product colors={['#ffa567', '#aa34ff', '#fadbef']} img='/jordan.png' price={1200.00} stars={5} title='NIKE Jordan 4 Retro - Thunder' status='onSale'/>
        </SwiperSlide>
        <SwiperSlide className='p-4'>
          <Product colors={['#ffa567', '#aa34ff', '#fadbef']} img='/jordan.png' price={1200.00} stars={5} title='NIKE Jordan 4 Retro - Thunder' status='onSale'/>
        </SwiperSlide>
        <SwiperSlide className='p-4'>
          <Product colors={['#ffa567', '#aa34ff', '#fadbef']} img='/jordan.png' price={1200.00} stars={5} title='NIKE Jordan 4 Retro - Thunder' status='onSale'/>
        </SwiperSlide>
        <SwiperSlide className='p-4'>
          <Product colors={['#ffa567', '#aa34ff', '#fadbef']} img='/jordan.png' price={1200.00} stars={5} title='NIKE Jordan 4 Retro - Thunder' status='onSale'/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
