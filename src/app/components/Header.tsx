import React from 'react';


const Header = () => {
  return (
    <div className='container'>
      <div className='py-4 sm:py-6 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-center'>
          <h3 className='pacifico font-medium text-xl sm:text-2xl'>
            Alimova <span className='gradient-text'>Gulbahor</span>
          </h3>
      </div>
    </div>
  );
};

export default Header;