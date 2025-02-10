import Header from "../component/header/header"
import ImpactCards from "../component/Programs/ImpactCards"
import ResultsSection from "../component/ResultsSection/ResultsSection"
import ResultsSection2 from "../component/ResultsSection2/ResultsSection2"
import Success from "../component/FundingCards/FundingCards"
import Textcon from "../component/Text/text"
import CorporatePartnerships from "../component/CorporatePartnerships/CorporatePartnerships"
import EducationPromo from "../component/EducationPromo/EducationPromo"
import TestimonialGrid from "../component/testimonials/testimonials"
import FAQ from "../component/FAQ/FAQ"
import Footer from "../component/Footer/Footer"
import DonationComponent from "../component/DonationComponent/DonationComponent"

const Home = () => {
    return (
        <>
            <Header />
           <div className="text-con">
                <Textcon
                    icon="crown"
                    badgeText="Impactful metrics"
                    title="Programs that change lives"
                    subtitle="Together, we can make a real impact in communities around the world. Help us bring hope and support."
                />
           </div>
            <ImpactCards />
            <ResultsSection />
            <ResultsSection2 />
            <div className="">
                <Textcon
                    icon="hand_holding_heart" // Example icon
                    badgeText="Funding Initiatives"
                    title="Supporting Our Mission"
                    subtitle="Your contributions make a significant difference in the lives of those we serve."
                />
                <Success />
            </div>
            <div className="">
                <Textcon
                    icon="business" // Example icon
                    badgeText="Strategic Partnerships"
                    title="Collaborating for Change"
                    subtitle="We partner with corporations to amplify our impact and reach more communities."
                />
                <CorporatePartnerships />
            </div>
            <EducationPromo />
            <Textcon
                icon="school" // Example icon
                badgeText="Educational Programs"
                title="Empowering Through Education"
                subtitle="We believe that education is a key to unlocking potential and creating lasting change."
            />
            <TestimonialGrid />
            <DonationComponent />
            <FAQ />
            <Footer />
        </>
    )
}

export default Home