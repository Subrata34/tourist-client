import { Button } from '@mui/material'
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
        <TextField
    type="text" 
    label="Description" 
    style={{width:"20%"}}
    variant="standard" />
        <TextField
    type="number" 
    label="Price" 
    style={{width:"20%"}}
    variant="standard" />
     <Input
          accept="image/*"
          style={{ width: "20%" }}
          type="file"
        />
        <Button variant="contained" type="submit"> Submit </Button>
            </form>
    </div>
  )
}

export default Tourplace