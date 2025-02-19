import React from 'react';
import AboutCard from './AboutCard';
import { Code, Design, Insta, Mentor } from '../common/svg';

const aboutme = [
  {
    id: 1,
    title: 'Passionate Frontend Developer',
    svg: <Code />,
    about: " I love crafting **modern, responsive, and user-friendly** interfaces with **React, Vue.js, and Tailwind CSS**. Focused on **performance, accessibility, and clean code**, I continuously explore new technologies to build **fast and scalable** applications. 🚀"
  },
  {
    id: 2,
    title: 'React: Power & Flexibility',
    svg: <Insta />,
    about: " I build **dynamic, maintainable UIs** with **Hooks, Context API, and Next.js**, leveraging **Redux, Zustand, and Tailwind CSS** for seamless state management. Constantly exploring new features, I optimize performance with **Server Components, React Query, and Firebase** to enhance user experience. 🚀"
  },
  {
    id: 3,
    title: 'Next.js: Power & Performance',
    svg: <Design />,
    about: "Next.js stands out with its hybrid rendering, SSR, and ISR, making it perfect for fast, scalable, and SEO-friendly applications. I love building with API routes, dynamic routing, and Tailwind CSS, while seamlessly integrating Firebase and NextAuth.js for authentication. With pre-rendering, Edge Functions, and easy Vercel deployment, Next.js simplifies full-stack development. As it evolves, I stay committed to mastering its latest innovations to create high-performance, user-friendly applications. 🚀"
  },
  {
    id: 4,
    title: 'No-Code Development with Tilda & AppSheet',
    svg: <Mentor />,
    about:  " No-code tools like **Tilda** and **AppSheet** make building websites and applications effortless.  **Tilda** simplifies **modern web design** with its drag-and-drop interface, animations, and responsive layouts—perfect for landing pages and business sites.  **AppSheet** transforms **data into powerful applications**, enabling workflow automation and seamless integration with Google Sheets and databases.  By combining **Tilda’s intuitive design** with **AppSheet’s automation**, I create **scalable, efficient, and user-friendly** solutions—without writing a single line of code. 🚀"
  }
];

const About = () => {
  return (
    <div className='p-4 sm:p-6 md:p-8 lg:pt-[18px] lg:pr-[55px] lg:pb-[32px] lg:pl-[71px] bg-white rounded-[20px]'>
      <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8'>
        <h3 className='poppins text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-medium leading-tight tracking-wide text-[#0B0909] uppercase'>About me</h3>
        <span className='w-24 sm:w-[252px] h-[2px] rounded bg-linear inline-block gradient-bg'></span>
      </div>
      <p className='font-raleway text-sm sm:text-base font-medium text-primary py-4'>
      Hello! My name is Gulbakhor Alimova, and I am a frontend developer with a background in Classical Philology. I have a strong passion for web development.
I have experience working with HTML, CSS, JavaScript, Vue.js, React, Tailwind,  Git and NoCoding. I have completed a Frontend Development Bootcamp at Najot Ta’lim and participated in an internship program at IT Park and UNDP Uzbekistan.
Currently, I am expanding my skills in AppSheet and always eager to learn new technologies. My goal is to create clean, responsive, and user-friendly websites that enhance user experience.
      </p>
      <h4 className='poppins text-lg sm:text-xl md:text-2xl lg:text-[32px] font-medium leading-tight tracking-wide text-[#0B0909] pb-4 sm:pb-[28px]'>
        What I do!
      </h4>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {aboutme.map((item) => (
          <AboutCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default About;
