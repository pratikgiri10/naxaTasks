import HeroSection from "../components/HeroSection"
import img2 from '../assets/img2.png'
import logo from '../assets/Emblem_of_Nepal.svg'
import eng from '../assets/engFlag.jpg'
import DataSource from "../components/DataSource"
import img3 from '../assets/freelancer.png'
import img4 from '../assets/data-collection-2 1.png'
import img5 from '../assets/workshop.png'
import location from '../assets/location 1.png'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoBookOutline } from "react-icons/io5";
const Home = () => {
  return (
    <div className="px-10 rounded-xl">
      <HeroSection />

      <section className=" mt-10 flex flex-col gap-6 bg-[#fff3f2] px-12 py-10 rounded-3xl">
         <div className="flex justify-between items-center">
         <div className="w-[650px] flex flex-col gap-5">
              <h1 className="text-4xl">This portal is developed to identify the enabling factors of the development supported by developent partners in Karnali Province of Nepal</h1>
              <p className="text-lg">In the last few years, there has been a huge concern among the civil societies, government and international development partners about improving the quality of the life of people in Karnali. Nepal government along with the support of donor countries and multilateral funding agencies has invested huge resources to the implementing development project through NGO/INGO and others. Many organizations including NGO/INGOs have spent a significant amount of resources towards assessing development initiatives through project intervention at provincial and municipal level. The focus of all these investments and efforts is to create the equitable prosperous society but such investment is not always based on the proper assessment of the local needs and expectations.</p>
          </div>
          <div className="h-[540px]">
              <img src={img2} alt="" className="w-full h-full object-contain rounded-3xl"/>
          </div>
         </div>
          <div className="flex flex-col gap-8">
            <h1 className="text-2xl font-semibold ">Objective</h1>
            <div className="flex justify-between">
              <div className="w-[387px] flex flex-col gap-5">
                <img className="w-15" src={img3} alt="" />              
                <p className="text-lg">Identifying the key actors to operate Project Database Portal</p>
              </div>
              <div className="w-[387px] flex flex-col gap-5">
              <img className="w-15" src={img4} alt="" />
                <p className="text-lg">Collection of prject related data from federal, provincial, and municipal levels and validate into Project Database Portal</p>
              </div>
              <div className="w-[387px] flex flex-col  gap-5">
              <img className="w-15" src={img5} alt="" />
                <p className="text-lg">Capacitate provincial and municipal officials to handle Project Database Portal</p>
              </div>
            </div>
          </div>
      </section>

      <section className="mt-10 mx-16 bg-[#dcf1fe] flex flex-col items-center gap-12 pt-10 px-12 py-10 rounded-3xl">
             <div className="flex flex-col items-center justify-center gap-6">
              <h1 className="text-5xl font-semibold">Data Source</h1>
              <p className="text-md text-center w-[692px]">A digital portal to identify the enabling factors of the developemnt supported by development partners in Karnali Province of Nepal</p>
             </div>
             <div className="flex flex-col items-center justify-center gap-5">
              <h1 className="text-red-500">FEDERAL GOVERNMENT</h1>
              <div className='grid grid-cols-1 gap-4 place-items-center'>
                <div className="flex justify-between items-center gap-15">
                <DataSource image={logo} title={['नेपाल सरकार','अर्थ मन्त्रालय']}/>
                <DataSource image={logo} title={['Nepal Government', 'Line Ministry Budget Information System']}/>
                </div>
                <div className="flex justify-between items-center gap-15">
                <DataSource image={logo} title={['Government of Nepal', 'Aid Management Information System for Nepal']}/>
                <DataSource image={logo} title={['नेपाल सरकार','अर्थ मन्त्रालय', 'महालेखा नियन्त्रक कार्यालय']}/>
                </div>
                
              </div>             
             </div>
             <div className="flex flex-col items-center justify-center gap-5">
              <h1 className="text-red-500">PROVINCIAL GOVERNMENT</h1>
              <div className='flex items-center gap-15 '>
                <DataSource image={logo} title={['कर्णाली प्रदेश सरकार','मुख्यमन्त्री तथा मन्त्रिपरिषद्को कार्यालय']}/>
                <DataSource image={logo} title={['Province Government', 'Provincial Line Ministry Budget Information System']}/>
                <DataSource image={logo} title={['नेपाल सरकार','अर्थ मन्त्रालय', 'महालेखा नियन्त्रक कार्यालय']}/>
              </div>             
             </div>
             <div className="flex flex-col items-center justify-center gap-5">
              <h1 className="text-red-500">MUNICIPAL GOVERNMENT</h1>
              <div className=''>
                <DataSource image={logo} title={['नेपाल सरकार','स्थानीय संचित कोष व्यवस्थापन प्रणाली']}/>
               
              </div>             
             </div>
      </section>
      <section className="mt-10 mx-16 px-10 py-15 rounded-3xl bg-[#1973e7] text-white flex items-center justify-between">
        <div className="flex items-center gap-10 w-[835px]">
          <img className="w-20" src={location} alt="" />
            <h1 className="text-4xl">Interactive digital portal of projects in Karnali Province of Nepal </h1>
        </div>
        <button className="flex items-center gap-2 bg-white text-[#1973e7] px-5 py-3 rounded-lg font-semibold"><IoBookOutline size={25}/>
         Explore Map</button>
      </section>
      <footer className="mt-10 mx-6 flex flex-col gap-16 px-12 py-10">
        <div className="flex justify-between items-start">
        <div className="flex gap-2 items-center">
          <div className='flex gap-2 items-center'>
                <img className='w-12' src={logo} alt="logo" />
                <div>
                <h1>कर्णाली प्रदेश सरकार</h1>
                <h1>मुख्यमन्त्री तथा मन्त्रिपरिषद्को कार्यालय</h1>
                </div>
          </div>
          <div className="border-l-2 border-gray-300 px-2">
            <h1 className=" text-xl font-bold italic bg-gradient-to-r from-[#ff4538] to-[#1a83fb] bg-clip-text text-transparent">PROJECT</h1>
            <p>Database Portal</p>
          </div>
        </div> 
        <div className="">
          <ul className="font-medium flex flex-col gap-5">
            <li>Map</li>
            <li>Data</li>
            <li>About</li>
          </ul>
        </div>  
        <div>
          <div className="flex items-center gap-2">
          <FaLocationDot color="gray"/>
            <h1>Search Projects</h1>
          </div>
          <div className="flex items-center gap-2">
          <IoIosCall color="gray"/>
            <h1>+977-01 4563 235, 01 4575 246</h1>
          </div>
          <div className="flex items-center gap-2">
          <MdEmail color="gray"/>
            <h1>mail@gmail.com</h1>
          </div>
        </div>
        </div>
       

        <div className="py-6 border-t-1 border-gray-300 flex justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10">
              <img className="w-full rounded-[100%]" src={eng} alt="" />
            </div>

            <div className="flex items-center gap-2">
              <h1>English</h1>
              <IoMdArrowDropdown />
            </div>
          </div>
          <div className="flex items-center gap-5 text-gray-400 text-sm">
            <h1>Privacy Policy</h1>
            <h1>Terms</h1>
            <h1>Copyright &copy; 2022 Project Database Portal</h1>
          </div>
        </div>        
      </footer>
    </div>
  )
}

export default Home