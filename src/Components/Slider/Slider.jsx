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
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
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
const StyledSwiper = styled(Swiper)({
  width: "100%",
  "& .swiper-slide": {
    display: "flex",
    justifyContent: "center",
  },
  "& .swiper-pagination": {
    position: "relative",
    marginTop: "20px",
    bottom: "unset",
  },
  "& .swiper-pagination-bullet": {
    backgroundColor: "#C9C9C9",
    opacity: 1,
  },
  "& .swiper-pagination-bullet-active": {
    backgroundColor: "#ED1C24",
  },
});

const SlideCard = styled(Box)({
  width: "100%",
});
const IconWrapper = styled(Box)({
  position: "absolute",
  bottom: "22px",
  left: "-26px",
});

const testimonials = Array.from({ length: 5 }, () => ({
  image: girlImage,
  para: "Lorem ipsum dolor sit amet consectetur. Tortor sed ipsum tortor in et. Arcu tortor phasellus elementum sed natoquepellentesque in elit imperdiet. Sit nisi turpis arcu malesuada purus semper. Bibendum urna dolor at ut tincidunt.Scelerisque dictumst sed.",
  name: "Cameron Williamson",
  role: "Coach",
}));

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
          <StyledSwiper
            effect="cube"
            grabCursor
            cubeEffect={{
              shadow: false,
              slideShadows: false,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination
            modules={[EffectCube, Pagination]}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={`testimonial-${index}`}>
                <SlideCard>
                  <ImageWrapper>
                    <GirlImage component="img" src={item.image} alt="girlImage" />
                  </ImageWrapper>
                  <ParaWrapper>
                    <Para para={item.para} align="center" />
                  </ParaWrapper>
                  <Box>
                    <Name color="dark">{item.name}</Name>
                    <Role color="myRed">{item.role}</Role>
                  </Box>
                </SlideCard>
              </SwiperSlide>
            ))}
          </StyledSwiper>
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
