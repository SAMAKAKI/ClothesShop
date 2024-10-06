import React from 'react'
import { New, OnSale, Popular, PreviewCarousel } from '../../components'

export const Home: React.FC = () => {
  return (
    <div className='container mx-auto'>
      <PreviewCarousel />
      <New />
      <Popular />
      <OnSale />
    </div>
  )
}
