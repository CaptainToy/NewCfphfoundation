import Header from "../component/header/header"
import ImpactCards from "../component/Programs/ImpactCards"
import ResultsSection from "../component/ResultsSection/ResultsSection"
import ResultsSection2 from "../component/ResultsSection2/ResultsSection2"
import Success from "../component/FundingCards/FundingCards"
import Text from "../component/Text/text"

const Home =()=>{
    return(
        <>
            <Header/>
            <ImpactCards/>
            <ResultsSection/>
            <ResultsSection2/>
            {/* <Text/> */}
            <Success/>
        </>
    )
}

export default Home