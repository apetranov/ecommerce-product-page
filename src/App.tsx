import { useState } from 'react'
import './App.css'
import logo from './assets/images/logo.svg'
import cart from './assets/images/icon-cart.svg'
import avatar from './assets/images/image-avatar.png'
import image_product_1 from './assets/images/image-product-1.jpg'
import image_product_2 from './assets/images/image-product-2.jpg'
import image_product_3 from './assets/images/image-product-3.jpg'
import image_product_4 from './assets/images/image-product-4.jpg'
import image_product_1_thumbnail from './assets/images/image-product-1-thumbnail.jpg'
import image_product_2_thumbnail from './assets/images/image-product-2-thumbnail.jpg'
import image_product_3_thumbnail from './assets/images/image-product-3-thumbnail.jpg'
import image_product_4_thumbnail from './assets/images/image-product-4-thumbnail.jpg'
import icon_minus from './assets/images/icon-minus.svg'
import icon_plus from './assets/images/icon-plus.svg'
import icon_menu from './assets/images/icon-menu.svg'
import icon_close from './assets/images/icon-close.svg'
import useScreenWidth from "./useScreenWidth";
import ImageWithArrows from './ImageWithArrows'

function App() {
  const [thumb, setThumb] = useState(1);
  const [amount, setAmount] = useState(0);
  const [openLightBox, setOpenLightBox] = useState(false);
  const [lightBoxThumb, setLightBoxThumb] = useState(thumb);

  const incrementAmount = () => {
    setAmount(amount + 1);
  }

  const decrementAmount = () => {
    if (amount === 0) {
      alert("Product amount cannot be less than 0.");
      setAmount(0);
      return;
    }
    setAmount(amount - 1);
  }

  const width = useScreenWidth();

  const isMobile = width < 768;                   // mobile breakpoint
  const isMedium = width >= 768;  // medium breakpoint

  const images = [
    image_product_1,
    image_product_2,
    image_product_3,
    image_product_4,
  ];

  const currentImage = images[thumb - 1];  // thumb is 1–4
  const total = images.length;

  const currentLightboxImage = images[lightBoxThumb - 1];


  return (
    <div className='lg:px-30 font-display lg:space-y-3'>
      {openLightBox && isMedium ? <div className="fixed inset-0 bg-black/60 z-90 h-screen w-screen flex flex-col justify-center items-center space-y-3">
        
          <div onClick={() => setOpenLightBox(false)} className='bg-white p-5 rounded-full hover:cursor-pointer hover:bg-gray-200 duration-300 ease-in-out'>
            <img  src={icon_close} alt="" />
          </div>

          <div className='overflow-hidden relative flex justify-center items-center w-[30%]'>
            {lightBoxThumb === 1 ? <img className='md:rounded-xl w-full' src={image_product_1} alt="" /> 
            : lightBoxThumb === 2 ? <img className='md:rounded-xl  w-full' src={image_product_2} alt="" /> :
            lightBoxThumb === 3 ? <img className='md:rounded-xl w-full' src={image_product_3} alt="" />
            : <img className='md:rounded-xl w-full' src={image_product_4} alt="" />}

            <div className='absolute inset-0 flex items-center justify-between p-4'>
              <button
                onClick={() => setLightBoxThumb(lightBoxThumb === 1 ? 4 : lightBoxThumb - 1)}
                className='bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition hover:cursor-pointer'
              >
                ‹
              </button>
              <button
                onClick={() => setLightBoxThumb(lightBoxThumb === 4 ? 1 : lightBoxThumb + 1)}
                className='bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition hover:cursor-pointer'
              >
                ›
              </button>
            </div>
          </div>


        <div className='md:flex hidden justify-center items-center gap-5'>
            
            <div onClick={() => setLightBoxThumb(1)} className={`relative group w-20 hover:cursor-pointer ${lightBoxThumb === 1 ? `outline-3 rounded-xl outline-orange-600` 
              : ``}`}>
              <img className='w-full rounded-xl' src={image_product_1_thumbnail} alt="" />
              <div
                className={`rounded-xl absolute inset-0 bg-white/50 opacity-0 ${lightBoxThumb === 1 ? `opacity-100` : `group-hover:opacity-100` } transition-opacity`}
              ></div>
            </div>
            <div onClick={() => setLightBoxThumb(2)} className={`relative w-20 group hover:cursor-pointer ${lightBoxThumb === 2 ? `outline-3 rounded-xl outline-orange-600` 
              : ``}`}>
              <img className='w-full rounded-xl' src={image_product_2_thumbnail} alt="" />
              <div
                className={`rounded-xl absolute inset-0 bg-white/50 opacity-0 ${lightBoxThumb === 2 ? `opacity-100` : `group-hover:opacity-100` } transition-opacity`}
              ></div>
            </div>
            <div onClick={() => setLightBoxThumb(3)} className={`relative w-20 group hover:cursor-pointer ${lightBoxThumb === 3 ? `outline-3 rounded-xl outline-orange-600` 
              : ``}`}>
              <img className='w-full rounded-xl' src={image_product_3_thumbnail} alt="" />
              <div
                className={`rounded-xl absolute inset-0 bg-white/50 opacity-0 ${lightBoxThumb === 3 ? `opacity-100` : `group-hover:opacity-100` } transition-opacity`}
              ></div>
            </div>
            <div onClick={() => setLightBoxThumb(4)} className={`relative w-20 group hover:cursor-pointer ${lightBoxThumb === 4 ? `outline-3 rounded-xl outline-orange-600` 
              : ``}`}>
              <img className='w-full rounded-xl' src={image_product_4_thumbnail} alt="" />
              <div
                className={`rounded-xl absolute inset-0 bg-white/50 opacity-0 ${lightBoxThumb === 4 ? `opacity-100` : `group-hover:opacity-100` } transition-opacity`}
              ></div>
            </div>         
          </div>
      </div>: null}

      <div className='sticky top-0 p-5 bg-white z-50 flex justify-between lg:border-b border-gray-200'>
        <div className='flex justify-start items-center gap-15'>
          <div className='flex flex-row justify-center gap-3 items-center'>
            <img className='flex md:hidden' src={icon_menu} alt="Hamburger menu icon" />
            <img className='w-full' src={logo} alt="Sneakers brand logo" />
          </div>
          <div className='hidden text-gray-500 md:flex gap-5'>
            <span>Collections</span>
            <span>Men</span>
            <span>Women</span>
            <span>About</span>
            <span>Contact</span>
          </div>
        </div>
        
        <div className='flex flex-row justify-center items-center gap-4 md:gap-10'>
          <img className='w-[20%] md:w-[15%]' src={cart} alt="Shopping cart icon" />
          <img className='w-[30%] md:w-[30%]' src={avatar} alt="Avatar image" />
        </div>
      </div>
      

      <div className='flex flex-col md:flex-row md:h-screen xl:h-full md:p-5 justify-center items-center xl:px-20 xl:py-5 gap-5 xl:gap-10'>
        <div className='flex justify-center items-center flex-col gap-4 w-full md:w-1/2'>
             
              {
                isMobile 
                  ? (
                      <ImageWithArrows 
                        image={currentImage}
                        thumb={thumb}
                        setThumb={setThumb}
                        maxThumb={total}
                      />
                    )
                  : (
                      <img
                        onClick={() => {
                          if (isMedium) {
                            setOpenLightBox(true);
                            setLightBoxThumb(thumb);
                          }
                        }}
                        className="md:rounded-xl w-screen md:w-[80%] hover:cursor-pointer hover:shadow-orange-400 shadow-md duration-500 ease-in-out"
                        src={currentImage}
                        alt=""
                      />
                    )
              }
  
          <div className='md:flex hidden justify-center items-center gap-5'>
            
            <div onClick={() => setThumb(1)} className={`relative group w-20 hover:cursor-pointer ${thumb === 1 ? `outline-3 rounded-xl outline-orange-600` 
              : ``}`}>
              <img className='w-full rounded-xl' src={image_product_1_thumbnail} alt="" />
              <div
                className={`rounded-xl absolute inset-0 bg-white/50 opacity-0 ${thumb === 1 ? `opacity-100` : `group-hover:opacity-100` } transition-opacity`}
              ></div>
            </div>
            <div onClick={() => setThumb(2)} className={`relative w-20 group hover:cursor-pointer ${thumb === 2 ? `outline-3 rounded-xl outline-orange-600` 
              : ``}`}>
              <img className='w-full rounded-xl' src={image_product_2_thumbnail} alt="" />
              <div
                className={`rounded-xl absolute inset-0 bg-white/50 opacity-0 ${thumb === 2 ? `opacity-100` : `group-hover:opacity-100` } transition-opacity`}
              ></div>
            </div>
            <div onClick={() => setThumb(3)} className={`relative w-20 group hover:cursor-pointer ${thumb === 3 ? `outline-3 rounded-xl outline-orange-600` 
              : ``}`}>
              <img className='w-full rounded-xl' src={image_product_3_thumbnail} alt="" />
              <div
                className={`rounded-xl absolute inset-0 bg-white/50 opacity-0 ${thumb === 3 ? `opacity-100` : `group-hover:opacity-100` } transition-opacity`}
              ></div>
            </div>
            <div onClick={() => setThumb(4)} className={`relative w-20 group hover:cursor-pointer ${thumb === 4 ? `outline-3 rounded-xl outline-orange-600` 
              : ``}`}>
              <img className='w-full rounded-xl' src={image_product_4_thumbnail} alt="" />
              <div
                className={`rounded-xl absolute inset-0 bg-white/50 opacity-0 ${thumb === 4 ? `opacity-100` : `group-hover:opacity-100` } transition-opacity`}
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

          

          <div className='flex flex-col md:flex-row gap-4 justify-start items-center'>
            <div className='flex justify-between items-center gap-8 bg-gray-100 p-3 rounded-lg w-full'>
              <img className='hover:cursor-pointer' onClick={decrementAmount} src={icon_minus} alt="" />
              <span className='font-bold'>{amount}</span>
              <img className='hover:cursor-pointer' onClick={incrementAmount} src={icon_plus} alt="" />
            </div>
          <div className='bg-orange-400 flex justify-center items-center w-full py-3 rounded-lg gap-2 hover:bg-orange-300 hover:cursor-pointer duration-300 ease-in-out'>
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
