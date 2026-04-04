import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import ImageAfterImage from "../ImgaeAfterImage/ImageAfterImage";
import Headings from "../Heading/Headings";
import Para from "../Para/Para";
import Box from "@mui/material/Box";
import MainButton from "../RedButton/RedButton";
import { getWhoWeAre } from "../../Apis/homeApi";
import { useQuery } from "@tanstack/react-query";
import Typography from "@mui/material/Typography";
import noImage from "../../assets/defaultimage/noImage.png";

const fallbackWho = {
  image1: {
    url: noImage,
  },
  image2: {
    url: noImage,
  },
  subHeading: "subHeading",
  heading: "Heading",
  description: "description",
  buttonText: "buttonText",
};

const WhoWrapper = styled(Container)({
  // padding:"37px 0 100px",
  marginTop: "76px",
  marginBottom: "100px",
  position: "relative",
});
const GridWrapper = styled(Grid)({
  alignItems: "center",
  position: "relative",
});
const ParaWrapper = styled(Box)({
  marginBottom: "25px",
});
const MainButtonWrapper = styled(Box)({
  marginTop: "34px",
});

const EmptyMessage = styled(Typography)({
  position: "absolute",
  bottom: "-22px",
  left: 0,
  fontFamily: "cursive",
  fontSize: 14,
});

const HomeWhoComponent = () => {
  const { data: whoWeAre } = useQuery({
    queryKey: ["whoWeAre"],
    queryFn: getWhoWeAre,
  });
  const whoData = Array.isArray(whoWeAre?.data) ? whoWeAre.data : [];
  const isWhoEmpty = whoWeAre?.empty || whoData.length === 0;
  const whoContent = isWhoEmpty ? fallbackWho : whoData[0];

  return (
    <WhoWrapper maxWidth="lg">
      <GridWrapper container spacing={8}>
        {isWhoEmpty && (
          <EmptyMessage color="secondary">
            !! main Who section content is not available right now.
          </EmptyMessage>
        )}

        <Grid item size={{ lg: 6 }}>
          <ImageAfterImage
            bigImage={whoContent?.image1?.url || noImage}
            smallImage={whoContent?.image2?.url || noImage}
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
