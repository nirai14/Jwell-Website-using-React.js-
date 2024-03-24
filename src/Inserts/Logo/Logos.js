import React from 'react'
import '../../Inserts/Logo/Logo.css'
import Logo1 from '../../Images/Logo1.svg'
import Logo2 from '../../Images/Logo2.svg'
import Logo3 from '../../Images/Logo3.svg'
import Logo4 from '../../Images/Logo4.svg'
import Logo5 from '../../Images/Logo5.svg'
import Logo6 from '../../Images/Logo6.svg'
import Logo7 from '../../Images/Logo7.svg'
import Logo8 from '../../Images/Logo8.svg'
import Logo9 from '../../Images/Logo9.svg'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const Logos = () => {
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
            items: 4,
        },
        tablet: {
            breakpoint: { max: 768, min: 425 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 425, min: 0 },
            items: 1,
        },
    };
    const isMobile = window.innerWidth <= 425;
    return (
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
        centerSlidePercentage={isMobile ? 100 : 20}
        responsive={responsive}
        className='slider_carousel'
     
    >
            <div className="card-div">
                <img src={Logo1} alt='apoorva' className='slider_img' />
            </div>
            <div className="card-div">
                <img src={Logo2} alt='apoorva' className='slider_img' />
            </div>
            <div className="card-div">
                <img src={Logo3} alt='apoorva' className='slider_img' />
            </div>
            <div className="card-div">
                <img src={Logo4} alt='apoorva' className='slider_img' />
            </div>
            <div className="card-div">
                <img src={Logo5} alt='apoorva' className='slider_img' />
            </div>
            <div className="card-div">
                <img src={Logo6} alt='apoorva' className='slider_img' />
            </div>
            <div className="card-div">
                <img src={Logo7} alt='apoorva' className='slider_img' />
            </div>
            <div className="card-div">
                <img src={Logo8} alt='apoorva' className='slider_img' />
            </div>
            <div className="card-div">
                <img src={Logo9} alt='apoorva' className='slider_img' />
            </div>
        </Carousel>
    );
}

export default Logos