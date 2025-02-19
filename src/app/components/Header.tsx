import React from 'react';
import { Mood } from '../common/svg';

const Header = () => {
  return (
    <div className='bg-[#EBF2FA]'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center text-center'>
          <h3 className='pacifico font-medium text-xl sm:text-2xl'>
            Alimova <span className='gradient-text'>Gulbahor</span>
          </h3>
          {/* <button className='p-4 sm:p-[19px] rounded-full bg-[#EBF2FA] border drop-shadow-lg'>
            <Mood />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Header;