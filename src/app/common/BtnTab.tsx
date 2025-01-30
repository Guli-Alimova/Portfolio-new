import React from 'react'


interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset'; // Button type for form handling
  customLink?: string; // Optional custom link
}

const BtnTab: React.FC<ButtonProps> = ({ children})=>{
  return (
    <div className='pt-[16px] pb-[20px] py-[23px] bg-[#E1E8EF] rounded-[20px] font-raleway font-semibold text-xs leading-5 text-center text-primary w-[80px] h-[80px]'>
{children}
    </div>
  )
}

export default BtnTab