import React from 'react';
import AboutCard from './AboutCard';
import { Code, Design, Insta, Mentor } from '../common/svg';

const aboutme = [
  {
    id: 1,
    title: 'Passionate Frontend Developer',
    svg: <Code />,
    about: " I specialize in creating modern, responsive, and user-friendly interfaces using React, Vue.js, and Tailwind CSS. With a focus on performance, accessibility, and clean code, I’m always exploring new technologies to build fast, scalable, and impactful applications. 🚀"
  },
  {
    id: 2,
    title: 'React: Power & Flexibility',
    svg: <Insta />,
    about: " I create dynamic, maintainable UIs using Hooks, Context API, and Next.js, with Redux, Zustand, and Tailwind CSS for smooth state management. Always learning, I boost performance with Server Components, React Query, and Firebase to deliver exceptional user experiences. 🚀"
  },
  {
    id: 3,
    title: 'Next.js: Power & Performance',
    svg: <Design />,
    about: "Next.js excels with **hybrid rendering, SSR, and ISR**, ideal for **fast, scalable, and SEO-friendly** apps. I enjoy using **API routes, dynamic routing, and Tailwind CSS**, integrating **Firebase and NextAuth.js** for authentication. With **pre-rendering, Edge Functions, and Vercel deployment**, Next.js streamlines full-stack development. I’m dedicated to mastering its latest features to build **high-performance, user-friendly** applications. 🚀"
  },
  {
    id: 4,
    title: 'No-Code Development with Tilda & AppSheet',
    svg: <Mentor />,
    about:  " No-code tools like **Tilda** and **AppSheet** make building websites and apps effortless. **Tilda** simplifies **modern web design** with drag-and-drop features, animations, and responsive layouts, ideal for landing pages. **AppSheet** turns **data into powerful apps**, automating workflows and integrating with Google Sheets and databases. Combining **Tilda’s design** with **AppSheet’s automation**, I create **scalable, efficient, and user-friendly** solutions—no coding required. 🚀"
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
      Hello! I’m Gulbakhor Alimova, a frontend developer with a background in Classical Philology and a passion for web development. Skilled in HTML, CSS, JavaScript, Vue.js, React, Tailwind, Git, and NoCoding, I graduated from Najot Ta’lim’s Frontend Development Bootcamp and interned at IT Park and UNDP Uzbekistan. Currently, I’m learning AppSheet and always eager to explore new technologies. My goal is to build clean, responsive, and user-friendly websites that deliver exceptional user experiences.
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
