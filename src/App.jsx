import React, { useState } from 'react'

import Navbar from './component/Navbar'
import Banner from './banner/Banner'
import State from './State/State'
import MainSection from './MainSection/MainSection'

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <State />
      <MainSection />
    </>
  )
}

export default App