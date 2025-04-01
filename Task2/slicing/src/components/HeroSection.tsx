// import heroImg from '../assets/heroImg.jpg'
import heroImg from '../assets/img1.png'
import Navbar from "./header/Navbar"
const HeroSection = () => {
  return (
    <div className='bg-gradient-to-b from-[#1a83fb] to-[#0056b8] text-white px-12 py-10 rounded-b-[20px]'>
        <Navbar />
        <div className='flex items-center justify-between mt-10'>      
        <div className='w-[650px] flex flex-col gap-8'>
            <h1 className='text-5xl font-medium'>Interactive digital portal of projects in Karnali Province of Nepal</h1>
            <p>A digital portal to identify the enabling factors of the development supported by development partners in Karnali Province of Nepal.</p>
        </div>
        <div className='h-[480px]'>
            <img src={heroImg} alt="hero image" className='w-full h-full rounded-3xl object-contain'/>
        </div>
        </div>
        
    </div>
  )
}

export default HeroSection