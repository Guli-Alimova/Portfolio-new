import React, { useState } from 'react';
import { Mail, Phone } from '../common/svg';
import InputField from '../common/InputField';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <div className='p-4 sm:p-6 md:p-8 bg-white rounded-[20px]'>
      <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-8'>
        <h3 className='poppins text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-medium leading-tight tracking-wide text-[#0B0909] uppercase'>Contact</h3>
        <span className='w-24 sm:w-[252px] h-[2px] rounded bg-linear inline-block gradient-bg'></span>
      </div>

      <div className='flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 mt-4 mb-6'>
        <div className='p-4 sm:p-6 bg-[#FFEED9] w-full max-w-[333px] rounded-[20px]'>
          <div className='flex gap-2.5 items-center'>
            <Phone /><p className='poppins text-base font-medium text-primary'>Phone:</p>
          </div>
          <p className='poppins text-sm font-medium text-primary'>+998974545053</p>
        </div>
        <div className='p-4 sm:p-6 bg-secondary w-full max-w-[333px] rounded-[20px]'>
          <div className='flex gap-2.5 items-center'>
            <Mail /><p className='poppins text-base font-medium text-primary'>Email:</p>
          </div>
          <p className='poppins text-base font-medium text-primary'>guli.takhirjanova92@gmail.com</p>
        </div>
      </div>

      <div className='p-4 sm:p-6 bg-[#F8FBFB] rounded-[20px]'>
        <p className='raleway text-sm sm:text-base font-medium'>
          I am always open to discussing <span className='font-bold'>new projects, opportunities in tech world, partnerships</span> and more so <span className='font-bold'>mentorship.</span>
        </p>
        <form onSubmit={handleSubmit} className='mt-4'>
          <InputField label='Name' type='text' name='name' placeholder='Enter your name' value={formData.name} onChange={handleChange} />
          <InputField label='Email' type='email' name='email' placeholder='Enter your email' value={formData.email} onChange={handleChange} />
          <InputField label='Message' type='text' name='message' placeholder='Enter your message' value={formData.message} onChange={handleChange} />
          <button type='submit' className='w-full sm:w-auto px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
