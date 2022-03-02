import { Button, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import useFirebase from '../../hooks/useFirebase'
import Footer from '../Footer/Footer'
import Menubar from '../Menubar/Menubar'
import Topbanner from '../Topbanner/Topbanner'

const Login = () => {
  const{user,signInUsingGoogle}=useFirebase();
  return (
    <div> 
      <Menubar></Menubar>
      <Topbanner></Topbanner>
    <div>
      <h1>Please Login</h1>
      <form action="">
      <TextField
      type="email" 
      label="Email Address" 
      style={{width:"20%"}}
      pleaseholder="email@email.com "
      variant="standard" />
      <br />
      <TextField
      type="password" 
      label="Password" 
      style={{width:"20%"}}
      pleaseholder="email@email.com "
      variant="standard" />
      <br />
      <Button variant="contained" style={{width:"20%"}}>Sign In</Button>
        
        </form>
        <br />
        <Button variant="contained" onClick={}>Google Sign In</Button>
        <br />
        <Button variant="contained" ><Link to="/register" style={{textDecoration:"none"}}>please Register?</Link></Button>
    </div>
      <Footer></Footer>
      </div>
  )
}

export default Login