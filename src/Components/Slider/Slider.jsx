import Container from "@mui/material/Container";
import Headings from "../Heading/Headings";
import girlImage from "../../assets/Girl.png";
import Box from "@mui/material/Box";
import Para from "../Para/Para";
import Typography from "@mui/material/Typography";
import stars from "../../assets/shooting.png";
import { styled } from "@mui/material/styles";
import Threestar from "../../assets/3star.png";
import icon from "../../assets/icon.png";
const SliderWrapper = styled(Box)({
  paddingBottom:"44px",
});

const StyledContainer = styled(Container)({
  position: "relative",
});

const ImageWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
});

const GirlImage = styled(Box)({
  objectFit: "cover",
});

const ParaWrapper = styled(Box)({
  padding: "28px 0 ",
});

const Name = styled(Typography)({
  textAlign: "center",
  /* Cameron Williamson */

  fontFamily: "PT Sans",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: 20,

  textTransform: "capitalize",

  color: "#2B2B2B",
});

const Role = styled(Typography)({
  textAlign: "center",
  /* Coach */

  fontFamily: "Noto Sans",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 15,
  /* identical to box height, or 173% */

  color: "#ED1C24",
});

const StarsWrapper = styled(Box)({
  position: "absolute",
  top: "68px",
  right: "-50px",
});

const ThreeStarsWrapper = styled(Box)({
  position: "absolute",
  top: "89px",
  left: "80px",

});

const SliderContentWrapper = styled(Box)({
  maxWidth: "732px",
  margin: " 31px auto 0px",

});
const IconWrapper = styled(Box)({
  position: "absolute",
  bottom: "22px",
  left: "-26px",
});

const Slider = () => {
  return (
    <SliderWrapper>
      <StyledContainer maxWidth="lg">
        <Headings
          heading="Whats Our Client Say"
          subHeading="TESTIMONIALS"
          align="center"
        />
        <SliderContentWrapper>
          <ImageWrapper>
            <GirlImage component="img" src={girlImage} alt="girlImage" />
          </ImageWrapper>
          <ParaWrapper>
            <Para
              para="Lorem ipsum dolor sit amet consectetur. Tortor sed ipsum tortor in et. Arcu tortor phasellus elementum sed natoquepellentesque in elit imperdiet. Sit nisi turpis arcu malesuada purus semper. Bibendum urna dolor at ut tincidunt.Scelerisque dictumst sed."
              align="center"
            />
          </ParaWrapper>
          <Box>
            <Name color="dark">Cameron Williamson</Name>
            <Role color="myRed">Coach</Role>
          </Box>

        </SliderContentWrapper>
            <StarsWrapper>
          <Box component="img" src={stars} alt="shooting stars" />
        </StarsWrapper>
        <ThreeStarsWrapper>
          <Box component="img" src={Threestar} alt="three stars" />
        </ThreeStarsWrapper>
        <IconWrapper>
          <Box component="img" src={icon} alt="icon" />
        </IconWrapper>
      </StyledContainer>
    </SliderWrapper>
  );
};

export default Slider;
