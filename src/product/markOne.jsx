import React ,{useState} from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import Header from '../header'
import Links from '../links'
import BestGear from '../best-gear'
import Footer from '../footer'
import data from '../data'


import markOne from '../assets/category-headphones/desktop/image-xx99-mark-one.jpg'

import gallery1 from '../assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg'
import gallery2 from '../assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg'
import gallery3 from '../assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg'

import markTwo from '../assets/category-headphones/desktop/image-xx99-mark-two.jpg'
import xx59 from '../assets/category-headphones/desktop/image-xx59.jpg'
import zx9 from '../assets/category-speakers/desktop/image-zx9.jpg'


function MarkOne(){
    
    const [count,setCount] = useState(1)
    let storge =[]
    let totalAmount;
    function bay(){
        data.headphones.markOne.amount = count
        const markOne =JSON.stringify(data.headphones.markOne)
        window.localStorage.setItem('markOne',markOne)

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
            <img src={markOne} alt="mark-one" className="w-1/2 rounded-md max-lg:w-5/12 max-sm:w-full" />
            <div className="w-2/5 py-4  space-y-4  flex flex-col justify-center rounded-md max-lg:w-7/12 max-sm:w-full max-sm:items-center max-sm:py-8 max-sm:text-center">
                <span className='tracking-[0.5em] text-[#d87d4a]'>NEW PRODUCT</span>
                <h2 className="text-[#191919] w-64 text-4xl font-bold">XX99 MARK I HEADPHONES</h2>
                <p className="text-gray-600">
                As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.
                </p>
                <span className="text-[#191919] text-xl font-bold">$1,750</span>
                <div className="flex gap-6 flex-wrap items-center">
                    <div className="inline-block bg-gray-200 my-2  text-center">
                        <button className="w-14 p-2 hover:text-[#d87d4a] hover:bg-[#d3d3d3]" onClick={minus}>-</button>
                        <span className="w-6 px-2">{count}</span>
                        <button className="w-14 p-2 hover:text-[#d87d4a] hover:bg-[#d3d3d3]" onClick={plus}>+</button>
                    </div>
                    <button id='button' onClick={bay} className= "block text-white px-3 py-2 w-36 rounded-md bg-[#d87d4a] hover:text-[#d87d4a] hover:bg-white hover:border hover:border-[#d87d4a]">SEE PRODUCT</button>
                </div>
            </div>
        </div>

    <div className="flex flex-wrap gap-24 px-8 my-6 max-sm:p-0">
        <div className="basis-[40em] max-sm:basis-full">
            <h3 className="text-2xl font-bold mb-4">FEATURES</h3>
            <p className="text-gray-500">
            As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.
            <br/>
            <br />
            From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.
            </p>
        </div>
        <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-4">IN THE BOX</h3>
            <ul className="text-xl text-gray-500">
                <li className="before:content-['1x'] before:text-[#d87d4a] before:font-bold before:pr-2">Headphone Unit</li>
                <li className="before:content-['2x'] before:text-[#d87d4a] before:font-bold before:pr-2">Replacement Earcups</li>
                <li className="before:content-['1x'] before:text-[#d87d4a] before:font-bold before:pr-2">User Manual</li>
                <li className="before:content-['1x'] before:text-[#d87d4a] before:font-bold before:pr-2">3.5mm 5m Audio Cable</li>
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
                <img src={markTwo} alt="XX99 MARK II"/>
                <h4 className="text-3xl font-bold">XX99 MARK II</h4>
                <a href="./markTwo.html"><button className= "block text-white px-3 py-2 w-36 rounded-md bg-[#d87d4a] hover:text-[#d87d4a] hover:bg-white hover:border hover:border-[#d87d4a]">SEE PRODUCT</button></a>
            </div>
            <div className="w-[20em] flex flex-col items-center space-y-8">
                <img src={xx59} alt="xx59"/>
                <h4 className="text-3xl font-bold">XX59</h4>
                <a href="./xx59.html"><button className= "block text-white px-3 py-2 w-36 rounded-md bg-[#d87d4a] hover:text-[#d87d4a] hover:bg-white hover:border hover:border-[#d87d4a]">SEE PRODUCT</button></a>
            </div>
            <div className="w-[20em] flex flex-col items-center space-y-8">
                <img src={zx9} alt="ZX9 SPEAKER"/>
                <h4 className="text-3xl font-bold">ZX9 SPEAKER</h4>
                <a href="../speakers/zx9.html"><button className= "block text-white px-3 py-2 w-36 rounded-md bg-[#d87d4a] hover:text-[#d87d4a] hover:bg-white hover:border hover:border-[#d87d4a]">SEE PRODUCT</button></a>
            </div>
        </div>
    </div>

</section>
</>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <Header currentFile='headphones'/>
    <main>
      <MarkOne/>
      <Links/>
      <BestGear/>
    </main>
    <Footer currentFile='headphones'/>
    </>
    ,
)