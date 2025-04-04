import React from 'react'

interface ResumeItem {
  id: number;
  title: string;
  year: string;
  about?: string; 
}
const ResumeCard = ({ item }: { item: ResumeItem }) => {
  return (
    <div className="py-[24px] pl-2.5 bg-[#FFE3BF] rounded-[10px]  max-w-[288px] w-full sm:max-w-[360px] md:max-w-[400px] lg:max-w-[480px]">
    <p className="raleway text-sm font-normal text-silver">{item.year}</p>
    <p className="raleway text-sm not-italic font-semibold text-primary py-2.5">{item.about}</p>
    <p className="raleway text-sm not-italic font-medium text-primary">{item.title}</p>
</div>

  )
}

export default ResumeCard