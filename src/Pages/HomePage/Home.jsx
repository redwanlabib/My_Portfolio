
import Hero from "./HeroSection";
import CardSection from "./CardSection";
import Protfolio from "./Protfolio";
import Testimonials from "./Testimonials";
import ContactSection from "./ContactSection";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Protfolio | Home</title>
      </Helmet>
      <Hero/>
      <div className="p-2">
        <CardSection/>
        <Protfolio/>
        <Testimonials/>
        <ContactSection/>
      </div>
    </div>
  );
};
export default Home;
