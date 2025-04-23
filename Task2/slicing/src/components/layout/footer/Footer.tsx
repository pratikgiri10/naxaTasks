import logo from '../../../assets/Group 2072.svg'
import project from '../../../assets/projectDbPortal.svg'
import eng from '../../../assets/Rectangle 2075.svg'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-8 md:gap-10 p-4 sm:p-6 lg:p-8 bg-white">
      <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-8 sm:gap-4">
        
        <div className="flex flex-col sm:flex-row justify-center items-center item-center gap-4">
          <img className="max-w-70 object-cover" src={logo} alt="Project Database Portal logo" />
          <div className='hidden sm:block w-[1px] h-[36px] bg-[#BDBDBD]'></div>
          <img className="max-w-40" src={project} alt="Project Database Portal logo" />
        </div>

        {/* Links and Contact */}
        <div className='flex  sm:flex-row justify-between items-start gap-8 sm:gap-10 md:gap-16 lg:gap-24 w-full md:w-auto'>
          {/* Navigation Links */}
          <nav className=''>
            <ul className="font-bold flex flex-col justify-center items-start gap-5 text-[15px] text-[#212121]">
              <li className="">Map</li>
              <li className="">Data</li>
              <li className="">About</li>
            </ul>
          </nav>
          
          {/* Contact Information */}
          <div className="flex flex-col items-start gap-[13px] text-gray-600">
            <div className="flex items-center gap-[10px]">
              <FaLocationDot className="text-2xl font-normal" />
              <span className='text-[15px]'>Search Projects</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <IoIosCall className="text-2xl font-normal" />
              <span className='text-[15px]'>+977-01 4563 235, 01 4575 246</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <MdEmail className="text-2xl font-normal" />
              <span className='text-[15px]'>mail@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 sm:py-6 border-t border-[#BDBDBD] flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-5 text-xs sm:text-sm">
       
        <div className="flex items-center gap-2 sm:gap-2 cursor-pointer">
          <div className="w-[20px] h-[20px]">
            <img className="w-full rounded-[40px] border border-[#BDBDBD] " src={eng} alt="English language" />
          </div>
         
            <span className='text-[15px] font-bold'>English</span>
            <IoMdArrowDropdown />
          
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 text-gray-600">
          <span className=" cursor-pointer text-[13px] font-normal">Privacy Policy</span>
         
          <span className="cursor-pointer text-[13px] font-normal">Terms</span>
          
          <span className='cursor-pointer text-[13px] font-normal'>Copyright &copy; {new Date().getFullYear()} Project Database Portal</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer