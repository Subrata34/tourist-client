import { Button, Input, TextField } from '@mui/material'
import React from 'react'

const Tourplace = () => {
  return (
    <div>
        <form action="">
        <TextField
    type="name" 
    label="Name" 
    style={{width:"20%"}}
    variant="standard" />
    <br />
        <TextField
    type="text" 
    label="Description" 
    style={{width:"20%"}}
    variant="standard" />
    <br />
        <TextField
    type="number" 
    label="Price" 
    style={{width:"20%"}}
    variant="standard" />
    <br />
     <Input
          accept="image/*"
          style={{ width: "20%" }}
          type="file"
        />
        <br />
        <Button variant="contained" type="submit"> Submit </Button>
            </form>
    </div>
  )
}

export default Tourplace