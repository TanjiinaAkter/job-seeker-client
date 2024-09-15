// import Footer from "../Shared/Footer/Footer";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Reacttab from "../Reacttab/Reacttab";
import Sectionfour from "../Sectionfour/Sectionfour";
import Sectionone from "../Sectionone/Sectionone";
import Sectiontrhee from "../Sectiontrhee/Sectiontrhee";
import Sectiontwo from "../Sectiontwo/Sectiontwo";
// import Banner from "./Banner/Banner";
// import img from '../../assets/slider11.png'
import "./Home.css";
const Home = () => {
  return (
    <div className="overflow-hidden">
      <div className="bg-img">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
      <Reacttab></Reacttab>
      <Sectionone></Sectionone>
      <Sectiontwo></Sectiontwo>
      <Sectiontrhee></Sectiontrhee>
      <Sectionfour></Sectionfour>
      <Footer></Footer>
    </div>
  );
};

export default Home;
