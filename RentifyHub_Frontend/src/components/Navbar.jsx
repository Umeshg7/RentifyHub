import React, { useState, useEffect, useRef } from 'react';
import logo from '/logo1.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Close dropdown if click is outside
      }
    };

    // Attach the event listener to the document
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <a href="/" className="text-lg">
          Home
        </a>
      </li>
      <li tabIndex={0}>
        <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <span className="text-lg cursor-pointer">My products</span>
          <span>{isDropdownOpen ? '▲' : '▼'}</span>
        </div>
        {isDropdownOpen && (
          <ul
            ref={dropdownRef} // Reference the dropdown menu
            className="p-4 bg-white shadow-lg rounded absolute z-[1] mt-2"
          >
            <li>
              <a href="/products">All</a>
            </li>
            <li>
              <a href="/vegetables">Vegetables</a>
            </li>
            <li>
              <a href="/fruits">Fruits</a>
            </li>
            <li>
              <a href="/grains">Grains</a>
            </li>
            <li>
              <a href="/eggandmeat">Fresh Meat</a>
            </li>
            <li>
              <a href="/drinks">Fresh Drinks</a>
            </li>
          </ul>
        )}
      </li>
      <li>
        <a href="/order" className="text-lg">
          Order Tracking
        </a>
      </li>
      <li>
        <a href="/aboutus" className="text-lg">
          About us
        </a>
      </li>
    </>
  );

  return (
    <header className="max-w-screen-2xl container mx-auto fixed top-0 right-0 transition-all duration-300 ease-in-out bg-grey1 shadow-lg">
      <div className="navbar px-8 py-6">
        <div className="navbar-start lg:flex lg:items-center" style={{ paddingLeft: '5px' } }>
          <a href='/'>
            <img src={logo} alt='logo' style={{ width: 'auto', height: '90px' }} />
          </a>
          <div className="dropdown lg:hidden ml-auto">
            <button
              tabIndex={0}
              className="btn btn-ghost"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
            {isDropdownOpen && (
              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-60">
                {navItems}
              </ul>
            )}
          </div>
        </div>

        <div className="navbar-center lg:flex lg:items-center hidden">
          <ul className="menu menu-horizontal px-4">
            {navItems}
          </ul>
        </div>

        <div className="navbar-end lg:flex lg:items-center hidden" style={{ paddingRight: '60px' }}>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="input input-bordered border-2 border-green w-60 md:w-auto text-lg"
            />
          </div>

          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle mr-4 lg:flex items-center justify_center ml-2 mr-2">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 a2 2 0 014 0z" />
              </svg>
              <span className="badge badge-sm indicator-item">0</span>
            </div>
          </div>

          <button className="btn flex items-center gap-3 rounded-full px-8 py-3 bg-green text-white text-lg">
             Login Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
