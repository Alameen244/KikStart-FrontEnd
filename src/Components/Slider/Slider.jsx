import Container from "@mui/material/Container";
import Headings from "../Heading/Headings";
import Box from "@mui/material/Box";
import Para from "../Para/Para";
import Typography from "@mui/material/Typography";
import stars from "../../assets/shooting.png";
import { styled } from "@mui/material/styles";
import Threestar from "../../assets/3star.png";
import icon from "../../assets/icon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { getHomeTestimonials } from "../../Apis/homeApi";
import noImage from "../../assets/defaultimage/noImage.png";

const SliderWrapper = styled(Box)({
  paddingBottom: "44px",
});

const StyledContainer = styled(Container)({
  position: "relative",
});

const ImageWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
});

const ClientImage = styled(Box)({
  objectFit: "cover",
  height: "127px",
  width: "127px",
  borderRadius: "50%",
});

const ParaWrapper = styled(Box)({
  padding: "28px 0",
  minHeight: "120px",
  display: "flex",
  alignItems: "center",
  justifyContent:"center"
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
  display: "flex",
  flexDirection: "column",
  minHeight: "320px",
});

const PersonInfo = styled(Box)({
  marginTop: "auto",
});
const IconWrapper = styled(Box)({
  position: "absolute",
  bottom: "22px",
  left: "-26px",
});

const fallbackTestimonials = {
  heading: "Whats Our Client Say",
  subheading: "TESTIMONIALS",
  testimonials: [
    {
      image: {
        url: noImage,
      },
      description: "clients message ",
      name: "client name",
      profession: "client proffession",
    },
    {
      image: {
        url: noImage,
      },
      description: "clients message ",
      name: "client name",
      profession: "client proffession",
    },
    {
      image: {
        url: noImage,
      },
      description: "clients message ",
      name: "client name",
      profession: "client proffession",
    },
  ],
};

const EmptyMessage = styled(Typography)({
  position: "absolute",
  bottom: "-24px",
  left: 0,
  fontFamily: "cursive",
  fontSize: 14,
});

const AutoplayProgress = styled(Box)({
  position: "absolute",
  right: 16,
  bottom: 16,
  zIndex: 10,
  width: 48,
  height: 48,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  color: "var(--swiper-theme-color)",
  "& svg": {
    Progress: 0,
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 10,
    width: "100%",
    height: "100%",
    strokeWidth: 4,
    stroke: "var(--swiper-theme-color)",
    fill: "none",
    strokeDashoffset: "calc(125.6px * (1 - var(--progress)))",
    strokeDasharray: 125.6,
    transform: "rotate(-90deg)",
  },
});
const Slider = () => {
  const { data: testimonialResponse } = useQuery({
    queryKey: ["homeTestimonials"],
    queryFn: getHomeTestimonials,
  });
  // console.log(testimonialResponse);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const testimonialData = testimonialResponse?.data;
  const testimonials = Array.isArray(testimonialData?.testimonials)
    ? testimonialData.testimonials
    : [];
  const isTestimonialEmpty =
    testimonialResponse?.empty || testimonials.length === 0;
  const testimonialContent = isTestimonialEmpty
    ? fallbackTestimonials
    : testimonialData;
  const activeTestimonials = Array.isArray(testimonialContent?.testimonials)
    ? testimonialContent.testimonials
    : fallbackTestimonials.testimonials;

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (!progressCircle.current || !progressContent.current) return;

    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <SliderWrapper>
      <StyledContainer maxWidth="lg">
        {isTestimonialEmpty && (
          <EmptyMessage color="secondary">
            !! testimonial section content is not available right now.
          </EmptyMessage>
        )}
        <Headings
          heading={testimonialContent?.heading}
          subHeading={testimonialContent?.subheading}
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
              pauseOnMouseEnter: true,
            }}
            modules={[EffectCube, Pagination, Autoplay]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
          >
            {activeTestimonials.map((item, index) => (
              <SwiperSlide key={`testimonial-${index}`}>
                <SlideCard>
                  <ImageWrapper>
                    <ClientImage
                      component="img"
                      src={item?.image?.url}
                      alt={item?.name}
                    />
                  </ImageWrapper>
                  <ParaWrapper>
                    <Para para={item?.description} align="center" />
                  </ParaWrapper>
                  <PersonInfo>
                    <Name color="dark">{item?.name}</Name>
                    <Role color="myRed">{item?.profession}</Role>
                  </PersonInfo>
                </SlideCard>
              </SwiperSlide>
            ))}
          </StyledSwiper>

          {activeTestimonials.length > 1 ? (
            <AutoplayProgress slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </AutoplayProgress>
          ) : (
            ""
          )}
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
