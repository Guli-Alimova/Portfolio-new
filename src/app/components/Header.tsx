import React from 'react'
import { Mood } from '../../../public/image/svg';

const Header = () => {
  return (
    <div className='bg-[#EBF2FA] '>
        <div className="container">
            <div className='py-[31px] flex justify-between items-center text-center'>
                <h3 className='pacifico font-medium text-2xl'>Alimova <span className=' bg-linear-to-r from-linear-500 to-linear1-500'>Gulbahor</span></h3>
                <button className='p-[19px] rounded-full bg-[#EBF2FA] border drop-shadow-lg'><Mood/></button>
            </div>
        </div>
    </div>
  )
}

export default Header