import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import logo from '../images/easySplit_logo.png';
import photo from '../images/photo.jpg'

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className='bg-gray-900 text-white shadow-lg' >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2'>
        <div className='flex items-center justify-between h-[100px]'>
          <div className='flex items-center ml-[-25%]'>
            <Link to='/'>
              <img src={logo} className='h-30 w-[200px] ' alt='EasySplit Logo' />
            </Link>
            <div className='text-white ml-[-15%] font-bold text-3xl'>EasySplit</div>
          </div>
          <div className='relative mr-[-20%]'>
            <button
              onClick={toggleDropdown}
              className='flex items-center text-sm focus:outline-none'
            >
              <img
                className='h-[50px] w-[50px] rounded-full'
                src={photo}
                alt='Profile'
              />
              <FaChevronDown className='ml-2 h-5 w-5' />
            </button>
            {dropdownOpen && (
              <div className='absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5'>
                <Link
                  to='/dashboard/profile'
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                >
                  Profile
                </Link>
                <Link
                  to='/dashboard/settings'
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                >
                  Settings
                </Link>
                <Link
                  to='/'
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





