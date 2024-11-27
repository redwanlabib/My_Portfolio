
import Form from "./Form";
import Address from "./Address";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Protfolio | Contact</title>
      </Helmet>
      <div className="p-2">
      <Form/>
      <Address/>
      </div>
    </div>
  );
};
export default Home;