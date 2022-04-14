import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { logo } from 'assets/images';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__top"></div>
        <div className="header__wrapper">
          <div className="header__logo">
            <img src={logo} alt="logo" />
          </div>
          <Nav>
            <NavItem>
              <NavLink active href="#">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Auto Homepage</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Sales</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">CRM</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Electronic office</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Cloud ERP</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">SSL</NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
