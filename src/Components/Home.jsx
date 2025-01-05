import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Contacts from "./Contacts";
import Education from "./Education";

import Projects from "./Projects";
import Skills from "./Skills";


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <Contacts></Contacts>
        </div>
    );
};

export default Home;