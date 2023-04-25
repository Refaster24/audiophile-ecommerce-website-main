import { useEffect, useState } from 'react'
import iconeCart from './assets/shared/desktop/icon-cart.svg'
import empty from './assets/cart/empty-cart.png'


export default function Cart(){
    
    const [count,setCount] = useState(false)
    
    const localStorage = window.localStorage
    let storge =[]
    let totalAmount;
    let totalPrice;

    if(localStorage.length != 0){

        const amount =[]
        const price=[]

        for(const i of Object.values(localStorage)){
            storge.push(JSON.parse(i))
        }
        for(let i=0;i<storge.length;i++){
            amount.push(storge[i].amount)
        }
        for(let i=0;i<storge.length;i++){
            price.push(storge[i].price * storge[i].amount)
        }

        totalAmount =amount.reduce((x, y) => x + y)
        totalPrice = Math.floor(price.reduce((x, y) => x + y) * 1000)
    }

    const [inCart,setInCart] = useState(false)

    let cart ='hidden'
    let cart_1 = 'hidden'
    let cart_2 = 'hidden'

    if(inCart && localStorage.length === 0){
        cart = 'visible'
        cart_1 = 'visible'
    } 

    
    if(inCart && localStorage.length != 0){
        cart='visible'
        cart_2 = 'visible'
    }

    const event = ()=>{
        window.addEventListener('click',(e)=>{
            const cart = document.querySelectorAll('#cart *')
            const icone = document.getElementById('icone')
            const elements=[]
            if(e.target === cart){
                setInCart(false)
            }
            cart.forEach((e)=>elements.push(e))
            for(let i=0;i<cart.length;i++){
                if(!elements.includes(e.target) && e.target != icone){
                    setInCart(false)
                }
            }
        })
    }
    useEffect(()=>{event();})

    return(
        <>

        <button id='icone' onClick={()=>{setInCart(!inCart)}} style={{backgroundImage: `url(${iconeCart})`}}  className=' relative z-20 right-8 p-4 w-px h-px bg-no-repeat bg-contain focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-red-600 focus-visible:outline-offset-2 max-lg:right-0'>
            <span id='span' className="text-md text-white absolute -top-3 -right-3 bg-[#d87d4a] block w-5 rounded-3xl">{totalAmount}</span>
        </button>

        <div id='cart' style={{visibility :`${cart}`}} className='absolute w-screen  h-[88em] bg-[#191919cc] top-0 right-0 z-10'>
            
            <div id='emptyCart' style={{visibility :`${cart_1}`}} className='flex flex-col items-center py-4 gap-4 absolute rounded-md border-2 border-solid border-[#191919] top-32 right-[10%] w-72 bg-white'>
                <p className="text-gray-400 text-2xl">Your cart is empty</p>
                <img src={empty} alt="empty cart" className='w-32'/>
            </div>

<div id='unemptyCart' style={{visibility :`${cart_2}`}} className='flex flex-col items-center py-4 gap-4 absolute rounded-md border-2 border-solid border-[#191919] top-32 right-[10%] w-80 bg-white'>
    <h5 className="relative right-24 mr-4">CART ({totalAmount})</h5>
    <button id='remove' onClick={()=>{localStorage.clear();setCount(!count)}} className="absolute right-4 text-gray-400 underline">
        REMOVE ALL
    </button>
    <div id='productDiv'>
        {storge.map(par=> {
            return(
            <div key={par.id} className="flex items-center justify-between my-3">
                <div className="flex items-center mr-5">
                <img  src={par.img} alt="product" className="w-20 rounded-md" />
                <div className="ml-4 text-md flex flex-col justify-evenly">
                    <span className="text-[#191919]">{par.name}</span>
                    <span className="text-gray-400">$ {Math.floor(par.price * 1000)}</span>
                </div>
                </div>
<div className="inline-block bg-gray-200 h-10 w-18 text-center">
    <button id='minus' className="p-2 hover:text-[#d87d4a] hover:bg-[#d3d3d3]" 
        onClick={()=>{
                    par.amount--
                    const product =JSON.stringify(par)
                    localStorage.setItem(par.storgeKey,product)
                    setCount(!count)
                    if(par.amount === 0){
                        localStorage.removeItem(par.storgeKey,product)
                    }
                    }}
                    >-</button>

    <span className="px-2">{par.amount}</span>

    <button id='plus' className="p-2 hover:text-[#d87d4a] hover:bg-[#d3d3d3]" 
        onClick={()=>{
                    par.amount++
                    const product =JSON.stringify(par)
                    localStorage.setItem(par.storgeKey,product)
                    setCount(!count)
                    }}>+</button>
</div>
            </div>
            )
        })
        }
    </div>
<div className="flex space-x-40 text-lg">
    <span className="text-gray-400">TOTAL</span>
    <span>$ {totalPrice}</span>
</div>

<a href="../checkout.html">
    <button className= "text-xl text-white px-20 py-2 rounded-md bg-[#d87d4a] hover:text-[#d87d4a] hover:bg-white hover:border hover:border-[#d87d4a]">CHECKOUT</button>
</a>
</div>
        </div>
        
        </>
    )
}