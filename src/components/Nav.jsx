import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <img className='w-1/2 mx-auto mt-8' src="../../src/assets/images/logo.png" alt="logo" />
      <ul className='mx-16 my-24 flex flex-col gap-8 text-4xl'>
        <li className='hover:text-purple-800'><NavLink to='/' className={
          ({ isActive }) => isActive ? 'text-orange-400' : ''
        }>Home</NavLink></li>
        <li className='hover:text-purple-800'><NavLink to='/category' className={
          ({ isActive }) => isActive ? 'text-orange-400' : ''
        }>Category</NavLink></li>
        <li className='hover:text-purple-800'><NavLink to='/about' className={
          ({ isActive }) => isActive ? 'text-orange-400' : ''
        }>About Us</NavLink></li>
        <li className='hover:text-purple-800'><NavLink to='/contact' className={
          ({ isActive }) => isActive ? 'text-orange-400' : ''
        }>Contact Us</NavLink></li>
      </ul>
      <div className='absolute bottom-0 w-full'>
        <hr />
        <p className='text-center my-4'>Enjoy Our Meal </p>
      </div>
    </nav>
  );
};

export default Nav;
