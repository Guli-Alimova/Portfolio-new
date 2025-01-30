import React from 'react'
import BtnTab from '../common/BtnTab'
import { Contact, Home, Resume, Work } from '../../../public/image/svg'

const Tab = () => {
  return (
    <div className='flex justify-between flex-row gap-[40px]  absolute top-[-115px] right-0  py-[10px] px-[31px] border-2 border-[#000000] rounded-[20px]'>
        <BtnTab><Home/>Home</BtnTab>
        <BtnTab><Resume/>Resume</BtnTab>
        <BtnTab><Work/>Work</BtnTab>
        <BtnTab><Contact/>Contact</BtnTab>
    </div>
  )
}

export default Tab