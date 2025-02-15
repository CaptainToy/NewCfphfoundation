import Blog from "../component/Blog/Blog";
import DonationComponent from "../component/DonationComponent/DonationComponent";
import Footer from "../component/Footer/Footer"
import Nav from "../component/nav/nav"
import TextCon from "../component/Text/text"




const Donation = () => {
    return (
        <>
            <Nav />
            <TextCon/>
            <Blog/>
            <DonationComponent/>
            <Footer />
        </>
    );
};

export default Donation