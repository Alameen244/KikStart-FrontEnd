import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import miniStar from "../../assets/miniStar.png";
import star from "../../assets/star.png";
import bigStar from "../../assets/bigStar.png";
import lStar from "../../assets/lStar.png";
import cloud from "../../assets/cloud.png";
import wave from "../../assets/wave.png";

const BannerWrapper = styled(Box)({
  backgroundColor: "#FFF8F8",

});

const ContentWrapper = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  position: "relative",
  padding: "123px 0 108px",

});
const Heading = styled(Typography)({


fontFamily: 'PT Sans',
fontStyle: 'normal',
fontWeight: 700,
fontSize: 74,
textAlign: 'center',

color: '#2B2B2B',

});
const SubHeading = styled(Typography)({


fontFamily: 'Noto Sans',
fontStyle: 'normal',
fontWeight: 400,
fontSize: 20,


// Read: 'more: https://drafts.csswg.org/css-inline-3/#leading-trim',
// */
leadingTrim: 'both',
textEdge: 'cap',
textAlign: 'center',

color: '#494949',


});

const StarImage = styled(Box)({
  position: "absolute",
  top: "70px",
  right: "280px",
});

const MiniStarImage = styled(Box)({
  position: "absolute",
  top:"141px",
  left: "180px",
  
});

const CloudImage = styled(Box)({
  position: "absolute",
  top: "79px",
  left: "-97px",
});

const BigStarImage = styled(Box)({
  position: "absolute",
  top: "208px",
  right: "-222px",
});

const LStarImage = styled(Box)({
  position: "absolute",
  bottom: "23px",
  left: "22px",
});

const WaveImage = styled(Box)({
  width: "100%",
  height: "auto",
  transform:"translateY(4px)"

});

const Banner = (props) => {
  return (
    <BannerWrapper>
      <ContentWrapper maxWidth="lg">
        <Heading  variant="h1">
          {props.heading}
        </Heading>
        <SubHeading >
          {props.subHeading}
        </SubHeading>
        <StarImage component="img" src={star} alt="star" />
        <MiniStarImage component="img" src={miniStar} alt="miniStar" />
        <CloudImage component="img" src={cloud} alt="cloud" />
        <BigStarImage component="img" src={bigStar} alt="star" />
        <LStarImage component="img" src={lStar} alt="star" />
      </ContentWrapper>

      <WaveImage component="img" src={wave} alt="wave" />

    </BannerWrapper>
  );
};

export default Banner;
