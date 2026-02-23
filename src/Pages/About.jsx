import MeetOurFounder from '../Components/MeetOurFounder/MeetOurFounder'
import Banner from "../Components/Banner/Banner";
import WhoComponent from "../Components/WhoComponent/WhoComponent";
import Slider from '../Components/Slider/Slider';
const About = () => {
  return (
    <div>
      <Banner heading="About Us" subHeading="Home/ About Us" />
      <WhoComponent />
      <MeetOurFounder />
      <Slider />
    </div>
  );
};

export default About;
