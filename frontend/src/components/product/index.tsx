import { Rating } from '@mui/material'
import React from 'react'
import { FaFire, FaStar } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

interface ProductProps {
  title: string
  price: number
  img: string
  colors: string[]
  stars: number
}

export const Product: React.FC<ProductProps> = ({ title, colors, img, price, stars }) => {
  return (
    <div className='relative flex flex-col justify-start w-[400px] z-[1]'>
      <div className="absolute top-0 right-0 w-[40%] h-[72px] shadow-[-30px_30px_0px] shadow-zinc-800 rounded-bl-[30px] z-[-1]"></div>
      <div className="absolute top-1 right-0 w-1/3 bg-zinc-800 flex items-center justify-center gap-2 py-2 rounded-2xl">
        <FaFire className='text-orange-400 text-xl' />
        <p className='text-lg text-white font-semibold'>New</p>
      </div>
      <div className="bg-zinc-800 rounded-tl-[30px] rounded-tr-[30px] text-white font-bold text-xl w-3/5 text-center py-2">{title}</div>
      <div className="bg-zinc-800 w-full flex justify-center items-start rounded-tr-[30px]">
        <img src={img} alt="" className='rotate-45'/>
      </div>
      <div className="bg-zinc-800 px-4 pb-3 flex flex-col gap-4 rounded-b-[30px]">
        <div className="flex justify-between items-center">
          <div className="flex gap-1 items-center text-yellow-500 text-2xl">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
          </div>
          <p className='text-2xl text-white font-bold tracking-wider'>${price}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {colors.map((color) => (
              <Link to={''} className="w-7 h-7 rounded-full" style={{backgroundColor: color}}></Link>
            ))}
          </div>
          <Link to={''} className='text-white text-xl font-bold bg-gradient-to-tr from-red-500 to-blue-700 w-[40%] text-center py-1.5 rounded-xl transition-transform hover:scale-105'>Buy Now</Link>
        </div>
      </div>
    </div>
  )
}
