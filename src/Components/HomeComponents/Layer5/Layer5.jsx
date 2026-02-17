import Container from "@mui/material/Container";
import Headings from "../Layer1/Headings";
import girlImage from "../../../Uploads/Girl.png";
import Box from "@mui/material/Box";

const Layer5 = () => {
  return (
    <Container maxWidth="lg">
      <Headings
        heading="Whats Our Client Say"
        subHeading="TESTIMONIALS"
        align="center"
      />
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Box
          component="img"
          src={girlImage}
          sx={{
            objectFit: "cover",

             filter: "drop-shadow(0px 10px 25px rgba(128, 128, 128, 0.4))",
            transition: "transform 0.3s",

            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />
      </Box>
    </Container>
  );
};

export default Layer5;
