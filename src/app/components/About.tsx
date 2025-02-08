import React from 'react'
import AboutCard from './AboutCard'
import { Code, Design, Insta, Mentor } from '../common/svg';

const aboutme = [
  {
      id: 1,
      title: 'Web Development',
      svg: <Code/>,
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore blanditiis quod modi voluptate enim molestias illo asperiores commodi dolor laboriosam. Quae ducimus quos eos nesciunt animi commodi cupiditate doloremque molestias!"
      
  },
  {
      id: 2,
      title: 'App Development',
      svg: <Insta/>,
      about: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem architecto odio ducimus perspiciatis soluta. Beatae alias quis voluptatibus ut magni excepturi corporis commodi. Qui libero fugiat minus ut alias possimus.'
  },
  {
      id: 3,
      title: 'UI/UX Designing',
      svg: <Design/>,
      about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quasi ipsa perspiciatis omnis. Soluta excepturi commodi non porro suscipit sapiente! Vero minus ab perspiciatis quas modi! Recusandae quaerat eum sequi?'
  },
  {
    id: 4,
    title: 'Mentorship',
    svg: <Mentor/>,
    about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ratione placeat ea libero facilis? Reprehenderit similique sint quidem! Cupiditate eveniet libero quisquam ipsam iste sapiente dolor, nemo omnis ab. Perferendis?'
},
];
const About = () => {
  return (
    <div className='pt-[18px] pr-[55px] pb-[32px] pl-[71px] bg-white rounded-[20px]'>
        <div className='flex items-center gap-[32px]'>
            <h3 className='poppins text-[40px] font-medium leading-[40px] tracking-wide text-[#0B0909] uppercase'>About me</h3> 
            <span className='w-[252px] h-[2px] rounded bg-linear inline-block gradient-bg'></span>
        </div>
        <p className='font-raleway text-base font-medium text-primary py-[16px]'>
        Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile
        full-stack developer with a keen interest in exploring the latest cutting-edge technologies.
        My journey in the world of web development has been nothing short of exhilarating, and 
        I constantly strive to enhance my skills and embrace emerging trends in the industry
        </p>
         
        <h4 className='poppins text-[32px] font-medium leading-[40px] tracking-wide text-[#0B0909] pb-[28px]'>What I do! </h4>
   <div className='grid grid-cols-2 gap-4'> {aboutme.map((item)=>(
       <AboutCard item={item} key={item.id}/>
    ))}
  </div>

    </div>
  )
}

export default About