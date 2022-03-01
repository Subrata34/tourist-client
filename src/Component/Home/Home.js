import React from 'react'
import Footer from '../Footer/Footer'
import Menubar from '../Menubar/Menubar'
import Topbanner from '../Topbanner/Topbanner'

const Home = () => {
  return (
    <div>
      <Menubar></Menubar>
      <Topbanner></Topbanner>
      <h1>this is home button </h1>
      <Footer></Footer>
    </div>
  )
}

export default Home