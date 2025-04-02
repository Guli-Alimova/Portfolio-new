import React from 'react';
import AboutCard from './AboutCard';
import { Code, Design, Insta, Mentor } from '../common/svg';

const aboutme = [
  {
    id: 1,
    title: 'Passionate Frontend Developer',
    svg: <Code />,
    about: " My Web Dev Approach: Build modern sites with React/Vue.js & Tailwind, Optimize for speed & all devices, Write clean, accessible code, Love learning new tech. Let's create something amazing!  "
  },
  {
    id: 2,
    title: 'React: Power & Flexibility',
    svg: <Insta />,
    about: " My Tech Stack in 4 Lines: Build with Next.js & React Hooks, Manage state via Redux/Zustand, Style efficiently with Tailwind CSS, Optimize with React Query & Firebase. Always leveling up! ⚡"
  },
  {
    id: 3,
    title: 'Next.js: Power & Performance',
    svg: <Design />,
    about: "Why I Love Next.js: ⚡ SSR/SSG for lightning speed⚡ ISR keeps content fresh⚡ API routes = backend made easy⚡ Vercel = 1-click deploys Build faster, smarter apps!  "
  },
  {
    id: 4,
    title: 'No-Code Development with Tilda & AppSheet',
    svg: <Mentor />,
    about:  " No-Code Power:⚡ Tilda – Drag-and-drop beautiful websites ⚡ AppSheet – Turn spreadsheets into smart apps ⚡ Fast & easy – No coding needed ⚡ Perfect combo – Stunning design + automation Build smarter, faster! 🚀"
  }
];

const About = () => {
  return (
    <>
      <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8'>
        <h3 className='poppins text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-medium leading-tight tracking-wide text-[#0B0909] uppercase'>About me</h3>
        <span className='w-24 sm:w-[252px] h-[2px] rounded bg-linear inline-block gradient-bg'></span>
      </div>
      <p className='font-raleway text-sm sm:text-base font-medium text-primary py-4'>
      Hello! I'm Gulbakhor Alimova, a passionate frontend developer. With a background in Classical Philology and a strong foundation in web development, I specialize in HTML, CSS, JavaScript, Vue.js, React, Tailwind, Git, and NoCode tools. I graduated from Najot Ta’lim’s Frontend Bootcamp and gained hands-on experience through internships at IT Park and UNDP Uzbekistan.
    </p>
      <h4 className='poppins text-lg sm:text-xl md:text-2xl lg:text-[32px] font-medium leading-tight tracking-wide text-[#0B0909] pb-4 sm:pb-[28px]'>
        What I do!
      </h4>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {aboutme.map((item) => (
          <AboutCard item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default About;
