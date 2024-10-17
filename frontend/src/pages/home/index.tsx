import React from 'react'
import { New, OnSale, Popular, PreviewCarousel } from '../../components'

export const Home: React.FC = () => {
  return (
    <div className='container mx-auto'>
      <PreviewCarousel />
      <div className="mb-10">  
        <New />
        <div className="bg-gradient-to-tr from-red-600 to-blue-500 h-0.5 w-[80%] mx-auto my-10"></div>
        <Popular />
        <div className="bg-gradient-to-tr from-red-600 to-blue-500 h-0.5 w-[80%] mx-auto my-10"></div>
        <OnSale />
      </div>
    </div>
  )
}
