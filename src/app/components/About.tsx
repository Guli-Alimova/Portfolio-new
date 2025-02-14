import React from 'react';
import AboutCard from './AboutCard';
import { Code, Design, Insta, Mentor } from '../common/svg';

const aboutme = [
  {
    id: 1,
    title: 'Web Development',
    svg: <Code />,
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore blanditiis quod modi voluptate enim molestias illo asperiores commodi dolor laboriosam. Quae ducimus quos eos nesciunt animi commodi cupiditate doloremque molestias!"
  },
  {
    id: 2,
    title: 'App Development',
    svg: <Insta />,
    about: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem architecto odio ducimus perspiciatis soluta. Beatae alias quis voluptatibus ut magni excepturi corporis commodi. Qui libero fugiat minus ut alias possimus.'
  },
  {
    id: 3,
    title: 'UI/UX Designing',
    svg: <Design />,
    about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quasi ipsa perspiciatis omnis. Soluta excepturi commodi non porro suscipit sapiente! Vero minus ab perspiciatis quas modi! Recusandae quaerat eum sequi?'
  },
  {
    id: 4,
    title: 'Mentorship',
    svg: <Mentor />,
    about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ratione placeat ea libero facilis? Reprehenderit similique sint quidem! Cupiditate eveniet libero quisquam ipsam iste sapiente dolor, nemo omnis ab. Perferendis?'
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
        Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile
        full-stack developer with a keen interest in exploring the latest cutting-edge technologies.
        My journey in the world of web development has been nothing short of exhilarating, and
        I constantly strive to enhance my skills and embrace emerging trends in the industry.
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
