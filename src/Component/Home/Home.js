import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Menubar from '../Menubar/Menubar'
import Topbanner from '../Topbanner/Topbanner'

const Home = () => {
  const[products,setProducts]=useState();
  useEffect(()=>{
    fetch('http://localhost:5000/place')
    .then(res=>res.json())
    .then(data=>setProducts(data));
  },[]);
  return (
    <div>
      <Menubar></Menubar>
      <Topbanner></Topbanner>
      <div>
      
        
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home