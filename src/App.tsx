import { useState } from 'react'
import './App.css'
import logo from './assets/images/logo.svg'
import cart from './assets/images/icon-cart.svg'
import avatar from './assets/images/image-avatar.png'
import image_product_1 from './assets/images/image-product-1.jpg'

import image_product_1_thumbnail from './assets/images/image-product-1-thumbnail.jpg'
import image_product_2_thumbnail from './assets/images/image-product-2-thumbnail.jpg'
import image_product_3_thumbnail from './assets/images/image-product-3-thumbnail.jpg'
import image_product_4_thumbnail from './assets/images/image-product-4-thumbnail.jpg'




function App() {

  return (
    <div className='px-30 font-display space-y-10'>
      <div className='p-5 flex justify-between border-b border-gray-200'>
        <div className='flex justify-start items-center gap-15'>
          <img src={logo} alt="Sneakers brand logo" />
          <div className='text-gray-500 flex gap-5'>
            <span>Collections</span>
            <span>Men</span>
            <span>Women</span>
            <span>About</span>
            <span>Contact</span>
          </div>
        </div>
        
        <div className='flex flex-row justify-center items-center gap-10'>
          <img className='w-[15%]' src={cart} alt="Shopping cart icon" />
          <img className='w-[30%]' src={avatar} alt="Avatar image" />
        </div>
      </div>
      

      <div className='flex justify-center items-center px-20'>
        <div className='flex flex-col gap-2'>
            <img className='rounded-xl' src={image_product_1} alt="" />
          <div className='flex justify-center items-center gap-5'>
            <div className="relative w-fit group hover:cursor-pointer">
              <img className='w-full rounded-xl' src={image_product_1_thumbnail} alt="" />
              <div
                className="rounded-xl absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity"
              ></div>
            </div>
            <div className="relative w-fit group hover:cursor-pointer">
              <img className='w-full rounded-xl' src={image_product_2_thumbnail} alt="" />
              <div
                className="rounded-xl absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity"
              ></div>
            </div>
            <div className="relative w-fit group hover:cursor-pointer">
              <img className='w-full rounded-xl' src={image_product_3_thumbnail} alt="" />
              <div
                className="rounded-xl absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity"
              ></div>
            </div>
            <div className="relative w-fit group hover:cursor-pointer">
              <img className='w-full rounded-xl' src={image_product_4_thumbnail} alt="" />
              <div
                className="rounded-xl absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity"
              ></div>
            </div>         
          </div>
        </div>
        <div>
          Sneaker Company

          Fall Limited Edition Sneakers

          These low-profile sneakers are your perfect casual wear companion. Featuring a 
          durable rubber outer sole, they’ll withstand everything the weather can offer.

          $125.00
          50%
          $250.00

          0
          Add to cart
        </div>
      </div>
    </div>
  )
}

export default App
