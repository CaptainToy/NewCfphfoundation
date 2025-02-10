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

const Home =()=>{
    return(
        <>
            <Header/>
            <ImpactCards/>
            <ResultsSection/>
            <ResultsSection2/>
            <div className="">
                <Textcon/>
                <Success/>
            </div>
            <div className="">
                <Textcon/>
                <CorporatePartnerships/>
                <EducationPromo/>
            </div>
            <Textcon/>
            <TestimonialGrid/>
            <FAQ/>
            <Footer/>
        </>
    )
}

export default Home