import React from 'react'


interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset'; // Button type for form handling
  customLink?: string; // Optional custom link
}

const BtnTab: React.FC<ButtonProps> = ({ children})=>{
  return (
    <button className='pt-[16px] pb-[20px] py-[23px] bg-[#E1E8EF] rounded-[20px] raleway font-semibold text-xs leading-5  text-center text-primary max-w-[80px] max-h-[80px] w-full h-full'>
{children}
    </button>
  )
}

export default BtnTab