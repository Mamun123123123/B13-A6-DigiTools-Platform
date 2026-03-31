import React, { useState } from 'react'

import Navbar from './component/Navbar'
import Banner from './banner/Banner'
import State from './State/State'

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <State />
    </>
  )
}

export default App