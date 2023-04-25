import React ,{useState} from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import Header from '../header'
import Links from '../links'
import BestGear from '../best-gear'
import Footer from '../footer'
import data from '../data'


import zx9 from '../assets/category-speakers/desktop/image-zx9.jpg'

import gallery1 from '../assets/product-zx9-speaker/desktop/image-gallery-1.jpg'
import gallery2 from '../assets/product-zx9-speaker/desktop/image-gallery-2.jpg'
import gallery3 from '../assets/product-zx9-speaker/desktop/image-gallery-3.jpg'

import zx7 from '../assets/category-speakers/desktop/image-zx7.jpg'
import xx59 from '../assets/category-headphones/desktop/image-xx59.jpg'
import markOne from '../assets/category-headphones/desktop/image-xx99-mark-one.jpg'

function Zx9(){

    const [count,setCount] = useState(1)
    let storge =[]
    let totalAmount;
    function bay(){
        data.speakers.zx9.amount = count
        const zx9 =JSON.stringify(data.speakers.zx9)
        window.localStorage.setItem(data.speakers.zx9.storgeKey,zx9)

        let amount =[]
        for(const i of Object.values(localStorage)){
            storge.push(JSON.parse(i))
        }
        for(let i=0;i<storge.length;i++){
            amount.push(storge[i].amount)
        }
        totalAmount =amount.reduce((x, y) => x + y)
        document.getElementById('span').innerHTML = totalAmount
    }


    function minus(){
        setCount(count - 1)
        if(count === 1){
            setCount(count)
        }
    }

    function plus(){
        setCount(count + 1)
    }


    return(
<>
<section className="p-8 flex flex-col items-center max-sm:px-4">

<div className='flex justify-around gap-8 mt-14 max-sm:flex-col'>
            <img src={zx9} alt="zx9" className="w-1/2 rounded-md max-lg:w-5/12 max-sm:w-full" />
            <div className="w-2/5 py-4  space-y-4  flex flex-col justify-center rounded-md max-lg:w-7/12 max-sm:w-full max-sm:items-center max-sm:py-8 max-sm:text-center">
                <span className='tracking-[0.5em] text-[#d87d4a]'>NEW PRODUCT</span>
                <h2 className="text-[#191919] w-64 text-4xl font-bold">ZX9 SPEAKER</h2>
                <p className="text-gray-600">
                Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.
                </p>
                <span className="text-[#191919] text-xl font-bold">$4,500</span>
                <div className="flex gap-6 flex-wrap items-center">
                    <div className="inline-block bg-gray-200 my-2  text-center">
                        <button className="w-14 p-2 hover:text-[#d87d4a] hover:bg-[#d3d3d3]" onClick={minus}>-</button>
                        <span className="w-6 px-2">{count}</span>
                        <button className="w-14 p-2 hover:text-[#d87d4a] hover:bg-[#d3d3d3]" onClick={plus}>+</button>
                    </div>
                    <button onClick={bay} className= "block text-white px-3 py-2 w-36 rounded-md bg-[#d87d4a] hover:text-[#d87d4a] hover:bg-white hover:border hover:border-[#d87d4a]">SEE PRODUCT</button>
                </div>
            </div>
        </div>

    <div className="flex flex-wrap gap-24 px-8 my-6 max-sm:p-0">
        <div className="basis-[40em] max-sm:basis-full">
            <h3 className="text-2xl font-bold mb-4">FEATURES</h3>
            <p className="text-gray-500">
            Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).
            <br/>
            <br />
            Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.
            </p>
        </div>
        <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-4">IN THE BOX</h3>
            <ul className="text-xl text-gray-500">
                <li className="before:content-['2x'] before:text-[#d87d4a] before:font-bold before:pr-2">Speaker Unit</li>
                <li className="before:content-['2x'] before:text-[#d87d4a] before:font-bold before:pr-2">Speaker Cloth Panel</li>
                <li className="before:content-['1x'] before:text-[#d87d4a] before:font-bold before:pr-2">User Manual</li>
                <li className="before:content-['1x'] before:text-[#d87d4a] before:font-bold before:pr-2">3.5mm 10m Audio Cable</li>
                <li className="before:content-['1x'] before:text-[#d87d4a] before:font-bold before:pr-2">10m Optical Cable</li>
            </ul>
        </div>
    </div>

    <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full mt-8 px-8 max-sm:grid-rows-3 max-sm:grid-cols-1 max-sm:gap-0 max-sm:px-0">
        <img src={gallery1} alt="image-gallery-1" className="col-start-1 col-end-2 row-start-1 row-end-2 w-full h-full rounded-md max-sm:row-start-1 max-sm:row-end-2 max-sm:col-start-1 max-sm:pb-2" />
        <img src={gallery2} alt="image-gallery-2" className="col-start-1 col-end-2 row-start-2 row-end-2 w-full h-full rounded-md max-sm:row-start-2 max-sm:row-end-3 max-sm:col-start-1 max-sm:py-2" />
        <img src={gallery3} alt="image-gallery-3" className="col-start-2 col-end-3 row-start-1 row-end-3 w-full h-full rounded-md max-sm:row-start-3 max-sm:row-end-4 max-sm:col-start-1 max-sm:pt-2" />
    </div>

    <div className="text-center mt-20">
        <h3 className="text-[#191919] text-4xl font-bold">YOU MAY ALSO LIKE</h3>
        <div className="flex flex-wrap justify-center gap-16 mt-12">
            <div className="w-[20em] flex flex-col items-center space-y-8">
                <img src={markOne} alt="XX99 MARK I"/>
                <h4 className="text-3xl font-bold">XX99 MARK I</h4>
                <a href="../headphones/markOne.html"><button className= "block text-white px-3 py-2 w-36 rounded-md bg-[#d87d4a] hover:text-[#d87d4a] hover:bg-white hover:border hover:border-[#d87d4a]">SEE PRODUCT</button></a>
            </div>
            <div className="w-[20em] flex flex-col items-center space-y-8">
                <img src={xx59} alt="xx59"/>
                <h4 className="text-3xl font-bold">XX59</h4>
                <a href="../headphones/xx59.html"><button className= "block text-white px-3 py-2 w-36 rounded-md bg-[#d87d4a] hover:text-[#d87d4a] hover:bg-white hover:border hover:border-[#d87d4a]">SEE PRODUCT</button></a>
            </div>
            <div className="w-[20em] flex flex-col items-center space-y-8">
                <img src={zx7} alt="ZX7 SPEAKER"/>
                <h4 className="text-3xl font-bold">ZX7 SPEAKER</h4>
                <a href="./zx7.html"><button className= "block text-white px-3 py-2 w-36 rounded-md bg-[#d87d4a] hover:text-[#d87d4a] hover:bg-white hover:border hover:border-[#d87d4a]">SEE PRODUCT</button></a>
            </div>
        </div>
    </div>

</section>
</>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <Header currentFile='speakers'/>
    <main>
      <Zx9/>
      <Links/>
      <BestGear/>
    </main>
    <Footer currentFile='speakers'/>
  </React.StrictMode>,
)