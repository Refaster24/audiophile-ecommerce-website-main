import markTwo from '../assets/category-headphones/desktop/image-xx99-mark-two.jpg'

import markOne from '../assets/category-headphones/desktop/image-xx99-mark-one.jpg'

import xx59 from '../assets/category-headphones/desktop/image-xx59.jpg'

export default function Headphones(){
    return(
<>
        <div className='bg-[#191919] h-72 grid place-items-center'>
            <h1 className='text-6xl text-white'>HEADPHONES</h1>
        </div>
<section className='p-8 flex flex-col items-center max-sm:px-4'>
        <div className='flex justify-around gap-8 w-full mt-14 max-sm:flex-col'>
            <img src={markTwo} alt="markTwo" className="w-1/2 rounded-md max-lg:w-5/12 max-sm:w-full" />
            <div className="w-2/5 py-4 pl-8 space-y-4  flex flex-col justify-center rounded-md max-lg:w-7/12 max-sm:w-full max-sm:items-center max-sm:py-8 max-sm:text-center">
                <span className='tracking-[0.5em] text-[#d87d4a]'>NEW PRODUCT</span>
                <h2 className="text-[#191919] w-64 text-4xl">XX99 MARK II HEADPHONES</h2>
                <p className="text-gray-600">
                    The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
                </p>
                <a href="../headphones/markTwo.html" className='w-min'>
                    <button className= "text-white px-3 py-2 w-36 rounded-md bg-[#d87d4a] hover:text-[#d87d4a] hover:bg-white hover:border hover:border-[#d87d4a]">SEE PRODUCT</button>
                </a>
            </div>
        </div>

        <div className='flex flex-row-reverse justify-around gap-8 w-full mt-14 max-sm:flex-col'>
            <img src={markOne} alt="markOne" className="w-1/2 rounded-md max-lg:w-5/12 max-sm:w-full" />
            <div className="w-2/5 py-4 pl-8 space-y-4  flex flex-col justify-center rounded-md max-lg:w-7/12 max-sm:w-full max-sm:items-center max-sm:py-8 max-sm:text-center">
                <h2 className="text-[#191919] w-64 text-4xl">XX99 MARK I HEADPHONES</h2>
                <p className="text-gray-600">
                As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.
                </p>
                <a href="../headphones/markOne.html" className='w-min'>
                    <button className= "text-white px-3 py-2 w-36 rounded-md bg-[#d87d4a] hover:text-[#d87d4a] hover:bg-white hover:border hover:border-[#d87d4a]">SEE PRODUCT</button>
                </a>
            </div>
        </div>

        <div className='flex justify-around gap-8 w-full mt-14 max-sm:flex-col'>
            <img src={xx59} alt="" className="w-1/2 rounded-md max-lg:w-5/12 max-sm:w-full" />
            <div className="w-2/5 py-4 pl-8 space-y-4  flex flex-col justify-center rounded-md max-lg:w-7/12 max-sm:w-full max-sm:items-center max-sm:py-8 max-sm:text-center">
                <h2 className="text-[#191919] w-64 text-4xl">XX59 HEADPHONES</h2>
                <p className="text-gray-600">
                Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
                </p>
                <a href="../headphones/xx59.html" className='w-min'>
                    <button className= "text-white px-3 py-2 w-36 rounded-md bg-[#d87d4a] hover:text-[#d87d4a] hover:bg-white hover:border hover:border-[#d87d4a]">SEE PRODUCT</button>
                </a>
            </div>
        </div>
</section>
</>
    )
}