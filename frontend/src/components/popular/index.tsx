import React from 'react'
import { FaArrowTrendUp } from 'react-icons/fa6'

export const Popular: React.FC = () => {
  return (
    <div className='mt-5'>
      <h2 className="text-3xl flex items-center gap-2 font-bold text-white"><FaArrowTrendUp className='text-blue-500'/>Popular</h2>
    </div>
  )
}
