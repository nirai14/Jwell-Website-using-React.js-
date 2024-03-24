import React from 'react'
import '../../Screens/About/About.css';
import Topnav from '../../Inserts/Topnav/Topnav.js'
import Address from '../../Inserts/Address/Address.js'
import fire from '../../Images/fire.jpg'
import Logos from '../../Inserts/Logo/Logos.js'
import Jennifer from '../../Inserts/Jennifer/Jennifer.js'
import { MdRadioButtonChecked } from "react-icons/md";
import profile1 from '../../Images/profile1.png'
import profile2 from '../../Images/profile2.png'
import profile3 from '../../Images/profile3.png'
import profile4 from '../../Images/profile4.png'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Aboutimg2 from '../../Images/Aboutimg2.jpg'
import Aboutimg3 from '../../Images/Aboutimg3.jpg'
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div  initial={{ opacity: 0, y: -50 , height: '4rem' }}
    animate={{ opacity: 1, y: 0, height: '4rem'}}
    transition={{ duration: 2, ease: 'easeInOut' }}>
<Topnav/>
<Carousel showStatus={false} showThumbs={false}>
<div>
    <img src={fire} alt="image1" className='fire' />
<div className='ab'>
<h1>About Us</h1>
<h3>Learn about our tales!</h3>
</div>
</div>
<div >
    <img src={Aboutimg2} alt="image1" className='fire' />
<div className='ab'>
<h1>Our Vision</h1>
<h3>When you gift jewellery you achieve immortality in their heart.</h3>
</div>
</div>
<div >
    <img src={Aboutimg3} alt="image1" className='fire' />
<div className='ab'>
<h1>Our Mission</h1>
<h3>When you gift jewellery you achieve immortality in their heart.</h3>
</div>
</div>
</Carousel>

<div className='why'>
  <h1>Why Choose Jane ?</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
<ul>
  <li><MdRadioButtonChecked/> Best & Good Delivery Service</li>
  <li> <MdRadioButtonChecked/> Quality, Fresh, Authentic Supplier.</li>
  <li> <MdRadioButtonChecked/> We Are Always Provide Goood Quality Products.</li>
</ul>
<button className='view'>View More</button>
</div>

<div className='team'>
  <h1>Team Member</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed aci erat
dales vitakse dalesnon estin vitae egestas.</p>
</div>
<div className='profile-flex'>
  <div className='profiles'>
    <img className='dp' src={profile1} alt="image2"/>
    <h3>Johakim Low</h3>
    <p>Founder & CEO</p>
    <p>Burna phasellus aliquam sempe arcu bal dictum integer quis mi necili dapibus pretium in quis!</p>
  </div>
  <div className='profiles'>
    <img className='dp' src={profile2} alt="image2" />
    <h3>Jamie McGuirk</h3>
    <p>Managing Director</p>
    <p>Burna phasellus aliquam sempe arcu bal dictum integer quis mi necili dapibus pretium in quis!</p>
  </div>
  <div className='profiles'>
    <img className='dp' src={profile3} alt="image2" />
    <h3>Micle Jackarim</h3>
    <p>Sales Director</p>
    <p>Burna phasellus aliquam sempe arcu bal dictum integer quis mi necili dapibus pretium in quis!</p>
  </div>
  <div className='profiles'>
    <img className='dp' src={profile4} alt="image2" />
    <h3>Henry Todd</h3>
    <p>General Manager</p>
    <p>Burna phasellus aliquam sempe arcu bal dictum integer quis mi necili dapibus pretium in quis!</p>
  </div>
</div>
<Jennifer/>
<Logos/>
<Address/>
    </motion.div>
  )
}

export default About