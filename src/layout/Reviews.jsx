import DonationComponent from "../component/DonationComponent/DonationComponent"; 
import Footer from "../component/Footer/Footer";
import Nav from "../component/nav/nav";
import TestimonialGrid from "../component/testimonials/testimonials";
import TextCon from "../component/Text/text";

const Donation = () => {
    const testimonials = [
        {
          name: 'Brooklyn Simmons',
          company: 'Waves',
          image: 'https://framerusercontent.com/images/ErbmgkTkdj4QiwxhvrYrPXGIZM.svg', 
          quote: 'This charity provided critical medical aid to our community. The healthcare support.',
          star: 5,
        },
        {
          name: 'Madison Carter',
          company: 'William Henry',
          image: 'https://framerusercontent.com/images/ErbmgkTkdj4QiwxhvrYrPXGIZM.svg',
          quote: "I've had the privilege to volunteer here, and seeing the difference we make in life.",
          star: 3,
        },
        {
          name: 'Riley Bennett',
          company: 'Swift',
          image: 'https://framerusercontent.com/images/ErbmgkTkdj4QiwxhvrYrPXGIZM.svg',
          quote: 'Their transparency inspires us to give more and make a bigger real impact together.',
          star: 4,
        },
        {
          name: 'Kendall Monroe',
          company: 'Craftgram',
          image: 'https://framerusercontent.com/images/ErbmgkTkdj4QiwxhvrYrPXGIZM.svg',
          quote: 'After losing our home to a flood, they helped us rebuild and find stability again.',
          star: 4,
        },
        {
          name: 'Sydney Parker',
          company: 'Lum Labs',
          image: 'https://framerusercontent.com/images/ErbmgkTkdj4QiwxhvrYrPXGIZM.svg',
          quote: 'My children now have access to clean water and meals thanks to this organization.',
          star: 5,
        },
        {
          name: 'Jordan Blake',
          company: 'TrendLyft',
          image: 'https://framerusercontent.com/images/ErbmgkTkdj4QiwxhvrYrPXGIZM.svg',
          quote: "Knowing my monthly donations support children's education gives me immense joy.",
          star: 3,
        },
        // **Additional Reviews Added**
        {
          name: 'Logan Matthews',
          company: 'EcoFund',
          image: 'https://framerusercontent.com/images/ErbmgkTkdj4QiwxhvrYrPXGIZM.svg',
          quote: 'Their environmental initiatives have made a real difference in our local parks.',
          star: 4,
        },
        {
          name: 'Avery Jordan',
          company: 'HopeBuilders',
          image: 'https://framerusercontent.com/images/ErbmgkTkdj4QiwxhvrYrPXGIZM.svg',
          quote: 'I love how this organization helps build homes for those in need.',
          star: 5,
        },
        {
          name: 'Charlie Morgan',
          company: 'Food for All',
          image: 'https://framerusercontent.com/images/ErbmgkTkdj4QiwxhvrYrPXGIZM.svg',
          quote: 'With their food donations, we never have to worry about meals anymore.',
          star: 5,
        },
        {
          name: 'Jordan Rivers',
          company: 'Bright Future',
          image: 'https://framerusercontent.com/images/ErbmgkTkdj4QiwxhvrYrPXGIZM.svg',
          quote: 'Their mentorship programs helped me find direction in my career.',
          star: 4,
        }
    ];

    return (
        <>
            <Nav />
            <div style={{ marginBottom: "70px", marginTop: "70px" }}>
                <TextCon 
                 background="rgb(255, 142, 108)"/>
                <TestimonialGrid testimonials={testimonials} />
            </div>
            <DonationComponent />
            <Footer />
        </>
    );
};

export default Donation;
