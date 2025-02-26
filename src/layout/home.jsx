import React from "react"
import "../App.css"
import Header from "../component/header/header"
import ImpactCards from "../component/Programs/ImpactCards"
import ResultsSection from "../component/ResultsSection/ResultsSection"
import Success from "../component/FundingCards/FundingCards"
import Textcon from "../component/Text/text"
import CorporatePartnerships from "../component/CorporatePartnerships/CorporatePartnerships"
import EducationPromo from "../component/EducationPromo/EducationPromo"
import TestimonialGrid from "../component/testimonials/testimonials"
import FAQ from "../component/FAQ/FAQ"
import Footer from "../component/Footer/Footer"
import DonationComponent from "../component/DonationComponent/DonationComponent"
import Nav from "../component/nav/nav"


const Home = () => {
    return (
        <>
            <Nav/>
            <div style={{marginTop:"-30px"}}></div>
            <Header />

           <div style={{marginTop: "100px"}}>
                <Textcon
                    icon="crown"
                    badgeText="Impactful metrics"
                    title="Programs that change lives"
                    subtitle="Together, we can make a real impact in communities around the world. Help us bring hope and support."
                    background="rgb(82, 219, 130)" 

                />
             <ImpactCards />
           </div>
            <div style={{marginTop: "80px"}}>
            <Textcon
                 imgSrc="/performance-management.png"
                 badgeText="Our results"
                 title="Results that inspire change"
                subtitle="Together, we can make a real impact in communities around the world. Help us bring hope and support."
                background="rgb(255, 142, 108)" 
            />
            <ResultsSection />
            </div>

         <div style={{marginTop: "80px"}}>
            <Textcon
                    imgSrc="/christmas-tree.png" 
                    badgeText="Funding Initiatives"
                    title="Supporting Our Mission"
                    subtitle="Your contributions make a significant difference in the lives of those we serve."
                    background="rgb(82, 219, 130)" 
                />
                <Success />
            </div> 
         <div style={{marginTop: "80px"}}>
            <Textcon
                    imgSrc="/mentorship.png"
                    badgeText="Strategic Partnerships"
                    title="Ways you can make a difference"
                    subtitle="We partner with corporations to amplify our impact and reach more communities."
                background="rgb(255, 142, 108)"
                    />
                <CorporatePartnerships />
            </div>
            <EducationPromo />

        <div style={{marginTop: "80px"}}>
            <Textcon
                    imgSrc="/christmas-tree.png" 
                    badgeText="Voices of Support"
                    title="Hear from those who believe in our mission"
                    subtitle="Together, we can make a real impact in communities around the world. Help us bring hope and support."
                    background="rgb(82, 219, 130)"

                />
              <TestimonialGrid />

            </div>


            <div style={{marginTop:"50px"}}></div>
            <DonationComponent />
            <div style={{marginTop:"100px"}}></div>

            <FAQ />
            <Footer />
        </>
    )
}

export default Home
