import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Footer from './Component/Footer/Footer';
import Login from './Component/Login/Login';
import Service from './Component/Service/Service';
import Header from './Component/Header/Header';
import Booking from './Component/Booking/Booking';
import MangeUser from './Component/MangeUser/MangeUser';
import Tourplace from './Component/TourPlace/Tourplace';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="footer" element={<Footer />} />
        <Route path="booking" element={<Booking />} />
        <Route path="login" element={<Login />} />
        <Route path="Service" element={<Service />} />
        <Route path="header" element={<Header />} />
        <Route path="place" element={<MangeUser />} />
        <Route path="tourplace" element={<Tourplace />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
