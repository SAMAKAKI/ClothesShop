import { Rating, Star } from '@smastrom/react-rating'
import React, { useEffect, useState } from 'react'
import { IoStarOutline, IoCartOutline } from 'react-icons/io5'
import { Navigation } from 'swiper/modules'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Product } from '../../components'
import 'swiper/scss';
import 'swiper/scss/navigation';

const myStyles = {
  itemShapes: Star,
  activeFillColor: '#ffb700',
  inactiveFillColor: '#fbf1a9',
}

export const ProductPage: React.FC = () => {
  const [tab, setTab] = useState<string>('description');

  useEffect(() => {
    document.title = 'NIKE Jordan 4 Retro - Thunder'
  })

  return (
    <div className='container mx-auto mt-[100px]'>
      <div className="flex justify-between items-center">
        {/* TODO create carousel with different images (different angles) */}
        <div className="w-[50%] flex flex-col justify-center items-center">
          <img src="/jordan.png" alt="" className='w-[80%]'/>
          <div className="flex items-center justify-center gap-x-10">
            <img src="/jordan.png" alt="" className='w-[20%]'/>
            <img src="/jordan.png" alt="" className='w-[20%]'/>
            <img src="/jordan.png" alt="" className='w-[20%]'/>
            <img src="/jordan.png" alt="" className='w-[20%]'/>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-y-5">
          <div className="flex items-center gap-x-5">
            <h1 className='text-3xl text-white font-bold'>NIKE Jordan 4 Retro - Thunder</h1>
            <div className="h-10 w-0.5 bg-gradient-to-tr from-red-600 to-blue-500 rounded-xl"></div>
            <div className="flex items-center gap-x-2">
              <Rating value={5} readOnly itemStyles={myStyles} style={{width: '180px'}}/>
              <p className='text-2xl text-blue-500'>(15)</p>
            </div>
          </div>
          <div className="">
            <p className='text-xl text-white mb-2'>Colors:</p>
            <div className="flex items-center gap-x-3">
              <button className="bg-cyan-500 w-8 h-8 rounded-full transition-transform hover:scale-110 capitalize flex items-center gap-2"></button>
              <button className="bg-sky-500 w-8 h-8 rounded-full transition-transform hover:scale-110 capitalize flex items-center gap-2"></button>
              <button className="bg-fuchsia-500 w-8 h-8 rounded-full transition-transform hover:scale-110 capitalize flex items-center gap-2"></button>
              <button className="bg-rose-500 w-8 h-8 rounded-full transition-transform hover:scale-110 capitalize flex items-center gap-2"></button>
            </div>
          </div>
          <div className="">
            <p className='text-xl text-white mb-2'>Sizes:</p>
            <div className="flex items-center gap-x-3 text-2xl text-white font-semibold">
              <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-transform hover:scale-110 uppercase flex items-center gap-2 py-1">38</button>
              <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-transform hover:scale-110 uppercase flex items-center gap-2 py-1">39</button>
              <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-transform hover:scale-110 uppercase flex items-center gap-2 py-1">40</button>
              <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-transform hover:scale-110 uppercase flex items-center gap-2 py-1">41</button>
              <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-transform hover:scale-110 uppercase flex items-center gap-2 py-1">42.5</button>
              <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-transform hover:scale-110 uppercase flex items-center gap-2 py-1">44</button>
            </div>
          </div>
          <div className="bg-gradient-to-tr from-red-600 to-blue-500 h-0.5 w-[80%] self-center my-5"></div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-5 text-white text-4xl">
              <button className='transition-all hover:scale-125 hover:text-yellow-400'>
                <IoStarOutline />
              </button>
              <button className='transition-all hover:scale-125 hover:text-blue-500'>
                <IoCartOutline />
              </button>
            </div>
            <p className='text-3xl text-white font-bold'>$1200</p>
          </div>
          <button className='bg-gradient-to-tr from-red-600 to-blue-500 w-full text-white text-4xl font-semibold py-2 rounded-2xl hover:scale-105 mt-5 transition-transform'>Buy Now </button>
        </div>
      </div>
      <div className="bg-gradient-to-tr from-red-600 to-blue-500 h-0.5 w-[80%] mx-auto my-10"></div>
      <div className="w-full">
        <div className="flex items-center gap-x-5 relative p-0.5">
          <div className={`bg-gradient-to-tr from-red-600 to-blue-500 w-[372px] absolute h-[52px] top-0 left-0 transition-all duration-300 ease-in-out transform rounded-xl ${tab === 'decoration' ? 'translate-x-0' : tab === 'materials' ? 'translate-x-[388px]' : tab === 'care-guide' ? 'translate-x-[776px]' : tab === 'ship-pay' ? 'translate-x-[1164px]' : 'translate-x-0'}`}></div>
          <button className="text-white font-semibold text-2xl flex-1 text-center bg-zinc-800/90 py-2 z-10 rounded-xl" onClick={() => setTab('description')}>Description and style</button>
          <button className="text-white font-semibold text-2xl flex-1 text-center bg-zinc-800/90 py-2 z-10 rounded-xl" onClick={() => setTab('materials')}>Materials</button>
          <button className="text-white font-semibold text-2xl flex-1 text-center bg-zinc-800/90 py-2 z-10 rounded-xl" onClick={() => setTab('care-guide')}>Care guide</button>
          <button className="text-white font-semibold text-2xl flex-1 text-center bg-zinc-800/90 py-2 z-10 rounded-xl" onClick={() => setTab('ship-pay')}>Shipping and payment</button>
        </div>
        <div className="mt-10">
          {tab === 'description' && (
            <div className='text-white text-xl'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempore pariatur iste veniam esse corrupti libero laudantium natus, recusandae, at nemo repellendus sunt illo similique aperiam molestias? Magni, voluptate eius?
              Quae dicta similique accusantium nisi molestias itaque magnam odio fuga nemo, sed odit sequi cumque laudantium. Vel minus eaque repudiandae cupiditate saepe. Quae deleniti rerum minima quasi doloremque, nemo obcaecati!
              Accusantium repudiandae quos provident nulla perspiciatis enim, commodi pariatur tempore debitis vel ea ducimus tenetur mollitia et, dicta aspernatur, facilis eveniet. Vero, pariatur tempore commodi neque sapiente dolorum delectus cumque!
              Quos eum ipsum aspernatur deleniti voluptatem, id corporis, ea optio dolor ut temporibus aperiam at repellendus nulla harum quod quis asperiores eius quo odio laboriosam repudiandae provident atque reprehenderit. Modi.
              Illum voluptatibus voluptas doloremque expedita placeat id quaerat qui at. Excepturi in ipsa, voluptatum, maiores delectus aut explicabo sint temporibus harum, quia iusto? Quia nisi culpa consectetur, eos cum maiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempore pariatur iste veniam esse corrupti libero laudantium natus, recusandae, at nemo repellendus sunt illo similique aperiam molestias? Magni, voluptate eius?
              Quae dicta similique accusantium nisi molestias itaque magnam odio fuga nemo, sed odit sequi cumque laudantium. Vel minus eaque repudiandae cupiditate saepe. Quae deleniti rerum minima quasi doloremque, nemo obcaecati!
              Accusantium repudiandae quos provident nulla perspiciatis enim, commodi pariatur tempore debitis vel ea ducimus tenetur mollitia et, dicta aspernatur, facilis eveniet. Vero, pariatur tempore commodi neque sapiente dolorum delectus cumque!
              Quos eum ipsum aspernatur deleniti voluptatem, id corporis, ea optio dolor ut temporibus aperiam at repellendus nulla harum quod quis asperiores eius quo odio laboriosam repudiandae provident atque reprehenderit. Modi.
              Illum voluptatibus voluptas doloremque expedita placeat id quaerat qui at. Excepturi in ipsa, voluptatum, maiores delectus aut explicabo sint temporibus harum, quia iusto? Quia nisi culpa consectetur, eos cum maiores.</p>
            </div>
          )}
          {tab === 'materials' && (
            <div className='text-white text-xl'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempore pariatur iste veniam esse corrupti libero laudantium natus, recusandae, at nemo repellendus sunt illo similique aperiam molestias? Magni, voluptate eius?
              Quae dicta similique accusantium nisi molestias itaque magnam odio fuga nemo, sed odit sequi cumque laudantium. Vel minus eaque repudiandae cupiditate saepe. Quae deleniti rerum minima quasi doloremque, nemo obcaecati!
              Accusantium repudiandae quos provident nulla perspiciatis enim, commodi pariatur tempore debitis vel ea ducimus tenetur mollitia et, dicta aspernatur, facilis eveniet. Vero, pariatur tempore commodi neque sapiente dolorum delectus cumque!
              Quos eum ipsum aspernatur deleniti voluptatem, id corporis, ea optio dolor ut temporibus aperiam at repellendus nulla harum quod quis asperiores eius quo odio laboriosam repudiandae provident atque reprehenderit. Modi.
              Illum voluptatibus voluptas doloremque expedita placeat id quaerat qui at. Excepturi in ipsa, voluptatum, maiores delectus aut explicabo sint temporibus harum, quia iusto? Quia nisi culpa consectetur, eos cum maiores.</p>
            </div>
          )}
          {tab === 'care-guide' && (
            <div className='text-white text-xl'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempore pariatur iste veniam esse corrupti libero laudantium natus, recusandae, at nemo repellendus sunt illo similique aperiam molestias? Magni, voluptate eius?
              Quae dicta similique accusantium nisi molestias itaque magnam odio fuga nemo, sed odit sequi cumque laudantium. Vel minus eaque repudiandae cupiditate saepe. Quae deleniti rerum minima quasi doloremque, nemo obcaecati!</p>
            </div>
          )}
          {tab === 'ship-pay' && (
            <div className='text-white text-xl'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempore pariatur iste veniam esse corrupti libero laudantium natus, recusandae, at nemo repellendus sunt illo similique aperiam molestias? Magni, voluptate eius?
              Quae dicta similique accusantium nisi molestias itaque magnam odio fuga nemo, sed odit sequi cumque laudantium. Vel minus eaque repudiandae cupiditate saepe. Quae deleniti rerum minima quasi doloremque, nemo obcaecati!
              Accusantium repudiandae quos provident nulla perspiciatis enim, commodi pariatur tempore debitis vel ea ducimus tenetur mollitia et, dicta aspernatur, facilis eveniet. Vero, pariatur tempore commodi neque sapiente dolorum delectus cumque!
              Quos eum ipsum aspernatur deleniti voluptatem, id corporis, ea optio dolor ut temporibus aperiam at repellendus nulla harum quod quis asperiores eius quo odio laboriosam repudiandae provident atque reprehenderit. Modi.
              Illum voluptatibus voluptas doloremque expedita placeat id quaerat qui at. Excepturi in ipsa, voluptatum, maiores delectus aut explicabo sint temporibus harum, quia iusto? Quia nisi culpa consectetur, eos cum maiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempore pariatur iste veniam esse corrupti libero laudantium natus, recusandae, at nemo repellendus sunt illo similique aperiam molestias? Magni, voluptate eius?
              Quae dicta similique accusantium nisi molestias itaque magnam odio fuga nemo, sed odit sequi cumque laudantium. Vel minus eaque repudiandae cupiditate saepe. Quae deleniti rerum minima quasi doloremque, nemo obcaecati!
              Accusantium repudiandae quos provident nulla perspiciatis enim, commodi pariatur tempore debitis vel ea ducimus tenetur mollitia et, dicta aspernatur, facilis eveniet. Vero, pariatur tempore commodi neque sapiente dolorum delectus cumque!
              Quos eum ipsum aspernatur deleniti voluptatem, id corporis, ea optio dolor ut temporibus aperiam at repellendus nulla harum quod quis asperiores eius quo odio laboriosam repudiandae provident atque reprehenderit. Modi.
              Illum voluptatibus voluptas doloremque expedita placeat id quaerat qui at. Excepturi in ipsa, voluptatum, maiores delectus aut explicabo sint temporibus harum, quia iusto? Quia nisi culpa consectetur, eos cum maiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempore pariatur iste veniam esse corrupti libero laudantium natus, recusandae, at nemo repellendus sunt illo similique aperiam molestias? Magni, voluptate eius?
              Quae dicta similique accusantium nisi molestias itaque magnam odio fuga nemo, sed odit sequi cumque laudantium. Vel minus eaque repudiandae cupiditate saepe. Quae deleniti rerum minima quasi doloremque, nemo obcaecati!
              Accusantium repudiandae quos provident nulla perspiciatis enim, commodi pariatur tempore debitis vel ea ducimus tenetur mollitia et, dicta aspernatur, facilis eveniet. Vero, pariatur tempore commodi neque sapiente dolorum delectus cumque!
              Quos eum ipsum aspernatur deleniti voluptatem, id corporis, ea optio dolor ut temporibus aperiam at repellendus nulla harum quod quis asperiores eius quo odio laboriosam repudiandae provident atque reprehenderit. Modi.
              Illum voluptatibus voluptas doloremque expedita placeat id quaerat qui at. Excepturi in ipsa, voluptatum, maiores delectus aut explicabo sint temporibus harum, quia iusto? Quia nisi culpa consectetur, eos cum maiores.</p>
            </div>
          )}
        </div>
      </div>
      <div className="bg-gradient-to-tr from-red-600 to-blue-500 h-0.5 w-[80%] mx-auto my-10"></div>
      <div className="w-full">
        <div className="flex items-center gap-x-5">
          <h2 className='text-white text-3xl font-bold'>Reviews - {15}</h2>
          <div className="flex items-center gap-x-2">
            <Rating value={4.5} readOnly itemStyles={myStyles} style={{width: '170px'}} />
            <p className='text-white text-3xl font-bold'>4.5 / 5</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 items-center justify-center mt-10">
          <div className="bg-zinc-800 rounded-2xl flex items-center justify-between gap-x-8 min-h-[140px] h-[140px] px-5 transition-transform hover:scale-[1.03]">
            <div className="flex flex-col justify-center items-center">
              <div className="w-20 h-20 bg-white rounded-full"></div>
              <p className='text-white text-xl'>username</p>
            </div>
            <div className="bg-gradient-to-tr from-red-600 to-blue-500 h-[80%] w-0.5"></div>
            <div className="flex flex-col justify-start gap-y-3">
              <div className="flex items-center gap-x-3">
                <h3 className='text-2xl text-white font-semibold'>Title of review</h3>
                <Rating value={5} readOnly itemStyles={myStyles} style={{width: '130px'}}/>
              </div>
              <p className='text-white text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore non incidunt vitae expedita omnis odio corporis ipsam sapiente quas quo ut eum ab perferendis aperiam, sunt ullam aliquam a consequuntur.</p>
            </div>
          </div>
          <div className="bg-zinc-800 rounded-2xl flex items-center justify-between gap-x-8 min-h-[140px] h-[140px] px-5 transition-transform hover:scale-[1.03]">
            <div className="flex flex-col justify-center items-center">
              <div className="w-20 h-20 bg-white rounded-full"></div>
              <p className='text-white text-xl'>username</p>
            </div>
            <div className="bg-gradient-to-tr from-red-600 to-blue-500 h-[80%] w-0.5"></div>
            <div className="flex flex-col justify-start gap-y-3">
              <div className="flex items-center gap-x-3">
                <h3 className='text-2xl text-white font-semibold'>Title of review</h3>
                <Rating value={5} readOnly itemStyles={myStyles} style={{width: '130px'}}/>
              </div>
              <p className='text-white text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore non incidunt vitae expedita omnis odio corporis ipsam sapiente quas quo ut eum ab perferendis aperiam, sunt ullam aliquam a consequuntur.</p>
            </div>
          </div>
          <div className="bg-zinc-800 rounded-2xl flex items-center justify-between gap-x-8 min-h-[140px] h-[140px] px-5 transition-transform hover:scale-[1.03]">
            <div className="flex flex-col justify-center items-center">
              <div className="w-20 h-20 bg-white rounded-full"></div>
              <p className='text-white text-xl'>username</p>
            </div>
            <div className="bg-gradient-to-tr from-red-600 to-blue-500 h-[80%] w-0.5"></div>
            <div className="flex flex-col justify-start gap-y-3">
              <div className="flex items-center gap-x-3">
                <h3 className='text-2xl text-white font-semibold'>Title of review</h3>
                <Rating value={5} readOnly itemStyles={myStyles} style={{width: '130px'}}/>
              </div>
              <p className='text-white text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore non incidunt vitae expedita omnis odio corporis ipsam sapiente quas quo ut eum ab perferendis aperiam, sunt ullam aliquam a consequuntur.</p>
            </div>
          </div>
          <div className="bg-zinc-800 rounded-2xl flex items-center justify-between gap-x-8 min-h-[140px] h-[140px] px-5 transition-transform hover:scale-[1.03]">
            <div className="flex flex-col justify-center items-center">
              <div className="w-20 h-20 bg-white rounded-full"></div>
              <p className='text-white text-xl'>username</p>
            </div>
            <div className="bg-gradient-to-tr from-red-600 to-blue-500 h-[80%] w-0.5"></div>
            <div className="flex flex-col justify-start gap-y-3">
              <div className="flex items-center gap-x-3">
                <h3 className='text-2xl text-white font-semibold'>Title of review</h3>
                <Rating value={5} readOnly itemStyles={myStyles} style={{width: '130px'}}/>
              </div>
              <p className='text-white text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore non incidunt vitae expedita omnis odio corporis ipsam sapiente quas quo ut eum ab perferendis aperiam, sunt ullam aliquam a consequuntur.</p>
            </div>
          </div>
          <div className="bg-zinc-800 rounded-2xl flex items-center justify-between gap-x-8 min-h-[140px] h-[140px] px-5 transition-transform hover:scale-[1.03]">
            <div className="flex flex-col justify-center items-center">
              <div className="w-20 h-20 bg-white rounded-full"></div>
              <p className='text-white text-xl'>username</p>
            </div>
            <div className="bg-gradient-to-tr from-red-600 to-blue-500 h-[80%] w-0.5"></div>
            <div className="flex flex-col justify-start gap-y-3">
              <div className="flex items-center gap-x-3">
                <h3 className='text-2xl text-white font-semibold'>Title of review</h3>
                <Rating value={5} readOnly itemStyles={myStyles} style={{width: '130px'}}/>
              </div>
              <p className='text-white text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore non incidunt vitae expedita omnis odio corporis ipsam sapiente quas quo ut eum ab perferendis aperiam, sunt ullam aliquam a consequuntur.</p>
            </div>
          </div>
          <div className="bg-zinc-800 rounded-2xl flex items-center justify-between gap-x-8 min-h-[140px] h-[140px] px-5 transition-transform hover:scale-[1.03]">
            <div className="flex flex-col justify-center items-center">
              <div className="w-20 h-20 bg-white rounded-full"></div>
              <p className='text-white text-xl'>username</p>
            </div>
            <div className="bg-gradient-to-tr from-red-600 to-blue-500 h-[80%] w-0.5"></div>
            <div className="flex flex-col justify-start gap-y-3">
              <div className="flex items-center gap-x-3">
                <h3 className='text-2xl text-white font-semibold'>Title of review</h3>
                <Rating value={5} readOnly itemStyles={myStyles} style={{width: '130px'}}/>
              </div>
              <p className='text-white text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore non incidunt vitae expedita omnis odio corporis ipsam sapiente quas quo ut eum ab perferendis aperiam, sunt ullam aliquam a consequuntur.</p>
            </div>
          </div>
          <button className='text-blue-500 text-2xl transition-transform hover:scale-105'>Load More</button>
        </div>
      </div>
      <div className="bg-gradient-to-tr from-red-600 to-blue-500 h-0.5 w-[80%] mx-auto my-10"></div>
      <div className="w-full">
        <h2 className='text-white text-3xl font-bold'>Same products</h2>
        <div className="mt-5 mb-14">
          <Swiper slidesPerView={4} modules={[Navigation]} navigation>
            <SwiperSlide className='p-4'>
              <Product colors={['#ffa567', '#aa34ff', '#fadbef']} img='/jordan.png' price={1200.00} stars={5} title='NIKE Jordan 4 Retro - Thunder' status='new'/>
            </SwiperSlide>
            <SwiperSlide className='p-4'>
              <Product colors={['#ffa567', '#aa34ff', '#fadbef']} img='/jordan.png' price={1200.00} stars={5} title='NIKE Jordan 4 Retro - Thunder' status='new'/>
            </SwiperSlide>
            <SwiperSlide className='p-4'>
              <Product colors={['#ffa567', '#aa34ff', '#fadbef']} img='/jordan.png' price={1200.00} stars={5} title='NIKE Jordan 4 Retro - Thunder' status='new'/>
            </SwiperSlide>
            <SwiperSlide className='p-4'>
              <Product colors={['#ffa567', '#aa34ff', '#fadbef']} img='/jordan.png' price={1200.00} stars={5} title='NIKE Jordan 4 Retro - Thunder' status='new'/>
            </SwiperSlide>
            <SwiperSlide className='p-4'>
              <Product colors={['#ffa567', '#aa34ff', '#fadbef']} img='/jordan.png' price={1200.00} stars={5} title='NIKE Jordan 4 Retro - Thunder' status='new'/>
            </SwiperSlide>
            <SwiperSlide className='p-4'>
              <Product colors={['#ffa567', '#aa34ff', '#fadbef']} img='/jordan.png' price={1200.00} stars={5} title='NIKE Jordan 4 Retro - Thunder' status='new'/>
            </SwiperSlide>
            <SwiperSlide className='p-4'>
              <Product colors={['#ffa567', '#aa34ff', '#fadbef']} img='/jordan.png' price={1200.00} stars={5} title='NIKE Jordan 4 Retro - Thunder' status='new'/>
            </SwiperSlide>
            <SwiperSlide className='p-4'>
              <Product colors={['#ffa567', '#aa34ff', '#fadbef']} img='/jordan.png' price={1200.00} stars={5} title='NIKE Jordan 4 Retro - Thunder' status='new'/>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}
