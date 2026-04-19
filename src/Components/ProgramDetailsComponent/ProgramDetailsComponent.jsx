import React, { useState } from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import ReactPlayer from "react-player";
import Para from "../Para/Para";
import Grid from "@mui/material/Grid";
import bigLogoImage from "../../assets/BigLogoHome.png";
import TextField from "@mui/material/TextField";
import MainButton from "../RedButton/RedButton";
import Headings from "../Heading/Headings";
import RightStarBroom from "../../assets/Group (3).png";
// import { programsData } from "../../data/programsData";
// import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";

const ProgramDetailsComponentWrapper = styled(Box)({});
const KikLogoWrapper = styled(Box)({});
const ContentWrapper = styled(Container)({
  marginTop: "80px",
  marginBottom: "80px",
});
const Title = styled("h1")({
  fontFamily: "PT Sans",
  fontStyle: "normal",
  fontWeight: 700,

  textTransform: "capitalize",

  color: "#2B2B2B",
});
const ImageWrapper = styled(Box)({
  position: "relative",
  width: "100%",
  aspectRatio: "16 / 9",
  borderRadius: "65px",
  overflow: "hidden",
  cursor: "pointer",
  transition: "transform 0.4s ease",
  marginBottom: "40px",
  marginTop: "20px",
});

const StyledPlayer = styled(ReactPlayer)({
  width: "100% !important",
  height: "100% !important",
  "& video, & iframe": {
    border: 0,
    width: "100%",
    height: "100%",
  },
  "& .react-player__preview": {
    width: "100% !important",
    height: "100% !important",
    backgroundSize: "cover !important",
    backgroundPosition: "center !important",
  },
  "& .react-player__shadow": {
    background: "rgba(0, 0, 0, 0.26) !important",
  },
});

const Paragraph = styled(Typography)({
  display: "block",
  fontSize: "16px",
  lineHeight: "28px",
  color: "#555",
  marginBottom: "20px",
  overflow: "visible",
  whiteSpace: "normal",
  WebkitLineClamp: "unset",
  WebkitBoxOrient: "initial",
  "& p": {
    margin: 0,
  },
  "& p + p": {
    marginTop: "14px",
  },
  "& *": {
    overflow: "visible",
    WebkitLineClamp: "unset",
    WebkitBoxOrient: "initial",
  },
  "& img, & video, & iframe": {
    display: "none",
  },
});
const SubHeading = styled(Typography)({
  fontFamily: "PT Sans",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: 20,
  // marginTop:"40px",

  textTransform: "capitalize",

  color: "#2B2B2B",
});

const DetailedDescription = styled(Typography)({
  margin: "9px 0 40px",
  display: "block",
  fontFamily: "Noto Sans",
  fontWeight: 400,
  fontSize: 15,
  lineHeight: 1.8,
  color: "#494949",
  overflow: "visible",
  whiteSpace: "normal",
  WebkitLineClamp: "unset",
  WebkitBoxOrient: "initial",
  "& p": {
    margin: 0,
  },
  "& p + p": {
    marginTop: "16px",
  },
  "& *": {
    overflow: "visible",
    WebkitLineClamp: "unset",
    WebkitBoxOrient: "initial",
  },
  "& img, & video, & iframe": {
    display: "none",
  },
});

const DetailsWrapper = styled(Box)({
  fontFamily: "Noto Sans",

  fontWeight: 400,
  fontSize: 15,

  color: "#494949",
});
const GridWrapper = styled(Grid)({
  alignItems: "center",
  marginTop: "22px",
  display: "flex",
  columnGap: "25px",
  overflowY: "hidden",
});

const ImageBox = styled(Box)({
  height: "267px",
  width: "267px",
});
const ProgramImages = styled(Typography)({
  fontFamily: "PT Sans",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: 20,
  marginTop: "40px",

  textTransform: "capitalize",

  color: "#2B2B2B",
});
const EnquiryWrapper = styled(Box)({});
const StyledTextField = styled(TextField)({
  marginBottom: "20px",

  "& .MuiOutlinedInput-root": {
    borderRadius: "15px",
    backgroundColor: "#F9FAFB",

    "& fieldset": {
      borderColor: "#E0E0E0",
    },

    "&:hover fieldset": {
      borderColor: "#FF3B3B",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#FF3B3B",
      borderWidth: "2px",
    },
  },

  "& .MuiInputLabel-root": {
    fontFamily: "Noto Sans",
    fontSize: "14px",
    color: "#B3B3B3",
  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: "#FF3B3B",
  },

  "& .MuiOutlinedInput-input": {
    padding: "20px",
  },
});
const InputWrapper = styled(Box)({
  background: "#FFFFFF",
  boxShadow: "0px 17px 44px rgba(0, 0, 0, 0.08)",
  borderRadius: "65px",
  padding: "46px 40px",
  marginTop: "30px",
  marginBottom: "25px",
});
const ProgramFormWrapper = styled(Box)({
  marginTop: "100px",
});

