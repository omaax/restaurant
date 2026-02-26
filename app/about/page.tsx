import ContactUs from "../../components/about/ContactUs"
import FifthٍSection from "../../components/about/FifthٍSection"
import FirstSection from "../../components/about/FirstSection"
import ForthSection from "../../components/about/ForthSection"
import OurMission from "../../components/about/OurMission"
import SecondSection from "../../components/about/SecondSection"
import ThirdSection from "../../components/about/ThirdSection"

const Page = () => {
  return (
    <div className=''>
            <FirstSection />
            <SecondSection />
            <div className="p-2 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
              <ThirdSection />
            </div>
            <OurMission />
            <ForthSection />
            <FifthٍSection />
            <ContactUs />
    </div>
  )
}

export default Page