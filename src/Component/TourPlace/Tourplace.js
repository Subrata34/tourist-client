import { Button, Input, TextField } from '@mui/material'
import React, { useState } from 'react'

const Tourplace = () => {
  const[name,setName]=useState("");
  const[discription,setDiscription]=useState("");
  const[price,setPrice]=useState("");
  const[image,setImage]=useState(null);
  const handleSubmit = e => {
    e.preventDefault();
    if (!image) {
        return;
    }
    const formData = new FormData();
    formData.append('name', name);
    formData.append('discription', discription);
    formData.append('image', image);

    fetch('http://localhost:5000/appiont', {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                // setSuccess('Doctor added successfully')
                console.log('doctor added successfully')
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
  return (
    <div>
        <form action="" >
        <TextField
    type="name" 
    label="Name" 
    onClick={(e)=>setName(e.target.value)}
    style={{width:"20%"}}
    variant="standard" />
    <br />
        <TextField
    type="text" 
    label="Description"
    onClick={(e)=> setDiscription(e.target.value)} 
    style={{width:"20%"}}
    variant="standard" />
    <br />
        <TextField
    type="number" 
    label="Price" 
    onClick={(e)=> setPrice(e.target.value)}
    style={{width:"20%"}}
    variant="standard" />
    <br />
     <Input
          accept="image/*"
          style={{ width: "20%" }}
          onClick={(e)=> setImage(e.target.files[0])}
          type="file"
        />
        <br />
        <Button variant="contained" type="submit" onClick={handleSubmit}> Submit </Button>
            </form>
    </div>
  )
}

export default Tourplace