import HeroSection from "../components/sections/HeroSection"
import location from '../assets/location 1.png'
import { MdMap } from "react-icons/md";
import AboutSection from "../components/sections/AboutSection"
import DataSourceSection from "../components/sections/DataSourceSection"
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
const Home = () => {
  return (
  
      <div className=" flex flex-col gap-10 mx-10">
        <div className='bg-gradient-to-b from-[#1a83fb] to-[#0056b8] text-white rounded-b-3xl px-10 md:px-20 py-4'>
          <Header />
          <HeroSection />
        </div>   
        <AboutSection />   
        <div className="flex flex-col gap-10 mx-10 md:mx-20">      
          <DataSourceSection />          
          <section className="bg-[#1973e7] text-white flex flex-col lg:flex-row items-center  rounded-3xl px-4 sm:px-6 md:px-10 py-8 md:py-15 gap-8 lg:gap-[117px]">
            <div className="lg:w-[835px] flex items-center gap-4 sm:gap-6 md:gap-10 grow">
              <img className="w-12 sm:w-16 md:w-20 md:h-20 flex-shrink-0 object-contain" src={location} alt="Location icon" />
              <h4 className="text-xl sm:text-3xl lg:text-[34px] font-normal leading-[42px]">
                Interactive digital portal of projects in Karnali Province of Nepal
              </h4>
            </div>
           
              <button className="h-[40px] flex items-center gap-1 px-5 py-3 bg-white text-[#1973e7] rounded-lg text-[15px] font-bold">    
              <MdMap size={24}/>               
             <p>Explore Map</p>
            </button>
                    
          </section>
          <Footer />
        </div>
      </div>
  )
}

export default Home