import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Big from "../../assets/Big.png";
import Para from "../Para/Para";
import MainButton from "../RedButton/RedButton";
import cloud from "../../assets/cloud.png";
import star from "../../assets/star.png";
import bigStar from "../../assets/bigStar.png";
import lStar from "../../assets/lStar.png";
import curveArrow from "../../assets/curveArrow.png";
import butterfly from "../../assets/butterfly.png";
import wave from "../../assets/wave.png";
import miniStar from "../../assets/miniStar.png";
import { useAuth } from "../../Context/AuthContext";
/* Styled Wrappers (1:1 sx conversion) */
import { getHomeBanner } from "../../Apis/homeApi";
import { useQuery } from "@tanstack/react-query";
const BannerWrapper = styled(Box)({
  backgroundColor: "#FFFAFA",
});

const OuterContainer = styled(Container)({
  position: "relative",
  padding: "95px 0 86px",
});

const GridWrapper = styled(Grid)({
  alignItems: "center",
});

const LeftGrid = styled(Grid)({
  position: "relative",
  flexGrow: 0,
  flexBasis: "36.4%",
  maxWidth: "36.4%",
});

const RightGrid = styled(Grid)({
  position: "relative",
  flexGrow: 0,
  flexBasis: "63.6%",
  maxWidth: "63.6%",
});
const RedSubHeading = styled(Typography)({
  fontFamily: "Noto Sans",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: 14,
  /* identical to box height */
  letterSpacing: "0.1em",
  marginBottom: "12px",
});

const Heading = styled(Typography)({
  fontFamily: "PT Sans",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: 66,
});

const ParaWrapper = styled(Box)({
  padding: "13px 0 34px",
});

const ImageWrapper = styled(Box)({
  position: "relative",
  width: "100%",
  overflow: "visible",
  display: "flex",
});
const BigImage = styled(Box)(({ theme }) => ({
  width: "clamp(320px, 50vw, 704px)",
  height: "auto",
  display: "block",
  maxWidth: "none",
  transform: "translateX(81.5px)",
  [theme.breakpoints.down("md")]: {
    margin: "0 auto", // center on tablet/mobile
  },
  //  position:'absolute',
  // maxWidth: "704px",
  // height: "auto",
  // top: "50%",
  // right: "-58px",
  // transform: "translateY(-50%)",
}));
const WaveImage = styled(Box)({
  width: "100%",
  height: "auto",
  transform:"translateY(4px)"

});

/* Decorative Absolute Images */

const CloudTopLeft = styled(Box)({
  position: "absolute",
  top: "-90px",
  left: "-97px",
});

const StarTopRight = styled(Box)({
  position: "absolute",
  top: "-22px",
  right: "-22px",
});

const CurveArrowImg = styled(Box)({
  position: "absolute",
  bottom: "-95px",
  right: "-24px",
});

const MiniStarTop = styled(Box)({
  position: "absolute",
  top: "-28px",
  left: "192px",
});

const MiniStarBottom = styled(Box)({
  position: "absolute",
  bottom: "-88px",
  left: "-23px",
});

const CloudBottomRight = styled(Box)({
  position: "absolute",
  bottom: "-56px",
  right: "-50px",
});

const BigStarImg = styled(Box)({
  position: "absolute",
  bottom: "76px",
  right: "-223px",
});

const LittleStarImg = styled(Box)({
  position: "absolute",
  top: "72px",
  right: "-142px",
});

const ButterflyImg = styled(Box)({
  position: "absolute",
  top: "-64px",
  right: "279px",
});

const HomeBanner = () => {
  const { data: homeBannerData } = useQuery({
    queryKey: ["homeBanner"],
    queryFn: getHomeBanner,
  });
  const { isAuthenticated } = useAuth();
  const activeBanner = Array.isArray(homeBannerData) ? homeBannerData[0] : homeBannerData;
  const bannerHeadings = Array.isArray(activeBanner?.headings) ? activeBanner.headings : [];

  return (
    <BannerWrapper>
      <OuterContainer maxWidth="lg">
        <GridWrapper container>
          <LeftGrid item size={{ lg: 4 }}>
            <RedSubHeading color="myRed">{activeBanner?.subHeading}</RedSubHeading>
            {bannerHeadings.length > 0 && (
              <>
                {bannerHeadings.map((heading, index) => (
                  <Heading key={index} variant="h1" color={index % 2 === 0 ? "dark" : "myRed"}>
                    {typeof heading === "string" ? heading : heading?.text}
                  </Heading>
                ))}
              </>
            )}
            <ParaWrapper>
              <Para para={activeBanner?.description} />
            </ParaWrapper>
            {isAuthenticated ? (
              <MainButton text={activeBanner?.authButtonText} color="secondary" />
            ) : (
              <MainButton text={activeBanner?.guestButtonText} color="secondary" />
            )}

            <CloudTopLeft component="img" src={cloud} alt="cloud" />
            <MiniStarTop component="img" src={miniStar} alt="miniStar" />
            <StarTopRight component="img" src={star} alt="star" />
            <CurveArrowImg component="img" src={curveArrow} alt="Arrow" />
            <MiniStarBottom component="img" src={miniStar} alt="miniStar" />
          </LeftGrid>

          <RightGrid item size={{ lg: 8 }}>
            <ImageWrapper>
              <BigImage component="img" src={activeBanner?.image?.url } alt="big pic" />
            </ImageWrapper>
            <CloudBottomRight component="img" src={cloud} alt="cloud" />
            <BigStarImg component="img" src={bigStar} alt="star" />
            <LittleStarImg component="img" src={lStar} alt="little star" />
            <ButterflyImg component="img" src={butterfly} alt="butterfly" />
          </RightGrid>
        </GridWrapper>
      </OuterContainer>
      <WaveImage component="img" src={wave} alt="wave" />
    </BannerWrapper>
  );
};

export default HomeBanner;
