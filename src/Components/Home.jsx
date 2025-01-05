import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Contacts from "./Contacts";
import Education from "./Education";
import Footer from "./footer";
import Navbar from "./Navbar";

import Projects from "./Projects";
import Skills from "./Skills";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <Contacts></Contacts>
            <Footer></Footer>
        </div>
    );
};

export default Home;