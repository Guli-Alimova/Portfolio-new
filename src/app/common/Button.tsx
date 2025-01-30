import React from 'react'

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset'; // Button type for form handling
  customLink?: string; // Optional custom link
}

const Button: React.FC<ButtonProps> = ({ children}) => {
  return (
    <a className='px-[25px] py-[20px] bg-secondary rounded-[8px]'>
   {children}
    </a>
  )
}

export default Button
