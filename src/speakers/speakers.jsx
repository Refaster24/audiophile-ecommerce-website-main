import zx7 from '../assets/category-speakers/desktop/image-zx7.jpg'
import zx9 from '../assets/category-speakers/desktop/image-zx9.jpg'

export default function Speakers(){
    return(
<>
        <div className='bg-[#191919] h-72 grid place-items-center'>
            <h1 className='text-6xl text-white'>SPEAKERS</h1>
        </div>
<section className='p-8 flex flex-col items-center max-sm:px-4'>
        <div className='flex justify-around gap-8 w-full mt-14 max-sm:flex-col'>
            <img src={zx9} alt="zx9" className="w-1/2 rounded-md max-lg:w-5/12 max-sm:w-full" />
            <div className="w-2/5 py-4 pl-8 space-y-4  flex flex-col justify-center rounded-md max-lg:w-7/12 max-sm:w-full max-sm:items-center max-sm:py-8 max-sm:text-center">
                <span className='tracking-[0.5em] text-[#d87d4a]'>NEW PRODUCT</span>
                <h2 className="text-[#191919] w-64 text-4xl">ZX9 SPEAKER</h2>
                <p className="text-gray-600">
                Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.
                </p>
                <a href="../speakers/zx9.html" className='w-min'>
                    <button className= "text-white px-3 py-2 w-36 rounded-md bg-[#d87d4a] hover:text-[#d87d4a] hover:bg-white hover:border hover:border-[#d87d4a]">SEE PRODUCT</button>
                </a>
            </div>
        </div>

        <div className='flex flex-row-reverse justify-around gap-8 w-full mt-14 max-sm:flex-col'>
            <img src={zx7} alt="zx7" className="w-1/2 rounded-md max-lg:w-5/12 max-sm:w-full" />
            <div className="w-2/5 py-4 pl-8 space-y-4  flex flex-col justify-center rounded-md max-lg:w-7/12 max-sm:w-full max-sm:items-center max-sm:py-8 max-sm:text-center">
                <h2 className="text-[#191919] w-64 text-4xl">ZX7 SPEAKER</h2>
                <p className="text-gray-600">
                Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.
                </p>
                <a href="../speakers/zx7.html" className='w-min'>
                    <button className= "text-white px-3 py-2 w-36 rounded-md bg-[#d87d4a] hover:text-[#d87d4a] hover:bg-white hover:border hover:border-[#d87d4a]">SEE PRODUCT</button>
                </a>
            </div>
        </div>
</section>
</>
    )
}