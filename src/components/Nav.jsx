import React, { useState } from 'react';

function Nav() {
  // State to manage the menu open/close
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-neutral-900 p-5'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-3xl font-bold text-white'>Portfolio</h1>

        {/* Hamburger Menu Button (visible only on mobile) */}
        <button
          onClick={toggleMenu}
          className='text-white block md:hidden focus:outline-none'
        >
          {/* Hamburger Icon */}
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Navigation Links (visible on larger screens) */}
        <ul className='hidden md:flex md:items-center md:space-x-6 text-white '>
          <li className='mr-5'>
            <a href='#home' className='hover:text-gray-400'>
              Home
            </a>
          </li>
          <li className='mr-5'>
            <a href='#about' className='hover:text-gray-400'>
              About
            </a>
          </li>
          <li className='mr-5'>
            <a href='#project' className='hover:text-gray-400'>
              Project
            </a>
          </li>
          <li className='mr-5'>
            <a href='#contact' className='hover:text-gray-400'>
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu (visible only when the hamburger is clicked) */}
      {isOpen && (
        <div className='md:hidden'>
          <ul className='space-y-4 text-white text-xl text-center'>
            <li>
              <a href='#home' onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href='#about' onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href='#project' onClick={toggleMenu}>
                Project
              </a>
            </li>
            <li>
              <a href='#contact' onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
