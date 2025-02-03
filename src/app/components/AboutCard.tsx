import React from 'react'
import { ReactNode } from 'react';
interface AboutMe {
  id: number;
  title: string;
  svg: ReactNode;
  about: string;
}
const AboutCard = ({ item }: { item: AboutMe }) => {
  return (
    <div className='px-[3px] py-[15px] bg-[#FFEBD1] rounded-xl'>
       <div className='flex items-center'><span>{item.svg}</span> <h3 className='pl-2.5 poppins font-semibold text-2xl leading-5 text-primary'>{item.title}</h3></div>
       <p className='raleway font-normal text-sm  text-primary'>{item.about}</p>
    </div>
  )
}

export default AboutCard