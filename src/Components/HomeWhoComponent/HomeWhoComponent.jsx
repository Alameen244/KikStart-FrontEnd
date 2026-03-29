import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import bigimg from "../../assets/Rectangle 6.png";
import smallimg from "../../assets/Rectangle 7.png";
import ImageAfterImage from "../ImgaeAfterImage/ImageAfterImage";
import Headings from "../Heading/Headings";
import Para from "../Para/Para";
import Box from "@mui/material/Box";
import MainButton from "../RedButton/RedButton";
import { getWhoWeAre } from "../../Apis/homeApi";
import { useQuery } from "@tanstack/react-query";
const WhoWrapper = styled(Container)({
  // padding:"37px 0 100px",
  marginTop: "76px",
  marginBottom: "100px",
});
const GridWrapper = styled(Grid)({
  alignItems: "center",
});
const ParaWrapper = styled(Box)({
  marginBottom: "25px",
});
const MainButtonWrapper = styled(Box)({
  marginTop: "34px",
});

const HomeWhoComponent = () => {
  const { data: whoWeAre } = useQuery({
    queryKey: ["whoWeAre"],
    queryFn: getWhoWeAre,
  });
  const whoContent = Array.isArray(whoWeAre) ? whoWeAre[0] : whoWeAre;

  return (
    <WhoWrapper maxWidth="lg">
      <GridWrapper container spacing={8}>
        <Grid item size={{ lg: 6 }}>
          <ImageAfterImage
            bigImage={whoContent?.image1?.url }
            smallImage={whoContent?.image2?.url}
          />
        </Grid>
        <Grid item size={{ lg: 6 }}>
          <Headings
            heading={whoContent?.heading }
            subHeading={whoContent?.subHeading}
          />
          <ParaWrapper>
            <Para para={whoContent?.description } />
          </ParaWrapper>
          <MainButtonWrapper>
            <MainButton
              text={whoContent?.buttonText}
              color="secondary"
            />
          </MainButtonWrapper>
        </Grid>
      </GridWrapper>
    </WhoWrapper>
  );
};

export default HomeWhoComponent;
