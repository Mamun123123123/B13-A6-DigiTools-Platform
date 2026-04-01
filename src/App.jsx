import React, { useState } from 'react'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from './component/Navbar'
import Banner from './banner/Banner'
import State from './State/State'
import MainSection from './MainSection/MainSection'
import Started from './Started/Started'
import SimplePricing from './Simple/SimplePricing'
import Ready_section from './ready/Ready_section'
import Footer from './footer/Footer'

const App = () => {
    const [cart, setCart] = useState([]);
   const removeFromCart = (id) => {
  if (id === "all") {
    setCart([]);
  } else {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }
};
    const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <>
      <Navbar cart ={cart} />
      <Banner />
      <State />
      <MainSection cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}/>
        <Started />
        <SimplePricing />
        <Ready_section />
        <Footer />
        <ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}

export default App