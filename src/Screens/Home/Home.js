import React from 'react'
import girl from '../../Images/girl.jpg'
//import './App.css'
import {FiTruck } from "react-icons/fi";
import {AiOutlineClockCircle} from "react-icons/ai";
import {ImPencil} from "react-icons/im";
import {BsBookmarkStar} from "react-icons/bs";
import latest1 from '../../Images/latest1.jpg'
import latest2 from '../../Images/latest2.jpg'
import latest3 from '../../Images/latest3.jpg'
import {BsFillPersonFill} from "react-icons/bs";
import {LiaCommentSolid} from "react-icons/lia";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Topnav from '../../Inserts/Topnav/Topnav.js'
import '../../Screens/Home/Home.css'
import Address from '../../Inserts/Address/Address.js'
import Logos from '../../Inserts/Logo/Logos.js'
import Jennifer from '../../Inserts/Jennifer/Jennifer.js'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Homeimg1 from '../../Images/Homeimg1.jpg'
import Homeimg2 from '../../Images/Homeimg2.jpg'
import { MdShoppingBag } from "react-icons/md";
import { motion } from "framer-motion";
import Tabs from '../../Inserts/Tabs/Tabs.tsx'

const Home = () => {
  return (
    <motion.div  initial={{ opacity: 0, y: -50 , height: '4rem' }}
    animate={{ opacity: 1, y: 0, height: '4rem'}}
    transition={{ duration: 2, ease: 'easeInOut' }}>
<Topnav/>
<Carousel showStatus={false} showThumbs={false} >
      <div>
        <img className='girl' src={girl} alt="image1" />
        <div className='famsome'>
        <h1 id='fam'>Family Collections</h1>
       <h3 id='some'>Some representative placeholder content for the first slide.</h3>
      </div>
      </div>
      <div>
        <img className='girl' src={Homeimg1} alt="image1" />
        <div className='famsome1'>
        <h1 id='fam1'>Diamond Collection</h1>
       <h3 id='some1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque, odio nostrum inventore repellat.</h3>
       <button className='BUTTO'><MdShoppingBag/> SHOP NOW</button>
      </div>
      </div>
      <div>
        <img className='girl' src={Homeimg2} alt="image1" />
        <div className='famsome2'>
        <h1 id='fam2'>Platinum Collections</h1>
       <h3 id='some2'>Some representative placeholder content for the first slide.</h3>
      </div>
      </div>
      </Carousel>
<Tabs/>
      <article className='shiping'>
        <div className='det'>
          <h2 className='ico'><FiTruck/></h2>
          <h2 className='tit'>Fast shiping</h2>
        </div>
        <div className='det'>
          <h2 className='ico'><AiOutlineClockCircle/></h2>
          <h2 className='tit'>Timeless pieces</h2>
        </div>
        <div className='det'>
         <h2 className='ico'><BsBookmarkStar/></h2>
          <h2 className='tit'>Heritage inspired</h2>
        </div>
        <div className='det'>
        <h2 className='ico'><ImPencil/></h2>
          <h2 className='tit'>Custom designs</h2>
        </div>
      </article>
      <Jennifer/>
      <div className='latest'>
        <h1>LATEST BLOGS</h1>
        <p>A blog is a discussion or informational website published on the
World Wide Web consisting of discrete</p>
</div>
<div className='latestflex'>
<div id='nirai'>
  <img src={latest1} alt="image1" />
  <h4>Lightweight College Jewelley</h4>
  <div className='nirai'>
    <p><span id='span'><BsFillPersonFill/></span>Nirai</p>
    <p className='comments'><span id='span'><LiaCommentSolid/></span> 6</p>
  </div>
  <p className='para'>Eid-Al-Adha, also known as the Festival of Sacrifice, is a significant festival that Muslims celebrate worldwide. Prayers, feasts, acts of charity, and the exchange of gifts mark this sacred festival.</p>
  <div id='read'>
      <h3 className='read'>Read More 
      <span id='arrow'><MdKeyboardDoubleArrowRight/></span>
      </h3>
    </div>
    </div>
    <div id='nirai'>
  <img src={latest2} alt="image1"/>
  <h4>Eid Al-Adha inspired jewellery</h4>
  <div className='nirai'>
    <p><span id='span'><BsFillPersonFill/></span> Name</p>
    <p className='comments'><span id='span'><LiaCommentSolid/></span>  5</p>
  </div>
  <p className='para'>Look stylish without compromising on functionality with this guide to lightweight college jewellery!
  <br /><br /><br />
  </p>
  <div id='read'>
      <h3 className='read'>Read More <span id='arrow'><MdKeyboardDoubleArrowRight/></span></h3>
    </div>
    </div>
    <div id='nirai' className='paraa3'>
  <img src={latest3} alt="image1" />
  <h4>Bridesmaids Jewellery</h4>
  <div className='nirai'>
    <p><span id='span'><BsFillPersonFill/></span> Name</p>
    <p className='comments'><span id='span'><LiaCommentSolid/></span>  3</p>
  </div>
  <p className='para'id='para3'>On her wedding day, the bride shines bright like a radiant diamond. She is the centre of attention with all eyes on her. With her bridesmaids around her constantly, they become hard to miss on her big day</p>
    <div id='read'>
      <h3 className='read'>Read More <span id='arrow'><MdKeyboardDoubleArrowRight/></span></h3>
    </div>
    </div>
    </div>
    <Logos/>
    <Address/>
    </motion.div>
  )
}

export default Home