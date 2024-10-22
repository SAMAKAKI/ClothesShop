import React, { useState } from 'react'
import './styles.scss'
import { Filters, Product } from '../../components'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'

export const Shop: React.FC = () => {
  const [productPerPage, setProductPerPage] = useState<number>(10)

  return (
    <div className='container mx-auto mt-[100px]'>
      <div className="w-full flex justify-between items-start">
        <div className="w-[25%]">
          <Filters />
        </div>
        <div className="w-[75%] flex flex-col justify-between items-center gap-y-10">
          <div className="flex items-center justify-between w-[90%]">
            {/* place for display the filters name or colors */}
            <div className="flex items-center gap-x-3 w-[65%] text-lg font-semibold text-white overflow-x-scroll">
              {/* <button className="bg-red-500 w-8 h-8 rounded-full transition-transform hover:scale-110 capitalize"></button>
              <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">cloves</button>
              <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 uppercase flex items-center gap-2">xxl</button>
              <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">louis vuitton</button>
              <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">nike</button>
              <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">prada</button>
              <button className="bg-red-500 w-8 h-8 rounded-full transition-transform hover:scale-110 capitalize"></button>
              <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">cloves</button>
              <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 uppercase flex items-center gap-2">xxl</button>
              <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">louis vuitton</button>
              <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">nike</button>
              <button className="bg-zinc-600 px-4 rounded-xl hover:bg-zinc-800 transition-all hover:scale-105 capitalize flex items-center gap-2">prada</button> */}
            </div>
            <div className="flex items-center gap-x-3 text-white text-lg font-semibold relative p-[2px]">
              <div className={`transition-transform duration-300 bg-gradient-to-tr from-red-600 to-blue-500 absolute top-0 left-0 w-[52px] h-[52px] rounded-xl ${productPerPage === 10 ? 'translate-x-0' : productPerPage === 20 ? 'translate-x-[60px]' : productPerPage === 30 ? 'translate-x-[120px]' : productPerPage === 40 ? 'translate-x-[180px]' : productPerPage === 50 ? 'translate-x-[240px]' : 'translate-x-0'}`}></div>
              <button className='bg-zinc-800/90 rounded-xl flex justify-center items-center w-12 h-12 z-10' onClick={() => setProductPerPage(10)}>10</button>
              <button className='bg-zinc-800/90 rounded-xl flex justify-center items-center w-12 h-12 z-10' onClick={() => setProductPerPage(20)}>20</button>
              <button className='bg-zinc-800/90 rounded-xl flex justify-center items-center w-12 h-12 z-10' onClick={() => setProductPerPage(30)}>30</button>
              <button className='bg-zinc-800/90 rounded-xl flex justify-center items-center w-12 h-12 z-10' onClick={() => setProductPerPage(40)}>40</button>
              <button className='bg-zinc-800/90 rounded-xl flex justify-center items-center w-12 h-12 z-10' onClick={() => setProductPerPage(50)}>50</button> 
            </div>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-5 justify-center w-full">
            <Product colors={['#ffa567', '#aa34ff', '#fadbef']} img='/jordan.png' price={1200.00} stars={5} title='NIKE Jordan 4 Retro - Thunder' status='new'/>
            <Product colors={['#ffa567', '#aa34ff', '#fadbef']} img='/jordan.png' price={1200.00} stars={5} title='NIKE Jordan 4 Retro - Thunder' status='popular'/>
            <Product colors={['#ffa567', '#aa34ff', '#fadbef']} img='/jordan.png' price={1200.00} stars={5} title='NIKE Jordan 4 Retro - Thunder' status='onSale'/>
            <Product colors={['#ffa567', '#aa34ff', '#fadbef']} img='/jordan.png' price={1200.00} stars={5} title='NIKE Jordan 4 Retro - Thunder' status=''/>
            <Product colors={['#ffa567', '#aa34ff', '#fadbef']} img='/jordan.png' price={1200.00} stars={5} title='NIKE Jordan 4 Retro - Thunder' status=''/>
            <Product colors={['#ffa567', '#aa34ff', '#fadbef']} img='/jordan.png' price={1200.00} stars={5} title='NIKE Jordan 4 Retro - Thunder' status='new'/>
          </div>
          {/* pagination */}
          <div className="flex gap-x-3 self-end items-center text-white text-xl font-semibold">
            <p><FaAngleDoubleLeft /></p>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p><FaAngleDoubleRight /></p>
          </div>
        </div>
      </div>
    </div>
  )
}
