import React, { useState } from 'react';
import { Mail, Phone } from '../common/svg';
import InputField from '../common/InputField';
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState<string | null>(null); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.send(
      "service_7p4bi46", // Email.js service ID
      "template_wwqbvql", // Email.js template ID
      formData,
      "hSqct-03ul2TBK3Dj" // Email.js public key
    ).then(
      () => {
        setSuccessMessage("✅ Xabar muvaffaqiyatli jo‘natildi!"); // ✅ Xabar chiqishi uchun
        setFormData({ name: "", email: "", message: "" }); // 🔄 Formani tozalash

        setTimeout(() => {
          setSuccessMessage(null); // ⏳ 3 sekunddan keyin xabar yo‘qoladi
        }, 3000);
      },
      (error) => {
        console.error("Xabar jo‘natishda xatolik!", error);
        setSuccessMessage("❌ Xabar jo‘natishda xatolik yuz berdi!");
      }
    );
  };

  return (
    <>
      <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-8'>
        <h3 className='poppins text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-medium leading-tight tracking-wide text-[#0B0909] uppercase'>Contact</h3>
        <span className='w-24 sm:w-[252px] h-[2px] rounded bg-linear inline-block gradient-bg'></span>
      </div>

      <div className='flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 mt-4 mb-6'>
        <div className='p-4 sm:p-6 bg-[#FFEED9] w-full max-w-[333px] rounded-[20px]'>
          <div className='flex gap-2.5 items-center'>
            <Phone /><span className='poppins text-base font-medium text-primary'>Phone:</span>
          </div>
          <span className='poppins text-sm font-medium text-primary'>+998974545053</span>
        </div>
        <div className='p-4 sm:p-6 bg-secondary w-full max-w-[333px] rounded-[20px]'>
          <div className='flex gap-2.5 items-center'>
            <Mail /><span className='poppins text-base font-medium text-primary'>Email:</span>
          </div>
          <span className='poppins text-base font-medium text-primary'>guli.takhirjanova92@gmail.com</span>
        </div>
      </div>

      <div className='p-4 sm:p-6 bg-[#F8FBFB] rounded-[20px]'>
        <p className='raleway text-sm sm:text-base font-medium'>
          I am always open to discussing <b>new projects, opportunities in tech world, partnerships</b> and more so <b>mentorship.</b>
        </p>
        <form onSubmit={handleSubmit} className='mt-4'>
          <InputField label='Name' type='text' name='name' value={formData.name} onChange={handleChange} />
          <InputField label='Email' type='email' name='email'  value={formData.email} onChange={handleChange} />
          <InputField label='Message' type='text' name='message'  value={formData.message} onChange={handleChange} />
          <button type='submit' className='w-full sm:w-auto px-[30px] py-2.5 mt-5 bg-transparent border-2 border-orange-500 text-primary rounded-[20PX] hover:gradient-bg hover:text-white transition-all'>Submit</button>
        </form>
      </div>
      {successMessage && (
        <div className="mt-4 p-2 text-center text-white gradient-bg rounded">
          {successMessage}
        </div>
      )}
    </>
  );
};

export default Contact;
