import React, { useState } from 'react'
import img from "../assets/shopping-cart.png"

const Navbar = ({ cart }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className='flex justify-between fixed items-center bg-slate-100 p-4 md:px-8 shadow-2xl w-full z-50'>

      <div className='text-purple-800 text-2xl md:text-4xl font-bold'>
        DigiTools
      </div>

      <div className='md:hidden'>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      <div className={`${menuOpen ? "block" : "hidden"} absolute top-16 left-0 w-full bg-slate-100 md:static md:flex md:w-auto`}>
        <ul className='flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-0 items-center'>
          <li>Products</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>FAQ</li>
        </ul>
      </div>

      <div className='hidden md:flex items-center gap-6'>
        <div className="relative cursor-pointer">
          <img src={img} alt="cart" className='w-6 h-6' />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold min-w-[18px] h-[18px] flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </div>

        <span className='cursor-pointer'>Login</span>

        <button className='bg-blue-700 text-white px-4 py-2 rounded-2xl'>
          Get Started
        </button>
      </div>

    </nav>
  )
}

export default Navbar