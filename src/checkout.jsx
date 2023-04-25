import React ,{ useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './checkout.css'
import Header from './header'
import Footer from './footer'


// to avoid re-render the page
function Aisde(){
    const [count,setCount] = useState(false)
    
    const localStorage = window.localStorage
    let storge =[]
    let totalPrice=0

    if(localStorage.length != 0){

        const price=[]

        for(const i of Object.values(localStorage)){
            storge.push(JSON.parse(i))
        }
        
        for(let i=0;i<storge.length;i++){
            price.push(storge[i].price * storge[i].amount)
        }

        totalPrice = Math.floor(price.reduce((x, y) => x + y) * 1000)
    }

    let noItem;

    if(localStorage.length === 0){
        noItem = <div className="noItems">No Items in cart</div>
    }

    let grandTotal = totalPrice + 50

    if (totalPrice == undefined){
        grandTotal = 0
    }

    // to re-render with the new data

    const event = ()=>{
        window.addEventListener('click',(e)=>{
            const minus = document.getElementById('minus')
            const plus = document.getElementById('plus')
            const remove = document.getElementById('remove')
            if (e.target === minus || e.target === plus || e.target === remove) {
                setCount(!count);
            }
        })
    }
    useEffect(()=>{event();})

    return(
        <aside>
        <div className='aside'>
        <h2 className="summary">SUMMARY</h2>
            {noItem}
            {
                storge.map(par=>{
                    return (
                        <div className="item" key={par.id}>
                            <div>
                                <img src={par.img} alt={par.name} />
                                <div>
                                    <span className="name">{par.name}</span>
                                    <span>$ {par.price * par.amount * 1000}</span>
                                </div>
                            </div>
                            <span>x{par.amount}</span>
                        </div>
                    )
                })
            }
        <div>
            <div className='prices'>
                <div>
                <span>TOTAL</span>
                <span>$ {totalPrice}</span>
                </div>

                <div>
                <span>SHIPPING</span>
                <span>$ 50</span>
                </div>

                <div>
                <span>VAT (INCLUDED)</span>
                <span>$ 0</span>
                </div>
                <div>

                <span>GRAND TOTAL</span>
                <span>$ {grandTotal}</span>

                </div>
            </div>
        </div>
        <button onClick={()=>setCount(!count)} type='submit' className= "block text-white mt-3 px-3 py-2 w-full rounded-md bg-[#d87d4a] hover:text-[#d87d4a] hover:bg-white hover:border hover:border-[#d87d4a]">CONTINUE & PAY</button>
        </div>
    </aside>
    )
}

function Checkout(){
    const [state,setState] = useState(false)
    const [eMoneyState,seteMoneyState] = useState(false)

    function radio(e){
        const radio_1 = document.getElementById('radio-1')
        const radio_2 = document.getElementById('radio-2')
        if (e.target === radio_1) {
            radio_1.value = 'on'
            radio_2.value = 'off'
        }
        
        if (e.target === radio_2) {
            radio_2.value ='on'
            radio_1.value = 'off'
        }
        console.log(eMoneyState)
        setState(true)
    }

    const [valid,setValid] = useState(null)

    let gg ; 
    
    function handleSubmit(e){
        e.preventDefault()

        const name = document.getElementById('name')
        const email = document.getElementById('email')
        const phoneNumber = document.getElementById('phoneNumber')
        const address = document.getElementById('address')
        const zip = document.getElementById('zip')
        const city = document.getElementById('city')
        const country = document.getElementById('country')
        const label_1 = document.getElementById('label-1')
        const label_2 = document.getElementById('label-2')
        const eMoney = document.getElementById('eMoney')
        const pin = document.getElementById('pin')

        const nameSpan = document.getElementById('nameSpan')
        const emailSpan = document.getElementById('emailSpan')
        const phoneNumberSpan = document.getElementById('phoneNumberSpan')
        const addressSpan = document.getElementById('addressSpan')
        const zipSpan = document.getElementById('zipSpan')
        const citySpan = document.getElementById('citySpan')
        const countrySpan = document.getElementById('countrySpan')
        const radioSpan = document.getElementById('radioSpan')
        const eMoneySpan = document.getElementById('eMoneySpan')
        const pinSpan = document.getElementById('pinSpan')
        
        const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        
        
        // return to default
    
        const inputs = document.getElementsByTagName('input')
        
        for(let i=0;i<inputs.length;i++){
            inputs[i].style.borderColor='gray'
        }
        label_1.style.borderColor='gray'
        label_2.style.borderColor='gray'
    
        nameSpan.innerText = '';
        emailSpan.innerText = '';
        phoneNumberSpan.innerText = '';
        addressSpan.innerText = '';
        zipSpan.innerText = '';
        citySpan.innerText = '';
        countrySpan.innerText = '';
        radioSpan.innerText = '';
        eMoneySpan.innerText = '';
        pinSpan.innerText = '';

        setValid(prev=>{
            if(prev === true){
                return prev = false
            } else{
                return prev = true
            }
        })

        // // // //
        
        if(name.value.length === 0){
            nameSpan.innerText = 'Field cannot be empty';
            name.style.borderColor = 'rgb(220 38 38)'
            setValid(true)
        }
          
        if(!email.value.match(pattern) || email.value.length === 0){
            emailSpan.innerText = 'Look like this is not email'
            email.style.borderColor = 'rgb(220 38 38)'
            setValid(true)
        }
        
        if(phoneNumber.value.length <= 8){
            phoneNumberSpan.innerText = 'Field cannot be phone number'
            phoneNumber.style.borderColor = 'rgb(220 38 38)'
            setValid(true)
        }

        if(address.value.length === 0){
            addressSpan.innerText = 'Field cannot be empty'
            address.style.borderColor = 'rgb(220 38 38)'
            setValid(true)
        }

        if(zip.value.length === 0){
            zipSpan.innerText = 'Field cannot be empty'
            zip.style.borderColor = 'rgb(220 38 38)'
            setValid(true)
        }
        
        if(city.value.length === 0){
            citySpan.innerText = 'Field cannot be empty'
            city.style.borderColor = 'rgb(220 38 38)'
            setValid(true)
        }
        
        if(country.value.length === 0){
            countrySpan.innerText = 'Field cannot be empty'
            country.style.borderColor = 'rgb(220 38 38)'
            setValid(true)
        }

        if(state === false){
            radioSpan.innerText = 'Field cannot be empty'
            label_1.style.borderColor = 'rgb(220 38 38)'
            label_2.style.borderColor = 'rgb(220 38 38)'
            setValid(true)
        }
        
        if(eMoneyState === true && eMoney.value.length === 0){
            eMoneySpan.innerText = 'Field cannot be empty'
            eMoney.style.borderColor = 'rgb(220 38 38)'
            setValid(true)
        }

        if(eMoneyState === true && pin.value.length === 0){
            pinSpan.innerText = 'Field cannot be empty'
            pin.style.borderColor = 'rgb(220 38 38)'
            setValid(true)
        }

        
    }

    const localStorage = window.localStorage
    let storge =[]
    let totalPrice=0

    if(localStorage.length != 0){

        const price=[]

        for(const i of Object.values(localStorage)){
            storge.push(JSON.parse(i))
        }
        
        for(let i=0;i<storge.length;i++){
            price.push(storge[i].price * storge[i].amount)
        }

        totalPrice = Math.floor(price.reduce((x, y) => x + y) * 1000)
    }

    let grandTotal = totalPrice + 50

    if (valid === false) {
        gg = (
            <div className='absolute w-screen  h-[88em] bg-[#191919cc] top-0 right-0 z-50 grid justify-center items-start'>

<div className="bg-white w-[30em] mt-10 p-10 max-sm:w-[95%] max-sm:mx-[2.5%]">
    <h1 className="text-4xl font-bold mb-5">
        THANK YOU FOR ORDER
    </h1>
    <p className="text-gray-400">You will receive an email confirmation shortly.</p>
    <div className="flex flex-wrap my-6 max-md:flex-col">
        <div className='basis-[15em] max-md:basis-full'>
    {
    storge.map(par=>{
        return (
            <div className="item bg-slate-200 h-24 w-full  !my-0 px-4 rounded-tl-md rounded-bl-md  max-md:rounded-tr-md max-md:rounded-bl-none" key={par.id}>
                <div>
                    <img src={par.img} alt={par.name} />
                    <div>
                        <span className="name">{par.name}</span>
                        <span>$ {par.price * par.amount * 1000}</span>
                    </div>
                </div>
                <span>x{par.amount}</span>
            </div>
        )
    })
    }
        </div>
    <div className='bg-[#191919] rounded-br-md rounded-tr-md  basis-[10em] flex flex-col items-center justify-center max-md:w-full max-md:basis-24 max-md:rounded-bl-md max-md:rounded-tr-none'>
        <h2 className=' '>GRAND TOTAL</h2>
        <span className='text-gray-400 text-lg'>${grandTotal}</span>
    </div>
    </div>
    <a href="../index.html">
        <button onClick={()=>localStorage.clear()} className='block text-white mt-3 px-3 py-2 w-full rounded-md bg-[#d87d4a] hover:text-[#d87d4a] hover:bg-white hover:border hover:border-[#d87d4a]'>
            BACK TO HOME
        </button>
    </a>
</div>
            </div>
        ) 
        
    }
    
    return (
        <main>
        {gg}

    <section>

<form action="" method='get' onSubmit={handleSubmit}  >
    <div >

        <h1 >CHECKOUT</h1>
        <div  >

            <h2 >BILLING DETAILS</h2>

            <div  >

                <div  >
                    <span id="nameSpan" className='block text-end italic text-red-600 absolute right-0'></span>
                    <label htmlFor="name" name='name'  >Name</label>
                    <input placeholder='Hassan Salem' id='name' type="text"   />
                </div>

                <div  >
                    <span id="emailSpan" className='block text-end italic text-red-600 absolute right-0'></span>
                    <label htmlFor="email"  >Email Address</label>
                    <input placeholder='Example@gmail.com' id='email' type="text"   />
                </div>

                <div  >
                    <span id="phoneNumberSpan" className='block text-end italic text-red-600 absolute right-0'></span>
                    <label htmlFor="phoneNumber"  >Phone Number</label>
                    <input placeholder='00 1234567890' id='phoneNumber' type="text"   />
                </div>

            </div>
        </div>

        <div  >

            <h2  >SHIPPING INFO</h2>

            <div  >

                <div  >
                    <span id="addressSpan" className='block text-end italic text-red-600 absolute right-0'></span>
                    <label htmlFor="address"  >Your Address</label>
                    <input type="text" placeholder='1137 Willams Avenue' id='address'   />
                </div>

                <div  >
                    <span id="zipSpan" className='block text-end italic text-red-600 absolute right-0'></span>
                    <label htmlFor="zip"  >ZIP Code</label>
                    <input type="text" id='zip' placeholder='10001'   />
                </div>

                <div  >
                    <span id="citySpan" className='block text-end italic text-red-600 absolute right-0'></span>
                    <label htmlFor="city"  >City</label>
                    <input type="text" id='city' placeholder='Thebes'   />
                </div>

                <div  >
                    <span id="countrySpan" className='block text-end italic text-red-600 absolute right-0'></span>
                    <label htmlFor="country"  >Country</label>
                    <input type="text" id='country' placeholder='USA'   />
                </div>

            </div>
        </div>

        <div  >

            <h2  >PAYMENT DETAILS</h2>

            <div  >
                <h3  >Payment Method</h3>
                <div  >
                    <span id="radioSpan" className='block text-end italic text-red-600 absolute right-0 -top-12'></span>

                    <input type='radio' name='paymentMethod' id="radio-1" value='off'/>
                    <label id='label-1' onClick={()=>{seteMoneyState(true);radio(document.getElementById('radio-1'))}} htmlFor="radio-1"  >e-Money</label>

                    <input type="radio" name='paymentMethod' id="radio-2" value='off'/>
                    <label id='label-2' onClick={()=>{seteMoneyState(false);radio(document.getElementById('radio-2'))}} htmlFor="radio-2"  >Cash on Delivery</label>
                </div>

                <div>
                    <span id="eMoneySpan" className='block text-end italic text-red-600 absolute right-0'></span>
                    <label htmlFor="eMoney"  >e-Money Number</label>
                    <input type="text" id='eMoney' placeholder='2573753'   />
                </div>

                <div className="bg-zinc-50">
                    <span id="pinSpan" className='block text-end italic text-red-600 absolute right-0'></span>
                    <label htmlFor="pin"  >e-Money PIN</label>
                    <input type="text" id='pin' placeholder='9875'/>
                </div>

            </div>
        </div>

    </div>

    <Aisde/>

</form>
    </section>
</main>
    )
}



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <Header/>
    <Checkout/>
    <Footer/>
  </React.StrictMode>,
)