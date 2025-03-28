import React from 'react'
import { Education, Experince } from '../common/svg'
import ResumeCard from './ResumeCard'

interface Resume {
    id: number;
    title: string;
    year:string;
    about: string;
  }
const education = [
{
    id: 1,
    title: 'Tashkent State University of Oriental Studies',
    year:"2015-2017",
    about: "Master of Science in Classical Philology, Textology and Literary Source Studies"
      
},
{
    id: 2,
    title: 'Tashkent State University of Oriental Studies',
    year:"2010-2014",
    about: "Bachelor of Science in Classical Philology"
},
{
    id: 3,
    title: 'Academic Lyceum under Tashkent Islamic University',
    year:"2007-2010",
      
},

];

const experince = [
    {
        id: 1,
        title: 'Program Offered by IT Park in Cooperation with UNDP Uzbekistan',
        year:"11/2022 - 12/2022",
        about: "Internship"
          
    },
    {
        id: 2,
        title: 'Study Center “Najot Ta’lim”',
        year:"05/2021 - 02/2022",
        about: "Frontend Development Bootcamp"
    },
    
    
    ];

const workskill = [
    {
        id:1,
        skill:"HTML5"
    },
    {
        id:2,
        skill:"CSS3"
    },
    {
        id:3,
        skill:"SASS"
    },
    {
        id:4,
        skill:"Bootstrap"
    },
    {
        id:5,
        skill:"Vue"
    },
    {
        id:6,
        skill:"JavaScript"
    },
    {
        id:7,
        skill:"React"
    },
    {
        id:8,
        skill:" Git"
    },
    {
        id:9,
        skill:"Figma"
    },
    {
        id:10,
        skill:"Tailwind"
    },
    {
        id:11,
        skill:"Firebase"
    },
    {
        id:12,
        skill:"Tilda"
    }
];

const softskill = [
    {
        id:1,
        skill:"Time Management"
    },
    {
        id:2,
        skill:"Communication"
    },
    {
        id:3,
        skill:"Research"
    },
    {
        id:4,
        skill:"Writing"
    },
    {
        id:5,
        skill:"Mentorship"
    },
    {
        id:6,
        skill:"Flexibility"
    },
]
const Resume = () => {
  return (
    <>
   
      <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-[32px]'>
        <h3 className='poppins text-2xl sm:text-[40px] font-medium tracking-wide text-[#0B0909] uppercase'>Resume</h3>
        <span className='w-full sm:w-[252px] h-[2px] rounded bg-linear inline-block gradient-bg'></span>
      </div>

      <div className='flex  gap-4 mt-2'>
      <div className='flex flex-col'> 
        <div className='items-center flex gap-2 mb-2'>
        <span className='h-[30px] inline-block'><Education /></span> 
        <h4 className='text-lg sm:text-xl font-semibold'>Education</h4>
        </div>
    
   <div className='flex flex-col gap-4'>{education.map((item) => (
  <ResumeCard key={item.id} item={{ ...item, about: item.about || "" }} />
))}</div>   
      </div>
      <div className='flex flex-col'>
        <div className='flex items-center gap-2 mb-2'><span className='h-[30px] inline-block'><Experince /></span><h4 className='text-lg sm:text-xl font-semibold'> Experience</h4></div>
  
      <div className='flex gap-4 flex-col'>{experince.map((item) => (
            <ResumeCard item={item} key={item.id} />
          ))}</div>
      </div>
      </div>
  
    <div className='flex flex-col sm:flex-row justify-between gap-4 mt-4'>
      <div>
        <h3 className='poppins text-xl sm:text-[27px] font-medium tracking-wide text-[#0B0909] uppercase mb-2'>Work Skills</h3>
        <div className='flex flex-wrap gap-2'>
          {workskill.map((item) => (
            <button className='py-1 px-2 bg-[#E1E8EF] rounded-lg' key={item.id}>{item.skill}</button>
          ))}
        </div>
      </div>

      <div>
        <h3 className='poppins text-xl sm:text-[27px] font-medium tracking-wide text-[#0B0909] uppercase mb-2'>Soft Skills</h3>
        <div className='flex flex-wrap gap-2'>
          {softskill.map((item) => (
            <button className='py-1 px-2 bg-[#E1E8EF] rounded-lg' key={item.id}>{item.skill}</button>
          ))}
        </div>
      </div>
    </div>
  </>
  )
}

export default Resume