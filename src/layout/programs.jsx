import AboutUs from "../component/AboutUs/AboutUs"
import Causes from "../component/Causes/Causes"
import DonationComponent from "../component/DonationComponent/DonationComponent"
import FAQ from "../component/FAQ/FAQ"
import Footer from "../component/Footer/Footer"
import Mission from "../component/Mission/Mission"
import Nav from "../component/nav/nav"
import NewCardEdit from "../component/newCardEdit/newcardedit"
import StatsComponent from "../component/StatsComponent/StatsComponent"
import Text from "../component/Text/text"

const Programs = () =>{
    return(
        <>
        <Nav/>
        {/* <Mission
              title="program"
              topic="Community Rebuilding"
              discription="Emphasize the broader community impact, like job creation, improved infrastructure, or restored communal spaces."
        /> */}
        <Causes/>
        <StatsComponent/>
        <FAQ/>

        <DonationComponent/>
        <Footer/>
        </>
       
    )
}
export default Programs