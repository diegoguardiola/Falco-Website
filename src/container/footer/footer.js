import React, { useState } from 'react';
import './footer.scss';

const Footer = () => {
  const [active, setActive] = useState(false);

  const onChange = isVisible => {
    if (isVisible) {
      setActive(true);
    }
  };

  return (
      <div className='footer-wrapper'>
        <div className='our-values'>
            <div className='value1'>
                <h2>
                    About
                </h2>
            </div>
            <div className='value2'>
                <h2>
                    Locations
                </h2>
            </div>
        </div>
      </div>
  );
};

export default Footer;
