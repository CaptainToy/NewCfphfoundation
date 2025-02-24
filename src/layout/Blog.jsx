import Blog from "../component/Blog/Blog";
import DonationComponent from "../component/DonationComponent/DonationComponent";
import Footer from "../component/Footer/Footer"
import Nav from "../component/nav/nav"
import TextCon from "../component/Text/text"




const Donation = () => {
    return (
        <>
            <Nav />
            <div style={{marginTop: "70px"}}>
            <TextCon
                 imgSrc="/performance-management.png"
                 badgeText="Our results"
                 title="Results that inspire change"
                subtitle="Together, we can make a real impact in communities around the world. Help us bring hope and support."
                background="rgb(255, 142, 108)" 
            />
            </div>
            <Blog/>
            <DonationComponent/>
            <Footer />
        </>
    );
};

export default Donation