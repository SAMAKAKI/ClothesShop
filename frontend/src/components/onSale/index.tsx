import React from 'react'
import { RiDiscountPercentFill } from 'react-icons/ri'

export const OnSale: React.FC = () => {
  return (
    <div className='mt-5'>
      <h2 className="text-3xl flex items-center gap-2 font-bold text-white"><RiDiscountPercentFill  className='text-red-500'/>On Sale</h2>
    </div>
  )
}
