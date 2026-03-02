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
import { EffectCube, Pagination , Autoplay , Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { useRef } from "react";




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


const AutoplayProgress = styled(Box)({
   position: 'absolute',
  right: 16,
  bottom: 16,
  zIndex: 10,
  width: 48,
  height: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  color: 'var(--swiper-theme-color)',
  "& svg": {
      Progress: 0,
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 10,
  width: '100%',
  height: '100%',
  strokeWidth: 4,
  stroke: 'var(--swiper-theme-color)',
  fill: 'none',
  strokeDashoffset: 'calc(125.6px * (1 - var(--progress)))',
  strokeDasharray: 125.6,
  transform: 'rotate(-90deg)',
  }
})
const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
const onAutoplayTimeLeft = (s, time, progress) => {
  if (!progressCircle.current || !progressContent.current) return;

  progressCircle.current.style.setProperty('--progress', 1 - progress);
  progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
};
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
              pagination={{
          clickable: true,
        }}

            spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
            modules={[EffectCube, Pagination, Autoplay ]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
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
                   <AutoplayProgress slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </AutoplayProgress>
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
