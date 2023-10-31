import { useEffect } from "react"
import { useState } from "react"
import Singleproduct from "./Singleproduct"

export default function Products() {
    const [products,setproducts] = useState([])

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json').
        then(res=>res.json()).
        then(data=>setproducts(data))
    },[])


    function AddToCart({singlData}){
        console.log('hello i am mujahid islam')
        
        
    }

  return (
    <div>
        <h2 className="text-center text-5xl font-semibold capitalize mb-5 text-orange-500">continue shoping</h2>
        <div className="grid md:grid-cols-4 gap-5 relative w-11/12 mx-auto">
            <div className="col-span-3 grid lg:grid-cols-3  md:grid-cols-2 gap-5">
            {
            products.map(single => <Singleproduct key={single.id} singlData={single} AddToCart={AddToCart}></Singleproduct>)
            }
            </div>

            <div className="border-2 border-orange-200 p-3 rounded-lg max-h-[600px] shadow-lg shadow-orange-300 sticky top-5">
                <h2 className="text-lg font-semibold capitalize flex items-center justify-center gap-3"><i className='bx bxs-cart-alt text-orange-500 text-2xl'></i> your cart section</h2>
            <AddToCart></AddToCart>
            
            </div>
        </div>
    </div>
  )
}
