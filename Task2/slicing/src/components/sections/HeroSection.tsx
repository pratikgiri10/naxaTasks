import heroImg from '../../assets/img1.svg'

const HeroSection = () => {
  return (
    <section className="mt-10 lg:mt-0">
      <div className="flex flex-col items-center gap-10 lg:gap-0 lg:flex-row ">
        <div className=" flex flex-col gap-10 lg:gap-6 text-center lg:text-left">
          <h3 className="text-2xl md:text-[48px] font-bold md:leading-[56px]">
            Interactive digital portal of projects in Karnali Province of Nepal
          </h3>
          <h6 className="text-sm sm:text-lg font-normal leading-[24px] text-[#fff]">
            A digital portal to identify the enabling factors of the development supported by development partners in Karnali Province of Nepal.
          </h6>
        </div>
       
        <div className="w-sm sm:w-md lg:w-[539px] md:flex-shrink-0">
          <img
            src={heroImg}
            alt="laptop"
            className="rounded-[20px] object-cover"
          />
        </div>
      </div>
    </section>
    
  )
}

export default HeroSection