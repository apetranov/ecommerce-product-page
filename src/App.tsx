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
import icon_minus from './assets/images/icon-minus.svg'
import icon_plus from './assets/images/icon-plus.svg'


function App() {

  return (
    <div className='lg:px-30 font-display lg:space-y-3'>
      <div className='p-5 flex justify-between lg:border-b border-gray-200'>
        <div className='flex justify-start items-center gap-15'>
          <img className='w-full' src={logo} alt="Sneakers brand logo" />
          <div className='hidden text-gray-500 lg:flex gap-5'>
            <span>Collections</span>
            <span>Men</span>
            <span>Women</span>
            <span>About</span>
            <span>Contact</span>
          </div>
        </div>
        
        <div className='flex flex-row justify-center items-center gap-4 md:gap-10'>
          <img className='w-[30%] md:w-[15%]' src={cart} alt="Shopping cart icon" />
          <img className='w-[30%] md:w-[30%]' src={avatar} alt="Avatar image" />
        </div>
      </div>
      

      <div className='flex flex-col md:flex-row justify-center items-center xl:px-20 xl:py-5 gap-5 xl:gap-10'>
        <div className='flex justify-center items-center flex-col gap-2 w-full md:w-1/2'>
            <img className='md:rounded-xl w-screen md:w-[80%]' src={image_product_1} alt="" />
          <div className='md:flex hidden justify-center items-center gap-5'>
            <div className="relative group w-20 hover:cursor-pointer">
              <img className='w-full rounded-xl' src={image_product_1_thumbnail} alt="" />
              <div
                className="rounded-xl absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity"
              ></div>
            </div>
            <div className="relative w-20 group hover:cursor-pointer">
              <img className='w-full rounded-xl' src={image_product_2_thumbnail} alt="" />
              <div
                className="rounded-xl absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity"
              ></div>
            </div>
            <div className="relative w-20 group hover:cursor-pointer">
              <img className='w-full rounded-xl' src={image_product_3_thumbnail} alt="" />
              <div
                className="rounded-xl absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity"
              ></div>
            </div>
            <div className="relative w-20 group hover:cursor-pointer">
              <img className='w-full rounded-xl' src={image_product_4_thumbnail} alt="" />
              <div
                className="rounded-xl absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity"
              ></div>
            </div>         
          </div>
        </div>
       <div className='w-full md:w-1/2 flex flex-col justify-start items-start gap-5 lg:gap-10 p-5'>
          <div className='flex flex-col gap-4'>
            <h1 className='font-semibold text-gray-500 tracking-widest text-sm'>SNEAKER COMPANY</h1>
            <h1 className='font-bold text-3xl md:text-4xl xl:text-5xl'>Fall Limited Edition Sneakers</h1>
            </div>

          <div className='flex flex-col gap-5'>
            <p className='text-gray-500 text-sm lg:text-base'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
          durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

          <div className='flex md:flex-col flex-row justify-between gap-4'>
            <div className='flex gap-4'>
              <h1 className='font-bold text-2xl'>$125.00</h1>
              <h1 className='text-base px-2 rounded-lg py-1 bg-gray-800 text-white font-bold p-2'>50%</h1>
            </div>
            <s className='font-bold text-gray-500'>$250.00</s>
          </div>

          

          <div className='flex flex-col lg:flex-row gap-4 justify-start items-center'>
            <div className='flex justify-between items-center gap-8 bg-gray-100 p-3 rounded-lg w-full'>
              <img  src={icon_minus} alt="" />
              <span className='font-bold'>0</span>
              <img src={icon_plus} alt="" />
            </div>
          <div className='bg-orange-400 flex justify-center items-center w-full py-3 rounded-lg gap-2'>
            <img className='lg:w-[10%]' src={cart} alt="Shopping cart icon" />
            
            <span className='font-bold'>
                Add to cart
            </span>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
