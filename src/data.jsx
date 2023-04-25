import markOne from './assets/cart/image-xx99-mark-one-headphones.jpg'
import markTwo from './assets/cart/image-xx99-mark-two-headphones.jpg'
import xx59 from './assets/cart/image-xx59-headphones.jpg'
import zx7 from './assets/cart/image-zx7-speaker.jpg'
import zx9 from './assets/cart/image-zx9-speaker.jpg'
import yx1 from './assets/cart/image-yx1-earphones.jpg'


const data ={
    headphones:{
        markOne:{
            id:1,
            storgeKey:'markOne',
            name:'XX99 MARK I',
            img:markOne,
            price:1.750,
            amount:1
        },
        markTwo:{
            id:2,
            storgeKey:'markTwo',
            name:'XX99 MARK II',
            img:markTwo,
            price:2.999,
            amount:1
        },
        xx59:{
            id:3,
            storgeKey:'xx59',
            name:'XX59',
            img:xx59,
            price:0.899,
            amount:1
        }
    },
    speakers:{
        zx7:{
            id:4,
            storgeKey:'zx7',
            name:'ZX7',
            img:zx7,
            price:3.500,
            amount:1
        },
        zx9:{
            id:5,
            storgeKey:'zx9',
            name:'ZX9',
            img:zx9,
            price:4.500,
            amount:1
        },
    },
    earphones:{
        yx1:{
            id:6,
            storgeKey:'yx1',
            name:'YX1',
            img:yx1,
            price:0.599,
            amount:1
        }
    }
}
export default data