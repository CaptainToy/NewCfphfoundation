import React from "react"
import "../App.css"
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
           <div style={{marginTop: "100px"}}>
                <Textcon
                    icon="crown"
                    badgeText="Impactful metrics"
                    title="Programs that change lives"
                    subtitle="Together, we can make a real impact in communities around the world. Help us bring hope and support."
                    background="rgb(255, 142, 108)" 
                />
           </div>
            <ImpactCards />
            <div style={{marginTop: "100px"}}>
            <Textcon
                 imgSrc="/performance-management.png"
                 badgeText="Our results"
                 title="Results that inspire change"
                subtitle="Together, we can make a real impact in communities around the world. Help us bring hope and support."
                background="rgb(255, 142, 108)" 
            />
           </div>
            <ResultsSection />
            {/* <ResultsSection2 /> */}
            {/* <div className="">
                <Textcon
                    icon="bi bi-bookmark-tree" // Example icon
                    badgeText="Funding Initiatives"
                    title="Supporting Our Mission"
                    subtitle="Your contributions make a significant difference in the lives of those we serve."
                />
                <Success />
            </div> */}
            {/* <div className="">
                <Textcon
                    icon="business"
                    badgeText="Strategic Partnerships"
                    title="Ways you can make a difference"
                    subtitle="We partner with corporations to amplify our impact and reach more communities."
                />
                <CorporatePartnerships />
            </div> */}
            {/* <EducationPromo /> */}

            {/* <div className="text-content-con">
                <Textcon
                    icon="school"
                    badgeText="Voices of Support"
                    title="Hear from those who believe in our mission"
                    subtitle="Together, we can make a real impact in communities around the world. Help us bring hope and support."
                />
            </div> */}
                {/* <TestimonialGrid /> */}


            {/* <div style={{marginTop:"100px"}}></div> */}
            {/* <DonationComponent /> */}
            {/* <FAQ /> */}
            {/* <Footer /> */}
        </>
    )
}

export default Home