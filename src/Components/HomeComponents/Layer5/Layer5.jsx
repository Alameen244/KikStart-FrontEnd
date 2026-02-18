import Container from "@mui/material/Container";
import Headings from "../Layer1/Headings";
import girlImage from "../../../Uploads/Girl.png";
import Box from "@mui/material/Box";
import Para from "../Layer1/Para";
import Typography from "@mui/material/Typography";
import stars from "../../../Uploads/shooting stars.png";

const Layer5 = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingTop: "28px",
        paddingBottom: "25px",
        position: "relative",
      }}
    >
      <Headings
        heading="Whats Our Client Say"
        subHeading="TESTIMONIALS"
        align="center"
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "50px 0",
        }}
      >
        <Box
          component="img"
          src={girlImage}
          sx={{
            objectFit: "cover",
          }}
           className=" drop-shadow-xl/25 hover:drop-shadow-xl/50 hover:drop-shadow-indigo-500 transition-transform duration-300 hover:scale-110"
        />
      </Box>
      <Box
        sx={{
          marginBottom: "50px",
        }}
      >
        <Para
          para="Lorem ipsum dolor sit amet consectetur. Tortor sed ipsum tortor in et. Arcu tortor phasellus elementum sed natoque pellentesque in elit imperdiet. Sit nisi turpis arcu malesuada purus semper. Bibendum urna dolor at ut tincidunt. Scelerisque dictumst sed."
          align="center"
        />
      </Box>
      <Box>
        <Typography
          color="dark"
          sx={{
            fontFamily: "PT Sans",
            fontWeigth: "bold",
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          Cameron Williamson
        </Typography>
        <Typography
          color="myRed"
          sx={{
            fontFamily: "Noto Sans",
            fontWeigth: "bold",
            fontSize: "15px",
            textAlign: "center",
          }}
        >
          Coach
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "72px",
          right: 0,
        }}
      >
        <Box
          component="img"
          src={stars}
          alt="shooting stars"
          className=" hover:drop-shadow-xs hover:drop-shadow-cyan-500/50"
        />
      </Box>
    </Container>
  );
};

export default Layer5;
