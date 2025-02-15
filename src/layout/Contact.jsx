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
import Nav from "../component/nav/nav"
import ContactSection from "../component/ContactSection/ContactSection"


const Contact = () => {
    return (
        <>
            <Nav/>
            <div className="">
                <Textcon
                    icon="bi bi-bookmark-tree" // Example icon
                    badgeText="Funding Initiatives"
                    title="Supporting Our Mission"
                    subtitle="Your contributions make a significant difference in the lives of those we serve."
                />
                <Success />
            </div>
           
<ContactSection/>
            <FAQ />
            <DonationComponent />
            <Footer />
        </>
    )
}

export default Contact