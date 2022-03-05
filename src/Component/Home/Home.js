import Footer from "../Footer/Footer";
import Menubar from "../Menubar/Menubar";
import React, { useEffect, useState } from "react";
import Topbanner from "../Topbanner/Topbanner";
import Box from "../Box/Box";
import { Grid } from "@mui/material";

const Home = () => {
  const [products, setProucts] = useState([]);
  useEffect(() => {
    fetch("https://radiant-island-18004.herokuapp.com/place")
      .then((res) => res.json())
      .then((data) => setProucts(data));
  }, []);
  return (
    <div>
      <Menubar></Menubar>
      <Topbanner></Topbanner>
       <h1>Our Tour Planing</h1>
      <Grid container spacing={3} style={{marginTop:"20px",marginLeft:"15px"}}>
        {products.map((data) => (
          <Box data={data}></Box>
        ))}
      </Grid>
      <Footer></Footer>
    </div>
  );
};

export default Home;
