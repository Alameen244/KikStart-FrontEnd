import MeetOurFounder from "../Components/MeetOurFounder/MeetOurFounder";
import Banner from "../Components/Banner/Banner";
import WhoComponent from "../Components/WhoComponent/WhoComponent";
import Slider from "../Components/Slider/Slider";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
const WhoWrapper = styled(Box)({
  padding: "37px 0 100px",
});

const SliderWrapper = styled(Box)({
  paddingBottom:"22.7px",
});
const About = () => {
  return (
    <div>
      <Banner heading="About Us" subHeading="Home/ About Us" />
      <WhoWrapper>
        <WhoComponent />
      </WhoWrapper>
      <MeetOurFounder />
      <SliderWrapper>
      <Slider />
      </SliderWrapper>
    </div>
  );
};

export default About;
