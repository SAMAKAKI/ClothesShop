import { Rating, Star } from '@smastrom/react-rating'
import React from 'react'
import { FaArrowDown, FaArrowUp, FaFire, FaMedal, FaStar,  } from 'react-icons/fa6'
import { RiDiscountPercentFill } from 'react-icons/ri'

const myStyles = {
  itemShapes: Star,
  activeFillColor: '#ffb700',
  inactiveFillColor: '#fbf1a9',
}

export const Filters: React.FC = () => {
  return (
    <div className='flex flex-col gap-y-3 justify-start max-h-[850px] overflow-y-scroll w-full'>
      <h2 className='text-white text-3xl font-bold'>Sort by</h2>
      <div className="flex flex-wrap w-full items-center text-lg font-semibold text-white gap-x-3 gap-y-2">
        <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2"><FaArrowDown className='text-red-500'/> low price</button>
        <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2"><FaArrowUp className='text-green-500'/>high price</button>
        <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2"><FaFire className='text-orange-400'/>new</button>
        <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2"><FaMedal className='text-purple-500'/>best selling</button>
        <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2"><FaStar className='text-yellow-400'/>popular</button>
        <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2"><RiDiscountPercentFill className='text-red-500'/>on sale</button>
      </div>
      <h2 className='text-white text-3xl font-bold'>Filters</h2>
      <div className="flex flex-col gap-y-2">
        <p className='text-xl text-white font-semibold'>Price</p>
        <form className="flex items-center gap-x-3 w-full">
          <input type="number" name="fromPrice" placeholder='From' className='bg-zinc-600 text-white text-lg outline-none font-semibold px-3 py-0.5 rounded-xl w-[45%]'/>
          <p className='text-white text-xl'>-</p>
          <input type="number" name="toPrice" placeholder='To' className='bg-zinc-600 text-white text-lg outline-none font-semibold px-3 py-0.5 rounded-xl w-[45%]'/>
        </form>
      </div>
      <div className="flex flex-col gap-y-2">
      <p className='text-xl text-white font-semibold'>Rating</p>
        <Rating value={0} style={{width: '150px'}} itemStyles={myStyles}/>
      </div>
      {/* If all categories are checked apart from boots (all categories) this div will be displayed */}
      <div className="flex flex-col gap-y-2">
        <p className='text-xl text-white font-semibold'>Sizes</p>
        <div className="flex flex-wrap items-center text-lg font-semibold text-white gap-x-3 gap-y-2">
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 uppercase flex items-center gap-2">xs</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 uppercase flex items-center gap-2">s</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 uppercase flex items-center gap-2">m</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 uppercase flex items-center gap-2">l</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 uppercase flex items-center gap-2">xl</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 uppercase flex items-center gap-2">xxl</button>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <p className='text-xl text-white font-semibold'>Types</p>
        <div className="flex flex-wrap items-center text-lg font-semibold text-white gap-x-3 gap-y-2">
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">shoes</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">sweater</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">dress</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">hoodies</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">t-shirt</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">flip-flops</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">shorts</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">skirt</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">jeans</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">coat</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">high heels</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">suit</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">cap</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">socks</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">shirt</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">bra</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">scarf</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">swimsuit</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">hat</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">cloves</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">balaclava</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">bag</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">slippers</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">bumbag</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">belt</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">sandals</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">bow tie</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">pyjamas</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">tie</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">cowboy boots</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">boots</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">wallet</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">sweatshirt</button>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <p className='text-xl text-white font-semibold'>Colors</p>
        <div className="flex flex-wrap items-center text-lg font-semibold text-white gap-x-3 gap-y-2">
          <button className="bg-gray-500 w-8 h-8 rounded-full transition-transform hover:scale-110 capitalize"></button>
          <button className="bg-blue-500 w-8 h-8 rounded-full transition-transform hover:scale-110 capitalize"></button>
          <button className="bg-red-500 w-8 h-8 rounded-full transition-transform hover:scale-110 capitalize"></button>
          <button className="bg-yellow-500 w-8 h-8 rounded-full transition-transform hover:scale-110 capitalize"></button>
          <button className="bg-purple-500 w-8 h-8 rounded-full transition-transform hover:scale-110 capitalize"></button>
          <button className="bg-pink-500 w-8 h-8 rounded-full transition-transform hover:scale-110 capitalize"></button>
          <button className="bg-indigo-500 w-8 h-8 rounded-full transition-transform hover:scale-110 capitalize"></button>
          <button className="bg-white w-8 h-8 rounded-full transition-transform hover:scale-110 capitalize"></button>
          <button className="bg-black w-8 h-8 rounded-full transition-transform hover:scale-110 capitalize"></button>
          <button className="bg-green-500 w-8 h-8 rounded-full transition-transform hover:scale-110 capitalize"></button>
          <button className="bg-violet-500 w-8 h-8 rounded-full transition-transform hover:scale-110 capitalize"></button>
          <button className="bg-slate-500 w-8 h-8 rounded-full transition-transform hover:scale-110 capitalize"></button>
          <button className="bg-stone-500 w-8 h-8 rounded-full transition-transform hover:scale-110 capitalize"></button>
          <button className="bg-orange-500 w-8 h-8 rounded-full transition-transform hover:scale-110 capitalize"></button>
          <button className="bg-amber-500 w-8 h-8 rounded-full transition-transform hover:scale-110 capitalize"></button>
          <button className="bg-lime-500 w-8 h-8 rounded-full transition-transform hover:scale-110 capitalize"></button>
          <button className="bg-emerald-500 w-8 h-8 rounded-full transition-transform hover:scale-110 capitalize"></button>
          <button className="bg-teal-500 w-8 h-8 rounded-full transition-transform hover:scale-110 capitalize"></button>
          <button className="bg-cyan-500 w-8 h-8 rounded-full transition-transform hover:scale-110 capitalize"></button>
          <button className="bg-sky-500 w-8 h-8 rounded-full transition-transform hover:scale-110 capitalize"></button>
          <button className="bg-fuchsia-500 w-8 h-8 rounded-full transition-transform hover:scale-110 capitalize"></button>
          <button className="bg-rose-500 w-8 h-8 rounded-full transition-transform hover:scale-110 capitalize"></button>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <p className='text-xl text-white font-semibold'>Brands</p>
        <div className="flex flex-wrap items-center text-lg font-semibold text-white gap-x-3 gap-y-2">
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">gucci</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">chanel</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">dior</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">zara</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">armani</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">fendi</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">adidas</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">h&m</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">burberry</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">balenciaga</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">dolce & gabbana</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">calvin klein</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">the north face</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">louis vuitton</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">nike</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">prada</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">versace</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">levis</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">cartier</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">puma</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">reebok</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">converse</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">lacoste</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">polo ralph lauren</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">umbro</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">new balance</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">fila</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">diesel</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">guess</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 uppercase flex items-center gap-2">ecco</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">tiffany & co</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">victoria's secret</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">under armour</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">pandora</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">boss</button>
        </div>
      </div>
      {/* If boots is checked this div will be displayed */}
      <div className="flex flex-col gap-y-2">
        <p className='text-xl text-white font-semibold'>Size of boots</p>
        <div className="flex flex-wrap items-center text-lg font-semibold text-white gap-x-3 gap-y-2">
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">35</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">35.5</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">36</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">36.5</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">37</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">37.5</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">38</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">38.5</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">39</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">39.5</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">40</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">40.5</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">41</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">41.5</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">42</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">42.5</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">43</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">43.5</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">44</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">44.5</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">45</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">45.5</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">46</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">46.5</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">47</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">47.5</button>
          <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">48</button>
        </div>
      </div>
    </div>
  )
}
