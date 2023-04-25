import yx1 from '../assets/category-earphones/desktop/image-yx1-Earphones.jpg'

export default function Earphones(){
    return(
<>
        <div className='bg-[#191919] h-72 grid place-items-center'>
            <h1 className='text-6xl text-white'>EARPHONES</h1>
        </div>
<section className='p-8 flex flex-col items-center max-sm:px-4'>
        <div className='flex justify-around gap-8 w-full mt-14 max-sm:flex-col'>
            <img src={yx1} alt="yx1" className="w-1/2 rounded-md max-lg:w-5/12 max-sm:w-full" />
            <div className="w-2/5 py-4 pl-8 space-y-4  flex flex-col justify-center rounded-md max-lg:w-7/12 max-sm:w-full max-sm:items-center max-sm:py-8 max-sm:text-center">
                <span className='tracking-[0.5em] text-[#d87d4a]'>NEW PRODUCT</span>
                <h2 className="text-[#191919] w-64 text-4xl">YX1 WIRELESS EARPHONES</h2>
                <p className="text-gray-600">
                Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.
                </p>
                <a href="../earphones/yx1.html" className='w-min'>
                    <button className= "text-white px-3 py-2 w-36 rounded-md bg-[#d87d4a] hover:text-[#d87d4a] hover:bg-white hover:border hover:border-[#d87d4a]">SEE PRODUCT</button>
                </a>
            </div>
        </div>
</section>
</>
    )
}