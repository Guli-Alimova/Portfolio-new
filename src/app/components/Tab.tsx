import React from 'react'
import BtnTab from '../common/BtnTab'
import { Contact, Home, Resume, Work } from '../common/svg'

const Tab = () => {
  return (
    <div className='mt-[-115px] mb-2.5 flex justify-between  max-w-[503px] w-full ml-auto py-[10px] px-[31px] border-2 border-[#F2F7FC] shadow-nav rounded-[20px]'>
        <BtnTab><Home/>Home</BtnTab>
        <BtnTab><Resume/>Resume</BtnTab>
        <BtnTab><Work/>Work</BtnTab>
        <BtnTab><Contact/>Contact</BtnTab>
    </div>
  )
}

export default Tab