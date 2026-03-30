import React, { useState } from 'react'
import { Link } from 'react-router'
import img from "../assets/shopping-cart.png"
const Navbar = () => {
      const [menuOpen, setMenuOpen] = useState(false)
    
  return (
    <nav className='flex justify-between fixed items-center bg-slate-100 p-4 md:px-8 shadow-2xl w-full'>
        
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
            <li><Link to="/product">Products</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>
        <div className='hidden md:flex items-center gap-4'>
          <img src={img} alt="cart" className='w-6 h-6' />
          <span>Login</span>
          <button className='bg-blue-700 text-white px-4 py-2 rounded-2xl'>
            Get Started
          </button>
        </div>
      </nav>
  )
}

export default Navbar
