import React from 'react'
import Topnav from '../../Inserts/Topnav/Topnav.js'
import Logos from '../../Inserts/Logo/Logos.js'
import Address from '../../Inserts/Address/Address.js'
import contactimage from '../../Images/contactimage.jpg'
import '../../Screens/Contacts/Contact.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Contactimage2 from '../../Images/Contactimage2.jpg'
import Contactimage3 from '../../Images/Contactimage3.jpg'
import { motion } from "framer-motion";
import Box from '../../Inserts/Box.tsx'

const Contact = () => {
  return (
    <motion.div  initial={{ opacity: 0, y: -50 , height: '4rem' }}
    animate={{ opacity: 1, y: 0, height: '4rem'}}
    transition={{ duration: 2, ease: 'easeInOut' }}>
        <Topnav/>
        <Carousel showStatus={false} showThumbs={false}>
        <div>
            <img className='contactimage' src={contactimage} alt="image2" />
         <div className='ab'>
<h1>Contact Us</h1>
<h3>Please do not hesitate to reach out to us for any queries or feedback. We are here to create effective solutions for any of your concerns.</h3>
         </div>
        </div>
        <div>
            <img className='contactimage1' src={Contactimage2}alt="image2" />
         <div className='ab'>
<h1>Call Us</h1>
<h3>We are here to create effective solutions for any of your concerns.</h3>
         </div>
        </div>
        <div>
            <img className='contactimage1' src={Contactimage3} alt="image2" />
         <div className='ab'>
<h1>Email Us</h1>
<h3>Please do not hesitate to reach out to us for any queries or feedback.</h3>
         </div>
        </div>
        </Carousel>
        <div className='location-flex'>
        <Box/>
        </div>
        <div className='send'>
          <h1>SEND US A MESSAGE</h1>
          <p>You can contact us for any of your requirements. We’ll help you meet your needs.</p>
        </div>
      <div className='form'>
      <div class="input-group">
          <label htmlFor="">Name</label>
          <input type="text" placeholder='Your name here' />
        </div>
        <div class="input-group"> 
          <label htmlFor="">Email</label>
          <input type="text" placeholder='Your email here' />
        </div><br />
        <div class="input-group">
          <label htmlFor="">Phone</label>
          <input type="text" placeholder='Your phone here' />
        </div>
        <div class="input-group">
          <label htmlFor="">Subject</label>
          <input type="text" placeholder='Your subject here' />
        </div>
        <div class="textarea">
          <label htmlFor="">Message</label><br />
       <textarea placeholder='Your message here'/>
        </div> 
      </div>
      <div className='button'>
      <button>Send</button>
      </div>
        <div>
        <Logos/>
        <Address/>
        </div>

    </motion.div>
  )
}

export default Contact