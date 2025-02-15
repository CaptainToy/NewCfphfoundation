import AboutUs from "../component/AboutUs/AboutUs"
import DonationComponent from "../component/DonationComponent/DonationComponent"
import FAQ from "../component/FAQ/FAQ"
import Footer from "../component/Footer/Footer"
import Mission from "../component/Mission/Mission"
import Nav from "../component/nav/nav"
import NewCardEdit from "../component/newCardEdit/newcardedit"
import StatsComponent from "../component/StatsComponent/StatsComponent"
import Team from "../component/Team/Team"
import Text from "../component/Text/text"

const About = () =>{
    return(
        <>
        <Nav/>
        <AboutUs/>
        <NewCardEdit/>
       <div>
            <Text/>
            <StatsComponent/>
            <Mission
                title="Our Mission"
                topic="Kindora’s work is made possible by a dedicated community"
                discription="We value transparency and keep our supporters informed about the tangible outcomes of their contributions. Together, we are creating a powerful movement of compassion and action."
            />
       </div>
       <div>
            <Text/>
            <Team/>
       </div>
        <DonationComponent/>
        {/* <FAQ/> */}
        <Footer/>
        </>
       
    )
}
export default About