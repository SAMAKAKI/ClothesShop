import { Rating, Star } from '@smastrom/react-rating'
import React from 'react'
import { FaFire, FaStar } from 'react-icons/fa6'
import { IoStarOutline, IoCartOutline } from 'react-icons/io5'
import { RiDiscountPercentFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

interface ProductProps {
  title: string
  price: number
  img: string
  colors: string[]
  stars: number
  status: string
}

const myStyles = {
  itemShapes: Star,
  activeFillColor: '#ffb700',
  inactiveFillColor: '#fbf1a9',
}

export const Product: React.FC<ProductProps> = ({ title, colors, img, price, stars, status }) => {
  return (
    <Link to={'/shop/nike-jordan-4-retro-thunder-red'} className='relative flex flex-col justify-start w-[300px] z-[1] transition-transform hover:scale-105'>
      <div className="absolute top-0 right-0 w-[40%] h-[72px] shadow-[-30px_30px_0px] shadow-zinc-800 rounded-bl-[30px] z-[-1]"></div>
      {status === 'new' && (
        <Link to={''} className="absolute top-1 right-0 w-1/3 bg-zinc-800 flex items-center justify-center gap-2 py-2 rounded-2xl hover:scale-110 transition-transform">
          <FaFire className='text-orange-400 text-xl' />
          <p className='text-md text-white font-semibold'>New</p>
        </Link>
      )}
      {status === 'popular' && (
        <Link to={''} className="absolute top-1 right-0 w-1/3 bg-zinc-800 flex items-center justify-center gap-2 py-2 rounded-2xl hover:scale-110 transition-transform">
          <FaStar className='text-yellow-400 text-xl'/>
          <p className='text-md text-white font-semibold'>Popular</p>
        </Link>
      )}
      {status === 'onSale' && (
        <Link to={''} className="absolute top-1 right-0 w-1/3 bg-zinc-800 flex items-center justify-center gap-2 py-2 rounded-2xl hover:scale-110 transition-transform">
          <RiDiscountPercentFill className='text-red-500 text-xl'/>
          <p className='text-md text-white font-semibold'>On Sale</p>
        </Link>
      )}
      <div className="bg-zinc-800 rounded-tl-[30px] rounded-tr-[30px] text-white font-bold text-xl w-3/5 text-center py-2">{title}</div>
      <div className="bg-zinc-800 w-full flex justify-center items-start rounded-tr-[30px]">
        <img src={img} alt="" className='rotate-45 hover:rotate-[30deg] transition-transform'/>
      </div>
      <div className="bg-zinc-800 px-4 pb-3 flex flex-col gap-4 rounded-b-[30px]">
        <div className="flex justify-end items-center gap-2 text-3xl text-white">
          <button>
            <IoStarOutline />
          </button>
          <button>
            <IoCartOutline />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <Rating value={stars} readOnly itemStyles={myStyles} style={{width: '150px'}}/>
          <p className='text-2xl text-white font-bold tracking-wider'>${price}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {colors.map((color, index) => (
              <Link to={''} key={index} className="w-7 h-7 rounded-full" style={{backgroundColor: color}}></Link>
            ))}
          </div>
          <Link to={''} className='text-white text-xl font-bold bg-gradient-to-tr from-red-500 to-blue-700 w-[40%] text-center py-1.5 rounded-xl transition-transform hover:scale-105'>Buy Now</Link>
        </div>
      </div>
    </Link>
  )
}
