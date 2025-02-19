import React from 'react'

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset'; 
  customLink?: string; 
  href?:string;

}

const Button: React.FC<ButtonProps> = ({ children, href}) => {
  return (
    <a href={href}  target="_blank"
    rel="noopener noreferrer" className='px-[25px] py-[20px] bg-secondary rounded-[8px]'>
   {children}
    </a>
  )
}

export default Button
