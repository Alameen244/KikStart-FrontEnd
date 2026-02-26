import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import bigimg from "../../assets/bigimage.png";
import smallimg from "../../assets/smallimg.png";
import ImageAfterImage from "../HomeComponents/Layer2/ImageAfterImage";
import Headings from "../Heading/Headings";
import Para from "../Para/Para";
import Box from "@mui/material/Box";
import RedButton from "../RedButton/RedButton";

const WhoWrapper = styled(Box)({
});
const WhoContainer = styled(Container)({
});
const GridWrapper = styled(Grid)({
  alignItems:'center',
});
const ParaWrapper = styled(Box)({
});
const WhoComponent = () => {
  return (
    <WhoWrapper>

      <WhoContainer maxWidth="lg">

      <GridWrapper container spacing={8}>
        <Grid item size={{ lg: 6 }}>
          <ImageAfterImage bigImage={bigimg} smallImage={smallimg} />
        </Grid>
        <Grid item size={{ lg: 6 }}>
          <Headings heading="Who We Are" subHeading="ABOUT US" />
          <ParaWrapper>

          <Para
            para="Lorem ipsum dolor sit amet consectetur. Vitae elit quam volutpat id. Quisque orci lacinia sit non. Diam et adipiscing proin orci. Eget lorem sit etiam molestie rhoncus non. Ut tincidunt tristique suspendisse arcu ac.
Curabitur suspendisse tellus placerat libero ut. Enim auctor velit massa integer. Amet interdum at vivamus aliquet mattis integer magna aliquam.
 Nulla urna aliquam sit eget ac dolor aliquam tincidunt.

Ut fermentum elementum amet elementum arcu suspendisse. Vitae lectus penatibus est sit iaculis quis. Auctor eu vitae imperdiet dignissim hendrerit. A elementum turpis sem quis. Ut tincidunt tristique suspendisse arcu ac.
Curabitur suspendisse tellus placerat libero ut."
          />
          </ParaWrapper>

        </Grid>
        </GridWrapper>
    </WhoContainer>
    </WhoWrapper>
  );
};

export default WhoComponent;
