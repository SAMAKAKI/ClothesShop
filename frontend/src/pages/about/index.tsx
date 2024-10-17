import React from 'react'

export const About: React.FC = () => {
  return (
    <div className='container mx-auto mt-[100px]'>
      <div className='flex flex-col md:flex-row justify-between items-center mb-16 gap-5'>
        <div className='flex-1'>
          <p className='text-white text-3xl font-semibold tracking-wider'>
            Welcome to <span className='text-pink-500'>SAMAKAKI</span> – your ultimate destination for discovering and purchasing the trendiest products from top brands. Whether you’re looking for stylish clothes, comfortable shoes, or the latest accessories, we bring you a curated selection of items to elevate your wardrobe.
          </p>
        </div>
        <div className='flex-1 mt-8 flex justify-center bg-gradient-to-tr from-red-600 to-blue-500 rounded-2xl p-[2px]'>
          <div className="bg-zinc-800/90 rounded-2xl w-full">
            <img src="/t-shirt.png" alt="Clothing products" className="w-full h-auto rounded-lg drop-shadow-lg" />
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row-reverse justify-between items-center mb-16 gap-5'>
        <div className='flex-1'>
          <p className='text-white text-3xl font-semibold tracking-wider'>
            At <span className='text-pink-500'>SAMAKAKI</span>, we believe that shopping should be seamless and enjoyable. That’s why we strive to offer a diverse range of products from the most popular companies, ensuring quality, style, and convenience are always within reach.
          </p>
        </div>
        <div className='flex-1 mt-8 md:mt-0 flex justify-center bg-gradient-to-tr from-red-600 to-blue-500 rounded-2xl p-[2px]'>
          <div className="bg-zinc-800/90 rounded-2xl w-full">
            <img src="/shoe-air.png" alt="Shoe products" className="w-full h-auto rounded-lg drop-shadow-lg" />
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-between items-center mb-16 gap-5'>
        <div className='flex-1'>
          <p className='text-white text-3xl font-semibold tracking-wider'>
            We are passionate about fashion and committed to providing excellent service. Whether you’re looking for casual wear, sports apparel, or elegant outfits for special occasions, <span className='text-pink-500'>SAMAKAKI</span> is your go-to platform.
          </p>
        </div>
        <div className='flex-1 mt-8 md:mt-0 flex justify-center bg-gradient-to-tr from-red-600 to-blue-500 rounded-2xl p-[2px]'>
          <div className="bg-zinc-800/90 rounded-2xl w-full">
            <img src="/fashion-product.png" alt="Fashion products" className="w-full h-auto rounded-lg drop-shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}
