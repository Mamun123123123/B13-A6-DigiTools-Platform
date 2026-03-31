import React from 'react'
import img from "../assets/banner.png"
const Banner = () => {
    return (
        <>
            <div className='flex justify-between items-center  flex-wrap w-full  gap-3'>
                <div className='flex-1 p-20   text-start flex flex-col'>
                    <div className='flex m-2 items-center bg-purple-100 border rounded-2xl w-fit p-1 gap-1'>
                        <p className='bg-purple-900 p-1 rounded-full w-2 h-1 object-cover'></p>
                        <p className='text-purple-700'>New: AI-Powered Tools Available</p>
                    </div>
                    <div className='font-bold m-2 text-6xl'>
                        <h1>Supercharge Your</h1>
                        <h1>Digital Workflow </h1>   
                    </div>
                    <div className='m-2'>
                        <p>Access premium AI tools, design assets, templates, and productivity</p>
                        <p>software—all in one place. Start creating faster today. </p>
                        <p>Explore Products</p>
                    </div>
                    <div className='flex gap-5'>
                        <button className='bg-purple-600 text-white p-2 rounded-4xl'>Explore Products</button>
                        <button className='rounded-4xl border p-2 text-purple-700'>Watch Demo</button>
                    </div>
                </div>
                <div className='flex-1 w-full'>
                    <img src={img} alt="banner" />
                </div>
            </div>
        </>
    )
}

export default Banner
