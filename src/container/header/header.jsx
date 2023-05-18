import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { images } from '../../constants'
import './header.scss'

export default function Header() {
  return (

  <div className='image-wrapper'>
    <Carousel>
      <Carousel.Item>
        <div>
            <img src={images.img1} alt='automation assembly line'/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
          <div>
              <img src={images.img2} alt='bottle automation'/>
          </div>
      </Carousel.Item>
      <Carousel.Item>
          <div>
              <img src={images.img3} alt='tech and robotic arm'/>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
              <img src={images.img4} alt='welder welding'/>
          </div>
        </Carousel.Item>
    </Carousel>
  </div>
  );
}; 

