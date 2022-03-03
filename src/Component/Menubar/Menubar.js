import React from 'react'
import './Menuvar.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import useAuth from '../../hooks/useAuth';


const Menubar = () => {
  const{user,logOut}=useAuth();
  return (
    <div className='menu' style={{backgroundColor:"black",color:"white"}}>
      <div>
       <h1>Traveler</h1>
      </div>
      <div className='menu-bar'>
          <ul className='menu-items'>
            <li className='items'> <Link to="/home" style={{color:"white",backgrounColor:"gray",textDecoration:"none"}}>Home</Link></li>
            <li className='items'> <Link to="/about" style={{color:"white",textDecoration:"none"}}>About</Link></li>
            <li className='items'> <Link to="/service" style={{color:"white",textDecoration:"none"}}>Service</Link> </li>
            <li className='items'> <Link to="/booking" style={{color:"white",textDecoration:"none"}}>Booking</Link> </li>
            <li className='items'><Link to="/place" style={{color:"white",textDecoration:"none"}}>MangeUser </Link></li>
            <li>{user.displayName}</li>
            {
              user.email?
              <Button variant="contained" onClick={logOut}>SignOut</Button>
              :
              <li className='items'> <Link to="/login" style={{color:"white",textDecoration:"none"}}>Login</Link></li>}
          </ul>
      </div>
    </div>
  )
}

export default Menubar