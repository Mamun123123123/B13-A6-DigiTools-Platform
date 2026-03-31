import React, { useState } from 'react'
import Product from './Product'
import Cart from '../Cart/Cart';

const MainSection = ({ cart, addToCart, removeFromCart }) => {
      const [active, setActive] = useState(true)
    
    
    return (
        <>
            <div className='flex text-center items-center flex-col'>
                <div className='p-8 m-4 flex flex-col items-center'>
                    <h1 className='text-5xl font-bold m-4'>Premium Digital Tools</h1>
                    <p>Choose from our curated collection of premium digital products designed</p>
                    <p>to boost your productivity and creativity.</p>

                    <div className="flex m-2 shadow-2xl rounded-2xl">
                        <button
                            onClick={() => setActive(true)}
                            className={` m-2 p-2 rounded-2xl ${active ? "bg-purple-600 text-white" : "bg-white text-black"}`}>
                            Products
                        </button>

                        <button
                            onClick={() => setActive(false)}
                            className={` m-2 p-2 rounded-2xl ${!active ? "bg-purple-600 text-white" : "bg-white text-black"}`}
                        >
                            Cart({cart.length})
                        </button>
                    </div>
                </div>

                <div className='w-full'>
                    {active ? <Product addToCart={addToCart}/> : <Cart cart={cart} removeFromCart={removeFromCart}/>}
                </div>
            </div>
        </>
    )
}

export default MainSection