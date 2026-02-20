import CommonLayer from "../Components/AboutComponents/Layer1/CommonLayer";
import Layer2 from "../Components/AboutComponents/Layer2/Layer2";
import Layer3 from "../Components/AboutComponents/Layer3/Layer3";
import Layer4 from '../Components/HomeComponents/Layer5/Layer5'
const About = () => {
  return (
    <div>
      <CommonLayer heading="About Us" subHeading="Home/ About Us" />
      <Layer2 />
      <Layer3 />
      <Layer4 />
    </div>
  );
};

export default About;
