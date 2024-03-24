import React from 'react'
import {Box ,Tab} from "@mui/material"
import image1 from '../../Images/bracelet.jpeg'
import image2 from '../../Images/image2.jpeg'
import image3 from '../../Images/image3.jpeg'
import image4 from '../../Images/image4.jpeg'
import tab20f1 from '../../Images/tabs2of1.jpg'
import tab20f2 from '../../Images/tabs2of2.jpg'
import tab20f3 from '../../Images/tabs2of3.jpg'
import tab20f4 from '../../Images/tabs2of4.jpg'
import {TabContext, TabList, TabPanel} from '@mui/lab'
import { useNavigate } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../../Inserts/Tabs/Tabs.css"
import {AiFillStar } from "react-icons/ai";
const Tabs = () => {

    const[value,setValue]=React.useState("1")
    const handleChange=(event:React.SyntheticEvent ,newValue:string)=>{
      setValue(newValue)
    }
    const navigate=useNavigate()
    function goProduct(){
        navigate('/ProductDetails')
      }
      
  return (
    <Box>
    <TabContext value={value} >
      <Box sx={{borderBottom:1, borderColor:"divider",marginTop:"50px", paddingTop:"20px"}}>
        <TabList aria-label='Tabs example' centered textColor="secondary" indicatorColor="secondary"
         onChange={handleChange} sx={{width:"100%"}} >
          <Tab sx={{'@media (max-width: 800px)': {marginLeft:"-70px",fontSize:"13px"},
          paddingTop:"20px",'&:hover': {backgroundColor: 'white',color:"#9f73ab"}}} label="TRENDING NOW" value="1"/>
          <Tab sx={{'@media (max-width: 800px)': {marginLeft:"-20px",fontSize:"13px"}, 
          paddingTop:"20px",'&:hover': {backgroundColor: 'white',color:"#9f73ab"}}}  label="TOP SALE" value="2"/>
          <Tab sx={{'@media (max-width: 800px)': {marginLeft:"-40px",fontSize:"13px"},
          paddingTop:"20px",'&:hover': {backgroundColor: 'white',color:"#9f73ab"}}}  label="BEST SALE" value="3"/>
        </TabList>
      </Box>
      <TabPanel value='1' sx={{marginTop:"-80px"}}>
      <section className='wholegrid'  style={{ overflowY: 'auto' }}>
          <div className='grid' onClick={goProduct}>
            <img className='img' src={image1} alt="image3" />
            <div className='footer'>
              <h4>Brilliance Bead</h4>
              <div className='cost'style={{marginTop:"20px",marginLeft:"-10px"}}>
                <p>$130</p>
                <p className='rate'>4.5<span className='star'><AiFillStar/></span></p>
              </div>
              </div>
          </div>
          <div className='grid' onClick={goProduct} >
            <img className='img' src={image2} alt="image3"/>
            <div className='footer'>
              <h4>Bulova Jewelry</h4>
              <div className='cost' style={{marginTop:"20px",marginLeft:"-10px"}}>
                <p>$ 150</p>
                <p className='rate'>3.9<span className='star'><AiFillStar/></span></p>
              </div>
              </div>
          </div>
          <div className='grid' onClick={goProduct}>
            <img className='img' src={image3} alt="image3" />
            <div className='footer'>
              <h4>Cultured Freshwater Pearl</h4>
              <div className='cost'style={{marginTop:"20px",marginLeft:"-10px"}}>
                <p>$ 190</p>
                <p className='rate'>4.7<span className='star'><AiFillStar/></span></p>
              </div>
              </div>
          </div>
          <div className='grid' onClick={goProduct}>
            <img className='img' src={image4} alt="image3" />
            <div className='footer'>
              <h4>Customize Gemstone Ring</h4>
              <div className='cost'style={{marginTop:"20px",marginLeft:"-10px"}}>
                <p>$ 70</p>
                <p className='rate'>4.2 <span className='star'><AiFillStar/></span></p>
              </div>
              </div>
          </div>
        </section>
      </TabPanel>
      <TabPanel value='2' sx={{marginTop:"-80px"}}>
      <section className='wholegrid'  style={{ overflowY: 'auto' }}>
          <div className='grid' onClick={goProduct}>
            <img className='img' src={tab20f1} alt="image3" />
            <div className='footer'>
              <h4>Diamond Layered Oval</h4>
              <div className='cost'style={{marginTop:"20px",marginLeft:"-10px"}}>
                <p id='price'>$200</p>
                <p className='rate'>4.6<span className='star'><AiFillStar/></span></p>
              </div>
              </div>
          </div>
          <div className='grid' onClick={goProduct}>
            <img className='img' src={tab20f2} alt="image3"/>
            <div className='footer'>
              <h4>Diamond Octagonal Frame</h4>
              <div className='cost'style={{marginTop:"20px",marginLeft:"-10px"}}>
                <p>$ 170</p>
                <p className='rate'>3.9<span className='star'><AiFillStar/></span></p>
              </div>
              </div>
          </div>
          <div className='grid' onClick={goProduct}>
            <img className='img' src={tab20f3} alt="image3"/>
            <div className='footer'>
              <h4>Enchanted Sisney Mulan</h4>
              <div className='cost' style={{marginTop:"20px",marginLeft:"-10px"}}>
                <p id='price'>$ 110</p>
                <p className='rate'>4<span className='star'><AiFillStar/></span></p>
              </div>
              </div>
          </div>
          <div className='grid' onClick={goProduct}>
            <img className='img' src={tab20f4} alt="image3" />
            <div className='footer'>
              <h4>Platinum Layered Oval</h4>
              <div className='cost' style={{marginTop:"20px",marginLeft:"-10px"}}>
                <p id='price'>$ 90</p>
                <p className='rate'>4.8 <span className='star'><AiFillStar/></span></p>
              </div>
              </div>
          </div>
        </section>
      </TabPanel>
      <TabPanel value='3' sx={{marginTop:"-80px"}}>
      <section className='wholegrid'  style={{ overflowY: 'auto' }}>
          <div className='grid' onClick={goProduct}>
            <img className='img' src={image1} alt="image3"/>
            <div className='footer'>
              <h4>Brilliance Bead</h4>
              <div className='cost'style={{marginTop:"20px",marginLeft:"-10px"}}>
                <p>$130</p>
                <p className='rate'>4.5<span className='star'><AiFillStar/></span></p>
              </div>
              </div>
          </div>
          <div className='grid' onClick={goProduct}>
            <img className='img' src={image2} alt="image3" />
            <div className='footer'>
              <h4>Bulova Jewelry</h4>
              <div className='cost' style={{marginTop:"20px",marginLeft:"-10px"}}>
                <p>$ 150</p>
                <p className='rate'>3.9<span className='star'><AiFillStar/></span></p>
              </div>
              </div>
          </div>
          <div className='grid' onClick={goProduct}>
            <img className='img' src={image3} alt="image3" />
            <div className='footer'>
              <h4>Cultured Freshwater Pearl</h4>
              <div className='cost' style={{marginTop:"20px",marginLeft:"-10px"}}>
                <p>$ 190</p>
                <p className='rate'>4.7<span className='star'><AiFillStar/></span></p>
              </div>
              </div>
          </div>
          <div className='grid' onClick={goProduct}>
            <img className='img' src={image4} alt="image3" />
            <div className='footer'>
              <h4>Customize Gemstone Ring</h4>
              <div className='cost'  style={{marginTop:"20px",marginLeft:"-10px"}}>
                <p>$ 70</p>
                <p className='rate'>4.2 <span className='star'><AiFillStar/></span></p>
              </div>
              </div>
          </div>
        </section>
      </TabPanel>
    </TabContext>
  </Box>
  )
}

export default Tabs