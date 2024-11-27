
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import SkillSection from "./SkillSection";
import Experience from "./Experience";
import ContactSection from "./ContactSection";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Protfolio | About</title>
      </Helmet>
      <Hero/>
      <div className="p-2">
        <AboutMe/>
        <SkillSection/>
        <Experience/>
        <ContactSection/>
      </div>
    </div>
  );
};
export default Home;
