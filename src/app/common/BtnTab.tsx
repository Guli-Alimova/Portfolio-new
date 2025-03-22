import React from 'react'


interface ButtonProps {
  
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset'; // Button type for form handling
  customLink?: string; 
  className?:string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  
}

const BtnTab: React.FC<ButtonProps> = ({ children, onClick, className})=>{
  return (
    <button  onClick={onClick}    className={`pt-[16px] pb-[20px] py-[23px] bg-[#E1E8EF] rounded-[20px] raleway font-semibold text-xs leading-5 text-center  w-full h-full hover:gradient-bg ${className}`}
    >
{children}
    </button>
  )
}

export default BtnTab