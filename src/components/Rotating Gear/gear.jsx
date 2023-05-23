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
          <div className='Industrial-Automation'>
            <ul className='about-us'>
              <li>
                <div>
                  <h3>Complete Automation</h3>
                  <p>We offer 100% turnkey capability and possess the resources required to build a fully automated system, both on-site and in-house. Our control services include design-and-build, troubleshooting, programming or any combination of the above. We fully comply with industry regulations to help you achieve efficiency through automation.</p>
                </div>
              </li>
              <li>
                <div>
                  <h3>System Integration</h3>
                  <p>We offer top-notch and cutting-edge solutions in design, controls software, laser, high-precision equipment. We have a highly skillful staff dedicated to fulfilling your integration demands. We work with all the leading automation manufacturers to provide seamless integration for clients. </p>
                </div>
              </li>
              <li>
              <div>
                  <h3>Industrial Robotics</h3>
                  <p>Our expert mechanical, electrical and control engineers design and implement custom robotic systems fully in-house, from concept through final testing. A well-designed robotic system must fit into your manufacturing process flow while maximizing the robotic potential. </p>
                </div>
              </li>
            </ul>
          </div>
        );
        break;
      case 1:
        setCustomMessage(
          <div className='Validation-Documentation'>
            <ul className='about-us'>
              <p>We are fully experienced to develop turnover packages that comply with FDA GMP, ISO and other regulatory requirements. We provide comprehensive GMP documentation throughout every phase of our design, build and installation process to ensure quality control both for compliance as well as to improve client’s internal processes. We have hands-on experience in the validation of utilities, computers, process, equipment, instruments, automation systems and much more for the pharmaceutical and biotech industries</p>
              <h3>
                Validation Documentation
              </h3>
              <li>Design Documentation</li>
              <li>Traceability Matrix</li>
              <li>User Requirements Specifications (URS)</li>
              <li>Hardware Design Specification (HDS)</li>
              <li>Software Design Specification (SDS)</li>
              <li>Mechanical Drawings, Electrical Schematic, Pneumatic Schematic, and Software Source Code</li>
              <li>Operating Manual (w/ troubleshooting, spare parts, PM, etc.)</li>
              <li>OEM Manuals</li>
              <li>Data Reporting & Database Integration</li>
            </ul>
            <ul className='about-us'>
              <h3>
                Project Documentation
              </h3>
              <li>Project Gantt Charts</li>
              <li>Project Action Items Lists</li>
            </ul>
            <ul className='about-us'>
              <h3>
              Testing & Qualification
              </h3>
              <li>Factory Acceptance Testing (FAT)</li>
              <li>Site Acceptance Testing (SAT)</li>
              <li>Design Qualification (DQ)</li>
              <li>Installation Qualification (IQ)</li>
              <li>Operational Qualification (OQ)</li>
              <li>Performance Qualification (PQ)</li>
            </ul>
          </div>
        );
        break;
      case 2:
        setCustomMessage(
          <div className='Field-Service'>
            <h3>
              Commissioning
            </h3>
            <p>Commissioning your equipment the right way is critical to the success of your business. Whether you are looking to build new facilities, extend your existing ones or re-installing your machines, handing the task to experienced hands such as ours at Falco Automation goes a long way in ensuring successful and sustainable execution.</p>
            <p>Given the delicate nature of biotech equipment, we make it a point to evaluate your systems individually and analyze their contribution to your business processes. Once we have a clear view, we develop a commissioning plan that will keep downtime to the minimum while ensuring you maintain the highest levels of control and operational standards. Once you entrust us with the commissioning responsibilities, we deliver our services in accordance with the best practices being followed globally. You can be rest assured that your machinery will be in the best possible shape post commissioning and your business will have maximum efficiency at minimum cost.</p>
            <h3>
              Preventative Maintenance
            </h3>
            <p>Regular maintenance improves the efficiency and life of your equipment. By replacing and maintaining equipment components, it prevents small components from damaging the costly industrial machinery, interruption of operation and possible contamination of products that may be catastrophic for your workers’ safety, your business’s reputation and revenue. Our highly detailed engineers can provide you with reminders and develop a plan for you to minimize equipment downtime. Having Falco takes care of PM for you is one less thing for you to worry about, so you can focus on the more important aspects of your business.</p>
          </div>
        )
        break;
        case 3:
          setCustomMessage(
            <div className='Engineering-OEM'>
              <h3>
              Consultation
              </h3>
              <p>Businesses small or big all will require consultation service at one point or another. You may have an idea in mind that could be potentially beneficial to your business, but don’t know the feasibility or the cost effectiveness. Our industry leading experts will do the research, calculations and design for you as the first step in realizing your concept. Whether you want to implement yourself or have us take care of everything, we have all the engineering experts you need, automation, mechanical, electrical and software. Even if you have all these experts in house, we have specialists who are skilled at all these fields 
                and are able to devise unique solutions because they are able to see the full picture of how every piece of the puzzle work together. We are well versed in the latest innovation, research and technology from the automation industry. Our specialists additionally support both regional and global remediation and continuous improvement projects. Whatever your need, our consultants provide skilled support and knowledge you require for a successful business.</p>
              <h3>
                Design
              </h3>
              <p>A well-designed, efficient, reliable and sustainable engineering solution requires diverse engineering skills. You need qualified engineers from mechanical and electrical engineering backgrounds to work together to develop a plan. In this fast paced, Information Technology driven world which requires devices to not only be automated but to also communicate among themselves seamlessly. The involvement of computer engineers and electronic engineers is equally critical to a project’s success.</p>
              <p>At Falco Automation, we have a team of engineers experienced in designing and delivering engineering solutions to a number of clients with global footprint. Our end-to-end services mean you do not have to recruit and monitor professionals separately and spend time and effort coordinating them and resolving the inevitable friction between them.</p>  
              <p>Our practice conforms to global standards and we constantly evolve them to drive synergies emanating from our engineers with diverse skills. Our services are not limited to design, construction and delivery. We believe in fostering deep rooted relationships with our clients and we implement the best practices from the industry in order to maximize the throughput and lifecycle of your equipment.</p>
            </div>
          )
          break;
          case 4:
            setCustomMessage(
              <div className='Building-Automation'>
                <h3>
                  SCADA Integration</h3>
                <p>
                  Unleash the true potential of your facility's infrastructure with our expert SCADA integration services. Our skilled engineers will connect and synchronize all your critical systems, allowing you to monitor and control them from a centralized interface. With real-time data acquisition, analysis, and visualization, you'll have unparalleled insight into your building's operations, empowering you to make informed decisions swiftly and effectively.
                </p>
                <h3>HVAC Controls</h3>
                <p>
                  Experience the epitome of climate control precision with our advanced HVAC control solutions. Say goodbye to energy wastage and fluctuating temperatures. Our state-of-the-art systems intelligently adapt to changing conditions, optimizing heating, ventilation, and air conditioning to provide ultimate comfort while minimizing energy consumption. Enjoy improved air quality, reduced costs, and a greener footprint effortlessly.
                </p>
                <h3>Reliability and Support</h3>
                <p>
                At our core, we believe in delivering unmatched reliability and unwavering support to our clients. Our highly skilled technicians are available round the clock, ready to address any concerns or issues that may arise. We're committed to keeping your systems running smoothly, maximizing uptime, and minimizing disruptions, so you can focus on your core operations without worrying about the technicalities.
                </p>
              </div>
            )
            break;
            case 5:
              setCustomMessage(
                <div className='Calibration'>
                  <h3>Comprehensive Calibration Solutions</h3>
                  <p>
                    Our state-of-the-art facility offers a wide range of calibration services, catering to diverse industries such as manufacturing, engineering, laboratories, healthcare, and more. From electrical and temperature instruments to pressure gauges and mechanical devices, we calibrate them all with unparalleled attention to detail.
                  </p>
                  <h3> Expert Team of Technicians</h3>
                  <p>
                    Our highly skilled and experienced technicians are dedicated to maintaining the highest standards of accuracy. They possess in-depth knowledge of the latest calibration methodologies, industry regulations, and equipment specifications. Trust their expertise to optimize your instruments' performance.
                  </p>
                  <h3>Traceable Certifications</h3>
                  <p>
                    Rest assured that our calibration services come with traceable certifications, adhering to industry standards. Our comprehensive reports provide detailed documentation of each calibration, allowing you to maintain compliance, meet regulatory requirements, and ensure the accuracy of your measurements.
                  </p>
                </div>
              )
              break;
      default:
        setCustomMessage('Clicked an item');
    }
  };

  const renderItems = () => {
    let items = ['Industrial Automation', 'Validation & Documentation', 'Field Service',
      'Engineering & OEM', 'Building Automation', 'Calibration'];

    return items.map((item, index) => (
      <div
        key={index}
        className={`circle-item ${activeItem === index ? 'active' : ''}`}
        style={{
          left: `calc(50% + 250px * ${Math.cos((index * 60 * Math.PI) / 180)})`,
          top: `calc(50% + 250px * ${Math.sin((index * 60 * Math.PI) / 180)})`,
        }}
        onClick={() => handleItemClick(index)}
      >
        <h4 className={activeItem === index ? 'active' : ''}>{item}</h4>
      </div>
    ));
  };

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
