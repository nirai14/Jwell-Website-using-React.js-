import React from 'react'
import diamond from '../../Images/diamond.png'
import {AiFillFacebook } from "react-icons/ai";
import {AiOutlineInstagram } from "react-icons/ai";
import {AiOutlineTwitter} from "react-icons/ai";
import {BsPinterest} from "react-icons/bs";
import {AiFillYoutube} from "react-icons/ai";
import './Address.css';
import { BsStars } from "react-icons/bs";
const Address = () => {
  return (
    <div>
            <div className='lastflex'>
    <div>
    <div className='h1'> 
  <div>
<img className='diam' src={diamond} alt="image2" />
</div> 
<div className='jabo'>
<span href="#" id='ja'>Jane's</span><br/>
<span href="#" id='bo'>Boutique</span>
  </div>
  </div>
  <div className='address'>
  <div>
    <p>Address: 2726 Avenue Papineau Montreal, QC, Canada</p>
    </div>
    <p>Phone: 1-800-915-6270</p>
    <p>Email: jane.boutique@gmail.com</p>
    <br />
    <br />
    <br />
    </div>
    </div>
<div className='explore'>
  <h5>EXPLORE</h5>
  <ul>
    <li><span class="emoji-bullet" style={{ transform: 'rotate(45deg)'}}><BsStars /></span>Jewellery & Collections</li>
    <li><span class="emoji-bullet"><BsStars /></span>Love & Engagement</li>
    <li><span class="emoji-bullet"><BsStars /></span>Learn & Explore</li>
    <li><span class="emoji-bullet"><BsStars /></span>Exclusives</li>
    <li><span class="emoji-bullet"><BsStars /></span>Our Story</li>
    <li><span class="emoji-bullet"><BsStars /></span>Responsibly Sourced</li>
  </ul>
  </div>
  <div className='explore'>
<h5>MAY WE HELP YOU?</h5>
<ul>
  <li><span class="emoji-bullet"><BsStars /></span>FAQs</li>
  <li><span class="emoji-bullet"><BsStars /></span>Contact us</li>
  <li><span class="emoji-bullet"><BsStars /></span>Email us</li>
  <li><span class="emoji-bullet"><BsStars /></span>Call us</li>
  <li><span class="emoji-bullet"><BsStars /></span>Terms & Conditions</li>
  </ul>
  </div>
  <div className='explore'>
    <h5>FOLLOW US</h5>
    <ul>
      <li className='fa'><span className='logos'><AiFillFacebook/></span> Facebook</li>
      <li className='fa'><span className='logos'><AiOutlineInstagram/> </span>Instagram</li>
      <li className='fa'><span className='logos'><AiOutlineTwitter/> </span>Twitter</li>
      <li className='fa'><span className='logos'><BsPinterest/></span> Pinterest</li>
      <li className='fa'><span className='logos'><AiFillYoutube/> </span>Youtube</li>
      </ul>
  </div>
</div>
<footer>
      <div className='foot'>
        <h4>Privacy<span className='line'>|</span> 
        Cookie Policy<span className='line'>|</span>
        &copy; 2023 jane's boutiques. All Rights Reserved.
        </h4>
      </div>
    </footer>
    </div>
  )
}

export default Address