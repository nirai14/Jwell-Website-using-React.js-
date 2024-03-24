import React from 'react'
import { Grid } from "@mui/material";
import { FaPhoneAlt} from 'react-icons/fa'
import { MdLocationOn } from "react-icons/md"
import { IoMailSharp} from "react-icons/io5"
const Box= () => {
  return (
<>
<Grid container my={5}  sx={{textAlign:"center",justifyContent:"Center"}}>
    <Grid Item xs={10} sm={5} md={3} sx={{marginLeft:"15px"}} >
    <div className='location'>
            <h2><FaPhoneAlt/></h2>
            <h4>Call Us</h4>
            <h5>1 800 915 6270</h5>
            <h5>1 514 733 2010</h5>
          </div>
    </Grid>
    <Grid Item xs={10} sm={5} md={3} sx={{marginLeft:"15px"}}>
    <div className='location'>
            <h2><MdLocationOn/></h2>
            <h4>Our Location</h4>
            <h5>7415 Transcanadienne, Suite 100 St.</h5>
              <h5>Laurent, Quebec, Canada H45T 1Z22</h5>
          </div>
    </Grid>
    <Grid Item xs={10} sm={5}  md={3} sx={{marginLeft:"15px"}}>
    <div className='location'>
            <h2><IoMailSharp/></h2>
            <h4>Email</h4>
            <h5>surose@gmail.com</h5>
            <h5>info@surose.com</h5>
          </div>
    </Grid>
</Grid>
</>
  )
}

export default Box