import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Box from '../Box/Box'
import Footer from '../Footer/Footer'
import Menubar from '../Menubar/Menubar'
import Topbanner from '../Topbanner/Topbanner'

const Home = () => {
 
  return (
    <div>
      <Menubar></Menubar>
      <Topbanner></Topbanner>
      <div>
     <h1>Home</h1>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home