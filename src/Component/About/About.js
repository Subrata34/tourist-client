import React from 'react'
import Footer from '../Footer/Footer'
import Menubar from '../Menubar/Menubar'
import Topbanner from '../Topbanner/Topbanner'
import img02 from '../Image/img02.jpg';

const About = () => {
  return (
    <div>
      <Menubar></Menubar>
      <Topbanner></Topbanner>
      <div >
        <h1>About Us</h1>
        <img style={{width:"1400px",height:"600px"}} src={img02} alt="" />
        <p>This is tour related service . This sit is Tour servceing website.</p>
      </div>

      <Footer></Footer>
      </div>
  )
}

export default About