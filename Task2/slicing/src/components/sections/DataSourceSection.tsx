import dsLogo1 from '../../assets/DS-logo-1.svg'
import dsLogo2 from '../../assets/DS-logo-2.svg'
import dsLogo3 from '../../assets/DS-logo-3.svg'
import dsLogo4 from '../../assets/DS-logo-4.svg'
import dsLogo5 from '../../assets/DS-logo-5.svg'
import dsLogo6 from '../../assets/DS-logo-6.svg'
import dsLogo7 from '../../assets/DS-logo-7.svg'
import dsLogo8 from '../../assets/DS-logo-8.svg'

const DataSourceSection = () => {
  return (
    <section className="bg-[#dcf1fe] flex flex-col items-center gap-8 md:gap-12 rounded-xl md:rounded-3xl py-10 md:py-16 lg:py-18 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
        <h3 className="text-5xl font-bold text-center text-[#212121]">Data Source</h3>
        <p className="text-[15px] text-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl">
          A digital portal to identify the enabling factors of the development supported by development partners in Karnali Province of Nepal
        </p>
      </div>     
     
      <div className="inline-flex flex-col items-center justify-center gap-4 md:gap-5 w-full">
        <h2 className="text-[#FF4538] text-[12px] font-bold ">FEDERAL GOVERNMENT</h2>       
       
          <div className="flex items-start gap-6 sm:gap-8 md:gap-10 lg:gap-16 flex-wrap">
            <img className="w-auto h-8 sm:h-10 object-cover" src={dsLogo1} alt="Federal Government Logo 1" />
            <img className="w-auto h-8 sm:h-10 object-cover" src={dsLogo2} alt="Federal Government Logo 2" />       
          </div>
          <div className="flex items-start gap-6 sm:gap-8 md:gap-10 lg:gap-16 flex-wrap">
            <img className="w-auto h-8 sm:h-10 object-cover" src={dsLogo3} alt="Federal Government Logo 3" />
            <img className="w-auto h-8 sm:h-10 object-cover" src={dsLogo4} alt="Federal Government Logo 4" />
          </div>       
        </div>            
     
      <div className="inline-flex flex-col items-center gap-4 md:gap-5 w-full">
        <h2 className="text-[#FF4538] text-[12px] font-bold">PROVINCIAL GOVERNMENT</h2>
        <div className="flex items-start gap-6 sm:gap-8 md:gap-10 flex-wrap">
          <img className="w-auto h-8 sm:h-10 object-cover" src={dsLogo5} alt="Provincial Government Logo 1" />
          <img className="w-auto h-8 sm:h-10 object-cover" src={dsLogo6} alt="Provincial Government Logo 2" />
          <img className="w-auto h-8 sm:h-10 object-cover" src={dsLogo7} alt="Provincial Government Logo 3" />      
        </div>             
      </div>      
     
      <div className="inline-flex flex-col items-center gap-4 md:gap-5 w-full">
        <h2 className="text-[#FF4538] text-[12px] font-bold">MUNICIPAL GOVERNMENT</h2>
        <div className="flex items-start">
          <img className="w-auto h-8 sm:h-10 object-cover" src={dsLogo8} alt="Municipal Government Logo" />  
        </div>             
      </div>
    </section>
  )
}

export default DataSourceSection