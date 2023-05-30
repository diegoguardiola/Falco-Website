import React, { useState } from 'react';
import './about.scss';
import { images } from '../../constants';
import MapLocation from '../../components/map';

const About = () => {
  const [active, setActive] = useState(false);

  const onChange = isVisible => {
    if (isVisible) {
      setActive(true);
    }
  };

  return (
      <div className='about-container'>    
        <h1>About Us</h1>
        <div className='our-values'>
            <div className='value1'>
                <img src={images.satisfaction} alt='gear' />
                <h2>
                    Customer Satisfaction & Loyalty
                </h2>
                <p>
                    Customer satisfaction and loyalty are at the core of our business and our top priority. It is our philosophy that actions speak louder than words, and we do everything that we can to help you accomplish your goals.
                </p>
            </div>
            <div className='value2'>
                <img src={images.transparency} alt='gear' />
                <h2>
                    Dedication and Transparency
                </h2>
                <p>
                We are dedicated to providing top-notch services at competitive prices. We seek to build strong, enduring relationships with our customers based on our ability to surpass their expectations.
                </p>
            </div>
            <div className='value3'>
                <img src={images.community} alt='gear' />
                <h2>
                    Professionalusm and Community
                </h2>
                <p>
                We observe the highest standards for all of our clients, employees, and other stakeholders. We offer high-quality products and services and measure our success in terms of our clients’ satisfaction. We are dedicated to supporting you and your business wherever it takes you.
                </p>
            </div>
        </div>
        <div className='Map'>
            <MapLocation />
        </div>
      </div>
  );
};

export default About;
