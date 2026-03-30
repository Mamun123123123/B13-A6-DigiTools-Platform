import React from 'react'
import { Link } from 'react-router'
import img from "./assets/shopping-cart.png"
const App = () => {
  return (
    <>
      <nav className='flex justify-evenly bg-slate-100 p-8 items-center shadow-2xl w-full'>
         <div className='text-purple-800 text-4xl font-bold'>
          DigiTools
         </div>
         <div>
          <ul className='flex justify-between gap-6 items-center'>
            <li><Link to="/product">Products</Link> </li>
            <li><Link to="/features">Features</Link> </li>
            <li><Link to="/pricing">Pricing</Link> </li>
            <li><Link to="/testimonials">Testimonials</Link> </li>
            <li><Link to="/faq">FAQ</Link> </li>
          </ul>
         </div>
         <div>
          <ul className='flex items-center justify-between gap-4'>
            <li><img src={img} alt="" /></li>
            <li>Login</li>
            <button className='bg-blue-700 text-white p-2 rounded-2xl scale-90'>Get Started</button>
          </ul>          
         </div>
      </nav>
    </>
  )
}

export default App
