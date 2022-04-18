import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../../assets/Banner/Banner-1.jpg'
import banner2 from '../../../../assets/Banner/Banner-2.jpg'
import banner3 from '../../../../assets/Banner/banner-3.jpg'
const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    }
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className=''>
        <Carousel.Item>
          <img  style={{height:'400px'}}
            className="d-block w-100 "
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5> I wil take your photo professionally</h5>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img  style={{height:'400px'}}
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h5> You can Hire me as a professional photographer</h5>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img  style={{height:'400px'}}
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h5>I will your photo deliver on time </h5>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;