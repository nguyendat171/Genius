import React, { useState } from 'react';
import classnames from 'classnames';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('1');
  return (
    <div className="gallery">
      <div className="gallery__left">
        <div>
          Asia IT <br /> Market Place
        </div>
      </div>
      <div className="nav-home gallery__rigth">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => setActiveTab('1')}
            >
              Now
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => setActiveTab('2')}
            >
              Future
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <ul>
              <li>
                <div className="number">6</div>
                <div className="text">different IT Software Networks</div>
              </li>
              <li>
                <div className="number">32</div>
                <div className="text">partners</div>
              </li>
              <li>
                <div className="number">4</div>
                <div className="text">countries</div>
              </li>
            </ul>
          </TabPane>
          <TabPane tabId="2">
            <ul>
              <li>
                <div className="number">6+</div>
                <div className="text">different IT Software Networks</div>
              </li>
              <li>
                <div className="number">32+</div>
                <div className="text">partners</div>
              </li>
              <li>
                <div className="number">4+</div>
                <div className="text">countries</div>
              </li>
            </ul>
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};

export default Gallery;
