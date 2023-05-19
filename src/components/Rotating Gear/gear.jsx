import React, { useState } from 'react';
import './gear.scss';

const Gear = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (id) => {
    setActiveItem(id);
  };

  const renderItems = () => {
    let items = [];

    for (let i = 0; i < 5; i++) {
      items.push(
        <div 
          key={i} 
          className={`circle-item ${activeItem === i ? 'active' : ''}`} 
          onClick={() => handleItemClick(i)}>
        </div>
      );
    }

    return items;
  };

  return (
    <div className="wrapper">
      <div className="circle-container">
        {renderItems()}
      </div>
      {activeItem !== null && <div className="circle-text">Item {activeItem + 1} clicked</div>}
    </div>
  );
};


export default Gear;
