import React, { useState } from 'react';
import './gear.scss';
import { images } from '../../constants';

const Gear = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [customMessage, setCustomMessage] = useState('');

  const handleItemClick = (id) => {
    setActiveItem(id);
    switch (id) {
      case 0:
        setCustomMessage(
          <div>
            <ul>
              <li>Complete Automation</li>
              <li>System Integration</li>
              <li>Industial Robotics</li>
            </ul>
          </div>
        );
        break;
      case 1:
        setCustomMessage('Clicked Validation');
        break;
      // Add cases for other items as needed
      default:
        setCustomMessage('Clicked an item');
    }
  };

  const renderItems = () => {
    let items = ['Industrial Automation', 'Validation', 'Field Service', 
                'Engineering & OEM', 'Building Automation', 'Documentation' ];

    return items.map((item, index) => (
      <div
        key={index}
        className={`circle-item ${activeItem === index ? 'active' : ''}`}
        style={{
          left: `calc(50% + 300px * ${Math.cos((index * 60 * Math.PI) / 180)})`,
          top: `calc(50% + 300px * ${Math.sin((index * 60 * Math.PI) / 180)})`,
        }}
        onClick={() => handleItemClick(index)}
      >
        <h4 >{item}</h4>
      </div>
    ));
    }
  

  return (
    <div className="wrapper">
      <div className="circle-container">
        <img src={images.gear} alt="gear" className="gear-img" />
        {renderItems()}
      </div>
      {activeItem !== null && <div className="circle-text">{customMessage}</div>}
    </div>
  );
};


export default Gear;
