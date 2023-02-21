import React, { useState } from 'react';
import { MenuItem } from 'types';
import { SlArrowRight } from 'react-icons/sl';
import { TiFlowChildren } from 'react-icons/ti';
import { NavLink } from 'react-router-dom'

const NavItem: React.FC<MenuItem> = ({ link = '', label, subItems, isActive }) => {
  const [active, setActive] = useState(isActive);
  return (
    <li>
      {subItems ? (
        <>
          <button data-testid="arrow-btn" className={`nav-button ${active ? 'active' : ''}`} onClick={() => setActive(!active)}>
            <TiFlowChildren className='text-xl' />
            {label}
            <SlArrowRight className={`nav-arrow ${active ? 'rotate-90' : ''}`} />
          </button>
          <ul className={`navigation ${active ? '' : 'hidden'}`}>
            {subItems.map((item, index) => (
              <NavItem {...item} key={index} />
            ))}
          </ul>
        </>
      ) : (
        <NavLink className='nav-button' to={link}>
          {label}
        </NavLink>
      )}
    </li>
  );
};

export default NavItem;
