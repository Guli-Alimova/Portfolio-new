import React from 'react';
import { ReactNode } from 'react';

interface AboutMe {
  id: number;
  title: string;
  svg: ReactNode;
  about: string;
}

const AboutCard = ({ item }: { item: AboutMe }) => {
  return (
    <div className='p-4 sm:p-5 bg-[#FFEBD1] rounded-xl w-full max-w-[303px] h-full'>
      <div className='flex items-center gap-2'>
        <span>{item.svg}</span>
        <h3 className='poppins font-semibold text-lg sm:text-base leading-5 text-primary'>{item.title}</h3>
      </div>
      <p className='raleway font-normal text-xs sm:text-sm text-primary mt-2'>
        {item.about}
      </p>
    </div>
  );
};

export default AboutCard;
