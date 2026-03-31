import React, { useState } from 'react'

const MainSection = () => {
    const [active, setActive] = useState(true)

    return (
        <>
            <div className='flex text-center items-center flex-col'>
                <div className='p-8 m-4 flex flex-col items-center'>
                    <h1 className='text-5xl font-bold m-4'>Premium Digital Tools</h1>
                    <p>Choose from our curated collection of premium digital products designed</p>
                    <p>to boost your productivity and creativity.</p>

                    <div className="flex shadow-2xl rounded-2xl">
                        <button
                            onClick={() => setActive(true)}
                            className={` m-2 p-2 rounded-2xl ${active ? "bg-purple-600 text-white" : "bg-white text-black"}`}>
                            Products
                        </button>

                        <button
                            onClick={() => setActive(false)}
                            className={` m-2 p-2 rounded-2xl ${!active ? "bg-purple-600 text-white" : "bg-white text-black"}`}
                        >
                            Cart(0)
                        </button>
                    </div>
                </div>

                <div className={active ? "text-white bg-purple-600 p-4 rounded-2xl" : "text-white p-4 rounded-2xl bg-purple-800"}>
                    {active ? "Products Section" : "Cart Section"}
                </div>
            </div>
        </>
    )
}

export default MainSection