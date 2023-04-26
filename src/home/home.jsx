import { useState , useEffect } from 'react'

import desktop from '../assets/home/desktop/image-hero.jpg'
import tablet from '../assets/home/tablet/image-hero.jpg'
import mobile from '../assets/home/mobile/image-hero.jpg'

import ZX9 from '../assets/home/desktop/image-speaker-zx9.png'

import desktopZX7 from '../assets/home/desktop/image-speaker-zx7.jpg'
import tabletZX7 from '../assets/home/tablet/image-speaker-zx7.jpg'
import mobileZX7 from '../assets/home/mobile/image-speaker-zx7.jpg'

import YX1 from '../assets/home/desktop/image-earphones-yx1.jpg'

import svg from '../assets/home/desktop/pattern-circles.svg'
function NewProduct(){
  let backgroung = desktop

  const [windowWidth,setWindowWidth] =useState(window.innerWidth)
  
  function rotate(){
    setWindowWidth(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener('resize',rotate)},[])

  if(windowWidth <= 1024){
    backgroung = tablet
  }
  if(windowWidth <= 640){
    backgroung = mobile
  }


  return (
<section style={{backgroundImage:`url(${backgroung})`}} className="py-8 px-16 bg-[#191919]  bg-no-repeat bg-cover h-[40em] bg-bottom flex items-center max-lg:bg- max-lg:bg-center max-lg:bg-[length:39em] max-lg:justify-center max-sm:bg-cover max-sm:h-[49em] max-sm:bg-[center_-7em] ">
  <div className="w-1/3 max-lg:w-8/12 max-lg:text-center max-sm:w-full">

    <span className="tracking-[0.5em] text-gray-300">NEW PRODUCT</span>
    <h1 className="text-5xl text-white mt-2 mb-6  max-sm:text-4xl">XX99 MARK II HEADPHONES</h1>

    <p className="text-gray-300 text-xl mb-6">
    Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
    </p>
    <a href="./headphones/markTwo.html">
    <button className= "text-white px-4 py-2 rounded-md bg-[#d87d4a] hover:text-[#d87d4a] hover:bg-white">SEE PRODUCT</button>
    </a>
  </div>
</section>
  )
}

function Content(){

  let zx7 = desktopZX7

  const [windowWidth,setWindowWidth] =useState(window.innerWidth)
  const [state,setState] = useState(true)
  
  function rotate(){
    setWindowWidth(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener('resize',rotate)},[])

  if(windowWidth <= 1024){
    zx7 = tabletZX7
  }
  if(windowWidth <= 640){
    zx7 = mobileZX7
  }

  return (
<section className='p-8 flex flex-col items-center max-sm:px-4'>
  <div style={{backgroundImage:`url(${svg})`}} className="overflow-hidden bg-no-repeat bg-[length:60%] bg-left-top px-16 py-20 rounded-lg bg-[#d87d4a] flex justify-center items-center max-lg:flex-col max-lg:bg-top max-lg:bg-[length:42em] ">
    <img  src={ZX9} alt="ZX9" className=" relative z-10  bottom-[-90px] left-[-65px] w-[20em] max-lg:static max-lg:w-[13em] max-sm:w-[10em]" />
    <div className="space-y-8 pl-8  w-1/3 max-lg:w-full max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center max-lg:pl-0 max-lg:mt-16">
      <h2 className="text-7xl text-white max-md:text-5xl ">ZX9 SPEAKER</h2>
      <p className="text-gray-600 md:text-lg max-sm:text-sm">
      Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
      </p>
      <a href="./speakers/zx9.html">
      <button className= "text-white px-4 py-2 mt-4 rounded-md bg-[#191919] hover:text-[#d87d4a] hover:bg-white">SEE PRODUCT</button>
      </a>
    </div>
  </div>

  <div style={{backgroundImage:`url(${zx7})`}} className="bg-cover bg-no-repeat w-full h-80 flex flex-col justify-center pl-20 mt-14 space-y-6 rounded-lg max-md:bg-center max-sm:pl-0 max-sm:items-center">
    <h2 className="text-[#191919] text-5xl">ZX7 SPEAKER</h2>
    <a href="./speakers/zx7.html" className='w-min'>
    <button className= "text-[#191919] px-4 py-2 w-[10em] rounded-md bg-transparent border-2 border-[#191919] hover:bg-white">SEE PRODUCT</button>
    </a>
  </div>

  <div className="flex justify-between gap-8 w-full mt-14 max-sm:flex-col">
    <img src={YX1} alt="YX1" className="w-1/2 rounded-md max-lg:w-5/12 max-sm:w-full" />
    <div className="w-1/2 py-4  bg-gray-200 flex flex-col justify-center items-center rounded-md max-lg:w-7/12 max-sm:w-full max-sm:items-center max-sm:py-8">
      <h2 className="text-[#191919] text-5xl mb-8 max-lg:text-3xl">YX1 EARPHONES</h2>
      <a href="./earphones/yx1.html" className='w-min'>
        <button className= "text-[#191919] px-4 py-2 w-[10em] rounded-md bg-transparent border-2 border-[#191919] hover:bg-white">SEE PRODUCT</button>
      </a>
    </div>
  </div>
</section>
  )
}

export {NewProduct ,Content}