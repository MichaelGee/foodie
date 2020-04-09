import React from "react";
import Logo from "./dish.svg";
const Header = () => {
  return (
    <div className='header mb-8'>
      <nav className='align-middle  bg-pink-800 p-3'>
        <div className='flex items-center text-white mr-6'>
          <img src={Logo} alt='food_logo' className='w-10 mr-1' />
          <span className='font-semibold text-3xl tracking-tight'>Foodiz</span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
