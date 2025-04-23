import img2 from '../../assets/img2.png'
import img3 from '../../assets/freelancer.svg'
import img4 from '../../assets/data-collection-2 1.svg'
import img5 from '../../assets/workshop.svg'

const AboutSection = () => {
  return (
    <section className="flex flex-col gap-10 lg:gap-12 bg-[#fff3f2] rounded-xl md:rounded-3xl px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-20">
    
      <div className="inline-flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        <div className="flex flex-col gap-10 md:gap-5 max-w-2xl">
          <h4 className="text-3xl lg:text-3xl xl:text-[34px] font-normal lg:leading-[42px] text-center lg:text-left">
            This portal is developed to identify the enabling factors of the development supported by development partners in Karnali Province of Nepal
          </h4>
          <h6 className="text-lg leading-[24px]">
            In the last few years, there has been a huge concern among the civil societies, government and international development partners about improving the quality of life of people in Karnali. Nepal government along with the support of donor countries and multilateral funding agencies has invested huge resources to the implementing development project through NGO/INGO and others. Many organizations including NGO/INGOs have spent a significant amount of resources towards assessing development initiatives through project intervention at provincial and municipal levels. The focus of all these investments and efforts is to create an equitable, prosperous society but such investment is not always based on the proper assessment of the local needs and expectations.
          </h6>
        </div>
        <div className="w-sm sm:w-[488px] lg:w-sm xl:w-[488px] flex-shrink-0">
          <img src={img2} alt="Development project in Karnali" className="object-cover rounded-[20px]" />
        </div>
      </div>

      
      <div className="inline-flex flex-col items-start gap-6 md:gap-8">
        <h5 className="text-xl md:text-2xl font-bold">Objective</h5>
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <div className="w-16 h-16 ">
              <img className="w-full h-full object-cover" src={img3} alt="Key Actors Icon" />
            </div>
            <h6 className="text-base sm:text-lg">Identifying the key actors to operate Project Database Portal</h6>
          </div>
          <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <div className="w-16 h-16 ">
              <img className="w-full h-full object-cover" src={img4} alt="Data Collection Icon" />
            </div>
            <h6 className="text-base sm:text-lg">Collection of project related data from federal, provincial, and municipal levels and validate into Project Database Portal</h6>
          </div>
          <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <div className="w-16 h-16 ">
              <img className="w-full h-full object-cover" src={img5} alt="Capacity Building Icon" />
            </div>
            <h6 className="text-base sm:text-lg">Capacitate provincial and municipal officials to handle Project Database Portal</h6>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection