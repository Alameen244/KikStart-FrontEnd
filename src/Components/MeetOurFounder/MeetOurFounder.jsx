import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Headings from "../Heading/Headings";
import Para from "../Para/Para";
import Image from "../FounderImage/FounderImage";
import founder from "../../assets/boy.png";

const MeetOurFounderWrapper = styled(Box)({
  paddingBottom: "100.8px",
});

const StyledContainer = styled(Container)({

});

const StyledGrid = styled(Grid)({
  display: "flex",
  alignItems: "center",
});

const MeetOurFounder = () => {
  return (
    <MeetOurFounderWrapper>
      <StyledContainer maxWidth="lg">
      <StyledGrid container spacing={'93.3px'}>
        <Grid
          item
          size={{
            lg: 6,
          }}
        >
          <Headings heading="Meet Our Founder" subHeading="WADE WARREN" />
          <Para
            para="Lorem ipsum dolor sit amet consectetur. Vitae elit quam volutpat id. Quisque orci lacinia sit non. Diam et adipiscing proin orci. Eget lorem sit etiam molestie rhoncus non. Ut tincidunt tristique suspendisse arcu ac.Curabitur suspendisse tellus placerat libero ut. Enim auctor velit massa integer. Amet interdum at vivamus aliquet mattis integer magna aliquam.Nulla urna aliquam sit eget ac dolor aliquam tincidunt.

Ut fermentum elementum amet elementum arcu suspendisse. Vitae lectus penatibus est sit iaculis quis. Auctor eu vitae imperdiet dignissim hendrerit. A elementum turpis sem quis. Ut tincidunt tristique suspendisse arcu ac.Curabitur suspendisse tellus placerat libero ut."
          />
        </Grid>
        <Grid
          item
          size={{
            lg: 6,
          }}
        >
          <Image image={founder} />
        </Grid>
      </StyledGrid>
    </StyledContainer>
    </MeetOurFounderWrapper>
  );
};

export default MeetOurFounder;
