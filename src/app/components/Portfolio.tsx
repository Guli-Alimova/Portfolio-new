import React, { useState } from 'react'

const Portfolio = () => {
    
const portfolio = [
    {
        id: 1,
        title: 'All',
        link:"all"
       
          
    },
    {
        id: 2,
        title: 'Team Work',
        link:"teamwork"
      
         
    },
    {
        id: 3,
        title: 'Work',
        link:"work"
      
         
    },
    {
        id: 4,
        title: 'Tilda',
        link:"tilda"
      
         
    },
    
    
    ];

   const [activeTab, setActiveTab] = useState("all");

  return (
   <>
      <div className='pt-[18px] pr-[55px] pb-[32px] pl-[71px] bg-white rounded-[20px]'>
    <div className='flex items-center gap-[32px]'>
        <h3 className='poppins text-[40px] font-medium leading-[40px] tracking-wide text-[#0B0909] uppercase'>Portfolio</h3> 
        <span className='w-[252px] h-[2px] rounded bg-linear inline-block gradient-bg'></span>
    </div>
    <div className='flex justify-end gap-4'>
        {portfolio.map((item)=>(
            <button className='poppins text-base font-medium text-silver py-4'  onClick={() => setActiveTab(item.link)} key={item.id}>{item.title}</button>  
        ))}
       
    </div>
    <div >
        {activeTab === "all" && <p>All</p>}
        {activeTab === "teamwork" && <p>Team work</p>}
        {activeTab === "work" && <p>Work</p>}
        {activeTab === "tilda" && <p>Tilda</p>}
      </div>
    </div>
   </>
  )
}

export default Portfolio