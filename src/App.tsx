import { useState, useEffect } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import icon_delete from './assets/images/icon-delete.svg'

function App() {
  const [thumb, setThumb] = useState(1);
  const [amount, setAmount] = useState(0);
  const [openLightBox, setOpenLightBox] = useState(false);
  const [lightBoxThumb, setLightBoxThumb] = useState(thumb);
  const [showMobileNavbar, setShowMobileNavbar] = useState(true);
  const [openCart, setOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const incrementAmount = () => {
    setAmount(amount + 1);
  }

  useEffect(() => {
    if (cartItems) {
      setTotalPrice(cartItems * 125);
    }
  }, [cartItems])

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

  useEffect(() => {
    if (isMedium) {
      setShowMobileNavbar(false);
    }
  }, [isMedium]);


  return (
    <div className='lg:px-30 font-display lg:space-y-3'>
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
      />

      {showMobileNavbar && isMobile ? (
        <div className="fixed inset-0 z-50 flex">
          {/* Transparent Black Overlay */}
          <div
            onClick={() => setShowMobileNavbar(false)}
            className="absolute inset-0 bg-black/50"
          ></div>

          {/* Sliding Navbar */}
          <div
            className="relative z-50 h-full w-[60%] bg-white shadow-lg transform
                      transition-transform duration-300 ease-out translate-x-0"
          >
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-4">Menu</h2>
              <ul className="space-y-2">
                <li className="p-2 rounded hover:bg-gray-100">Collections</li>
                <li className="p-2 rounded hover:bg-gray-100">Men</li>
                <li className="p-2 rounded hover:bg-gray-100">Women</li>
                <li className="p-2 rounded hover:bg-gray-100">About</li>
                <li className="p-2 rounded hover:bg-gray-100">Contact</li>
              </ul>
            </div>
          </div>
        </div>
      ) : null}


      
      {openLightBox && isMedium ? <div className="fixed inset-0 bg-black/50 z-90 h-screen w-screen flex flex-col justify-center items-center space-y-3">
        
          <div onClick={() => setOpenLightBox(false)} className='bg-white p-5 rounded-full hover:cursor-pointer hover:bg-gray-200 duration-300 ease-in-out'>
            <img  src={icon_close} alt="" />
          </div>

          <div className='overflow-hidden relative flex justify-center items-center md:w-[40%] lg:w-[30%]'>
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
            
            <div onClick={() => setLightBoxThumb(1)} className={`relative w-15 xl:w-18 hover:cursor-pointer ${lightBoxThumb === 1 ? `outline-3 rounded-xl outline-orange-600` 
              : ``}`}>
              <img className='w-full rounded-xl' src={image_product_1_thumbnail} alt="" />
              <div
                className={`rounded-xl absolute inset-0 bg-white/50 opacity-0 ${lightBoxThumb === 1 ? `opacity-100` : `group-hover:opacity-100` } transition-opacity`}
              ></div>
            </div>
            <div onClick={() => setLightBoxThumb(2)} className={`relative w-15 xl:w-18 group hover:cursor-pointer ${lightBoxThumb === 2 ? `outline-3 rounded-xl outline-orange-600` 
              : ``}`}>
              <img className='w-full rounded-xl' src={image_product_2_thumbnail} alt="" />
              <div
                className={`rounded-xl absolute inset-0 bg-white/50 opacity-0 ${lightBoxThumb === 2 ? `opacity-100` : `group-hover:opacity-100` } transition-opacity`}
              ></div>
            </div>
            <div onClick={() => setLightBoxThumb(3)} className={`relative w-15 xl:w-18 group hover:cursor-pointer ${lightBoxThumb === 3 ? `outline-3 rounded-xl outline-orange-600` 
              : ``}`}>
              <img className='w-full rounded-xl' src={image_product_3_thumbnail} alt="" />
              <div
                className={`rounded-xl absolute inset-0 bg-white/50 opacity-0 ${lightBoxThumb === 3 ? `opacity-100` : `group-hover:opacity-100` } transition-opacity`}
              ></div>
            </div>
            <div onClick={() => setLightBoxThumb(4)} className={`relative w-15 xl:w-18 group hover:cursor-pointer ${lightBoxThumb === 4 ? `outline-3 rounded-xl outline-orange-600` 
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
          <div className='flex flex-row justify-center gap-5 items-center'>
            <img onClick={() => setShowMobileNavbar(!showMobileNavbar)} className='flex md:hidden' src={icon_menu} alt="Hamburger menu icon" />
            <img className='w-full' src={logo} alt="Sneakers brand logo" />
          </div>
          <div className='hidden text-gray-500 md:flex gap-5'>
            <span className='hover:underline duration-300 ease-in-out hover:cursor-pointer underline-offset-8 decoration-orange-400 decoration-3 hover:text-black'>Collections</span>
            <span className='hover:underline duration-300 ease-in-out hover:cursor-pointer underline-offset-8 decoration-orange-400 decoration-3 hover:text-black'>Men</span>
            <span className='hover:underline duration-300 ease-in-out hover:cursor-pointer underline-offset-8 decoration-orange-400 decoration-3 hover:text-black'>Women</span>
            <span className='hover:underline duration-300 ease-in-out hover:cursor-pointer underline-offset-8 decoration-orange-400 decoration-3 hover:text-black'>About</span>
            <span className='hover:underline duration-300 ease-in-out hover:cursor-pointer underline-offset-8 decoration-orange-400 decoration-3 hover:text-black'>Contact</span>
          </div>
        </div>
        
        <div className='flex flex-row justify-end md:justify-center items-center gap-3 md:gap-10'>
          <img onClick={() => setOpenCart(!openCart)} className="hover:cursor-pointer w-[20%] md:w-[15%]"  src={cart} alt="Shopping cart icon" />
          <img className='hover:cursor-pointer w-[20%] md:w-[30%]' src={avatar} alt="Avatar image" />
        </div>
      </div>
      
      {openCart && isMedium && (
  <div
    className="fixed inset-0 z-40"
    onClick={() => setOpenCart(false)} // closes when clicking outside
  >
    <div
      className="absolute top-25 right-10 mt-2 w-[70%] md:[50%] lg:w-[40%] xl:w-[30%] bg-white rounded-xl shadow-2xl  z-100 p-5"
      onClick={(e) => e.stopPropagation()} // clicking inside DOES NOT close
    >
      <p className="font-semibold">Cart</p>
      {cartItems ? (
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="flex justify-center items-center gap-6">
            <img className="w-[20%]" src={image_product_1} alt="" />
            <div className="flex flex-col gap-2">
              <span className="text-gray-500">Fall limited edition sneakers</span>
              <div className="flex gap-3">
                <span className="text-gray-500">$125.00 x {cartItems}</span>
                <h1 className="font-bold">${totalPrice}.00</h1>
              </div>
            </div>
            <img
              onClick={() => setCartItems(0)}
              className="w-[3%] lg:w-[5%] hover:cursor-pointer"
              src={icon_delete}
              alt=""
            />
          </div>
          <div
            onClick={() => {
              setCartItems(0);
              toast("✅ Order successful");
              setAmount(0);
            }}
            className="bg-orange-400 flex justify-center items-center w-full py-3 rounded-lg gap-2 hover:bg-orange-300 hover:cursor-pointer duration-300 ease-in-out"
          >
            <span className="font-bold">Checkout</span>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-sm mt-1">Cart is empty.</p>
      )}
    </div>
  </div>
)}


  {openCart && isMobile && (
    <div
      className="
        fixed inset-0 
        flex justify-center items-center
        z-100"
      onClick={() => setOpenCart(false)} // close when clicking backdrop
    >
      {/* STOP CLICK FROM CLOSING CART */}
      <div
        className="
          bg-white 
          w-[90%] 
          rounded-xl 
          shadow-2xl 
          p-5
          flex flex-col justify-center items-center
        "
        onClick={(e) => e.stopPropagation()} // prevents outside click from triggering
      >
        <p className="font-semibold mb-3">Cart</p>

        {cartItems ? (
          <div className="flex flex-col justify-center items-center gap-4">

            <div className="flex justify-center items-center gap-5">
              <img className="w-[20%]" src={image_product_1} alt="" />
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm">
                  Fall limited edition sneakers
                </span>

                <div className="flex gap-3 text-sm">
                  <span className="text-gray-500">
                    $125.00 x {cartItems}
                  </span>
                  <span className="font-bold">
                    ${totalPrice}.00
                  </span>
                </div>
              </div>

              <img 
                onClick={() => setCartItems(0)} 
                className="w-[4%] hover:cursor-pointer" 
                src={icon_delete} 
                alt="" 
              />
            </div>

            <button
              onClick={() => {
                setCartItems(0);
                toast("✅ Order successful");
                setAmount(0);
              }}
              className="
                bg-orange-400 
                text-white 
                w-full 
                py-3 
                rounded-lg 
                font-bold 
                hover:bg-orange-300
                hover:cursor-pointer
                duration-300
              "
            >
              Checkout
            </button>

          </div>
        ) : (
          <p className="text-gray-500 text-sm">Cart is empty.</p>
        )}
      </div>
    </div>
  )}

      <div className='flex flex-col md:flex-row md:h-screen 2xl:h-full md:p-5 justify-center items-center xl:px-20 xl:py-5 gap-5 xl:gap-10'>
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
  
          <div className='md:flex hidden justify-center items-center gap-4 lg:gap-5'>
            
            <div onClick={() => setThumb(1)} className={`relative group w-15 xl:w-18 hover:cursor-pointer ${thumb === 1 ? `outline-3 rounded-xl outline-orange-600` 
              : ``}`}>
              <img className='w-full rounded-xl' src={image_product_1_thumbnail} alt="" />
              <div
                className={`rounded-xl absolute inset-0 bg-white/50 opacity-0 ${thumb === 1 ? `opacity-100` : `group-hover:opacity-100` } transition-opacity`}
              ></div>
            </div>
            <div onClick={() => setThumb(2)} className={`relative w-15 xl:w-18 group hover:cursor-pointer ${thumb === 2 ? `outline-3 rounded-xl outline-orange-600` 
              : ``}`}>
              <img className='w-full rounded-xl' src={image_product_2_thumbnail} alt="" />
              <div
                className={`rounded-xl absolute inset-0 bg-white/50 opacity-0 ${thumb === 2 ? `opacity-100` : `group-hover:opacity-100` } transition-opacity`}
              ></div>
            </div>
            <div onClick={() => setThumb(3)} className={`relative w-15 xl:w-18 group hover:cursor-pointer ${thumb === 3 ? `outline-3 rounded-xl outline-orange-600` 
              : ``}`}>
              <img className='w-full rounded-xl' src={image_product_3_thumbnail} alt="" />
              <div
                className={`rounded-xl absolute inset-0 bg-white/50 opacity-0 ${thumb === 3 ? `opacity-100` : `group-hover:opacity-100` } transition-opacity`}
              ></div>
            </div>
            <div onClick={() => setThumb(4)} className={`relative w-15 xl:w-18 group hover:cursor-pointer ${thumb === 4 ? `outline-3 rounded-xl outline-orange-600` 
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
            <p className='text-gray-500 md:text-xs lg:text-sm xl:text-base'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
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
          <div onClick={() => {
            setCartItems(amount);
            toast(`${amount} item/s added to cart`)
          }} className='bg-orange-400 flex justify-center items-center w-full py-3 rounded-lg gap-2 hover:bg-orange-300 hover:cursor-pointer duration-300 ease-in-out'>
            <img className='lg:w-[10%]' src={cart} alt="Shopping cart icon" />
            
            <span  className='font-bold'>
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
