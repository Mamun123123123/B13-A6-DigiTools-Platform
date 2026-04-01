import React from 'react'
import img from "../assets/banner.png"

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row pt-30 md:pt-0 items-center justify-between w-full gap-6 px-4 md:px-12 lg:px-20 py-10'>

      <div className='flex-1 text-center md:text-left flex flex-col items-center md:items-start'>
        <div className='flex items-center bg-purple-100 border rounded-2xl w-fit px-3 py-1 gap-2 mb-4'>
          <span className='bg-purple-900 rounded-full w-2 h-2'></span>
          <p className='text-purple-700 text-sm'>
            New: AI-Powered Tools Available
          </p>
        </div>

        <div className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4'>
          <h1>Supercharge Your</h1>
          <h1>Digital Workflow</h1>
        </div>

        <div className='text-gray-600 text-sm sm:text-base mb-6'>
          <p>Access premium AI tools, design assets, templates, and productivity</p>
          <p>software—all in one place. Start creating faster today.</p>
        </div>

        <div className='flex flex-col sm:flex-row gap-4'>
          <button className='bg-purple-600 text-white px-6 py-3 rounded-full'>
            Explore Products
          </button>
          <button className='border px-6 py-3 rounded-full text-purple-700'>
            Watch Demo
          </button>
        </div>
      </div>

      <div className='flex-1 w-full'>
        <img 
          src={img} 
          alt="banner" 
          className='w-full max-w-md mx-auto md:max-w-full'
        />
      </div>

    </div>
  )
}

export default Banner