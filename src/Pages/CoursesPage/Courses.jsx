
import CoursesCard from "./CoursesCard";
import Testimonials from "./Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Protfolio | Courses</title>
      </Helmet>
      <div className="p-2">
      <CoursesCard/>
      <Testimonials/>
      </div>
    </div>
  );
};
export default Home;
