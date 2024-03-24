import React from 'react'
import About from "./Screens/About/About.js";
import Contact from "./Screens/Contacts/Contact.js";
import Home from './Screens/Home/Home.js';
import Shop from "./Screens/Shop/Shop.js";
import { Routes, Route ,useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ProductDetails from './Screens/Product-Page/ProductDetails.js'
const AppRoutes = () => {
    const Location=useLocation()
  return (
    <AnimatePresence>
         <Routes location={Location} key={Location.pathname}>
         <Route  exact path="/" element={<Home />} />      
    <Route  exact path="/Home" element={<Home />} />
    <Route  exact path="/Shop" element={<Shop />} />
    <Route  exact path="/About" element={<About />} />
    <Route  exact path="/Contact" element={<Contact />} />
    <Route  exact path="/ProductDetails" element={<ProductDetails />} />
  </Routes>
  </AnimatePresence>
  )
}

export default AppRoutes