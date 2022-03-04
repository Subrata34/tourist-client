import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Menubar from "../Menubar/Menubar";
import Topbanner from "../Topbanner/Topbanner";

const Booking = () => {
  const {serviceId}=useParams();
  return (
    <div>
      <Menubar></Menubar>
      <Topbanner></Topbanner>
    <div>
      <h1>this is booking:{serviceId}</h1>
    </div>
      <Footer></Footer>
    </div>
  );
};

export default Booking;
