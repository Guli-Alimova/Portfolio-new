import React from 'react'

interface Resume {
  id: number;
  title: string;
  year:string;
  about: string;
}
const ResumeCard = ({ item }: { item: Resume }) => {
  return (
    <div className='py-[24px] pl-2.5 bg-[#FFE3BF] rounded-[10px] my-[24px] max-w-[288px] w-full  '>
        <p className='raleway text-sm font-normal text-silver'>{item.year}</p>
        <p className='raleway text-sm not-italic font-semibold  text-primary py-2.5'>{item.about}</p>
        <p className='raleway text-sm not-italic font-medium  text-primary'>{item.title}</p>
    </div>
  )
}

export default ResumeCard