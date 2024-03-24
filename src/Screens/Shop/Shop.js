import React from 'react'
import Topnav from '../../Inserts/Topnav/Topnav'
import Address from '../../Inserts/Address/Address'
import '../../Screens/Shop/Shop.css'
import Logos from '../../Inserts/Logo/Logos'
import {AiFillStar } from "react-icons/ai";
import jwel1 from '../../Images/jwel 1.jpg'
import jwel2 from '../../Images/jwel2.jpg'
import jwel3 from '../../Images/jwel3.jpg'
import jwel4 from '../../Images/jwel4.jpg'
import jwel5 from '../../Images/jwel5.jpg'
import jwel6 from '../../Images/jwel6.jpg'
import jwel7 from '../../Images/jwel7.jpeg'
import j1 from '../../Images/j1.jpg'
import j2 from '../../Images/j2.jpg'
import j3 from '../../Images/j3.jpg'
import j4 from '../../Images/j4.jpg'
import j5 from '../../Images/j5.jpg'
import j6 from '../../Images/j6.jpg'
import j7 from '../../Images/j7.jpg'
import j8 from '../../Images/j8.jpg'
import j9 from '../../Images/j9.jpg'
import j10 from '../../Images/j10.jpg'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Ringbox from '../../Images/Ringbox.jpg'
import RingImage1 from '../../Images/RingImage1.jpg'
import RingImage2 from '../../Images/RingImage2.jpg'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Shop = () => {
  const navigate=useNavigate()

  function goProduct(){
    navigate('/ProductDetails')
  }
  const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1280 },
        items: 4,
    },
    desktop: {
        breakpoint: { max: 1280, min: 1024 },
        items: 4,
    },
    laptop: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 768, min: 425 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 425, min: 0 },
        items: 1,
    },
};
  return (
    <motion.div  initial={{ opacity: 0, y: -50 , height: '4rem' }}
    animate={{ opacity: 1, y: 0, height: '4rem'}}
    transition={{ duration: 2, ease: 'easeInOut' }}>
<Topnav/>
<div>
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
    <div className='box-flex'>
    <div className='sidebox1'>
    <span className='search'>
<input type="text" placeholder='Search...'/>
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
    <div className='right'>
<div >
  <h2 className='title'>Featured Products</h2>
  <div className='box-row1'> 
  <Carousel
        autoPlay
        autoPlaySpeed={500}
        infiniteLoop={false}
        showThumbs={false}
        showStatus={false}  // Hide the status (pagination)
        showIndicators={false}  // Hide the indicators (dots)
        useKeyboardArrows
        emulateTouch
        stopOnHover={false}
        swipeable
        customLeftArrow={<ChevronLeftIcon />}
        customRightArrow={<ChevronRightIcon />}
        centerMode
        centerSlidePercentage={20}
        responsive={responsive}
        className='slider_carousel'
    >
    <div className='dapa' onClick={goProduct}>
      <img className='jwel' src={jwel1} alt="image1" />
      <div className='ratee'>
      <h3>Brilliance Bead</h3>
      <div className='star-line'>
        <p>$130</p>
        <p id='rate'>4.5<AiFillStar/></p>
        </div>
      </div>
    </div>
    <div className='dapa' onClick={goProduct}>
      <img className='jwel' src={jwel2} alt="image1" />
      <div className='ratee'>
      <h3>Brilliance Bead</h3>
      <div className='star-line'>
        <p>$130</p>
        <p id='rate'>4.5<AiFillStar/></p>
        </div>
      </div>
    </div>
    <div className='dapa' onClick={goProduct}>
      <img className='jwel' src={jwel3} alt="image1" />
      <div className='ratee'>
      <h3>Brilliance Bead</h3>
      <div className='star-line'>
        <p>$130</p>
        <p id='rate'>4.5<AiFillStar/></p>
        </div>
      </div>
    </div>
   
    <div className='dapa' onClick={goProduct}>
      <img className='jwel' src={jwel4} alt="image1" />
      <div className='ratee'>
      <h3>Brilliance Bead</h3>
      <div className='star-line'>
        <p>$130</p>
        <p id='rate'>4.5<AiFillStar/></p>
        </div>
      </div>
    </div>

    <div className='dapa' onClick={goProduct}>
      <img className='jwel' src={jwel5} alt="image1" />
      <div className='ratee'>
      <h3>Brilliance Bead</h3>
      <div className='star-line'>
        <p>$130</p>
        <p id='rate'>4.5<AiFillStar/></p>
        </div>
      </div>
    </div>
  
    <div className='dapa' onClick={goProduct}>
      <img className='jwel' src={jwel6} alt="image1"/>
      <div className='ratee'>
      <h3>Brilliance Bead</h3>
      <div className='star-line'>
        <p>$130</p>
        <p id='rate'>4.5<AiFillStar/></p>
        </div>
      </div>
    </div>
  
    <div className='dapa' onClick={goProduct}>
      <img className='jwel' src={jwel7} alt="image1" />
      <div className='ratee'>
      <h3>Brilliance Bead</h3>
      <div className='star-line'>
        <p>$130</p>
        <p id='rate'>4.5<AiFillStar/></p>
        </div>
      </div>
    </div>
</Carousel>
  </div>

 </div>
<div>
  <h2  className='title'>New products</h2>
  <div className='box-row1'> 
  <Carousel
        autoPlay
        autoPlaySpeed={1000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}  // Hide the status (pagination)
        showIndicators={false}  // Hide the indicators (dots)
        useKeyboardArrows
        emulateTouch
        stopOnHover
        swipeable
        customLeftArrow={<ChevronLeftIcon />}
        customRightArrow={<ChevronRightIcon />}
        centerMode
        centerSlidePercentage={20}
        responsive={responsive}
        className='slider_carousel'
    >
    <div className='dapa' onClick={goProduct}>
      <img className='jwel' src={j1} alt="image1" />
      <div className='ratee'>
      <h3>Brilliance Bead</h3>
      <div className='star-line'>
        <p>$130</p>
        <p id='rate'>4.5<AiFillStar/></p>
        </div>
      </div>
    </div>
    <div className='dapa'onClick={goProduct}>
      <img className='jwel' src={j2} alt="image1" />
      <div className='ratee'>
      <h3>Brilliance Bead</h3>
      <div className='star-line'>
        <p>$130</p>
        <p id='rate'>4.5<AiFillStar/></p>
        </div>
      </div>
    </div>
    <div className='dapa' onClick={goProduct}>
      <img className='jwel' src={j3} alt="image1" />
      <div className='ratee'>
      <h3>Brilliance Bead</h3>
      <div className='star-line'>
        <p>$130</p>
        <p id='rate'>4.5<AiFillStar/></p>
        </div>
      </div>
    </div>
    <div className='dapa' onClick={goProduct}>
      <img className='jwel' src={j4} alt="image1"/>
      <div className='ratee'>
      <h3>Brilliance Bead</h3>
      <div className='star-line'>
        <p>$130</p>
        <p id='rate'>4.5<AiFillStar/></p>
        </div>
      </div>
    </div>
    <div className='dapa' onClick={goProduct}>
      <img className='jwel' src={j5} alt="image1"/>
      <div className='ratee'>
      <h3>Brilliance Bead</h3>
      <div className='star-line'>
        <p>$130</p>
        <p id='rate'>4.5<AiFillStar/></p>
        </div>
      </div>
    </div>
    <div className='dapa' onClick={goProduct}>
      <img className='jwel' src={j6} alt="image1" />
      <div className='ratee'>
      <h3>Brilliance Bead</h3>
      <div className='star-line'>
        <p>$130</p>
        <p id='rate'>4.5<AiFillStar/></p>
        </div>
      </div>
    </div>
    <div className='dapa'onClick={goProduct}>
      <img className='jwel' src={j7} alt="image1" />
      <div className='ratee'>
      <h3>Brilliance Bead</h3>
      <div className='star-line'>
        <p>$130</p>
        <p id='rate'>4.5<AiFillStar/></p>
        </div>
      </div>
    </div>

    <div className='dapa'onClick={goProduct}>
      <img className='jwel' src={j8} alt="image1" />
      <div className='ratee'>
      <h3>Brilliance Bead</h3>
      <div className='star-line'>
        <p>$130</p>
        <p id='rate'>4.5<AiFillStar/></p>
        </div>
      </div>
    </div>
    <div className='dapa'onClick={goProduct}>
      <img className='jwel' src={j9} alt="image1" />
      <div className='ratee'>
      <h3>Brilliance Bead</h3>
      <div className='star-line'>
        <p>$130</p>
        <p id='rate'>4.5<AiFillStar/></p>
        </div>
      </div>
    </div>
    <div className='dapa' onClick={goProduct}>
      <img className='jwel' src={j10} alt="image1" />
      <div className='ratee'>
      <h3>Brilliance Bead</h3>
      <div className='star-line'>
        <p>$130</p>
        <p id='rate'>4.5<AiFillStar/></p>
        </div>
      </div>
    </div>
  </Carousel>
  </div>
</div>
<div>
  <h2  className='title'>Trending products</h2>
  <div className='box-row1'> 
  <Carousel
        autoPlay
        autoPlaySpeed={2000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}  // Hide the status (pagination)
        showIndicators={false}  // Hide the indicators (dots)
        useKeyboardArrows
        emulateTouch
        stopOnHover
        swipeable
        customLeftArrow={<ChevronLeftIcon />}
        customRightArrow={<ChevronRightIcon />}
        centerMode
        centerSlidePercentage={20}
        responsive={responsive}
        className='slider_carousel'
    >
    <div className='dapa'onClick={goProduct}>
      <img className='jwel' src={j1} alt="image1" />
      <div className='ratee'>
      <h3>Brilliance Bead</h3>
      <div className='star-line'>
        <p>$130</p>
        <p id='rate'>4.5<AiFillStar/></p>
        </div>
      </div>
    </div>
    <div className='dapa' onClick={goProduct}>
      <img className='jwel' src={j2} alt="image1" />
      <div className='ratee'>
      <h3>Brilliance Bead</h3>
      <div className='star-line'>
        <p>$130</p>
        <p id='rate'>4.5<AiFillStar/></p>
        </div>
      </div>
    </div>
    <div className='dapa' onClick={goProduct}>
      <img className='jwel' src={j3} alt="image1" />
      <div className='ratee'>
      <h3>Brilliance Bead</h3>
      <div className='star-line'>
        <p>$130</p>
        <p id='rate'>4.5<AiFillStar/></p>
        </div>
      </div>
    </div>
    <div className='dapa' onClick={goProduct}>
      <img className='jwel' src={j4} alt="image1"/>
      <div className='ratee'>
      <h3>Brilliance Bead</h3>
      <div className='star-line'>
        <p>$130</p>
        <p id='rate'>4.5<AiFillStar/></p>
        </div>
      </div>
    </div>
    <div className='dapa'onClick={goProduct}>
      <img className='jwel' src={j5} alt="image1"/>
      <div className='ratee'>
      <h3>Brilliance Bead</h3>
      <div className='star-line'>
        <p>$130</p>
        <p id='rate'>4.5<AiFillStar/></p>
        </div>
      </div>
    </div>
    <div className='dapa'onClick={goProduct}>
      <img className='jwel' src={j6} alt="image1"/>
      <div className='ratee'>
      <h3>Brilliance Bead</h3>
      <div className='star-line'>
        <p>$130</p>
        <p id='rate'>4.5<AiFillStar/></p>
        </div>
      </div>
    </div >
    <div className='dapa'onClick={goProduct}>
      <img className='jwel' src={j7} alt="image1"/>
      <div className='ratee'>
      <h3>Brilliance Bead</h3>
      <div className='star-line'>
        <p>$130</p>
        <p id='rate'>4.5<AiFillStar/></p>
        </div>
      </div>
    </div>

    <div className='dapa' onClick={goProduct}>
      <img className='jwel' src={j8} alt="image1" />
      <div className='ratee'>
      <h3>Brilliance Bead</h3>
      <div className='star-line'>
        <p>$130</p>
        <p id='rate'>4.5<AiFillStar/></p>
        </div>
      </div>
    </div>
    <div className='dapa' onClick={goProduct}>
      <img className='jwel' src={j9} alt="image1"/>
      <div className='ratee'>
      <h3>Brilliance Bead</h3>
      <div className='star-line'>
        <p>$130</p>
        <p id='rate'>4.5<AiFillStar/></p>
        </div>
      </div>
    </div>
    <div className='dapa'onClick={goProduct}>
      <img className='jwel' src={j10} alt="image1"/>
      <div className='ratee'>
      <h3>Brilliance Bead</h3>
      <div className='star-line'>
        <p>$130</p>
        <p id='rate'>4.5<AiFillStar/></p>
        </div>
      </div>
    </div>
  </Carousel>
  </div>
</div>
    </div>
    </div>
</div>
<div className='last'>
<Logos/>
<Address/>
</div>
    </motion.div>

  )
}

export default Shop