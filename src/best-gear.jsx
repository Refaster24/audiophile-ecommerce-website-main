import deskTop from './assets/shared/desktop/image-best-gear.jpg'
import tablet from './assets/shared/tablet/image-best-gear.jpg'
import mobile from './assets/shared/mobile/image-best-gear.jpg'
import {useState ,useEffect} from 'react'

export default function BestGear(){

    const [windowWidth,setWindowWidth] =useState(window.innerWidth)
  
    function rotate(){
      setWindowWidth(window.innerWidth)
    }
  
    useEffect(()=>{
      window.addEventListener('resize',rotate)},[])

    let image = deskTop
    if(windowWidth <= 1024){
        image = tablet;
    }
    if(windowWidth <= 700){
        image = mobile
    }

    return(
<section className="px-8 py-8 flex flex-row-reverse items-center justify-between flex-wrap max-lg:justify-center">
  <img src={image} alt="best gear image" className="w-[33em] rounded-lg max-lg:w-full max-lg:h-[25em]"/>
  <div className="w-[40%] max-lg:w-full max-lg:text-center max-lg:mt-16">
    <h2 className="text-4xl text-[#191919] mb-12 ">BRINGING YOU THE <span className="text-[#d87d4a]">BEST</span> AUDIO GEAR</h2>
    <p className="opacity-50 ">
        Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment
    </p>
  </div>
</section>
    )
}