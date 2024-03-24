import React from 'react'
import {AiFillHome } from "react-icons/ai";
import {BiSolidShoppingBag} from "react-icons/bi";
import {AiFillInfoCircle} from "react-icons/ai";
import {FaPhoneAlt} from "react-icons/fa";
import diamond from '../../Images/diamond.png'
import '../../Inserts/Topnav/Topnav.css'
import { useNavigate , useLocation} from 'react-router-dom';
import { motion } from "framer-motion";

const Topnav = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  
  const handleMenuClick = () => {
    setIsMobile(!isMobile);
  };

  const location = useLocation();
  const navigate=useNavigate()
function goHome(){
  navigate("/Home")
}
function goAbout(){
  navigate("/About")
}
function goContact(){
  navigate("/Contact")
}
function goShop(){
  navigate("/Shop")
}
const isTabActive = (path) => {
  return location.pathname === path;
};
  return (
  
    <div>
          <motion.nav initial={{ opacity: 0, y: -50 , height: '4rem' }}
      animate={{ opacity: 1, y: 0, height: '4rem'}}
      transition={{ duration: 2, ease: 'easeInOut' }}
    >
          <div id='h' className="showmenu">
          <ul className='list'>
            <li><a href="/Home" className={`n1 ${isTabActive('/Home') ? 'active' : ''}`} onClick={goHome}><AiFillHome/><span id='spann'>HOME</span></a></li>
            <li ><a href="/Shop" className={`n1 ${isTabActive('/Shop') ? 'active' : ''}`} onClick={goShop}><BiSolidShoppingBag/><span id='spann'> SHOP</span></a></li>
            <li><a href="/Home" className='colide' onClick={goHome}>
            <div id='logo'>
            <img className='dia' src={diamond} alt="image1" /> 
            <span href="" id='ja'>Jane's</span><br />
            <span href="#" id='bo'>Boutique</span>
            </div>
             </a></li>
            <li><a href="/About" className={`n1 ${isTabActive('/About') ? 'active' : ''}`} onClick={goAbout}><AiFillInfoCircle/><span id='spann'>ABOUT</span></a></li>
            <li><a href="/Contact" className={`n1 ${isTabActive('/Contact') ? 'active' : ''}`} onClick={goContact}><FaPhoneAlt/> <span id='spann'>CONTACT</span></a></li>
          </ul>
      
          <div className="mobile-nav">
 <div className='hamburger-menu' onClick={handleMenuClick}>
  <div class="menu-line"></div>
  <div class="menu-line"></div>
  <div class="menu-line"></div>
<ul> <li><a href="/Home" className='colide' onClick={goHome}>
            <div id='logo'>
            <img className='dia' src={diamond} alt="Jane's Boutique Logo" /> 
            <span href="#" id='ja'>Jane's</span><br />
            <span href="#" id='bo'>Boutique</span>
            </div>
             </a></li></ul>
</div> 
          {isMobile && (
          <div className='mobile-menu'>
            <ul>
            <li><a href="/Home" className='colide' id='side-collide' onClick={goHome}>
            <div id='logo'>
            <img className='dia' src={diamond} alt="" /> 
            <span href="/Home" id='ja'>Jane's</span><br />
            </div>
            <span href="/Home" id='bo'>Boutique</span>
             </a></li><br />
            <li><a href="/Home"className={`n1 ${isTabActive('/Home') ? 'active' : ''}`}  onClick={goHome}><AiFillHome/><span id='spann'>HOME</span></a></li><br />
            <li ><a href="/Shop" className={`n1 ${isTabActive('/Shop') ? 'active' : ''}`} onClick={goShop}><BiSolidShoppingBag/><span id='spann'> SHOP</span></a></li><br />
            <li><a href="/About" className={`n1 ${isTabActive('/About') ? 'active' : ''}`} onClick={goAbout}><AiFillInfoCircle/><span id='spann'>ABOUT</span></a></li><br/>
            <li><a href="/Contact" className={`n1 ${isTabActive('/Contact') ? 'active' : ''}`} onClick={goContact}><FaPhoneAlt/> <span id='spann'>CONTACT</span></a></li>
            </ul>
            </div> 
              )} 
          </div>
          </div>
 </motion.nav>
</div>      

  )}

export default Topnav