import DonationCards from "../component/DonationCards/DonationCards "
import EducationPromo from "../component/EducationPromo/EducationPromo"
import Footer from "../component/Footer/Footer"
import HeroSection from "../component/HeroSection/HeroSection"
import Mission from "../component/Mission/Mission"
import Nav from "../component/nav/nav"
import NewCardEdit from "../component/newCardEdit/newcardedit"
import ResultsSection2 from "../component/ResultsSection2/ResultsSection2"
import Textcon from "../component/Text/text"
import Success from "../component/FundingCards/FundingCards"



const Donation = () => {
    return (
        <>
            <Nav />
            <HeroSection />
            <Textcon />
            <DonationCards />
            <div>
                <Textcon />
                <NewCardEdit />
                <EducationPromo />
            </div>
            <div>
                <Mission
                    title="Our Mission"
                    topic="Kindora’s work is made possible by a dedicated community"
                    discription="We value transparency and keep our supporters informed about the tangible outcomes of their contributions. Together, we are creating a powerful movement of compassion and action."
                />
                <ResultsSection2 />
            </div>
            <div style={{marginBottom: "50px"}}>
                <Textcon
                    icon="bi bi-bookmark-tree"
                    badgeText="Funding Initiatives"
                    title="Supporting Our Mission"
                    subtitle="Your contributions make a significant difference in the lives of those we serve."
                />
                <Success />
            </div>
            <Footer />
        </>
    );
};

export default Donation