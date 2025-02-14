import AboutUs from "../component/AboutUs/AboutUs"
import DonationComponent from "../component/DonationComponent/DonationComponent"
import FAQ from "../component/FAQ/FAQ"
import Footer from "../component/Footer/Footer"
import Mission from "../component/Mission/Mission"
import Nav from "../component/nav/nav"
import Team from "../component/Team/Team"
import Text from "../component/Text/text"

const About = () =>{
    return(
        <>
        {/* <Nav/> */}
        <AboutUs/>
        <Mission/>
        <Text/>
        <Team/>
        <DonationComponent/>
        {/* <FAQ/> */}
        <Footer/>
        </>
       
    )
}
export default About