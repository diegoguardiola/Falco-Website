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
        <Carousel.Caption>
          <h1>What We Do</h1>
          <p>We provide high-quality and cutting-edge solutions in automation. Whether it’s simple instruments or fully automated manufacturing lines, we have the solution for you. 
            From conceptualization to implementation – We are here for you every step of the way.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <div>
              <img src={images.img2} alt='bottle automation'/>
          </div>
          <Carousel.Caption>
            <h1>Our Commitment</h1>
            <ul>
              <li>Quality Material</li>
              <li> Expert Team</li>
              <li>Timely Delivery</li>
              <li>24/7 Support</li>
            </ul>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <div>
              <img src={images.img3} alt='tech and robotic arm'/>
          </div>
          <h1>Who We Serve</h1>
            <ul>
              <li>Pharmaceutical & Biotech</li>
              <li> Food and beverage processing</li>
              <li>Packaging & Distribution Center</li>
              <li>Automotive</li>
              <li>Pulp & paper</li>
            </ul>
        </Carousel.Item>
        <Carousel.Item>
          <div>
              <img src={images.img4} alt='welder welding'/>
          </div>
          <Carousel.Caption>
          <h1>Our Services</h1>
            <ul>
              <li>Automation</li>
              <li>Documentation</li>
              <li>Engineering Services</li>
              <li>Field Service</li>
            </ul>
          </Carousel.Caption> 
        </Carousel.Item>
    </Carousel>
  </div>
  );
}; 

