import Navbar from "../components/Navbar"
import AboutHeader from "../components/AboutHeader"
import AboutUsSection from "../components/AboutSection"
import ServicesSection from "../components/ServicesSection"
import Practicial from "../components/Practicial"
import Galery from "../components/Galery"
import Blog from "../components/Blog"
import Consultation from "../components/Consultation"
import Footer from "../components/Footer"
import Statistik from "../components/Statistik"


function Home(){
    return (
        <>
            <Navbar/>
            <AboutHeader/>
            <AboutUsSection/>
            <ServicesSection/>
            <Practicial/>
            <Galery/>
            <Statistik/>
            <Blog/>
            <Consultation/>
            <Footer/>
        </>
    )
}


export default Home