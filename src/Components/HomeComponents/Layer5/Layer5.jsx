import Container from "@mui/material/Container";
import Headings from "../Layer1/Headings";
import girlImage from "../../../Uploads/Girl.png";
import Box from "@mui/material/Box";
import Para from "../Layer1/Para";
import Typography from "@mui/material/Typography";

const Layer5 = () => {
  return (
      <Container maxWidth="lg" sx={{
          paddingTop: '50px',
          paddingBottom:'25px'
    }}>
      <Headings
        heading="Whats Our Client Say"
        subHeading="TESTIMONIALS"
        align="center"
      />
      <Box
        sx={{
                  textAlign: "center",
                 padding:"50px 0"
        }}
      >
        <Box
          component="img"
          src={girlImage}
          sx={{
            objectFit: "cover",
            transition: "transform 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
          style={{
            filter: "drop-shadow(1px 1px 20px rgba(128, 128, 128, 0.8))",
          }}
        />
          </Box>
          <Box sx={{
              marginBottom:"50px"
          }}>
            <Para para="Lorem ipsum dolor sit amet consectetur. Tortor sed ipsum tortor in et. Arcu tortor phasellus elementum sed natoque pellentesque in elit imperdiet. Sit nisi turpis arcu malesuada purus semper. Bibendum urna dolor at ut tincidunt. Scelerisque dictumst sed." align='center' />
          </Box>
          <Box>
              <Typography color="dark" sx={{
                  fontFamily: 'PT Sans',
                  fontWeigth: "bold",
                  fontSize: "20px",
                  textAlign:"center"
              }}>
                  Cameron Williamson

              </Typography>
              <Typography color="myRed" sx={{
                  fontFamily: 'Noto Sans',
                  fontWeigth: "bold",
                  fontSize: "15px",
                  textAlign:"center"
              }}>
                  Coach
              </Typography>
          </Box>

    </Container>
  );
};

export default Layer5;
