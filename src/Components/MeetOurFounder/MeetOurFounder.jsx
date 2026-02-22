import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Headings from "../HomeComponents/Layer1/Headings";
import Para from "../Para/Para";
import Image from "../FounderImage/FounderImage";
import founder from "../../assets/boy.png";
const MeetOurFounder = () => {
  return (
    <Container maxWidth="lg" sx={{ p: "105px 0 70px" }}>
      <Grid
        container
        spacing={20}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
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
      </Grid>
    </Container>
  );
};

export default MeetOurFounder;
