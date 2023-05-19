import React, { useState } from 'react';
import './gear.scss';
import { images } from '../../constants';

const Gear = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (id) => {
    setActiveItem(id);
  };

  const renderItems = () => {
    let items = ['Industrial Automation', 'Validation', 'Field Service', 
                'Engineering & OEM', 'Building Automation' ];

    return items.map((item, index) => (
      <div
        key={index}
        className={`circle-item ${activeItem === index ? 'active' : ''}`}
        style={{
          left: `calc(40% + 300px * ${Math.cos((index * 72 * Math.PI) / 180)})`,
          top: `calc(40% + 300px * ${Math.sin((index * 72 * Math.PI) / 180)})`,
        }}
        onClick={() => handleItemClick(index)}
      >
        <h3>{item}</h3>
      </div>
    ));
    }
  

  return (
    <div className="wrapper">
      <div className="circle-container">
        <img src={images.gear} alt="gear" className="gear-img" />
        {renderItems()}
      </div>
      {activeItem !== null && <div className="circle-text">Item {activeItem + 1} clicked</div>}
    </div>
  );
};


export default Gear;
