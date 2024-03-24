import React from 'react'
import Topnav from '../../Inserts/Topnav/Topnav.js'
import '../../Screens/Product-Page/ProductDetails.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Ringbox from '../../Images/Ringbox.jpg'
import RingImage1 from '../../Images/RingImage1.jpg'
import RingImage2 from '../../Images/RingImage2.jpg'
import { motion } from "framer-motion";
import {AiFillYoutube} from "react-icons/ai";
import {AiFillFacebook } from "react-icons/ai";
import {AiOutlineInstagram } from "react-icons/ai";
import {AiOutlineTwitter} from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import pen from "../../Images/pen.jpg"
import Address from '../../Inserts/Address/Address.js'
import { FaPaperPlane } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import {AiFillStar } from "react-icons/ai";


const ProductDetails = () => {
   const sectionTransition = {
    duration: 1,
    ease: 'easeInOut',
  };
  return (
    <motion.div>
        <Topnav/>
        <motion.div
        initial={{ opacity: 0, y: -50, height: '4rem' }}
        animate={{ opacity: 1, y: 0, height: '4rem' }}
        transition={sectionTransition}
      >
<Carousel showStatus={false} showThumbs={false}>
        <div>
          <img className='ringbox' src={Ringbox} alt="Ringbox" />
          <div className='shopa'>
            <h1 className='shop'>Shop With Us</h1>
            <h3 className='para1'>When you gift jewellery you achieve immortality in their heart.</h3>
          </div>
        </div>
        <div>
          <img className='ringbox' src={RingImage1} alt="Ringbox" />
          <div className='shopa'>
            <h1 className='shop'>Explore</h1>
            <h3 className='para1'>When you gift jewellery you achieve immortality in their heart.</h3>
          </div>
        </div>
        <div>
          <img className='ringbox' src={RingImage2} alt="Ringbox" />
          <div className='shopa'>
            <h1 className='shop'>Our Mission</h1>
            <h3 className='para1'>When you gift jewellery you achieve immortality in their heart.</h3>
          </div>
        </div>
       
      </Carousel>
</motion.div>

<Carousel showStatus={false} showThumbs={false}></Carousel>
    <div className='box-flex'>
    <div className='sidebox1'>
    <span><input type="text" placeholder='Search...'/>
<button className='fly'><IoIosSearch /></button>
</span>
<div className='catogories'>
<h2>CATAGORIES</h2>
<input type="checkbox"/>
<label htmlFor="">Rings</label><br />
<input type="checkbox"/>
<label htmlFor="">Pendant</label><br />
<input type="checkbox"/>
<label htmlFor="">Necklaces</label><br />
<input type="checkbox"/>
<label htmlFor="">Earrings</label><br />
<input type="checkbox"/>
<label htmlFor="">Bracelets</label><br />
</div>
<div className='star'>
  <h2>CUSTOMER REVIEW</h2>
  <h4><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></h4>
  <h4><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></h4>
  <h4><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></h4>
  <h4><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></h4>
  <h4><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></h4>
</div>
    </div>
    <div className='product-flex'>
      <div  >
        <img className='pen' src={pen} alt="imageee" />
      </div>
      <div>
        <div className='p1'>
<h2>Patia Platinum And Rose Gold Chain</h2>
  <h3 ><span id='vio'>$299 </span> <span id='five'>$599</span> <span id='vio'>Click For Offer</span></h3>
<h3>Availability: <span id='vio'>In Stock</span></h3>
<span><input type="text" placeholder='Enter Your Email'/>
<button className='fly'><FaPaperPlane /></button>
</span>
<h3 className='lorem'>Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis..</h3>
     <h3>Share Product</h3>
     <p className='icons'><AiFillFacebook/> <AiOutlineInstagram/> <AiOutlineTwitter/> <FaWhatsapp /> <AiFillYoutube/> </p>
     </div>
     <div className='description'>
      <h2 >DESCRIPTION</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore magna aliqua.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore magna aliqua.</p>
    </div>
      </div>
    </div> 
    </div>
   <div className='final'>
   <Address/>
   </div>
    </motion.div>
  )
}

export default ProductDetails