import DonationComponent from "../component/DonationComponent/DonationComponent"
import FAQ from "../component/FAQ/FAQ"
import Footer from "../component/Footer/Footer"
import Mission from "../component/Mission/Mission"
import Nav from "../component/nav/nav"
const About = () =>{
    return(
        <>
        <Nav/>
        <Mission/>
        <DonationComponent/>
        {/* <FAQ/> */}
        <Footer/>
        </>
       
    )
}
export default About