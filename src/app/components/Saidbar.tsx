import React from 'react'
import Image from 'next/image'
import { Call, Download, Email, Facebook, Github, Instagram, Location } from '../common/svg'
import Button from '../common/Button'
import Link from 'next/link'

const Saidbar = () => {
  return (
    <div className='bg-white  w-[400px] h-full relative pt-[114px] rounded-lg pb-[66px] px-[25px] '>
      <div className=' drop-shadow-2xl absolute top-[-112px] left-[95px]'>
        <Image src="/image/Дизайн без названия (4).png" width={200} height={200} alt="avatar" className='rounded-lg '/>
      </div>
      
      <div>
        <h3 className='raleway text-[28px] font-bold leading-8 text-primary mt-[14px] text-center '>
          Alimova Gulbahor
        </h3>
        <p className='raleway text-base font-medium leading-[40px] text-silver py-[6px] text-center'>Frontend developer</p>
        <div className='mb-[23px] flex justify-center items-center gap-2.5'>
          <Button><Facebook/></Button> 
          <Button><Github/></Button>
          <Button><Instagram/></Button> 
        
        </div>
        <div className='p-[33px]  bg-[#F2F5F9] rounded-[20px]'>
          <div className='flex items-center gap-[11px]  border-b-2 border-[#E3E3E3]'>
            <Call/>
            <div className='raleway text-sm not-italic font-semibold  text-primary pb-[18px] pl-[12px]'>
              <p className='text-silver'>Phone</p>
              <span>+998974545053</span>
            </div>   
          </div>

          <div className='flex  items-center gap-[11px]  border-b-2 border-[#E3E3E3]'>
            <Email/>
            <div className='raleway text-sm not-italic font-semibold  text-primary pb-[18px] pt-[16px] pl-[12px]'>
              <p className='text-silver'>Email</p>
              <span>guli.takhirjanova92@gmail.com</span>
            </div>
   
          </div>

          <div className='flex items-center gap-[11px]  border-b-2 border-[#E3E3E3]'>
            <Location/>
            <div className='raleway text-sm not-italic font-semibold  text-primary pb-[21px] pt-[16px] pl-[12px]'>
              <p className='text-silver'>Location</p>
              <span>Uzbekistan, Tashkent</span>
            </div>
            
          </div>

          <button className='py-[12px] px-[20px] rounded-[20px] gradient-bg text-white flex gap-2 items-center mt-[16px] mb-[33px] mx-auto '><Download/> Download Resume</button>
        </div>
      </div>

    </div>    
  )
}

export default Saidbar