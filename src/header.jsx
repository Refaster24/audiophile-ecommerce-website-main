import React ,{useState ,useEffect} from 'react'
import logo from './assets/shared/desktop/logo.svg'
import iconCloseMenu from './assets/shared/tablet/icon-close-menu.svg'
import iconHamburger from './assets/shared/tablet/icon-hamburger.svg'
import Links from './links'

import Cart from './cart'

export default function Header(currentFile){    

  const [windowWidth,setWindowWidth] =useState(window.innerWidth)
  const [state,setState] = useState(true)

  function rotate(){
    setWindowWidth(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener('resize',rotate)
  },[])

  let navbar;
  let iconeMobileNavbar;
  let mobileNavbar;
  let pointerEvent = 'auto'
  if(windowWidth <= 1024){
    let icone = iconHamburger
    iconeMobileNavbar = <button className='absolute p-4 w-px h-px bg-no-reapet bg-cover bg-center focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-red-600 focus-visible:outline-offset-2' style={{backgroundImage: `url(${icone})`}} onClick={()=>setState(!state)}></button>
    if (state === false){
      icone = iconCloseMenu
      iconeMobileNavbar = <button className='absolute p-4 w-px h-px bg-no-reapet bg-contain focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-red-600 focus-visible:outline-offset-2' style={{backgroundImage: `url(${icone})`}} onClick={()=>setState(!state)}></button>
      mobileNavbar = (
      <>
      <div id='nav' className='absolute z-50 w-full rounded-md bg-[#191919]'>
      <Links/>
      </div>
      </>
      )
      pointerEvent = 'none'
  }} else{
    const currentFileColor = currentFile
    let home = '#fff'
    let headphones = '#fff'
    let speakrs = '#fff'
    let earphones = '#fff'
    if(currentFileColor.currentFile === 'home'){
      home = '#d87d4a'
    }
    if(currentFileColor.currentFile === 'headphones'){
      headphones = '#d87d4a'
    }
    if(currentFileColor.currentFile === 'speakers'){
      speakrs = '#d87d4a'
    }
    if(currentFileColor.currentFile === 'earphones'){
      earphones = '#d87d4a'
    }
    navbar = (
      <>
        <li style={{color:home}} className="mr-9 transition-colors hover:!text-[#d87d4a]"><a className=' focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-red-600 focus-visible:outline-offset-2' href="../index.html">HOME</a></li>
        <li style={{color:headphones}} className="mr-9 transition-colors hover:!text-[#d87d4a]"><a className='focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-red-600 focus-visible:outline-offset-2' href="../headphones.html">HEADPHONES</a></li>
        <li style={{color:speakrs}} className="mr-9 transition-colors hover:!text-[#d87d4a]"><a className='focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-red-600 focus-visible:outline-offset-2' href="../speakers.html">SPEAKERS</a></li>
        <li style={{color:earphones}} className="transition-colors hover:!text-[#d87d4a]"><a className='focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-red-600 focus-visible:outline-offset-2' href="../earphones.html">EARPHONES</a></li>
      </>
    )
  }


  


  return (
<>
<header className="bg-[rgb(25,25,25)] px-8 py-8">
<div className='flex items-center justify-between pb-4 border-b border-gray-700'>
        
  <a href="#main" className="block bg-orange-500 text-xl text-white text-center w-[11em] p-5 outline-4 outline-dashed outline-red-600 outline-offset-2 absolute top-[10%] left-[-80%] focus-visible:!left-[5%] focus:!left-[5%]">
      SKIP TO CONTENT
  </a>
  {iconeMobileNavbar}
  <a className="relative  left-8 max-lg:left-12 focus:outline-2 focus:outline-dashed focus:outline-red-600 focus:outline-offset-2" href="../index.html"><img src={logo} alt="logo"/></a>
  <nav className=''>
      <ul className="flex  text-white">
          {navbar}
      </ul>
  </nav>
  <Cart/>
</div>
</header>
{mobileNavbar}
</>
)
}
