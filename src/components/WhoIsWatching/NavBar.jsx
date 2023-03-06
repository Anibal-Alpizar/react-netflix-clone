import React from 'react';
import netflixLogo from '../../assets/netflix-logo.svg';

function NavBar() {
  return (
    <nav className="flex items-center justify-between py-4 px-8 transparent-nav -mt-0 navbar">
      <img src={netflixLogo} alt="Netflix logo" className="h-8" />
    </nav>
  );
}


export default NavBar;
