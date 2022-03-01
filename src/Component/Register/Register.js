import React from 'react'

const Register = () => {
  return (
    <div>  
      <h1>Please Register</h1>
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
    variant="standard" />
    <br />
    <TextField
    type="password" 
    label="Re-Password" 
    style={{width:"20%"}}
    variant="standard" />
    <br />
    <Button variant="contained" style={{width:"20%"}}>Sign up</Button>
      
      </form></div>
  )
}

export default Register