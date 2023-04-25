import headphone from './assets/shared/desktop/image-headphones.png'
import speaker from './assets/shared/desktop/image-speakers.png'
import earphones from './assets/shared/desktop/image-earphones.png'

export default function Links(){
    return (
<ul className="px-8 py-8 flex justify-around items-center mt-[15vw] max-md:flex-col max-md:gap-12 max-md:mt-[8em]">
  <a href="..\headphones.html" className='w-1/4 max-md:w-full max-md:mb-20'>
    <li className="bg-zinc-300 rounded-md relative  px-16 flex flex-col justify-center items-center gap-4 pb-5 pt-16 text-gray-500 hover:text-[#d87d4a]">
      <img src={headphone} alt="headphone" className="absolute w-48 -top-2/3"/>
      <h2 className="text-xl text-[#191919]">HEADPHONES</h2>
      <span id='arrow' className="text-[12px]">SHOP</span>
    </li>
  </a>
  <a href="../speakers.html" className='w-1/4 max-md:w-full max-md:mb-20'>
    <li className="bg-zinc-300 rounded-md relative px-16 flex flex-col justify-center items-center gap-4 pb-5 pt-16 text-gray-500 hover:text-[#d87d4a]">
      <img src={speaker} alt="speaker" className="absolute w-48 -top-2/3"/>
      <h2 className="text-xl text-[#191919]">SPEAKERS</h2>
      <span id='arrow' className="text-[12px]">SHOP</span>
    </li>
  </a>
  <a href="../earphones.html" className='w-1/4 max-md:w-full max-md:mb-20'>
    <li className="bg-zinc-300 rounded-md relative  px-16 flex flex-col justify-center items-center gap-4 pb-5 pt-16 text-gray-500 hover:text-[#d87d4a]">
      <img src={earphones} alt="earphones" className="absolute w-48 -top-1/2"/>
      <h2 className="text-xl text-[#191919]">EARPHONES</h2>
      <span id='arrow' className="text-[12px]">SHOP</span>
    </li>
  </a>
</ul>
    )
}