const GalleryImage = styled(Box)({
  height: "100%",
  width: "100%",
  objectFit: "cover",
  objectPosition: "top",
  borderRadius: "30px",
});
const LeftInputWrapper = styled(Box)({
  position: "relative",
});

const StarImageWrapper = styled(Box)({
  position: "absolute",
  bottom: "70px",
  right: "-80px",
  zIndex: "-1",
});

function ProgramDetailsComponent({ program , items}) {
  if (!program) {
    return (
      <ProgramDetailsComponentWrapper>
        <ContentWrapper maxWidth="lg">
          <Title>Program Not Found</Title>
        </ContentWrapper>
      </ProgramDetailsComponentWrapper>
    );
  }
  console.log(program)

function getFirstImages(arr) {
  if (!Array.isArray(arr)) return [];

  return arr
    .map(item => item?.images?.[0])
    .filter(Boolean);
}
  const FirstImages = getFirstImages(items);
  //EnqueryForm

  const [formData, setFormData] = useState({
    schoolName: "",
    personName: "",
    email: "",
    phoneNumber: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const detailsContent =
    program?.ProgramDetails || program?.details?.detailedDescription || "";
  const enquiryContent =
    "Lorem ipsum dolor sit amet consectetur. Quam in non velit malesuada arcu eget id. Id ut turpis tempor semper et in nunc aliquet. Orci cras faucibus aliquam eget orci egestas.";

  const normalizeRichText = (value = "") => {
    if (!value) return "";

    const normalizedValue = value.replace(/&nbsp;/gi, " ");
    const hasHtmlTag = /<\/?[a-z][\s\S]*>/i.test(normalizedValue);

    if (hasHtmlTag) {
      return normalizedValue;
    }

    return normalizedValue.replace(/\n/g, "<br />");
  };

  return (
    <ProgramDetailsComponentWrapper>
      <ContentWrapper maxWidth="lg">
        <Title>{program?.title || program?.heading}</Title>
        <ImageWrapper>
          <StyledPlayer
            src="https://youtu.be/ug5RIt4r5oc?si=vRIwnMNSmtTKVxh9"
            width="100%"
            height="634px"
            controls
            light={program?.image}
            playing={false}
          />
        </ImageWrapper>
        <Paragraph
          dangerouslySetInnerHTML={{
            __html: normalizeRichText(program.description || ""),
          }}
        />
        <SubHeading>Program Details</SubHeading>

        <DetailsWrapper>
          <DetailedDescription
            dangerouslySetInnerHTML={{ __html: normalizeRichText(detailsContent) }}
          />
        </DetailsWrapper>

        <ProgramImages>Program Images</ProgramImages>
         {/* marquee scroll  */}
<Swiper
  modules={[Autoplay, Pagination]}
  grabCursor
  pagination={{ clickable: true }}
  slidesPerView={"auto"}
  spaceBetween={20}
  loop={true}

  speed={4000}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
>
          {FirstImages.map((programItem, index) => (
            <SwiperSlide
              key={`${programItem?._id || programItem?.url || "program-image"}-${index}`}
              style={{ width: "300px" }}
            >
              <ImageBox>
                <GalleryImage
                  component="img"
                  src={programItem?.url || programItem?.image}
                  alt={`${program?.title || program?.heading} ${index + 1}`}
                />
              </ImageBox>
            </SwiperSlide>
          ))}
        </Swiper>

        <ProgramFormWrapper>
          <GridWrapper container spacing={8}>
            <Grid item size={{ lg: 6 }}>
              <Headings subHeading="" heading="Enquiry" />
              <Para para={enquiryContent} />
              <LeftInputWrapper>
                <InputWrapper>
                  <EnquiryWrapper component="form" onSubmit={handleSubmit}>
                    <StyledTextField
                      label="School Name"
                      name="schoolName"
                      value={formData.schoolName}
                      onChange={handleChange}
                      fullWidth
                    />
                    <StyledTextField
                      label="Contact Person Name Of The School"
                      name="personName"
                      value={formData.personName}
                      onChange={handleChange}
                      fullWidth
                    />
                    <StyledTextField
                      label="Email Address Of The School"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      fullWidth
                    />
                    <StyledTextField
                      label="Phone Number Of The School"
                      name="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      fullWidth
                    />
                  </EnquiryWrapper>
                  <MainButton
                    color="secondary"
                    text="SEND"
                    px="42px"
                    py="18px"
                  />
                </InputWrapper>
                <StarImageWrapper component="img" src={RightStarBroom} />
              </LeftInputWrapper>
            </Grid>
            <Grid item size={{ lg: 6 }}>
              <KikLogoWrapper>
                <img src={bigLogoImage} alt="" />
              </KikLogoWrapper>
            </Grid>
          </GridWrapper>
        </ProgramFormWrapper>
      </ContentWrapper>
    </ProgramDetailsComponentWrapper>
  );
}

export default ProgramDetailsComponent;
