import AboutUs from "../component/AboutUs/AboutUs"
import DonationComponent from "../component/DonationComponent/DonationComponent"
import FAQ from "../component/FAQ/FAQ"
import Footer from "../component/Footer/Footer"
import Mission from "../component/Mission/Mission"
import Nav from "../component/nav/nav"
import NewCardEdit from "../component/newCardEdit/newcardedit"
import StatsComponent from "../component/StatsComponent/StatsComponent"
import Team from "../component/Team/Team"
import Textcon from "../component/Text/text"

const About = () =>{
    return (
      <>
        <Nav />
        <AboutUs />
        <NewCardEdit />
        <div style={{ marginTop: "120px" }}>
          <Textcon
            imgSrc="/christmas-tree.png"
            badgeText="Our Impacts"
            title=" CFPHF made an extensive impact"
            discription="Together, we can make a real impact in communities around the world. Help us bring hope and support."
            background="rgb(82, 219, 130)"
          />
          <div style={{ marginTop: "20px" }}>
            <StatsComponent />
          </div>
          <Mission
            title="Our Mission"
            topic="CFPHF work is made possible by a dedicated community"
            discription="To alleviate hunger and malnutrition in our community by providing food assistance to vulnerable individuals and families."
            discription2="A world where everyone has access to nutritious food and a chance to thrive."
          />
        </div>
        <div style={{ marginTop: "120px" }}>
          <Textcon
            imgSrc="/christmas-tree.png"
            badgeText="Our Impacts"
            title="Meet our incredible team"
            subtitle="Together, we can make a real impact in communities around the world. Help us bring hope and support."
            background="rgb(82, 219, 130)"
          />
          <Team />
        </div>
        <DonationComponent />
        {/* <FAQ/> */}
        <Footer />
      </>
    );
}
export default About