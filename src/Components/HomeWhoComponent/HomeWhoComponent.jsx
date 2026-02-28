import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import bigimg from "../../assets/Rectangle 6.png";
import smallimg from "../../assets/Rectangle 7.png";
import ImageAfterImage from "../HomeComponents/Layer2/ImageAfterImage";
import Headings from "../Heading/Headings";
import Para from "../Para/Para";
import Box from "@mui/material/Box";
import MainButton from "../RedButton/RedButton";

const WhoWrapper = styled(Container)({
// padding:"37px 0 100px",
marginTop:"76px",
marginBottom:"100px"
});
const GridWrapper = styled(Grid)({
  alignItems:'center',
});
const ParaWrapper = styled(Box)({
marginBottom: "25px",
});
const MainButtonWrapper = styled(Box) ({
    marginTop:"34px"
})
const HomeWhoComponent = () => {
  return (
    <WhoWrapper maxWidth="lg">
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
 Nulla urna aliquam sit eget ac dolor aliquam tincidunt"
          />
          </ParaWrapper>
          <Para para="Ut fermentum elementum amet elementum arcu suspendisse. Vitae lectus penatibus est sit iaculis quis. Auctor eu vitae imperdiet dignissim hendrerit. A elementum turpis sem quis."/>
          <MainButtonWrapper>
            <MainButton text="KNOW MORE" color = 'secondary' />
          </MainButtonWrapper>
        </Grid>
      </GridWrapper>

    </WhoWrapper>
  );
};

export default HomeWhoComponent;
