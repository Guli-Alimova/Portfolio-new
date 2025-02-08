import React, {useState} from 'react'
import { Mail, Phone } from '../common/svg'
import InputField from '../common/InputField'

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
    <>
    <div className='pt-[18px] pr-[55px] pb-[32px] pl-[71px] bg-white rounded-[20px]'>
    <div className='flex items-center gap-[32px]'>
        <h3 className='poppins text-[40px] font-medium leading-[40px] tracking-wide text-[#0B0909] uppercase'>Contact</h3> 
        <span className='w-[252px] h-[2px] rounded bg-linear inline-block gradient-bg'></span>
    </div>

    <div className='flex justify-between items-center gap-[27px] mt-2 mb-[32px]'>
        <div className='pt-[22px] pb-[35px] pl-[26px] bg-[#FFEED9] max-w-[333px] w-full rounded-[20px]'>
            <div className='flex  gap-2.5 items-center '>
                <Phone/><p className='poppins text-base font-medium leading-[40px] text-primary'>Phone:</p>
            </div>
            <p className='poppins text-sm font-medium leading-[40px] text-primary'>+998974545053</p>
        </div>
        <div className='pt-[22px] pb-[35px] pl-[26px] bg-secondary max-w-[333px] w-full rounded-[20px]'>
            <div className='flex  gap-2.5 items-center '>
                <Mail/><p className='poppins text-base font-medium leading-[40px] text-primary'>Email:</p>
            </div>
            <p className='poppins text-base font-medium leading-[40px] text-primary'>guli.takhirjanova92@gmail.com</p>
        </div>
    </div>

    <div className='pt-[29px] pr-[76px] pb-[46px] pl-[39px] bg-[#F8FBFB] rounded-[20px]'>
        <p className='raleway text-base font-medium'>I am always open to discussing <span className='font-bold'>new projects, opportunities in tech world,
        partnerships</span> and more so <span className='font-bold'>mentorship.</span></p>
        <form
      onSubmit={handleSubmit}
     
    >
    
      <InputField
        label="Name"
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
      />
      <InputField
        label="Email"
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
      />
      <InputField
        label="Message"
        type="text"
        name="message"
        placeholder="Enter your message"
        value={formData.message}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
      >
        Submit
      </button>
    </form>
      
    </div>
    </div>
    </>
  )
}

export default Contact