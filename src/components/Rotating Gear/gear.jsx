import React, { useState } from 'react';
import './gear.scss';

const Gear = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="circular-object">
      <div
        className={`section ${activeSection === 'section1' ? 'active' : ''}`}
        onClick={() => handleSectionClick('section1')}
      >
        Section 1
      </div>
      <div
        className={`section ${activeSection === 'section2' ? 'active' : ''}`}
        onClick={() => handleSectionClick('section2')}
      >
        Section 2
      </div>
      <div
        className={`section ${activeSection === 'section3' ? 'active' : ''}`}
        onClick={() => handleSectionClick('section3')}
      >
        Section 3
      </div>
      <div
        className={`section ${activeSection === 'section4' ? 'active' : ''}`}
        onClick={() => handleSectionClick('section4')}
      >
        Section 4
      </div>
      <div className="text-display">
        {activeSection && <p>{activeSection} clicked!</p>}
      </div>
    </div>
  );
};

export default Gear;
